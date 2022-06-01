import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { UnsplashService } from '../api/splash/provider';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import { setAccessToken } from '../store/actions/photo/auth.actions';

const Login = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const code = searchParams.get('code');

    if (!code) {
      return;
    }
    console.log(UnsplashService);
    // Сохранить токен в стор
    UnsplashService.getAccessToken(code).then(
      dispatch(setAccessToken('accessToken'))
    );
    // UnsplashService.getUserName();
    console.log(UnsplashService);
  }, []);
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default Login;
