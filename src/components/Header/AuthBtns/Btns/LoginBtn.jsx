import { UnsplashService } from '../../../../api/splash/provider';

const LoginBtn = () => (
  <button
    className="auth__btn login__btn"
    type="button"
    onClick={() => {
      UnsplashService.login();
    }}
  >
    Log in
  </button>
);

export default LoginBtn;
