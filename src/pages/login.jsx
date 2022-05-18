import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { UnsplashService } from '../api/splash/provider';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

const Login = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');

    if (!code) {
      return;
    }
    UnsplashService.getAccessToken(code);
  }, []);
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default Login;
