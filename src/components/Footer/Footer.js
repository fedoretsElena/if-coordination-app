import PropTypes from 'prop-types';
import { MdCopyright } from 'react-icons/md';

import './Footer.scss';
import BackButton from './../BackButton/BackButton';
import Nav from './Nav/Nav';
import Contacts from './Contacts/Contacts';
import SocialNetworks from './SocialNetworks/SocialNetworks';

const Footer = ({contacts, links, socialNetworks = {}}) => (
  <footer className="footer px-3 py-4">
    <BackButton />
    <Contacts places={contacts.places} phones={contacts.phones}/>
    <Nav links={links} />

    {!!Object.keys(socialNetworks).length && <SocialNetworks networks={socialNetworks}/>}

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
  socialNetworks: PropTypes.object
}

export default Footer;
