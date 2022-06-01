import { combineReducers } from 'redux';
import { authReducer } from './auth.reducer';
import { photosReducer } from './photos.reducer';
import { popupReducer } from './popup.reducer';

export const reducers = combineReducers({
  photos: photosReducer,
  popup: popupReducer,
  auth: authReducer,
});
