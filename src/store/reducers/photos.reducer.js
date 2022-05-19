import {
  ADD_PHOTOS,
  LIKE_PHOTO,
  SET_ACTIVE_PHOTO,
  SET_PHOTOS,
  SET_POTD,
} from '../actions/photo/photo.action-types';

const initialState = {
  photos: [],
  potd: [],
  activePhoto: '',
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
      return { ...state, activePhoto: payload };
    case ADD_PHOTOS: {
      payload.map((item) => {
        state.photos.set(item[0], item[1]);
        return item;
      });

      return state;
    }
    case LIKE_PHOTO: {
      const map = state.photos;
      const likedPhoto = map.get(payload);

      if (likedPhoto) {
        likedPhoto.likedByUser = !likedPhoto.likedByUser;
      }
      const array = Array.from(map);
      const newMap = new Map(array);

      return { ...state, photos: newMap };
    }
    default:
      return state;
  }
};
