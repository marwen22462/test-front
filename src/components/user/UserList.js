import React, { Component } from "react";
import axios from "axios";

import UserCard from "./UserCard"


export default class UserList extends Component {
    state = {
        persons:[]
    }
  componentDidMount = () => {
      axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        // console.log(response);
        this.setState({ persons: response.data });
      })
      
  }
    
  render() {
    return (
      <div>
        <ul className = "userCard">
          {this.state.persons.map((person, key) => (
            <UserCard person={person} key={key} />
          ))}
        </ul>
      </div>
    );
  }
}
