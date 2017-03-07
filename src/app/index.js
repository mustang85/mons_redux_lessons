import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';

import reducer from '../reducers'
import App from './App';
import About from './About';
import Root from './Root';

// const initialState = {
//   tracks: [
//     'Smells like teen spirit',
//     'Enter Sandman'
//   ],
//   playlist: [
//     'My home playlist',
//     'My work playlist'
//   ]
// };

// const playlist = (state = initialState, action) => {
//   if (action.type === 'ADD_TRACK') {
//     return {
//       ...state,
//       tracks: [...state.tracks, action.payload]
//     };
//   } else if (action.type === 'DELETE_TRACK') {
//     return state;
//   } else if (action.type === 'ADD_PLAYLIST') {
//     return state;
//   } else if (action.type === 'DELETE_PLAYLIST') {
//     return state;
//   }

//   return state;
// }

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Root}>
        <Route path="app" component={App} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// import { createStore } from 'redux';

// const playlist = (state = [], action) => {
//   if (action.type === 'ADD_TRACK') {
//     return [
//       ...state,
//       action.payload
//     ]
//   }
//   return state;
// }

// const store = createStore(playlist);

// const addTrackBtn = document.querySelector('.addTrack');
// const trackInput = document.querySelector('.trackInput');
// const list = document.querySelector('.list');

// store.subscribe(() => {
//   list.innerHTML = '';
//   trackInput.value = '';
//   store.getState().forEach(trackName => {
//     const li = document.createElement('li');
//     li.textContent = trackName;
//     list.appendChild(li);
//   })
// });

// store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like teen spirit' });
// store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman' });

// addTrackBtn.addEventListener('click', () => {
//     store.dispatch({ type: 'ADD_TRACK', payload: trackInput.value });
// })
