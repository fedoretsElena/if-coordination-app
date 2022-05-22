import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

import { routes } from './../../configs/routes.config';
import {MdKeyboardArrowRight} from 'react-icons/md';
import './Breadcrumbs.scss';

function findRoute(query, currentRoute, acc) {
  acc.push(currentRoute);
  console.log('looking for ', currentRoute.path)
  if (query === currentRoute.path) {
    console.log('founded', currentRoute);
    return acc;
  }

  if (query !== currentRoute.path && currentRoute.routes) {
    console.log('will check child for', currentRoute.path)
    return checkRouteList(currentRoute.routes, query, acc);
  } else {
    return null;
  }
}

const checkRouteList = (list, query, acc) => {
  for (let item of list) {
    const founded = findRoute(query, item, acc);

    if (founded) {
      acc = [...acc, ...founded];
      return;
    }
  }

  return acc;
}

const Breadcrumbs = () => {
  const {pathname} = useLocation();
  const activeRoutes = checkRouteList(routes, pathname, []);

  return (
    <nav className="breadcrumbs">
      {activeRoutes?.length > 1 && activeRoutes.map((crumb, index) => (
        <div key={index} className="breadcrumb d-flex align-items-center">
            {index < activeRoutes.length - 1 && (
              <Fragment>
                <Link to={crumb.path}>{crumb.breadcrumbName}</Link>
                <MdKeyboardArrowRight className="breadcrumb__icon mx-3" />
              </Fragment>
            )}
          {index === activeRoutes.length - 1 && crumb.breadcrumbName}
        </div>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
