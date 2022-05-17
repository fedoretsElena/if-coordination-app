import { Link } from 'react-router-dom';

import logo from './../../assets/logo.svg';
import './Header.scss';

const Header = () => (
  <header className="header px-3 py-2">
    <div className="d-flex justify-content-between">
      <Link className="header__logo" to="/">
        <img src={logo} className="if-logo" alt="if-logo" />
      </Link>
    </div>
  </header>
);

export default Header;
