import PropTypes from 'prop-types';

import './Burger.scss';

const Burger = ({state, handleClick}) => (
  <div onClick={() => handleClick(!state)}>
    <label className={'hamburger ' + (state ? 'open' : '')}>
      <div className="top-bun"></div>
      <div className="meat"></div>
      <div className="bottom-bun"></div>
    </label>
  </div>
);

Burger.propTypes = {
  state: PropTypes.bool,
}

export default Burger;
