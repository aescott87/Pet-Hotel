import React, { Component } from 'react';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import './Nav.css'

class App extends Component {

  render() {
    return (
      <>
        <div className="title">
            Barkingham Pawlace
        </div>
        <div className="nav-container">
            <div className="nav">
                Dashboard
            </div>
            <div className="nav">
                Manage Owners
            </div>
        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(App);
