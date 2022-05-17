import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = ({links = []}) => {
  const [firstColumn, secondColumn] = links.reduce((acc, item, index) => {
    index < links.length - 3 ? acc[0].push(item) : acc[1].push(item);
    return acc;
  }, [[], []]);

  return (
    <section className="mt-3 pt-2">
      <h2>Навігація</h2>
      <hr/>
      <nav className="nav my-3">
        <ul className="nav-list">
          <li>
            <ul>
              {firstColumn.map(({value, name}, key) =>
                <li className="nav-item mb-2" key={key}>
                  <Link className="nav-link caption" to={value} target='_blank'>{name}</Link>
                </li>
              )}
            </ul>
          </li>
          <li>
            <ul>
              {secondColumn.map(({value, name}, key) =>
                <li className="nav-item mb-2" key={key}>
                  <Link className="nav-link caption" to={value} target='_blank'>{name}</Link>
                </li>
              )}
            </ul>
          </li>
        </ul>
      </nav>
    </section>
  );
}

Nav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })),
};

export default Nav;
