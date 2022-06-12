import {
  ADD_SEARCHPHOTOS,
  CLOSE_SEARCHPAGE,
  LIKE_SEARCHPHOTO,
  OPEN_SEARCHPAGE,
  SET_SAVEDINPUT,
  SET_SEARCHPHOTOS,
  SET_SORTOPTION,
} from './search.action-types';

export const setSavedInput = (inputValue) => ({
  type: SET_SAVEDINPUT,
  payload: inputValue,
});

export const openSearchPage = () => ({
  type: OPEN_SEARCHPAGE,
});

export const closeSearchPage = () => ({
  type: CLOSE_SEARCHPAGE,
});

export const setSearchPhotos = (searchPhotos) => ({
  type: SET_SEARCHPHOTOS,
  payload: searchPhotos,
});

export const addSearchPhotos = (searchPhotos) => ({
  type: ADD_SEARCHPHOTOS,
  payload: searchPhotos,
});

export const setSortOption = (sortOption) => ({
  type: SET_SORTOPTION,
  payload: sortOption,
});

export const likeSearchPhoto = (photoId) => ({ type: LIKE_SEARCHPHOTO, payload: photoId });
