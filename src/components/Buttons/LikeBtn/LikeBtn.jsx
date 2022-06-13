import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

// import { UnsplashService } from '../../../api/splash/provider';
import { likePhoto } from '../../../store/actions/photo/photo.actions';
import { likeSearchPhoto } from '../../../store/actions/search/search.actions';
import { searchPageSelector } from '../../../store/selectors/search.selector';

const LikeBtn = ({ photo }) => {
  const dispatch = useDispatch();
  const isSearchPageOpen = useSelector(searchPageSelector);

  return (
    <button
      className={`likeBtn ${photo.likedByUser ? 'liked' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        if (isSearchPageOpen) {
          dispatch(likeSearchPhoto(photo.id));
        }
        dispatch(likePhoto(photo.id));

        // TODO: Like API
        // return photo.likedByUser
        //   ? UnsplashService.likePhoto(photo.id)
        //   : UnsplashService.unlikePhoto(photo.id);
      }}
      type="button"
    >
      <svg
        width="32"
        height="32"
        className="TrVF8"
        viewBox="0 0 32 32"
        version="1.1"
        aria-hidden="false"
      >
        <path
          d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4
        3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1
        3.1 8.2 0 11.4l-12.2 12.8z"
        />
      </svg>
    </button>
  );
};

export default LikeBtn;

LikeBtn.propTypes = {
  photo: PropTypes.shape({
    likedByUser: PropTypes.bool,
    id: PropTypes.string,
  }),
};

LikeBtn.defaultProps = {
  photo: {},
};
