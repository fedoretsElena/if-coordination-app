import PropTypes from 'prop-types';
import { MdArrowForward } from 'react-icons/md';

import './OfficialSources.scss';

const OfficialSources = ({list, title = 'Офіційні джерела'}) => (
  <section className="official-sources">
    <div className="container-lg m-auto">
      <h2 className="mt-3 mb-4">{title}</h2>

      <div className="official-sources-grid">
        {list?.map(({link, text, iconName}, i) =>
          <a
            key={i}
            href={link}
            target="_blank"
            className="source-item d-flex align-items-center shadow-box p-4"
          >
            <div className="source-item__icon-container">
              <img src={require('./../../../assets/' + iconName)} alt={iconName} />
            </div>
            <h3 className="source-item__text">{text}</h3>
            <MdArrowForward className="source-item__arrow"/>
          </a>
        )}
      </div>
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
