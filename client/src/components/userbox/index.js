import React, { Component } from "react";
import "./userbox.css";
import icon1 from "./profile.png";
import icon2 from "./connections.png";
import icon3 from "./settings.png";
import NewMusic from "../newmusic";


class UserBox extends Component {
    constructor() {
        super() 
        this.state = {
            showBox: false
        }
        this.showBox = this.showBox.bind(this)
    }
    showBox() {
        if (this.state.showBox) {
            this.setState({
                showBox: false
            })
        } else {
            this.setState({
                showBox: true
            })
        }
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
                <img className="icon" alt="Profile" src={icon1} />
                <img className="icon" alt="Connections" src={icon2} />
                <img className="icon" alt="Settings" src={icon3} />
            </div>
            <div className="addMore">
                <button className="addMusic" onClick={this.showBox}>+</button>
            </div>
            {this.state.showBox ? <NewMusic showBox = {this.showBox} username = {this.props.username} avatar = {this.props.avatar} /> : "" }
            
            </div> 
        
        </div>
        </div>
        )
    }
}

export default UserBox;