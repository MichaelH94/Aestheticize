import React, { Component } from "react";
import "./userbox.css";
import icon1 from "./profile.png";
import icon2 from "./connections.png";
import icon3 from "./settings.png";
import NewMusic from "../newmusic";
import NewUserPost from "../newuserpost"


class UserBox extends Component {
    constructor() {
        super() 
        this.state = {
            showArtistBox: false,
            showUserBox: false
        }
        this.showArtistBox = this.showArtistBox.bind(this)
        this.showUserBox = this.showUserBox.bind(this)
        this.imageClick = this.imageClick.bind(this)
    }
    
    showArtistBox() {
        if (this.state.showArtistBox) {
            this.setState({
                showArtistBox: false
            })
        } else {
            this.setState({
                showArtistBox: true,
                showUserBox: false
            })
        }
    }

    showUserBox() {
        if (this.state.showUserBox) {
            this.setState({
                showUserBox: false
            })
        } else {
            this.setState({
                showUserBox: true,
                showArtistBox: false
            })
        }
    }

    imageClick() {
        this.props.showProfile()
    }
    
    render() {
        const username = this.props.username;
        const avatar = this.props.avatar;

        return ( <div className="container">
        <div className="UserBox">
            <div className="ubox">
                <img  className="avatar" src={avatar} alt={username} />
                <h3>{username}</h3> <br />
            <div className="ub-icons">
                <img className="icon" alt="Profile" src={icon1} onClick={this.imageClick} />
                <img className="icon" alt="Connections" src={icon2} />
                <img className="icon" alt="Settings" src={icon3} />
            </div>
            <div className="addMore">
                <button className="addMusic" onClick={this.showArtistBox}>+</button>
                <button className="addUserPost" onClick={this.showUserBox}>+</button>
            </div>
            {this.state.showArtistBox ? <NewMusic showArtistBox = {this.showArtistBox} username = {this.props.username} avatar = {this.props.avatar} /> : "" }
            {this.state.showUserBox ? <NewUserPost showUserBox = {this.showUserBox} username = {this.props.username} avatar = {this.props.avatar} /> : "" }
            </div> 
        
        </div>
        </div>
        )
    }
}

export default UserBox;