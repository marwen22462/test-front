import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = props => {
  const { person = {} } = props;
  const {
    id = "",
    name = "",
    username = "",
    email = "",
    website = "",
    image = ""
  } = person;
  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{`Name : ${username}`}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{`E-mail : ${email}`}</ListGroupItem>
        <ListGroupItem>{`Web-Stie : ${website}`}</ListGroupItem>
      </ListGroup>
      <Link to={`/Posts/${id}`}>
        <Button variant="danger">Profil</Button>
      </Link>
    </Card>
  );
};

export default User;
