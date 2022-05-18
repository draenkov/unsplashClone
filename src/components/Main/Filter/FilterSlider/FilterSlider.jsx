import { useState, useEffect, useRef } from 'react';

import FilterItem from './FilterItem/FilterItem';

const FilterSlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollMax, setIsScrollMax] = useState(false);

  const slider = useRef(null);
  const sliderInner = useRef(null);

  useEffect(() => {}, []);

  const filterSliderBtns = [
    'Current Events',
    'Wallpapers',
    '3D Renders',
    'Textures & Patterns',
    'Experimental',
    'Architecture',
    'Nature',
    'Business & Work',
    'Fashion',
    'Film',
    'Food & Drink',
    'Health & Wellness',
    'People',
    'Interiors',
    'Street Photography',
    'Travel',
    'Animals',
    'Spirituality',
    'Arts & Culture',
    'History',
    'Athletics',
  ];

  const handleLeftClick = () => {
    const offsetW = slider.current.offsetWidth;
    const innerOffsetW = sliderInner.current.offsetWidth;

    const maxScrollWidth = innerOffsetW - offsetW;

    slider.current.scrollLeft += 300;
    setScrollPosition(slider.current.scrollLeft + 300);

    if (slider.current.scrollLeft + 300 >= maxScrollWidth) {
      setIsScrollMax(true);
    }
  };

  const handleRightClick = () => {
    // const slider = document.querySelector('.filter__slider');

    slider.current.scrollLeft -= 300;
    setScrollPosition(slider.current.scrollLeft - 300);
    setIsScrollMax(false);
  };

  return (
    <div className="filter__wrapper">
      <button
        className={`leftArrow ${scrollPosition <= 0 ? 'hidden' : ''}`}
        onClick={handleRightClick}
        type="button"
      >
        <svg
          width="24"
          height="24"
          className="DG_Wq"
          viewBox="0 0 32 32"
          version="1.1"
          aria-hidden="false"
        >
          <path d="M20.6667 24.6666l-2 2L8 16 18.6667 5.3333l2 2L12 16l8.6667 8.6666z" />
        </svg>
      </button>
      <div className={`leftShadow ${scrollPosition <= 0 ? 'hidden' : ''}`} />
      <div className="filter__slider" ref={slider}>
        <ul
          className="filter__btns"
          ref={sliderInner}
          // className={`filter__btns ${
          //   filterPage === 1 ? '' : filterPage === 2 ? 'page2' : 'page3'
          // }`}
        >
          {filterSliderBtns.map((item) => (
            <FilterItem buttonTitle={item} key={item} />
          ))}
        </ul>
      </div>
      <button
        className={`rightArrow ${isScrollMax ? 'hidden' : ''}`}
        onClick={handleLeftClick}
        type="button"
      >
        <svg
          width="24"
          height="24"
          className="DG_Wq"
          viewBox="0 0 32 32"
          version="1.1"
          aria-hidden="false"
        >
          <path d="M11.3333 7.3333l2-2L24 16 13.3333 26.6666l-2-2L20 16l-8.6667-8.6667z" />
        </svg>
      </button>
      <div className={`rightShadow ${isScrollMax ? 'hidden' : ''}`} />
    </div>
  );
};

export default FilterSlider;
