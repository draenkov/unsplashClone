import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UnsplashService } from '../api/splash/provider';
import Header from '../components/Header/Header';
import Gallery from '../components/Main/Gallery/Gallery';
import NoSearchResult from '../components/Sorting/NoSearchResult/NoSearchResult';
import SearchValue from '../components/Sorting/SearchValue/SearchValue';
import Sorting from '../components/Sorting/Sorting';
import { setSearchPhotos } from '../store/actions/search/search.actions';
import {
  searchPhotosSelector,
  searchValueSelector,
  sortOptionSelector,
} from '../store/selectors/search.selector';

const SearchResult = () => {
  const searchValue = useSelector(searchValueSelector);
  const sortOption = useSelector(sortOptionSelector);
  const dispatch = useDispatch();
  const searchArray = useSelector(searchPhotosSelector);
  console.log(searchArray);

  useEffect(() => {
    UnsplashService.getsearchPhotos(searchValue, sortOption).then(
      (searchPhotos) => {
        dispatch(setSearchPhotos(searchPhotos));
      }
    );
  }, [sortOption, searchValue]);
  return (
    <>
      <Header />
      <Sorting />
      <SearchValue />
      {searchArray.size === 0 ? <NoSearchResult /> : <Gallery />}
    </>
  );
};

export default SearchResult;
