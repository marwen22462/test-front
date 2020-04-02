import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = props => {
  const { user = {} } = props;
  const {
    id = "",
    name = "",
    username = "",
    email = "",
    website = "",
  } = user;
  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src='https://img.favpng.com/0/10/8/user-logo-computer-icons-png-favpng-iqQGZY6XqNa2Qy3r2CCZLHpiz.jpg' />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{`Name : ${username}`}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{`E-mail : ${email}`}</ListGroupItem>
        <ListGroupItem>{`Web-Stie : ${website}`}</ListGroupItem>
      </ListGroup>
      <Link to={`/Posts/userId=${id}`}>
        <Button  variant="primary">Profil</Button>
      </Link>
    </Card>
  );
};

export default User;
