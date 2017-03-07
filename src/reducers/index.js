import { combineReducers } from 'redux';

import tracks from './tracks';
import playlist from './playlist';

export default combineReducers({
    tracks,
    playlist
})
