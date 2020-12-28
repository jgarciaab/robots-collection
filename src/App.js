import React, { Component } from 'react';
import { connect } from 'react-redux'
import { requestRobots } from './redux/robot/robot.actions'

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: ''
    };
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots } = this.props;
    const { searchField } = this.state;
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

const mapStateToProps = (state) => {
  return {
    robots: state.requestRobots.robots
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRobots: () => requestRobots(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)