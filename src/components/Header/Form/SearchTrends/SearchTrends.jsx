import PropTypes from 'prop-types';
import { svgConverter } from '../../../../utils/svgConverter';
import TrendUp from '../icons/trend-up.svg';

const SearchTrends = ({ isInputActive }) => {
  const iconComponents = {
    TrendUp: <TrendUp />,
  };

  const searchTrends = [
    {
      title: 'Trending Searches',

      btns: [
        { name: 'profile', icon: 'TrendUp' },
        { name: 'featured', icon: 'TrendUp' },
        { name: 'office', icon: 'TrendUp' },
        { name: 'summer', icon: 'TrendUp' },
        { name: 'mountains', icon: 'TrendUp' },
      ],
    },
    {
      title: 'Trending Topics',

      btns: [
        { name: 'Business & Work', icon: '' },
        { name: 'Digital Nomad', icon: '' },
        { name: 'Experimental', icon: '' },
        { name: 'Athletics', icon: '' },
        { name: 'Wallpapers', icon: '' },
      ],
    },
    {
      title: 'Trending Collections',

      btns: [
        { name: 'church', icon: '' },
        { name: 'Medium frames in interior', icon: '' },
        { name: 'Yoga', icon: '' },
        { name: 'HEALTH', icon: '' },
        { name: 'Spring', icon: '' },
      ],
    },
  ];

  return (
    <div className={isInputActive ? 'searchTrends' : 'hidden'}>
      {searchTrends.map((trendType) => (
        <div className="searchTrend" key={trendType.title}>
          <h2 className="searchTrend__title">{trendType.title}</h2>

          {/* {<svg src={iconComponents.TrendUp.type}></svg>} */}
          <div className="searchTrend__btns">
            {trendType.btns.map((btn) => (
              <button type="button" key={btn.name}>
                {btn.icon ? (
                  <img src={svgConverter(btn.icon, iconComponents)} alt="" />
                ) : null}
                <p>{btn.name}</p>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchTrends;

SearchTrends.propTypes = {
  isInputActive: PropTypes.bool.isRequired,
};
