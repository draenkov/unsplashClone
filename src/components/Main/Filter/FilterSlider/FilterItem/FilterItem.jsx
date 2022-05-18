import PropTypes from 'prop-types';

const FilterItem = ({ buttonTitle }) => (
  <li className="filter__btns__item">
    <button type="button">{buttonTitle}</button>
  </li>
);

export default FilterItem;

FilterItem.propTypes = {
  buttonTitle: PropTypes.string,
};

FilterItem.defaultProps = {
  buttonTitle: '',
};
