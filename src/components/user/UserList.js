import React, { Component } from "react";
import axios from "axios";

import UserCard from "./UserCard"


export default class UserList extends Component {
    state = {
        users:[],
        posts: []
    }
  componentDidMount = () => {
      axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        // console.log(response);
        this.setState({ users: response.data });
      })
      axios
      .get(`https://jsonplaceholder.typicode.com/posts/`)
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
  }
    
  render() {
    return (
      <div>
        <ul className = "userCard">
          {this.state.users.map((user, key) => (
            <UserCard user={user} key={key} />
          ))}
        </ul>
      </div>
    );
  }
}
