import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { UnsplashService } from '../api/splash/provider';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import { setAccessToken } from '../store/actions/photo/auth.actions';

const Login = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const executedRef = useRef(false);

  useEffect(() => {
    if (executedRef.current) {
      return;
    }
    const code = searchParams.get('code');

    if (!code) {
      return;
    }

    // Сохранить токен в стор
    UnsplashService.getAccessToken(code).then(
      dispatch(setAccessToken('accessToken'))
    );

    // UnsplashService.getUserName();

    executedRef.current = true;
  }, []);
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default Login;
