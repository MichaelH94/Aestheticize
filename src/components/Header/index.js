import React from "react";
import "./header.css";

// Aestheticize header / logo - Should be present on all pages.

class Header extends React.Component{
    render() {
        return (
            <nav className="Nav">
                <div className="Nav-menus">
                    <div className="Nav-brand">
                        <a className="Nav-brand-logo" href="/">
                        Aestheticize
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}


export default Header; 