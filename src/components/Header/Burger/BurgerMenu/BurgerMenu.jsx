import PropTypes from 'prop-types';
import BurgerSection from '../BurgerSections/BurgerSection';

const BurgerMenu = ({ isMenuOpen }) => {
  const footerBtns = ['License', 'Privacy Policy', 'Terms', 'Security'];

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
  ];

  return (
    <div
      className="burgerMenu"
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      role="button"
      tabIndex={0}
    >
      <div className={isMenuOpen ? 'burgerMenu__content' : 'hiddenMenuContent'}>
        <div className="burgerMenu__angle">
          <div className="angle__wrapper" />
          <div className="angle__content" />
        </div>
        <div className="burgerMenu__content__main">
          {sectionInfo.map((section) => (
            <BurgerSection section={section} key={section.title} />
          ))}
        </div>

        <div className="burgerMenu__content__footer">
          <ul className="footer__btns">
            {footerBtns.map((btn) => (
              <li key={btn}>
                <a href="/#">{btn}</a>
              </li>
            ))}
          </ul>
          <div className="footer__imgs">
            <svg
              width="32"
              height="32"
              className="Glevq lmT4W _R1t5 lmT4W"
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
            >
              <path
                d="M29.3 7.9c-.8 1.1-1.6 2.1-2.7 2.9v.7c0 7.2-5.6 15.5-15.7
                15.2-3.1 0-6-.8-8.4-2.4.4.1.9.1 1.3.1 2.5 0 4.9-.9 6.8-2.4-2.4 0-4.4-1.6-5-3.7.4.1.7.1
                1.1.1.5 0 1.1 0 1.5-.1-2.5-.5-4.4-2.6-4.4-5.3v-.1c.8.4 1.6.7 2.4.7-1.4-1-2.3-2.7-2.3-4.6
                0-.9.3-1.9.8-2.6 2.7 3.2 6.6 5.4 11.1 5.6-.1-.4-.1-.8-.1-1.2 0-3 2.4-5.4 5.4-5.4 1.6 0
                3.1.7 4 1.6 1.2-.3 2.4-.7 3.4-1.3-.4 1.3-1.3 2.4-2.4 3 1.2-.2 2.3-.5 3.2-.8z"
              />
            </svg>
            <svg
              width="32"
              height="32"
              className="Glevq lmT4W _R1t5 lmT4W"
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
            >
              <path
                d="M29.3 16c0 6.7-4.9 12.2-11.2 13.2v-9.3h3.1l.6-3.8h-3.7v-2.5c0-1.1.5-2.1
                2.2-2.1H22V8.2S20.5 8 19 8c-3 0-5 1.8-5 5.2V16h-3.4v3.9H14v9.2C7.6 28.2 2.7 22.7
                2.7 16c0-7.3 6-13.3 13.3-13.3 7.3 0 13.3 5.9 13.3 13.3z"
              />
            </svg>
            <svg
              width="32"
              height="32"
              className="Glevq lmT4W _R1t5 lmT4W"
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
            >
              <path
                d="M29.2
             10.5c-.1-1.4-.3-2.4-.6-3.2-.3-.9-.8-1.6-1.5-2.4-.7-.7-1.5-1.2-2.4-1.5-.8-.3-1.8-.6-3.2-.6-1.4-.1-1.9-.1-5.5-.1s-4.1 0-5.5.1c-1.4 0-2.4.2-3.2.6-.9.3-1.7.8-2.4 1.5S3.7 6.4 3.4 7.3c-.4.8-.6
                1.8-.7 3.2-.1 1.4-.1 1.9-.1 5.5s0 4.1.1 5.5c.1 1.4.3 2.4.6 3.2.3.9.8 1.6 1.5 2.4.7.7 1.5
                1.2 2.4 1.5.8.3 1.8.6 3.2.6 1.4.1 1.9.1 5.5.1s4.1 0 5.5-.1c1.4-.1 2.4-.3 3.2-.6.9-.3 1.6-.8
                2.4-1.5.7-.7 1.2-1.5 1.5-2.4.3-.8.6-1.8.6-3.2.1-1.4.1-1.9.1-5.5.1-3.6.1-4.1 0-5.5zm-2.4
                10.9c-.1
                1.3-.3 2-.5 2.5-.2.6-.5 1.1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.4-2.5.5-1.4.1-1.8.1-5.4.1-3.6
                0-4 0-5.4-.1-1.3-.1-2-.3-2.5-.5-.6-.2-1.1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.2-.5-2.5.1-1.4.1-1.8.1-5.4s0-4 .1-5.4c.1-1.3.3-2 .5-2.5.2-.6.5-1.1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4
                2.5-.5H16c3.6 0 4 0 5.4.1 1.3.1 2 .3 2.5.5.6.2 1.1.5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.5 2.5.1
                1.4.1 1.8.1 5.4s-.1 3.9-.2 5.3zM16 9.2c-3.8 0-6.8 3.1-6.8 6.8 0 3.8 3.1 6.8 6.8 6.8 3.8 0
                6.8-3.1 6.8-6.8s-3-6.8-6.8-6.8zm0 11.2c-2.5 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4c2.5 0 4.4 2 4.4
                4.4s-2 4.4-4.4 4.4zm8.7-11.5c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6.7-1.6 1.6-1.6 1.6.7 1.6 1.6z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;

BurgerMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};
