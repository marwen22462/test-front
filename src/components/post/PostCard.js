import React from "react";
import { Card, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostCard = props => {
  const { id, title, body } = props.post;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn4.iconfinder.com/data/icons/classic-icons-1/512/014.png"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ListGroupItem>{`Body: ${body}`}</ListGroupItem>
        <Link to={`/Comments/postId=${id}`}>
          <Button variant="success">Comments</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
