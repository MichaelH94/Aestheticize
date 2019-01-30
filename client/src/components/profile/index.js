import React from "react";
import './profile.css';
import icon from './back.png'
import API from '../../services/post.js';

class Profile extends React.Component {
    constructor() {
        super() 
        this.state = {
            recentPost1: [],
            recentPost2: [],
            recentPost3: []
        }
        this.imageClick = this.imageClick.bind(this)
    }
    
    componentDidMount() {
        API.findPosts({
            username: this.props.username
        })
        .then(response => {
            console.log(response)
            this.setState({
                recentPost1: response.data[0],
                recentPost2: response.data[1],
                recentPost3: response.data[2]
            })
        }).catch(err => console.log(err))
    }

    imageClick(a) {
        this.props.showProfile(a)
    }

    render() {
        let username = this.props.username;
        let age = this.props.age;
        let avatar = this.props.avatar;
        let favMusic = this.props.favMusic;
        let favMovie = this.props.favMovie;
        let favGame = this.props.favGame;

        return( 
            <div className="ProfilePage">
                <div className="Profile">
                <div className="backbtn">
                <img src={icon} onClick={this.imageClick} alt="Back" />
                </div>
                <div className="avaFrame">

                <div className="pAvatar">
                <img src={avatar} className="pAvatar" alt={username} />
                </div>
                <h1>{username}'s Profile</h1>
                Age: {age}<br />
                </div>
                <div className="favorites">
                <p>Movie <br /><span className="favoritething">{favMovie}</span></p>
                <p>Artist <br /><span className="favoritething">{favMusic}</span></p>
                <p>Game <br /><span className="favoritething">{favGame}</span></p>
                </div>
                Most Recent Posts
                <div className="recentPosts">
                {this.state.recentPost1.generated ? 
                <img src={this.state.recentPost1.image} 
                onClick ={this.props.imageClick(this.state.recentPost2.sub)} alt="Recent Post 1" /> :
                <img src={this.state.recentPost1.image} alt="Recent Post 1" /> }

                {this.state.recentPost2.generated ? 
                <img src={this.state.recentPost2.image} 
                onClick ={this.props.imageClick(this.state.recentPost2.sub)} alt="Recent Post 2" /> :
                <img src={this.state.recentPost2.image} alt="Recent Post 2" /> }

                {this.state.recentPost3.generated ? 
                <img src={this.state.recentPost3.image} 
                onClick ={this.props.imageClick(this.state.recentPost3.sub)} alt="Recent Post 3" /> :
                <img src={this.state.recentPost3.image} alt="Recent Post 3" /> }
                
                </div>
                </div>
            </div>

        );
    }

 
}

export default Profile;