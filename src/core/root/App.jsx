import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { UnsplashService } from '../../api/splash/provider';
import Portal from '../../components/Portal/Portal';
import PortalSmall from '../../components/Portal/PortalSmall';
import useScroll from '../../hooks/useScroll';

import Home from '../../pages/home';
import Login from '../../pages/login';
import SearchResult from '../../pages/searchResult';
import { setPhotos, setPOTD } from '../../store/actions/photo/photo.actions';
import { setWindowWidth } from '../../store/actions/window/window.actions';

import { popupSelector } from '../../store/selectors/popup.selector';

import { windowWidthSelector } from '../../store/selectors/window.selector';

import './App.css';

const App = () => {
  const screenWidth = useSelector(windowWidthSelector);

  const executedRef = useRef(false);

  const dispatch = useDispatch();
  useScroll();

  const isModalOpened = useSelector(popupSelector);

  useEffect(() => {
    if (executedRef.current) {
      return;
    }
    window.onresize = () => {
      dispatch(setWindowWidth(window.screen.width));
    };
    UnsplashService.getStartPhotos().then((result) => {
      dispatch(setPhotos(result));
    });
    UnsplashService.getPhotoOfTheDay().then((result) => {
      dispatch(setPOTD(result));
    });
    console.log(UnsplashService);

    executedRef.current = true;
  }, []);
  return (
    <div className={`App ${isModalOpened ? 'scrollHidden' : ''}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/searchResult" element={<SearchResult />} />
      </Routes>
      {screenWidth > 768 ? <Portal /> : <PortalSmall />}
    </div>
  );
};

export default App;
