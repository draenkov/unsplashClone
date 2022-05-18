import '../../../style/Filter.css';
import FilterSlider from './FilterSlider/FilterSlider';

const Filter = () => (
  <div className="filter">
    <button className="filter__homeBtn" type="button">
      Editorial
    </button>
    <div className="v-line" />
    <FilterSlider />
  </div>
);

export default Filter;
