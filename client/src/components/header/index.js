import React from "react";
import "./header.css";
import UserBox from '../userbox';


// Aestheticize header / logo - Should be present on all pages.

class Header extends React.Component{
    
    render() {
        const username = this.props.username;
        const avatar = this.props.avatar;
        const age = this.props.age;

        return (
            <nav className="Nav">
                <div className="Nav-menus">
                    <div className="Nav-brand">
                        <a className="Nav-brand-logo" href="/">Aestheticize</a>
                        
                    </div>  
                </div>
                <UserBox username={username} avatar={avatar} />
            </nav>
        );
    }
}


export default Header; 