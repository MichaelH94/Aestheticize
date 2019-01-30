import React, { Component } from "react";
import newPost from '../../services/post.js';
import './newuserpost.css'
import { Button, FormGroup, FormControl } from "react-bootstrap";

class NewMusic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: "",
            caption: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        newPost.newUserPost({
            username: this.props.username,
            avatar: this.props.avatar,
            image: this.state.image,
            caption: this.state.caption,
            generated: false,
            sub: "placeholder"
        }).then(response => console.log(response)).catch(err => console.log(err))
       
       this.props.showUserBox()
    }

    render() {

        return <div className="newUserContainer">
        <div className="newUser">
        Add a new post
        <div className="newForm">
        <FormGroup controlId="image" bsSize="large">
        <FormControl 
            placeholder="Image"
            defaultValue={this.state.artist}
            onChange={this.handleChange}
            name="image" />
        </FormGroup>
        <FormGroup controlId="caption" bsSize="large">
        <FormControl 
            placeholder="Caption"
            defaultValue={this.state.caption}
            onChange={this.handleChange}
            name="caption" />
        </FormGroup>
        </div>
        <Button className="newpostbtn" 
            block
            bsSize="large"
            onClick={this.handleSubmit}
            type="submit"
        >
        Submit </Button>
        
        </div>
        
        </div>
    }
}

export default NewMusic;