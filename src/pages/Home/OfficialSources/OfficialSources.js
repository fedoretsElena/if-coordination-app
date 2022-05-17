import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './OfficialSources.scss';

const OfficialSources = ({list, title = 'Офіційні джерела'}) => (
  <section className="official-sources">
    <h2 className="mt-3 mb-4">{title}</h2>

    <div className="grid">
      {list?.map(({link, text, iconName}, i) =>
        <a
          key={i}
          href={link}
          target="_blank"
          className="source-item d-flex align-items-center shadow-box mb-4 p-4"
        >
          <div className="source-item__icon-container">
            <img src={require('./../../../assets/' + iconName)} alt={iconName} />
          </div>
          <h3 className="source-item__text">{text}</h3>
        </a>
      )}
    </div>

  </section>
);

OfficialSources.propTypes = {
  title: PropTypes.string,
  sources: PropTypes.arrayOf({
    iconName: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
  }),
};

export default OfficialSources;
