import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UnsplashService } from '../api/splash/provider';
import { addPhotos } from '../store/actions/photo/photo.actions';

const useScroll = () => {
  const dispatch = useDispatch();

  const [shouldLoad, setShouldLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);

  const scrollHandler = (e) => {
    if (shouldLoad) {
      return;
    }

    const totalHeight = e.target.documentElement.scrollHeight;
    const topPosition = e.target.documentElement.scrollTop;
    const visibleHeight = window.innerHeight;

    const scrollPoint = totalHeight - (topPosition + visibleHeight);
    if (scrollPoint < 300 && scrollPoint > 230) {
      setShouldLoad(() => true);
    }
  };

  useEffect(() => {
    if (shouldLoad) {
      UnsplashService.getMorePhotos(currentPage)
        .then((result) => dispatch(addPhotos(result)))
        .then(() => setCurrentPage((prevState) => prevState + 1))
        // .then(console.log(currentPage))
        .finally(() => {
          setShouldLoad(() => false);
        });
    }
  }, [shouldLoad]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);
};

export default useScroll;

// кастомный хук scrollUp
