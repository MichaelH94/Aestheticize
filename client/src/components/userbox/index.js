import React, { Component } from "react";
import "./userbox.css";
import icon1 from "./profile.png";
import icon2 from "./connections.png";
import icon3 from "./settings.png";


class UserBox extends Component {
    
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
            </div>



        </div>
        </div>)
    }
}

export default UserBox;