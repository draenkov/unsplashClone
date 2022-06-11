import { SET_WINDOWWIDTH } from '../actions/window/window.action-types';

const initialState = {
  windowWidth: 0,
};

export const windowReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_WINDOWWIDTH:
      return { ...state, windowWidth: payload };

    default:
      return state;
  }
};
