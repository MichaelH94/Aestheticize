import React, { Component } from "react";
import API from '../../services/post.js';
import Post from "../post";



class Posts extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            posts: []
        }
        this.imageClick = this.imageClick.bind(this)
    }
    
    componentDidMount() { 
        console.log('start')

         API.findPosts({
             username: this.props.username
        })
        .then(response => {
            console.log(response)
            this.setState({
                posts: response.data
            })
        }).catch(error => {
            console.log(error)
        })
    }

    imageClick(a) {
        this.props.showRelated(a)
    }

    render() {
        return <div>
        {this.state.posts
            .map(posts => (
                <Post username = {posts.username} avatar = {this.props.avatar} image = {posts.image} 
                generated = {posts.generated} sub = {posts.sub} caption = {posts.caption} imageClick = {this.imageClick} />
              
            ))}
        </div>
}

}

export default Posts;
