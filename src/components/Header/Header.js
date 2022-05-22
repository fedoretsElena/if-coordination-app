import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import logo from './../../assets/logo.svg';
import Burger from './Burger/Burger';
import './Header.scss';
import Nav from './Nav/Nav';

const Header = ({links}) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  const handleBurgerClick = (state) => {
    toggleMenu(state);
    state ? disableBodyScroll(document) : enableBodyScroll(document);
  }

  return (
    <header className="header px-3 py-2">
      <div className="d-flex justify-content-between align-items-center">
        <Link className="header__logo" to="./">
          <img src={logo} className="if-logo" alt="if-logo"/>
        </Link>

        <Burger handleClick={handleBurgerClick} />

        {isMenuOpen && <div className="backdrop"></div>}

        <div className={'header__menu menu ' + (isMenuOpen ? 'menu--open' : '')}>
          <div className="menu__header d-flex justify-content-end align-items-center px-4">
            <Burger state={isMenuOpen} handleClick={handleBurgerClick}/>
          </div>

          <Nav nav={links?.extendedNav}/>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  nav: PropTypes.array,
  extendedNav: PropTypes.array,
};

export default Header;
