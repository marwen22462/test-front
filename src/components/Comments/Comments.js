import React, { Component } from "react";
import axios from "axios";
import CommentCard from "./CommentCard";

class Comments extends Component {
  state = {
    comments: []
  };
  componentDidMount = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => {
        // console.log(response);
        this.setState({ comments: response.data });
      });
  };
  render() {
    return (
      <div>
        <ul className="userCard">
          {this.state.comments.map((comment, key) => (
            <CommentCard post={comment} key={key} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Comments;
