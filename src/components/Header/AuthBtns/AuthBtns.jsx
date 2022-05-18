import { UnsplashService } from '../../../api/splash/provider';

const AuthBtns = () => (
  <div className="auth">
    <button
      className="auth__btn"
      type="button"
      onClick={() => UnsplashService.login()}
    >
      Log in
    </button>
    <div>/</div>
    <button className="auth__btn" type="button">
      Sign up
    </button>
  </div>
);

export default AuthBtns;
