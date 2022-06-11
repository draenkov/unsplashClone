import PropTypes from 'prop-types';
import ArrowIcon from './IconComponents/ArrowIcon';
import CheckIcon from './IconComponents/CheckIcon';
import CommunityIcon from './IconComponents/CommunityIcon';
import CompanyIcon from './IconComponents/CompanyIcon';
import LegalIcon from './IconComponents/LegalIcon';
import ProductIcon from './IconComponents/ProductIcon';
import TrendUpIcon from './IconComponents/TrendUpIcon';

const IconTypes = {
  TrendUp: TrendUpIcon,
  Community: CommunityIcon,
  Company: CompanyIcon,
  Product: ProductIcon,
  Check: CheckIcon,
  Legal: LegalIcon,
  Arrow: ArrowIcon,
};

const Icon = ({ type, fill, width, height, className }) => {
  if (type) {
    const IconComponent = IconTypes[type];
    return (
      <IconComponent
        width={width}
        height={height}
        fill={fill}
        className={className}
      />
    );
  }
  return null;
};

export default Icon;

Icon.propTypes = {
  type: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

Icon.defaultProps = {
  type: '',
  fill: '#000000',
  width: 20,
  height: 20,
  className: '',
};
