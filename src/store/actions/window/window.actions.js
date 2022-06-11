import { SET_WINDOWWIDTH } from './window.action-types';

export const setWindowWidth = (width) => ({
  type: SET_WINDOWWIDTH,
  payload: width,
});
