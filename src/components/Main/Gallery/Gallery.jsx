import { useSelector } from 'react-redux';
import { photosSelector } from '../../../store/selectors/photos.selector';
import GalleryItem from './GalleryItem/GalleryItem';
import '../../../style/Gallery.css';
import { splitIntpSides } from '../../../utils/splitIntoSides';

const Gallery = () => {
  const photosInfo = Array.from(useSelector(photosSelector).values());

  const photosBySides = splitIntpSides(photosInfo);

  return (
    <section className="gallery">
      <div className="gallery__left">
        {photosBySides.left.map((photo) => (
          <GalleryItem photo={photo} key={photo.id} />
        ))}
      </div>
      <div className="gallery__center">
        {photosBySides.center.map((photo) => (
          <GalleryItem photo={photo} key={photo.id} />
        ))}
      </div>
      <div className="gallery__right">
        {photosBySides.right.map((photo) => (
          <GalleryItem photo={photo} key={photo.id} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
