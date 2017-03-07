import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Root extends Component {
  render() {
    return (
      <div className="container">
        <div className="Nav">
            <Link to="/">Tracks</Link>
            <Link to="/about">About</Link>
        </div>
        <div className="App">
          {this.props.children}
        </div>
      </div>
    );
  }
}
