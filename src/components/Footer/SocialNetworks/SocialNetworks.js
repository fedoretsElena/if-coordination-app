import PropTypes from 'prop-types';
import { FaFacebookF } from 'react-icons/fa';

import './SocialNetworks.scss';

const SocialNetworks = ({networks: {fb}}) => {
  return (
    <section className="social-media p-3">
      <h4 className="mb-3">Приєднуйтесь до нас у соцмережах:</h4>
      {fb && <a className="mx-2" href={fb} target="_blank"><FaFacebookF/></a>}
    </section>
  );
}

SocialNetworks.propTypes = {
  networks: PropTypes.shape({
    fb: PropTypes.string,
  })
};

export default SocialNetworks;
