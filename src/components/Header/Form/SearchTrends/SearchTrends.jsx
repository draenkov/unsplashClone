import PropTypes from 'prop-types';

const SearchTrends = ({ isInputActive }) => {
  const searchTrends = [
    {
      title: 'Trending Searches',
      btns: ['profile', 'featured', 'office', 'summer', 'mountains'],
      icon: '',
    },
    {
      title: 'Trending Topics',
      btns: [
        'Business & Work',
        'Digital Nomad',
        'Experimental',
        'Athletics',
        'Wallpapers',
      ],
    },
    {
      title: 'Trending Collections',
      btns: ['church', 'Medium frames in interior', 'Yoga', 'HEALTH', 'Spring'],
    },
  ];

  return (
    <div className={isInputActive ? 'searchTrends' : 'hidden'}>
      {searchTrends.map((trendType) => (
        <div className="searchTrend">
          <h2 className="searchTrend__title">{trendType.title}</h2>
          <div className="searchTrend__btns">
            {trendType.btns.map((trend) => (
              <button type="button">{trend}</button>
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
