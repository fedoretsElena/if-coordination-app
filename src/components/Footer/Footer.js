import PropTypes from 'prop-types';
import { MdCopyright } from 'react-icons/md';

import './Footer.scss';
import BackButton from './../BackButton/BackButton';
import Nav from './Nav/Nav';
import Contacts from './Contacts/Contacts';

const Footer = ({contacts, links}) => {
  return (
    <footer className="footer py-4">
      <div className="footer__container m-auto">
        <BackButton />
        <Contacts places={contacts.places} phones={contacts.phones}/>

        <div className="footer__navigation">
          <Nav links={links} />
        </div>

        <div className="copyright-text caption d-flex align-items-center mt-3">
          <MdCopyright className="mr-2" />
          Copyright 2022
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  contacts: PropTypes.shape({
    phones: PropTypes.arrayOf(PropTypes.string),
    places: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string
    })),
  }),
  links: PropTypes.shape({
    socialNetworks: PropTypes.object,
    nav: PropTypes.array,
    additionalNav: PropTypes.array,
  }),
}

export default Footer;
