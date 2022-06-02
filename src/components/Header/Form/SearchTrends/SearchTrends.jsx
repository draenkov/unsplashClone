import PropTypes from 'prop-types';
import Icon from '../../../Icon/Icon';

const SearchTrends = ({ isFocusActive }) => {
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
    <div className={isFocusActive ? 'searchTrends' : 'hidden'}>
      {searchTrends.map((trendType) => (
        <div className="searchTrend" key={trendType.title}>
          <h2 className="searchTrend__title">{trendType.title}</h2>

          <div className="searchTrend__btns">
            {trendType.btns.map((btn) => (
              <button type="button" key={btn.name}>
                {btn.icon ? (
                  <Icon type={btn.icon} className={btn.icon} />
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
  isFocusActive: PropTypes.bool.isRequired,
};
