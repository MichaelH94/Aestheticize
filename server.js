const express = require("express")
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const Pusher = require("pusher");
const bodyParser = require("body-parser");
const Multipart = require("connect-multiparty");

const { buildSchema } = require("graphql")

const pusher = new Pusher({
  appId: '693823',
  key: '476f827739fd8fae9689',
  secret: 'ce32b7d8bec5a0426801',
  cluster: 'us2',
  encrypted: true
});

let multipartMiddleware = new Multipart();


let schema = buildSchema(`
      type User {
        id : String!
        username : String!
        avatar : String!
      }
      type Post {
          id: String!
          user: User!
          caption : String!
          image : String!
      }
      type Query{
        user(id: String) : User!
        post(user_id: String, post_id: String) : Post!
        posts(user_id: String) : [Post]
      }
    `);

    let userslist = {
      a: {
        id: "a",
        username: "Mike",
        avatar: "https://i.imgur.com/Rqoc2Zh.jpg"
      },
      b: {
        id: "b",
        username: "Ian",
        avatar:
          "https://i.imgur.com/JMCi04X.jpg"
      }
    };

    let postslist = {
      a: {
        a: {
          id: "a",
          user: userslist["a"],
          caption: "Here's a placeholder image.",
          image: "https://i.imgur.com/JynDHo7.jpg"
        },
        b: {
          id: "b",
          user: userslist["a"],
          caption: "Here's a placeholder image.",
          image:
            "https://i.imgur.com/ti6Kedj.png"
        },
        c: {
          id: "c",
          user: userslist["a"],
          caption: "Here's a placeholder image.",
          image: "https://i.imgur.com/0DuPjX6.jpg"
        }
      }
    };

    let root = {
      user: function({ id }) {
        return userslist[id];
      },
      post: function({ user_id , post_id }) {
        return postslist[user_id][post_id];
      },
      posts: function({ user_id }){
        return Object.values(postslist[user_id]);
      }
    };

    let app = express();
    app.use(cors());
    app.use(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true
      })
    );


    app.post('/newpost', multipartMiddleware, (req,res) => {
      let post = {
        user : {
          nickname : req.body.name,
          avatar : req.body.avatar
        },
        image : req.body.image,
        caption : req.body.caption
      }
       
      pusher.trigger("posts-channel", "new-post", { 
        post 
      });
    
      return res.json({status : "Post created"});
    });



    app.listen(3000);