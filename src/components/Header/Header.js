import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import logoSM from './../../assets/logo-sm.png';
import logoLG from './../../assets/logo-lg.svg';
import MobileMenu from './MobileMenu/MobileMenu';
import Menu from './Menu/Menu';
import './Header.scss';

const Header = ({links}) => {
  const [isMobileMenuOpen, toggleMenu] = useState(false);

  const handleBurgerClick = (state) => {
    toggleMenu(state);
    state ? disableBodyScroll(document) : enableBodyScroll(document);
  }

  const closeMenu = () => {
    toggleMenu(false);
    enableBodyScroll(document);
  }

  return (
    <header className="header px-3">
      <div className="d-flex justify-content-between align-items-center">
        <Link className="header__logo" to="./">
          <img src={logoSM} className="if-logo if-logo--sm" alt="if-logo-sm"/>
          <img src={logoLG} className="if-logo if-logo--lg" alt="if-logo-lg"/>
        </Link>

        <Menu links={links?.nav}/>

        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          handleBurgerClick={handleBurgerClick}
          links={links?.extendedNav}
          closeMenu={closeMenu}
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
