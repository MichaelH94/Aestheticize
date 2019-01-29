import React, { Component } from "react";
import newPost from '../../services/post.js';
import './newpost.css'
import { Button, FormGroup, FormControl } from "react-bootstrap";

class NewMusic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artist: ""
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

       newPost.newMusicPost({
           username: this.props.username,
           avatar: this.props.avatar,
           artist: this.state.artist
       }).then(response => {
           console.log(response)
       })
       
       window.location.reload();
       this.props.showBox()
    }

    render() {

        return <div className="newMusicContainer">
        <div className="newMusic">
        Add a new artist
        <FormGroup controlId="artist" bsSize="large">
        <FormControl 
            placeholder="Artist"
            defaultValue={this.state.artist}
            onChange={this.handleChange}
            name="artist" />
        </FormGroup>
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