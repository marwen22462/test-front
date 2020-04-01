import React from "react";
import { Card, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostCard = props => {
  const { posts = {} } = props;
  const { id = "", title = "", body = "", image = "" } = posts;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ListGroupItem>{`Body: ${body}`}</ListGroupItem>
        <Link to={`/Comment/${id}`}>
          <Button variant="light">Comments</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
