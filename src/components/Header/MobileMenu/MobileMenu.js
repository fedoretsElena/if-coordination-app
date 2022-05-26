import PropTypes from 'prop-types';
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

import Burger from './../Burger/Burger';
import Nav from './Nav/Nav';
import './MobileMenu.scss';

const MobileMenu = ({isMobileMenuOpen, handleBurgerClick, links, closeMenu}) => {

  return (
    <div className="mobile-navigation">
      <div className="d-flex align-items-center">
        <Link className="mr-3" to='/search'>
          <MdSearch className="icon-size mobile-navigation__search"/>
        </Link>

        <Burger handleClick={handleBurgerClick} />
      </div>

      {isMobileMenuOpen && <div className="backdrop"></div>}

      <div className={'menu ' + (isMobileMenuOpen ? 'menu--open' : '')}>
        <div className="menu__header d-flex justify-content-end align-items-center px-4">
          <Burger state={isMobileMenuOpen} handleClick={handleBurgerClick}/>
        </div>

        <Nav nav={links} closeMenu={closeMenu}/>
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
  closeMenu: PropTypes.func
};

export default MobileMenu;
