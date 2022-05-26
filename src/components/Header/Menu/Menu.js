import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

import './Menu.scss';

const Menu = ({links = []}) => {
  return (
    <Fragment>
      <nav className="navigation">
        {links.map(({shortName, name, value}, key) => (
          <NavLink className="navigation__item" to={value} key={shortName + '_' + key}>{shortName || name}</NavLink>
        ))}
        <Link to='/search'>
          <MdSearch className="navigation__search-item "/>
        </Link>
      </nav>
    </Fragment>
  );
};

Menu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    shortName: PropTypes.string,
    value: PropTypes.string,
  })),
};

export default Menu;
