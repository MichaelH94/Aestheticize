import React, { Component } from "react";
import axios from 'axios';
import './related.css';
import icon from './back.png';
import newPost from "../../services/post.js"

class Related extends Component {
    constructor() {
        super()
        this.state = {
            related: []
        }

        this.backClick = this.backClick.bind(this)
    }

    addRelatedPost(na) {
        newPost.newMusicPost({
            username: this.props.username,
            avatar: this.props.avatar,
            artist: na
        }).then(response => { 
            console.log(response)
            return;
        }).catch(err => console.log(err))
    }


    backClick() {
        console.log("back click")
        this.props.showRelated()
    }

    componentDidMount() {
        console.log("start related")
        let artist = this.props.artist;
        artist = artist.split(' ').join('+')
        artist = artist.replace(/[\/\\#,()~%.'":*?<>{}]/g, ''); 

        let lfmAPI = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=5ab1615116e0cf8fa1c5270f3ab5310b&format=json"
    
    
        axios({
            method: 'get',
            url: lfmAPI
        }).then(response => {
            console.log(response)
           this.setState({
               related: response.data.artist.similar.artist
           })
        }).catch(err => console.log(err))
    }
    render() {
        return <div className="relatedpage"> <img src={icon} alt="Back" className="backbtn" onClick={this.backClick} />
         <div className="relatedArtists">
            {this.state.related.map(related=> (
            <div className="relatedArtistbox">
            {related.name}
            <img src={related.image[3]['#text']} alt={related.name} onClick={() => this.addRelatedPost(related.name)} />
            </div>
            ))}
        </div>
        </div>
    }
}

export default Related;