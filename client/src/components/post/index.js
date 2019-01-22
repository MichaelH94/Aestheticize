import React, { Component } from "react";
import "./post.css";

class Post extends Component {
            constructor(props) {
                super(props);
            }
    render() {
        const username = this.props.username;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;


        return <article className="Post" ref="Post">
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
                <img alt={caption} src={image} />
            </div>
            <div className="Post-caption">
                <strong>{username}</strong> {caption}
            </div>
        </div>

        </article>;
    }
}

export default Post;