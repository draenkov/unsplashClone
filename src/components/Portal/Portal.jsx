import { useDispatch, useSelector } from 'react-redux';
import { setActivePhoto } from '../../store/actions/photo/photo.actions';
import { close } from '../../store/actions/photo/popup.actions';
import { activePhotoSelector } from '../../store/selectors/activePhoto.selector';
import { photosSelector } from '../../store/selectors/photos.selector';

import { popupSelector } from '../../store/selectors/popup.selector';
import '../../style/Portal.css';
import GalleryModal from './Modals/GalleryModal';

const Portal = () => {
  const isOpened = useSelector(popupSelector);
  const dispatch = useDispatch();

  const photoId = useSelector(activePhotoSelector);
  const arrayOfPhotos = Array.from(useSelector(photosSelector).values());

  const nextClickHandler = (currentPhotoId, array) => {
    if (currentPhotoId) {
      const currentIndex = array.findIndex(
        (photo) => photo.id === currentPhotoId
      );
      const nextPhoto = array[currentIndex + 1];
      if (nextPhoto) {
        dispatch(setActivePhoto(nextPhoto.id));
      }
    }
    return null;
  };

  const prevClickHandler = (currentPhotoId, array) => {
    if (currentPhotoId) {
      const currentIndex = array.findIndex(
        (photo) => photo.id === currentPhotoId
      );
      const prevPhoto = array[currentIndex - 1];
      if (prevPhoto) {
        dispatch(setActivePhoto(prevPhoto.id));
      }
    }
    return null;
  };

  if (!isOpened) {
    return null;
  }

  return (
    <div className="portal">
      <div
        className="overlay"
        onClick={() => dispatch(close())}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        <button
          type="button"
          className="overlay__close"
          onClick={() => dispatch(close())}
        >
          <svg
            width="32"
            height="32"
            className="FsJPV"
            viewBox="0 0 32 32"
            version="1.1"
            aria-hidden="false"
          >
            <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z" />
          </svg>
        </button>
        <div className="prevPhoto">
          <button
            className="prevPhoto__btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevClickHandler(photoId, arrayOfPhotos);
            }}
          >
            <svg
              width="32"
              height="32"
              className="__HN4"
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
            >
              <path d="M20.6667 24.6666l-2 2L8 16 18.6667 5.3333l2 2L12 16l8.6667 8.6666z" />
            </svg>
          </button>
        </div>

        <GalleryModal photoId={photoId} />
        <div className="nextPhoto">
          <button
            className="nextPhoto__btn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextClickHandler(photoId, arrayOfPhotos);
            }}
          >
            <svg
              width="32"
              height="32"
              className="__HN4"
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
            >
              <path d="M11.3333 7.3333l2-2L24 16 13.3333 26.6666l-2-2L20 16l-8.6667-8.6667z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portal;
