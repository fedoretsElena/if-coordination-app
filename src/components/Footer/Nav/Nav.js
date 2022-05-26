import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Nav.scss';
import SocialNetworks from './../SocialNetworks/SocialNetworks';

const Nav = ({links}) => {
  const {nav, socialNetworks = {}, additionalNav} = links || {};
  return (
    <section className="mt-3 pt-2">
      <h2>Навігація</h2>
      <hr/>
      <div className="nav-grid">
        <nav className="nav my-3">
          <ul className="nav-list">
            <li>
              <ul>
                {nav?.map(({value, name}, key) =>
                  <li className="nav-item mb-2" key={name + '_' + key}>
                    <Link className="nav-link caption" to={value} target='_blank'>{name}</Link>
                  </li>
                )}
              </ul>
            </li>
            <li>
              <ul>
                {additionalNav?.map(({value, name}, key) =>
                  <li className="nav-item mb-2" key={name + '_' + key}>
                    <Link className="nav-link caption" to={value} target='_blank'>{name}</Link>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </nav>

        {!!Object.keys(socialNetworks).length && <SocialNetworks className="nav-social-networks" networks={socialNetworks}/>}
      </div>
    </section>
  );
}

Nav.propTypes = {
  links: PropTypes.shape({
    socialNetworks: PropTypes.object,
    nav: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })),
    additionalNav: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })),
  }),
  socialNetworks: PropTypes.object,
};

export default Nav;
