import { SET_ACCESSTOKEN } from './auth.action-types copy';

export const setAccessToken = (accessToken) => ({
  type: SET_ACCESSTOKEN,
  payload: accessToken,
});
