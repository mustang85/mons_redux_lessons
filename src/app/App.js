import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class App extends Component {
  render() {
    const { testStore } = this.props;
    return (
      <div className="container">
      <input type="text" className="trackInput" />
      <button className="addTrack">Add track</button>
        <ul className="list">
          {testStore.map((track, id) =>
            <li key={id}>{track}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(App);
