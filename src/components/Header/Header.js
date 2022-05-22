import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import logo from './../../assets/logo.svg';
import MobileMenu from './MobileMenu/MobileMenu';
import Menu from './Menu/Menu';
import './Header.scss';

const Header = ({links}) => {
  const [isMobileMenuOpen, toggleMenu] = useState(false);

  const handleBurgerClick = (state) => {
    toggleMenu(state);
    state ? disableBodyScroll(document) : enableBodyScroll(document);
  }

  return (
    <header className="header px-3">
      <div className="d-flex justify-content-between align-items-center">
        <Link className="header__logo" to="./">
          <img src={logo} className="if-logo" alt="if-logo"/>
        </Link>

        <Menu links={links?.nav}/>

        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          handleBurgerClick={handleBurgerClick}
          links={links?.extendedNav}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  nav: PropTypes.array,
  extendedNav: PropTypes.array,
};

export default Header;
