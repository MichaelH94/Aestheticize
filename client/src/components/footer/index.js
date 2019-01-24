import React, { Component } from "react";
import "./footer.css";
import ghlogo from './github.png';

class Footer extends Component {
    render() {
        return (
            <div className="appFooter">
               <a href="https://github.com/michaelh94/aestheticize">
               <img src={ghlogo} alt="Check out Aestheticize on Github" />
               </a> <br />
               © Michael Haggard, Aestheticize 2019
            </div>
        )
    }
}

export default Footer