import { useSelector } from 'react-redux';
import { UnsplashService } from '../../../api/splash/provider';
import { authSelector } from '../../../store/selectors/auth.selector';

const AuthBtns = () => {
  const isLoggedIn = useSelector(authSelector);
  if (!isLoggedIn) {
    return (
      <div className="auth">
        <button
          className="auth__btn"
          type="button"
          onClick={() => {
            UnsplashService.login();
          }}
        >
          Log in
        </button>
        <div>/</div>
        <button className="auth__btn" type="button">
          Sign up
        </button>
      </div>
    );
  }
  return null;
};
export default AuthBtns;
