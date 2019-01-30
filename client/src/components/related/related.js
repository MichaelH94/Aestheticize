import React, { Component } from "react";
import axios from 'axios';

class Related extends Component {
    constructor() {
        super()
        this.state = {
            related: []
        }
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
           this.setState({
               related: response.data.similar.artist
           }).catch(err => console.log(err))
        })
    }
    render() {
        return <div>
            {this.state.related.map(related=> (
            <div className="relatedArtist">
            {related.name}
            <img src={related.image[3]['#text']} alt={related.name} />
            </div>
            ))}
        </div>
    }
}