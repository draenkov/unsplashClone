import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UnsplashService } from '../api/splash/provider';
import { addPhotos } from '../store/actions/photo/photo.actions';
import { addSearchPhotos } from '../store/actions/search/search.actions';
import {
  savedInputSelector,
  searchPageSelector,
} from '../store/selectors/search.selector';

const useScroll = () => {
  const dispatch = useDispatch();

  const [shouldLoad, setShouldLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);

  const isSearchPageOpen = useSelector(searchPageSelector);
  const savedInput = useSelector(savedInputSelector);

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
      if (isSearchPageOpen) {
        UnsplashService.getMoreSearchPhotos(savedInput, currentPage)

          .then((result) => dispatch(addSearchPhotos(result)))
          .then(() => setCurrentPage((prevState) => prevState + 1))
          .catch((error) => console.log(error, 'Server didn`t send photos'))
          .finally(() => {
            setShouldLoad(() => false);
          });
      }
      UnsplashService.getMorePhotos(currentPage)
        .then((result) => dispatch(addPhotos(result)))
        .then(() => setCurrentPage((prevState) => prevState + 1))
        .catch((error) => console.log(error, 'Server didn`t send photos'))
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
