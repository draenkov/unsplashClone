import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  openSearchPage,
  setSavedInput,
} from '../../../../store/actions/search/search.actions';

const AutoComplete = ({ autoCompleteValue, isInputActive, setInputValue }) => {
  const dispatch = useDispatch();

  if (autoCompleteValue) {
    return (
      <div className={isInputActive ? 'autoComplete' : 'autoCompleteHidden'}>
        {autoCompleteValue.map((value) => (
          <div
            className="autoComplete__value"
            onMouseDown={(e) => {
              e.preventDefault();
            }}
            onClick={(e) => {
              setInputValue(e.target.text);
              dispatch(setSavedInput(e.target.text));

              dispatch(openSearchPage());
            }}
            role="button"
            tabIndex={0}
            onKeyDown={() => {}}
            key={value}
          >
            <Link to="/searchResult">{value}</Link>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default AutoComplete;

AutoComplete.propTypes = {
  autoCompleteValue: PropTypes.arrayOf(PropTypes.string),
  isInputActive: PropTypes.bool.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

AutoComplete.defaultProps = {
  autoCompleteValue: [],
};
