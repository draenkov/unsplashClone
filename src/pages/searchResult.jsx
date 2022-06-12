import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UnsplashService } from '../api/splash/provider';
import Header from '../components/Header/Header';
import Gallery from '../components/Main/Gallery/Gallery';
import SearchValue from '../components/Sorting/SearchValue/SearchValue';
import Sorting from '../components/Sorting/Sorting';
import { setSearchPhotos } from '../store/actions/search/search.actions';
import {
  savedInputSelector,
  sortOptionSelector,
} from '../store/selectors/search.selector';

const SearchResult = () => {
  const savedInput = useSelector(savedInputSelector);
  const sortOption = useSelector(sortOptionSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    UnsplashService.getsearchPhotos(savedInput, sortOption).then(
      (searchPhotos) => {
        dispatch(setSearchPhotos(searchPhotos));
      }
    );
  }, [sortOption, savedInput]);
  return (
    <>
      <Header />
      <Sorting />

      <SearchValue />
      <Gallery />
    </>
  );
};

export default SearchResult;
