import PropTypes from 'prop-types';

import './Headline.scss';

const Headline = ({title, text, backgroundImgURL, size = 'lg', containerSize = 'md'}) => (
  <section
    className="headline d-flex flex-column justify-content-center"
    style={{ backgroundImage: `url(${backgroundImgURL})` }}
  >
    <div className={'container-' + containerSize + ' m-auto'}>
      <div className="headline__content">
        <h1 className={'headline__title ' + size}>{title}</h1>
        <p className="headline__text">{text}</p>
      </div>
    </div>
  </section>
);

Headline.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  backgroundImgURL: PropTypes.string,
};

export default Headline;


