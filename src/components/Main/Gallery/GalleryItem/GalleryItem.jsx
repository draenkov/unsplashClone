import PropTypes from 'prop-types';
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
        dispatch(setActivePhoto(photo));
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
          <div className="galleryItem__bottom__author">
            <img src={photo.authorImg} alt="" />
            <a href="/#">{photo.author}</a>
          </div>
          <DownloadBtn />
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;

GalleryItem.propTypes = {
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorImg: PropTypes.string.isRequired,
  }),
};

GalleryItem.defaultProps = {
  photo: {},
};
