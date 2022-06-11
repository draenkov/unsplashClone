/* eslint-disable */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photosSelector } from '../../../store/selectors/photos.selector';
import GalleryItem from './GalleryItem/GalleryItem';
import '../../../style/Gallery.css';
import { splitIntoSides } from '../../../utils/splitIntoSides';
import {
  searchPageSelector,
  searchPhotosSelector,
} from '../../../store/selectors/search.selector';
import { windowWidthSelector } from '../../../store/selectors/window.selector';
import { setWindowWidth } from '../../../store/actions/window/window.actions';
import GalleryItemSmall from './GalleryItem/GalleryItemSmall';

const Gallery = () => {
  const [photoColumns, setPhotoColumns] = useState(0);
  const screenWidth = useSelector(windowWidthSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWindowWidth(window.screen.width));
    if (screenWidth > 990) {
      setPhotoColumns(3);
    } else if (screenWidth <= 767) {
      setPhotoColumns(1);
    } else if (screenWidth > 767 && screenWidth <= 990) {
      setPhotoColumns(2);
    }
  }, [screenWidth]);

  const isSearchPageOpen = useSelector(searchPageSelector);
  const searchPhotos = useSelector(searchPhotosSelector);
  const photos = useSelector(photosSelector);

  const photosInfo = Array.from(
    isSearchPageOpen ? searchPhotos.values() : photos.values()
  );

  const photosBySides = splitIntoSides(photosInfo, photoColumns);

  return (
    <section className="gallery">
      <div className="gallery__left">
        {photosBySides.left.map((photo) =>
          screenWidth > 768 ? (
            <GalleryItem photo={photo} key={photo.id} />
          ) : (
            <GalleryItemSmall photo={photo} key={photo.id} />
          )
        )}
      </div>
      <div className="gallery__center">
        {photoColumns >= 2
          ? photosBySides.center.map((photo) => (
              <GalleryItem photo={photo} key={photo.id} />
            ))
          : null}
      </div>
      <div className="gallery__right">
        {photoColumns === 3
          ? photosBySides.right.map((photo) => (
              <GalleryItem photo={photo} key={photo.id} />
            ))
          : null}
      </div>
    </section>
  );
};

export default Gallery;
