import React, { Component } from "react";
import API from '../../services/post.js';
import Post from "../post";

class Posts extends Component {
    constructor(props) {
        super(props); 
        this.findPosts = this.findPosts.bind(this);
    }
    
    findPosts() { 
        let username = this.props.username;
        console.log('start"')
        API.findPosts(username)
        .then(response => {
            console.log(response)
            let avatar = this.props.avatar; 
            let image, caption, generated, sub;
            let data = response.data;
            image = data.image;
            caption = data.caption;
            generated = data.generated;
            sub = data.sub;

            for(let x = 0; x < data.length; x++) {
                return <div>
                   <Post username = {username} avatar = {avatar} image = {image} 
                   generated = {generated} sub = {sub} caption = {caption} />
                </div>
            }
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return <div>{this.findPosts()}</div>
    }
}

export default Posts;