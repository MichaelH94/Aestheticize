import React, { Component } from "react";
import API from '../../services/post.js';
import Post from "../post";



class Posts extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            posts: []
        }
        this.postsClick = this.postsClick.bind(this)
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

    postsClick = (a) => {
        console.log('posts/index')
        console.log(a.sub)
        this.props.showRelated(a.sub)
    }

    render() {
        return <div>
        {this.state.posts
            .map(posts => (
                <Post username = {posts.username} avatar = {this.props.avatar} image = {posts.image} 
                generated = {posts.generated} sub = {posts.sub} caption = {posts.caption} postClick = {this.postsClick} />
              
            ))}
        </div>
}

}

export default Posts;
