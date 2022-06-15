import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginBtn from '../../AuthBtns/Btns/LoginBtn';
import SubmitBtn from '../../SubmitBtn/SubmitBtn';

import BurgerSectionMedium from '../BurgerSections/BurgerSectionMedium';

const BurgerMenuMedium = ({ isMenuOpen }) => {
  const sectionInfo = [
    {
      title: 'Company',
      links: [
        'About',
        'History',
        'Join the team',
        'Press',
        'Contact us',
        'Help center',
      ],
      icon: 'Company',
    },
    {
      title: 'Product',
      links: [
        'Developers/API',
        'Unsplash Dataset',
        'Unsplash for IOS',
        'Apps & Plugins',
      ],
      icon: 'Product',
    },
    {
      title: 'Community',
      links: [
        'Become a Contributor',
        'Topics',
        'Collections',
        'Trends',
        'Unsplash Awards',
        'Stats',
      ],
      icon: 'Community',
    },
    {
      title: 'Legal',
      links: ['License', 'Privacy Policy', 'Terms', 'Security'],
      icon: 'Legal',
    },
  ];

  return (
    <div
      className="burgerMenu--m"
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      role="button"
      tabIndex={0}
    >
      <div
        className={
          isMenuOpen ? 'burgerMenu__content--m' : 'hiddenMenuContent--m'
        }
      >
        <div className="burgerMenu__angle--m">
          <div className="angle__wrapper" />
          <div className="angle__content" />
        </div>
        <ul className="burgerMenu__main--m">
          {sectionInfo.map((section) => (
            <BurgerSectionMedium section={section} key={section.title} />
          ))}
        </ul>
        <div className="burgerMenu__content__footer--m">
          <SubmitBtn />
          <LoginBtn />
        </div>
        <div className="burgerMenu__content__signin--m">
          <p>New to Unsplash?&nbsp;</p>

          <Link to="/unsplashClone">Sign up for free</Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenuMedium;

BurgerMenuMedium.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};
