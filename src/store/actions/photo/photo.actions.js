import {
  ADD_PHOTOS,
  LIKE_PHOTO,
  SET_ACTIVE_PHOTO,
  SET_PHOTOS,
  SET_POTD,
} from './photo.action-types';

export const setPhotos = (photosMap) => ({
  type: SET_PHOTOS,
  payload: photosMap,
});
export const setPOTD = (photo) => ({ type: SET_POTD, payload: photo });
export const setActivePhoto = (photoId) => ({
  type: SET_ACTIVE_PHOTO,
  payload: photoId,
});
export const addPhotos = (photos) => ({
  type: ADD_PHOTOS,
  payload: photos,
});
export const likePhoto = (photoId) => ({ type: LIKE_PHOTO, payload: photoId });
