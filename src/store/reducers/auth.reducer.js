import { SET_ACCESSTOKEN } from '../actions/photo/auth.action-types copy';

const initialState = {
  accessToken: null,
};

export const authReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ACCESSTOKEN:
      return { ...state, accessToken: payload };
    default:
      return state;
  }
};
