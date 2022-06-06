import {
  ADD_SEARCHPHOTOS,
  CLOSE_SEARCHPAGE,
  OPEN_SEARCHPAGE,
  SET_SAVEDINPUT,
  SET_SEARCHPHOTOS,
  SET_SORTOPTION,
} from '../actions/search/search.action-types';

const initialState = {
  savedInput: '',
  isSearchPageOpen: false,
  searchPhotos: [],
  sortOption: 'relevant',
};

export const searchReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SAVEDINPUT:
      return { ...state, savedInput: payload };

    case OPEN_SEARCHPAGE:
      return { ...state, isSearchPageOpen: true };

    case CLOSE_SEARCHPAGE:
      return { ...state, isSearchPageOpen: false };

    case SET_SEARCHPHOTOS:
      return { ...state, searchPhotos: payload };

    case ADD_SEARCHPHOTOS: {
      payload.map((item) => {
        state.searchPhotos.set(item[0], item[1]);
        return item;
      });

      return state;
    }

    case SET_SORTOPTION:
      return { ...state, sortOption: payload };

    default:
      return state;
  }
};
