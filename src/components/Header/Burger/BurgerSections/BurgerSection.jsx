import PropTypes from 'prop-types';
import Icon from '../../../Icon/Icon';

const BurgerSection = ({ section }) => (
  <div className="burgerSection">
    <div className="burgerSection__title">
      <Icon type={section.icon} key={section.title} />
      <h2>{section.title}</h2>
    </div>
    <ul className="burgerSection__links">
      {section.links.map((link) => (
        <li className="burgerSection__link" key={link}>
          <a href="/#">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default BurgerSection;

BurgerSection.propTypes = {
  section: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.string),
  }),
};

BurgerSection.defaultProps = {
  section: {
    icon: '',
    title: '',
    links: [],
  },
};
