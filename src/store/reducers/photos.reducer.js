import { Photo } from '../../entities/photo';
import {
  ADD_PHOTOS,
  LIKE_PHOTO,
  SET_ACTIVE_PHOTO,
  SET_PHOTOS,
  SET_POTD,
} from '../actions/photo/photo.action-types';

const initialState = {
  // new Map(photo.id, photo),
  photos: [],
  potd: [],
  activePhoto: {},
};

export const photosReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PHOTOS:
      return { ...state, photos: payload };
    // переписать название POTD
    case SET_POTD:
      return { ...state, potd: payload };
    case SET_ACTIVE_PHOTO:
      // хранить айдишник
      return { ...state, activePhoto: payload };
    case ADD_PHOTOS:
      return { ...state, photos: [...state.photos, ...payload] };
    case LIKE_PHOTO: {
      const changedPhotos = state.photos.map((photo) => {
        if (photo.id === payload) {
          photo.likedByUser = !photo.likedByUser;
        }
        return photo;
      });

      const changedActivePhoto = state.activePhoto.url
        ? new Photo({
            ...state.activePhoto,
            likedByUser: !state.activePhoto.likedByUser,
          })
        : state.activePhoto;
      return {
        ...state,
        photos: changedPhotos,
        activePhoto: changedActivePhoto,
      };
    }
    default:
      return state;
  }
};