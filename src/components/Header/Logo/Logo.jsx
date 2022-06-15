import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setSavedInput,
  setSearchValue,
} from '../../../store/actions/search/search.actions';

const Logo = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="logo"
      onClick={() => {
        dispatch(setSavedInput(''));
        dispatch(setSearchValue(''));
      }}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
    >
      <Link to="/unsplashClone">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Unsplash.svg/1200px-Logo_of_Unsplash.svg.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Logo;
