import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';
import { useDispatch } from 'react-redux';
import { setActivePhoto } from '../../../../store/actions/photo/photo.actions';
import { open } from '../../../../store/actions/photo/popup.actions';
import AddBtn from '../../../Buttons/AddBtn/AddBtn';
import LikeBtn from '../../../Buttons/LikeBtn/LikeBtn';

const GalleryItemSmall = ({ photo }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="galleryItem"
      onClick={() => {
        dispatch(open());
        dispatch(setActivePhoto(photo.id));
      }}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
    >
      <div
        className="galleryItem__bottom__author"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        <img src={photo.authorImg} alt="" />
        <a href="/#">{photo.author}</a>
      </div>
      <img className="galleryItem__image" src={photo.urlRegular} alt="" />
      <div
        className="galleryItem__bottomm--s"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        <div className="galleryItem__top">
          <LikeBtn photo={photo} />
          <AddBtn />
        </div>
        <div className="download">
          <button
            className="downloadBtn"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              saveAs(photo.urlFull, 'Photo');
            }}
          >
            Download
          </button>
          <button className="sizeBtn" type="button">
            <svg
              width="32"
              height="32"
              className="mZXAA"
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
            >
              <path d="M9.9 11.5l6.1 6.1 6.1-6.1 1.9 1.9-8 8-8-8 1.9-1.9z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryItemSmall;

GalleryItemSmall.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorImg: PropTypes.string.isRequired,
    urlFull: PropTypes.string.isRequired,
    urlRegular: PropTypes.string.isRequired,
  }),
};

GalleryItemSmall.defaultProps = {
  photo: {},
};
