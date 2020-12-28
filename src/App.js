import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Robots Collection</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;