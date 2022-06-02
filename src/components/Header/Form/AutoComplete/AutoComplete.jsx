import PropTypes from 'prop-types';

const AutoComplete = ({ autoCompleteValue }) => {
  if (autoCompleteValue) {
    return (
      <div className="autoComplete">
        {autoCompleteValue.map((value) => (
          <button type="button" key={value}>
            {value}
          </button>
        ))}
      </div>
    );
  }
  return null;
};

export default AutoComplete;

AutoComplete.propTypes = {
  autoCompleteValue: PropTypes.arrayOf(PropTypes.string).isRequired,
};
