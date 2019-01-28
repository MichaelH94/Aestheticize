import React, { Component } from "react";
import "./post.css";

class Post extends Component {
    
    render() {
        let username = this.props.username;
        let avatar = this.props.avatar;
        let image = this.props.image;
        let caption = this.props.caption;
        let generated = this.props.generated;
        let sub = this.props.sub;

        return <article className={"Post " + (generated ? 'generated' : 'user')} ref="Post">
        <header>
            <div className="Post-user">
                <div className="Post-user-avatar">
                    <img src={avatar} alt={username} />
                </div>

                <div className="Post-user-username">
                    <span>{username}</span>
                </div>
            </div>
        </header>
        <div className="Post-image">
            <div className="Post-image-bg">
                <img alt={caption} src={image} id={'#' + {sub}} />
            </div>
            <div className="Post-caption">
                <strong>{username}</strong> {caption}
            </div>
        </div>

        </article>;
    }
}

export default Post;