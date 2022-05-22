import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './AidCategory.scss';

const AidCategory = ({category: {iconName, title, text, link, detailBtnText = 'Детальніше'}}) => (
  <div className="aid-category shadow-box">
    <img className="m-auto d-block" src={require('./../../../assets/' + iconName)} alt={iconName} />
    <h3 className="mt-3 mb-2">{title}</h3>
    <p className="aid-category__text my-2">{text}</p>

    <Link to={link} className="button m-auto d-block">{detailBtnText}</Link>
  </div>
);

AidCategory.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
    iconName: PropTypes.string,
    detailBtnText: PropTypes.string
  }),
};

export default AidCategory;
