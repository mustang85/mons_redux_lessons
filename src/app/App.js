import React, { Component } from 'react';
import { connect } from 'react-redux';

import { asyncGetTracks } from '../actions/tracks';

import './style.css';

class App extends Component {
  addTrack = () => {
    const { onAddTrack } = this.props;
    onAddTrack(this.inputTrack.value);
    this.inputTrack.value = '';
  }

  findTrack = () => {
    const { onFindTrack } = this.props;
    onFindTrack(this.inputSearch.value);
    this.inputSearch.value = '';
  }

  render() {
    const { tracks, onGetTracks } = this.props;

    return (
      <div className="container">
        <div>
          <input type="text" className="trackInput" ref={(input) => this.inputTrack = input} />
          <button className="addTrack" onClick={this.addTrack}>Add track</button>
        </div>

        <div>
          <input type="text" className="trackInput" ref={(input) => this.inputSearch = input} />
          <button className="addTrack" onClick={this.findTrack}>Find track</button>
        </div>

        <div>
          <button onClick={onGetTracks}>Get track</button>
        </div>


        <ul className="list">
          {tracks.map(({ name, id }) =>
            <li key={id}>{name}</li>
          )}
        </ul>


      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      };

      dispatch({ type: 'ADD_TRACK', payload })
    },

    onFindTrack: (name) => {
        dispatch({ type: 'FIND_TRACK', payload: name })
    },

    onGetTracks: () => {
      dispatch(asyncGetTracks())
    }
  })
)(App);
