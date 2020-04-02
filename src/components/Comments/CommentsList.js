import React, { Component } from "react";

import CommentCard from "./CommentCard";

class CommentsList extends Component {
  componentDidMount = () => {
    const ID = this.props.match.params.id;
    this.props.getComments(ID);
  };
  render() {
    return (
      <div className='comment-f'>
        <h1 className="title">Comments</h1>
        <ul className="userCard">
          {this.props.comments.map((comment, key) => (
            <CommentCard comment={comment} key={key} />
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentsList;
