import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActivePhoto } from '../../../../store/actions/photo/photo.actions';
import { open } from '../../../../store/actions/photo/popup.actions';
import AddBtn from '../../../Buttons/AddBtn/AddBtn';
import DownloadBtn from '../../../Buttons/DownloadBtn/DownloadBtn';
import LikeBtn from '../../../Buttons/LikeBtn/LikeBtn';

const GalleryItem = ({ photo }) => {
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
      <img className="galleryItem__image" src={photo.url} alt="" />
      <div className="galleryItem__info">
        <div className="galleryItem__top">
          <LikeBtn photo={photo} />
          <AddBtn />
        </div>
        <div className="galleryItem__bottom">
          <div
            className="galleryItem__bottom__author"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            <img src={photo.authorImg} alt="" />
            <Link to="/unsplashClone">{photo.author}</Link>
          </div>
          <DownloadBtn downloadLink={photo.urlFull} />
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;

GalleryItem.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorImg: PropTypes.string.isRequired,
    urlFull: PropTypes.string.isRequired,
    urlRegular: PropTypes.string.isRequired,
  }),
};

GalleryItem.defaultProps = {
  photo: {},
};
