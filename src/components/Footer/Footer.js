import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdCopyright } from 'react-icons/md';

import './Footer.scss';
import BackButton from './../BackButton/BackButton';

const Footer = ({contacts: {places, phones}, links, socialMedia}) => (
  <footer className="footer px-3 py-4">
    <BackButton />
    <section>
      <h2>Контакти</h2>
      <hr/>
      <div className="contacts-grid">
        {places?.map(({name, address}, key) => <div key={key}>
            <h4 className="my-2 text-uppercase">{name}</h4>
            <div className="caption">{address}</div>
          </div>
        )}
      </div>

      <div className="mt-3">
        <h4 className="mb-2">Тел.</h4>
        {phones?.map((value, key) =>
          <div className='caption my-1' key={key}><a href={'tel: ' + value} key={key}> {value} </a></div>
        )}
      </div>
    </section>

    <section className="mt-3 pt-2">
      <h2>Навігація</h2>
      <hr/>
      <nav className="nav my-3">
        <ul className="nav-list">
          {links?.map(({value, name}, key) =>
            <li className="nav-item mb-2" key={key}><Link className="nav-link caption" to={value} target='_blank'>{name}</Link></li>
          )}
        </ul>
      </nav>
    </section>

    <section className="social-media p-2">
      <h4 className="mb-3">Приєднуйтесь до нас у соцмережах:</h4>
      {socialMedia?.map(({icon, link}, key) =>
        <a href={link} target="_blank" key={key}>{icon}</a>
      )}
    </section>

    <div className="copyright-text caption d-flex align-items-center mt-3"><MdCopyright className="mr-2" /> Copyright 2022</div>

  </footer>
);

Footer.propTypes = {
  contacts: PropTypes.shape({
    phones: PropTypes.arrayOf(PropTypes.string),
    places: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string
    })),
  }),
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })),
  socialMedia: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string,
    icon: PropTypes.string,
  }))
}

export default Footer;
