import React from "react";
import "./header.css";
import UserBox from '../userbox';


// Aestheticize header / logo - Should be present on all pages.

class Header extends React.Component{

    render() {
        return (
            <nav className="Nav">
                <div className="Nav-menus">
                    <div className="Nav-brand">
                        <a className="Nav-brand-logo" href="/"></a>
                        
                    </div>  
                </div>
                <UserBox username="Mike" age="24" avatar="https://i.imgur.com/Rqoc2Zh.jpg" />
            </nav>
        );
    }
}


export default Header; 