import React, { Component } from 'react';
import './App.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_SAMPLE_API_CALL' });
  }

  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(App);
