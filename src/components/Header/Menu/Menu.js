import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Menu.scss';

const Menu = ({links = []}) => {
  return (
    <Fragment>
      <nav className="navigation">
        {links.map((link) => (
          <NavLink className="navigation__item" to={link.value}>{link.shortName || link.name}</NavLink>
        ))}
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
