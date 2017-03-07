import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class App extends Component {
  addTrack = () => {
    const { onAddTrack } = this.props;
    console.log('addTrack', this.inputTrack.value);
    this.props.onAddTrack(this.inputTrack.value);
    this.inputTrack.value = '';
  }
  render() {
    const { tracks } = this.props;

    return (
      <div className="container">
      <input type="text" className="trackInput" ref={(input) => this.inputTrack = input} />
      <button className="addTrack" onClick={this.addTrack}>Add track</button>
        <ul className="list">
          {tracks.map((track, id) =>
            <li key={id}>{track}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({ type: 'ADD_TRACK', payload: trackName })
    }
  })
)(App);
