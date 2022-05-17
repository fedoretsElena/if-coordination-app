import PropTypes from 'prop-types';

import './Headline.scss';

const Headline = ({title, text, backgroundImgURL, size = 'lg'}) => (
  <section
    className="headline p-4 d-flex flex-column justify-content-center"
    style={{ backgroundImage: `url(${backgroundImgURL})` }}
  >
    <div className="headline__content">
      <h1 className={'headline__title mb-3 ' + size}>{title}</h1>
      <p>{text}</p>
    </div>
  </section>
);

Headline.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  backgroundImgURL: PropTypes.string,
};

export default Headline;


