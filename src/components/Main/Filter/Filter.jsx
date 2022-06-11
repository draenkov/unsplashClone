import { useSelector } from 'react-redux';
import { popupSelector } from '../../../store/selectors/popup.selector';
import { windowWidthSelector } from '../../../store/selectors/window.selector';
import '../../../style/Filter.css';
import FilterSlider from './FilterSlider/FilterSlider';

const Filter = () => {
  const isModalOpen = useSelector(popupSelector);
  const screenWidth = useSelector(windowWidthSelector);
  if (isModalOpen && screenWidth < 769) {
    return null;
  }
  return (
    <div className="filter">
      <button className="filter__homeBtn" type="button">
        Editorial
      </button>
      <div className="v-line" />
      <FilterSlider />
    </div>
  );
};

export default Filter;
