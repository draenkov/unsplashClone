import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { UnsplashService } from '../../../api/splash/provider';
import { photosSelector } from '../../../store/selectors/photos.selector';
import {
  searchPageSelector,
  searchPhotosSelector,
} from '../../../store/selectors/search.selector';

import '../../../style/GalleryModal.css';
import convertDates from '../../../utils/convertDates';
import AddBtn from '../../Buttons/AddBtn/AddBtn';
import InfoBtn from '../../Buttons/InfoBtn/InfoBtn';
import LikeBtn from '../../Buttons/LikeBtn/LikeBtn';
import MoreBtn from '../../Buttons/MoreBtn/MoreBtn';
import ShareBtn from '../../Buttons/ShareBtn/ShareBtn';

const GalleryModal = ({ photoId }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const [stats, setStats] = useState('');
  const isSearchPageOpen = useSelector(searchPageSelector);
  const photos = useSelector(photosSelector);
  const searchPhotos = useSelector(searchPhotosSelector);

  const photo = isSearchPageOpen
    ? searchPhotos.get(photoId)
    : photos.get(photoId);
  useEffect(() => {
    UnsplashService.getStatistics(photo.id).then((result) => setStats(result));
  }, []);
  return (
    <div
      className="content"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
    >
      <div className="content__header">
        <div className="content__header__author">
          <div className="authorInfo">
            <div className="authorInfo__avatar">
              <img src={photo.authorImg} alt="" />
            </div>

            <div className="authorInfo__name">
              <p>{photo.author}</p>
              <a href="/#">{`@${photo.authorPage}`}</a>
            </div>
          </div>
        </div>
        <div className="content__header__btns">
          <LikeBtn photo={photo} />
          <AddBtn />
          <div className="download">
            <button className="downloadBtn" type="button">
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
      <div
        className={`content__photo ${isZoomed ? 'zoomed' : ''}`}
        onClick={() => setIsZoomed(!isZoomed)}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        <img src={isZoomed ? photo.urlFull : photo.urlRegular} alt="" />
      </div>
      <div className="content__footer">
        <div className="content__footer__stats">
          <div className="stats__likes">
            <p>Views</p>
            <span>{stats.views}</span>
          </div>
          <div className="stats__downloads">
            <p>Downloads</p>
            <span>{stats.downloads}</span>
          </div>
        </div>
        <div className="content__footer__btns">
          <ShareBtn />
          <InfoBtn />
          <MoreBtn />
        </div>
        <div className="content__footer__details">
          <div className="details__date">
            <svg
              width="16"
              height="16"
              className="ywnoU"
              viewBox="0 0 24 24"
              version="1.1"
              aria-hidden="false"
            >
              <path d="M21 6v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14z" />
            </svg>
            <p>{`Published on ${convertDates(photo.createdAt)}`}</p>
          </div>
          <div className="details__license">
            <svg
              width="16"
              height="16"
              className="ywnoU"
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
            >
              <path
                d="M13.3333 18.9333l8.8-8.8L24 12 13.3333 22.6667
              8 17.3333l1.86667-1.8666 3.46663 3.4666zM28 6.66668v8.00002c0 7.3333-5.0667
              14.2666-12 16-6.93333-1.7334-12-8.6667-12-16V6.66668l12-5.33334 12
              5.33334zm-2.6667 1.73333L16 4.26668 6.66667 8.40001v6.26669c0 6 4.00003
              11.6 9.33333 13.2 5.3333-1.6 9.3333-7.2 9.3333-13.2V8.40001z"
              />
            </svg>
            <p>Free to use under the Unsplash License </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;

GalleryModal.propTypes = {
  photoId: PropTypes.string,
};

GalleryModal.defaultProps = {
  photoId: '',
};
