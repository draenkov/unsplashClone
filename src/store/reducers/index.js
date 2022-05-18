import { combineReducers } from 'redux';
import { photosReducer } from './photos.reducer';
import { popupReducer } from './popup.reducer';

export const reducers = combineReducers({
  photos: photosReducer,
  popup: popupReducer,
});
