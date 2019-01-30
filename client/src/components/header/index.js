import React from "react";
import "./header.css";
import UserBox from '../userbox';
import Account from '../../services/account.js'
import Profile from '../profile'
// Aestheticize header / logo - Should be present on all pages.

class Header extends React.Component{
    constructor() {
        super() 
        this.state = {
            username: '',
            age: '',
            avatar: '',
            favMusic: '',
            favMovie: '',
            favGame: '',
            showUserBox: true,
            showProfile: false
        }
        this.showProfile = this.showProfile.bind(this)
        this.relatedClick = this.relatedClick.bind(this)
    }
    
    componentDidMount() {
        Account.login({
            username: this.props.username
        }).then(response => {
            console.log(response)
            let data = response.data[0]
            this.setState({
                username: data.username,
                age: data.age,
                avatar: data.avatar,
                favMusic: data.favMusic,
                favMovie: data.favMovie, 
                favGame: data.favGame
            })
        }).catch(err => console.log(err))

    }

    showProfile = () => {
        if(this.state.showProfile) {
            console.log("showProfile")
            this.setState({
                showProfile: false,
                showUserBox: true
            })
            this.props.showPosts();
        } else {
            this.setState({
                showProfile: true,
                showUserBox: false
            })
            this.props.showPosts();
        }
        
    }

    relatedClick(a) {
        this.props.showRelated(a)
        this.setState({
            showUserBox: false
        })
    }
    
    render() {
        return (
            <nav className="Nav">
                <div className="Nav-menus">
                    <div className="Nav-brand">
                        <a className="Nav-brand-logo" href="/">Aestheticize</a>
                        
                    </div>  
                </div>
                {this.state.showUserBox && !this.props.hideBox ? <UserBox username={this.props.username} avatar={this.props.avatar} age={this.props.age} showProfile={this.showProfile} /> : ""}
                {this.state.showProfile ? <Profile username = {this.state.username} avatar={this.state.avatar} age = {this.state.age}
                favMusic = {this.state.favMusic} favGame = {this.state.favGame} favMovie = {this.state.favMovie} showProfile={this.showProfile} relatedClick={this.relatedClick} /> : ""}
            </nav>
        );
    }
}


export default Header; 