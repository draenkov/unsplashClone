import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { UnsplashService } from '../../api/splash/provider';
import Portal from '../../components/Portal/Portal';
import useScroll from '../../hooks/useScroll';

import Home from '../../pages/home';
import Login from '../../pages/login';
import { setPhotos, setPOTD } from '../../store/actions/photo/photo.actions';

import { popupSelector } from '../../store/selectors/popup.selector';

import './App.css';

const App = () => {
  const executedRef = useRef(false);

  const dispatch = useDispatch();
  useScroll();

  const isModalOpened = useSelector(popupSelector);

  useEffect(() => {
    if (executedRef.current) {
      return;
    }
    UnsplashService.getStartPhotos().then((result) => {
      dispatch(setPhotos(result));
    });
    UnsplashService.getPhotoOfTheDay().then((result) => {
      dispatch(setPOTD(result));
    });
    executedRef.current = true;
  }, []);
  return (
    <div className={`App ${isModalOpened ? 'scrollHidden' : ''}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Portal />
    </div>
  );
};

export default App;
