import React, {Component} from "react";
import "./Posts.css";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Post from "../Post";
import Notifier from "../Notifier";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
    this.offline = !navigator.onLine;
  }
  componentDidMount() {
    Notification.requestPermission();

    if (this.offline) {
      this.setState({ posts: JSON.parse(localStorage.getItem("posts")) });
    } else {
      this.props.apollo_client
        .query({
          query: gql`
            {
              posts(user_id: "a") {
                id
                user {
                  username
                  avatar
                }
                image
                caption
              }
            }
          `
        })
        .then(response => {
          this.setState({ posts: response.data.posts });
          localStorage.setItem("posts", JSON.stringify(response.data.posts));
        });
    }

    this.posts_channel = this.props.pusher.subscribe("posts-channel");

    this.posts_channel.bind(
      "new-post",
      data => {
        this.setState({ posts: this.state.posts.concat(data.post) });

        if (Notification.permission === "granted") {
          try {
            let notification = new Notification("aestheticize", {
              body: `New post from ${data.post.user.username}`,
              icon: "../../public/brandless.png",
              image: `${data.post.image}`
            });

            notification.onclick = function(event) {
              window.open("http://localhost:3000", "_blank");
            };
          } catch (e) {
            console.log("Error displaying notification");
          }
        }
      },
      this
    );
  }

  render() {
    const notify = this.offline ? <Notifier data="Aestheticize (offline)" /> : <span />;
    return (
      <div>
        {notify}
        <div className="Posts">
          {this.state.posts
            .slice(0)
            .reverse()
            .map(post => (
              <Post
                username={post.user.username}
                avatar={post.user.avatar}
                image={post.image}
                caption={post.caption}
                key={post.id}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Posts;