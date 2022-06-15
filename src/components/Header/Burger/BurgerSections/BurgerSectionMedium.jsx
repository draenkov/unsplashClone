import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../../../Icon/Icon';

const BurgerSectionMedium = ({ section }) => (
  <li className="burgerSection--m">
    <details>
      <summary>
        <div className="burgerSection__content--m">
          <div>
            <Icon type={section.icon} className="fillNone" />
            <h1>{section.title}</h1>
          </div>

          <Icon type="Arrow" className="arrowSvg" />
        </div>
      </summary>
      <ul>
        {section.links.map((link) => (
          <li key={link}>
            <Link to="/unsplashClone">{link}</Link>
          </li>
        ))}
      </ul>
    </details>
  </li>
);

export default BurgerSectionMedium;

BurgerSectionMedium.propTypes = {
  section: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.string),
  }),
};

BurgerSectionMedium.defaultProps = {
  section: {
    icon: '',
    title: '',
    links: [],
  },
};
