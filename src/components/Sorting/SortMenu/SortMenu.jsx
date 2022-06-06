import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSortOption } from '../../../store/actions/search/search.actions';
import CheckIcon from '../../Icon/IconComponents/CheckIcon';

const SortMenu = ({ isMenuActive }) => {
  const dispatch = useDispatch();
  const sortOptions = ['Relevance', 'Newest'];

  return (
    <div className={isMenuActive ? 'sortMenu' : 'hiddenSortMenu'}>
      <div className="sortMenu__content">
        <ul>
          {sortOptions.map((option) => (
            <li key={option}>
              <Link
                to="/searchResult"
                onClick={() => {
                  if (option === 'Relevance') {
                    dispatch(setSortOption('relevant'));

                    return;
                  }
                  dispatch(setSortOption('latest'));
                }}
              >
                {option}
                <div className="check hidden">
                  <CheckIcon />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortMenu;

SortMenu.propTypes = {
  isMenuActive: PropTypes.bool.isRequired,
};
