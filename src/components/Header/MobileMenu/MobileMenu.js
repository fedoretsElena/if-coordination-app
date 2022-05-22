import { Fragment } from 'react';
import PropTypes from 'prop-types';

import Burger from './../Burger/Burger';
import Nav from './Nav/Nav';
import './MobileMenu.scss';

const MobileMenu = ({isMobileMenuOpen, handleBurgerClick, links}) => {

  return (
    <div className="mobile-navigation">
      <Burger handleClick={handleBurgerClick} />

      {isMobileMenuOpen && <div className="backdrop"></div>}

      <div className={'menu ' + (isMobileMenuOpen ? 'menu--open' : '')}>
        <div className="menu__header d-flex justify-content-end align-items-center px-4">
          <Burger state={isMobileMenuOpen} handleClick={handleBurgerClick}/>
        </div>

        <Nav nav={links}/>
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  handleBurgerClick: PropTypes.func,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    sublinks: PropTypes.array,
  })),
};

export default MobileMenu;
