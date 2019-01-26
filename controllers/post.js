const db = require('../models/post.js')
const axios = require('axios');

const postControl = {
    newArtistPost: (req, res) => {
        let artist = req.body.artist;
        artist = artist.split(' ').join('+')
        artist = artist.replace(/[\/\\#,()~%.'":*?<>{}]/g, '');
        const username = req.body.username;
        const avatar = req.body.avatar;
        const lfmAPI = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=5ab1615116e0cf8fa1c5270f3ab5310b&format=json"
        
        axios({
            method: 'get',
            url: lfmAPI
        }).then(data => {
             extraLargeImage = (element) =>{
                return element.size === 'extralarge'
            }
           const artistImage = data.artist.image.find(extraLargeImage)
              
            artistImage = artistImage ? artistImage['#text'] : '';

            db.create({
                username: username,
                avatar: avatar,
                image: artistImage,
                caption: data.artist.bio.summary || "No caption available",
                generated: true,
                sub: data.artist.name
            })
        }).catch(err => console.log(err))
    },
    newGamePost: (req, res) => {
        let gameTitle = req.body.game;
        const username = req.body.username;
        const avatar = req.body.avatar;
        gameTitle = game.split(' ').join('+')
        const igdbAPI = "https://api-endpoint.igdb.com/?search=" + gameTitle + "&fields=id,name,summary"

        axios.get(`${igdbAPI}${req.body.game}`, {
            headers: {
                "user-key": "4d01877d1be45b92d86ab21fe32821c0",
                Accept: "application/json"
            }
        }).then(data => {
            db.create({
                username: username,
                avatar: avatar,
                image: data[0].cover.url,
                caption: data[0].summary || "No caption available",
                generated: true,
                sub: data[0].name
            })
        }).catch(err => console.log(err))
    }
}

module.exports = postControl