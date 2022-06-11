import { useSelector } from 'react-redux';
import { authSelector } from '../../../store/selectors/auth.selector';
import LoginBtn from './Btns/LoginBtn';
import SignupBtn from './Btns/SignupBtn';

const AuthBtns = () => {
  const isLoggedIn = useSelector(authSelector);
  if (!isLoggedIn) {
    return (
      <div className="auth">
        <LoginBtn />
        <div>/</div>
        <SignupBtn />
      </div>
    );
  }
  return null;
};
export default AuthBtns;
