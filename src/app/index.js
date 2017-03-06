// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './style.css';

// ReactDOM.render(<App />, document.getElementById('root'));

import { createStore } from 'redux';

const playlist = (state = [], action) => {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}

const store = createStore(playlist);

const addTrackBtn = document.querySelector('.addTrack');
const trackInput = document.querySelector('.trackInput');
const list = document.querySelector('.list');

store.subscribe(() => {
  list.innerHTML = '';
  trackInput.value = '';
  store.getState().forEach(trackName => {
    const li = document.createElement('li');
    li.textContent = trackName;
    list.appendChild(li);
  })
});

store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like teen spirit' });
store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman' });

addTrackBtn.addEventListener('click', () => {
    store.dispatch({ type: 'ADD_TRACK', payload: trackInput.value });
})
