import { useState } from 'react';
import '../../style/Sorting.css';
import SortMenu from './SortMenu/SortMenu';

const Sorting = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className="sorting">
      <div className="sortingWrap">
        <div className="sortSubjects">
          <div className="sortSubjects__item">
            <svg
              width="32"
              height="32"
              className="Gdg38"
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
            >
              <path
                d="M26.7 4H5.3C4.5 4 4 4.5 4 5.3v21.3c0 .9.5 1.4 1.3 1.4h21.3c.8
            0 1.3-.5 1.3-1.3V5.3c.1-.8-.4-1.3-1.2-1.3zm-20 20l4.7-6 3.3 4 4.7-6 6 8H6.7z"
              />
            </svg>
            <p>Photos</p>
            <p>3k</p>
          </div>
        </div>
        <div className="sortOptions">
          <div className="sortOptions__item">
            <button
              type="button"
              onClick={() => {
                setIsMenuActive(!isMenuActive);
              }}
              onBlur={() => {
                setIsMenuActive(false);
              }}
            >
              Sort by&nbsp;
              <span>Relevance</span>
            </button>
            <SortMenu isMenuActive={isMenuActive} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
