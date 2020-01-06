import './App.css';

import React, { Component } from 'react';

import axios from 'axios';
import logo from './logo.svg';

const apiUrl = `http://localhost:8080`;

class App extends Component {
  state = {
    users: []
  };

  async createUser() {
    await axios.get(apiUrl + '/user-create');
    this.loadUsers();
  }

  async loadUsers() {
    const res = await axios.get(apiUrl + '/users');
    console.log(res);
    this.setState({
      users: res.data
    });
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.createUser()}>Create User</button>
          <p>Users list:</p>
          <ul>
            {this.state.users.map(user => (
              <li key={user._id}>id: {user._id}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;