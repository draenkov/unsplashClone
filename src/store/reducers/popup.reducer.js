import { CLOSE, OPEN } from '../actions/photo/popup.action-types';

const initialState = {
  isOpened: false,
};

export const popupReducer = (state = initialState, action = {}) => {
  const { type } = action;
  switch (type) {
    case OPEN:
      return { ...state, isOpened: true };
    case CLOSE:
      return { ...state, isOpened: false };
    default:
      return state;
  }
};
