import React from "react";
import { Card } from "react-bootstrap";

const CommentCard = (props) => {
  const { comment = {} } = props;
  const { name = "", body = "" } = comment;
  return (
    <div>
      <Card bg="info" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="" className="" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CommentCard;
