import React from "react";
import './profile.css';
import icon from './back.png'

class Profile extends React.Component {
    constructor() {
        super() 

        this.imageClick = this.imageClick.bind(this)
    }
    
    imageClick() {
        this.props.showProfile()
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
                <p>Favorite Movie: <br /><span className="favoritething">{favMovie}</span></p>
                <p>Favorite Artist: <br />{favMusic}</p>
                <p>Favorite Game: <br />{favGame}</p></div>
                </div>
                 
            </div>

        );
    }

 
}

export default Profile;