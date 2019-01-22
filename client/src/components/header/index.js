import React from "react";
import "./header.css";
import { DropdownButton, MenuItem } from 'react-bootstrap';

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
                
            </nav>
        );
    }
}


export default Header; 