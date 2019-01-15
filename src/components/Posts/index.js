import React from "react";
import "./Posts.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Post from "../Post";


const Posts = () => {
    return (
      <Query
        query={gql`
          {
            posts(user_id: "a"){
              id
              user{
                username
                avatar
              }
              image
              caption
            }
          }
        `} >
        {({loading, error, data}) => {
            if (loading) return <p>Loading feed...</p>;
            if (error) return <p>Error loading your feed.</p>;
            let posts = data.posts;

            return <div className="Posts">
              {posts.map(post => 
              <Post username={post.user.username} 
              avatar={post.user.avatar} 
              image={post.image}
               caption={post.caption} 
               key={post.id}/>)}
            </div>;
          }}
        </Query>
      );
    }

    export default Posts;