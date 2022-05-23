const BurgerCommunity = () => {
  const sectionInfo = {
    title: 'Community',
    links: [
      'Become a Contributor',
      'Topics',
      'Collections',
      'Trends',
      'Unsplash Awards',
      'Stats',
    ],
  };

  return (
    <div className="burgerSection">
      <div className="burgerSection__title">
        <svg width="24" height="24" className="CnNKA" viewBox="0 0 24 24">
          <g
            stroke="#111"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M19.729 14.25c1.35.202 2.294.675 2.294 1.65
            0 .671-.445 1.107-1.163 1.381"
            />
            <path
              clipRule="evenodd"
              d="M11.887 14.664c-3.214 0-5.96.487-5.96 2.432 0 1.944
              2.729 2.445 5.96 2.445 3.214 0 5.958-.482 5.958-2.428s-2.727-2.45-5.958-2.45z"
            />
            <path d="M4.044 14.25c-1.351.202-2.294.675-2.294 1.65 0 .671.444 1.107 1.162 1.381" />
            <g>
              <path
                opacity=".5"
                d="M17.888 10.897a2.876 2.876 0 002.472-2.841 2.875 2.875 0 00-2.406-2.836"
              />
              <path
                opacity=".5"
                clipRule="evenodd"
                d="M11.887 11.888a3.819 3.819 0 10-3.82-3.82 3.804 3.804 0 003.792 3.82h.028z"
              />
              <path
                opacity=".5"
                d="M5.885 10.897a2.875 2.875 0 01-2.472-2.841A2.875 2.875 0 015.819 5.22"
              />
            </g>
          </g>
        </svg>
        <h2>{sectionInfo.title}</h2>
      </div>
      <ul className="burgerSection__links">
        {sectionInfo.links.map((link) => (
          <li className="burgerSection__link" key={link}>
            <a href="/#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerCommunity;
