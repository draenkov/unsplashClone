import { useSelector } from 'react-redux';
import { savedInputSelector } from '../../../store/selectors/search.selector';

const SearchValue = () => {
  const searchValue = useSelector(savedInputSelector);

  return (
    <div className="searchValue">
      <h1>{searchValue}</h1>
    </div>
  );
};

export default SearchValue;
