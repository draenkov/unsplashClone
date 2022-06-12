import { useSelector } from 'react-redux';
import { searchValueSelector } from '../../../store/selectors/search.selector';

const SearchValue = () => {
  const searchValue = useSelector(searchValueSelector);

  return (
    <div className="searchValue">
      <h1>{searchValue}</h1>
    </div>
  );
};

export default SearchValue;
