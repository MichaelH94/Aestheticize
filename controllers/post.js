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
        }).then(response => {

            const lfm = response.data;
            console.log(lfm.artist.image[3]['#text'])
            db.create({
                username: username,
                avatar: avatar,
                image: lfm.artist.image[3]['#text'],
                caption: lfm.artist.bio.summary || "No caption available",
                generated: true,
                sub: lfm.artist.name
            }).then(data => {
                console.log(data)
            }).catch(err => console.log(err))
          
        }).catch(err => console.log(err))
    },
    newGamePost: (req, res) => {
        let gameTitle = req.body.game;
        const username = req.body.username;
        const avatar = req.body.avatar;
        gameTitle = gameTitle.split(' ').join('+')
        const igdbAPI = "https://api-v3.igdb.com/?search=" + gameTitle + "&fields=*"

        axios.get(`${igdbAPI}`, {
            headers: {
                "user-key": "99d5f08ebc3ee35b43823c7a96577fc8",
                Accept: "application/json"
            }
        }).then(response => {
            console.log(response.data)
            db.create({
                username: username,
                avatar: avatar,
                image: response[0].cover.url,
                caption: response[0].summary || "No caption available",
                generated: true,
                sub: response[0].name
            }).then(response => res.json(response)).catch(err => console.log(err))
        }).catch(err => console.log(err))
    },
    findPosts: (req, res) => {
        console.log(req.body.username)
        db.find({username: req.body.username}, null, {sort: {_id: -1}}, (err, data) => {
            console.log(data)
        }).then(data => res.json(data)).catch(err => console.log(err))
    },
    newUserPost: (req, res) => {
        console.log(req.body)
        db.create(req.body)
        .then(data => res.json(data))
        .catch(err=> console.log(err))
    }
}

module.exports = postControl