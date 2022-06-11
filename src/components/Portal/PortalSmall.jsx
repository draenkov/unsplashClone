import { useDispatch, useSelector } from 'react-redux';

import { close } from '../../store/actions/photo/popup.actions';
import { activePhotoSelector } from '../../store/selectors/activePhoto.selector';

import { popupSelector } from '../../store/selectors/popup.selector';
import '../../style/Portal.css';
import GalleryModal from './Modals/GalleryModal';

const PortalSmall = () => {
  const isOpened = useSelector(popupSelector);
  const dispatch = useDispatch();

  const photoId = useSelector(activePhotoSelector);

  if (!isOpened) {
    return null;
  }

  return (
    <div className="portal--s">
      <div
        className="overlay"
        onClick={() => dispatch(close())}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        <GalleryModal photoId={photoId} />
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
      </div>
    </div>
  );
};

export default PortalSmall;
