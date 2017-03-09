import React, { Component } from 'react';
import { connect } from 'react-redux';

class Track extends Component {
  render() {
    const { name } = this.props.track;

    return (
      <div>Track: { name }</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    track: state.tracks.find(track => track.id === +ownProps.params.id)
  }
}

export default connect(mapStateToProps)(Track);
