import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

import { routes } from './../../configs/routes.config';
import {MdKeyboardArrowRight} from 'react-icons/md';
import './Breadcrumbs.scss';

function findRoute(query, currentRoute, acc) {
  acc.push(currentRoute);
  if (query === currentRoute.path) {
    return acc;
  }

  if (query !== currentRoute.path && currentRoute.routes) {
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
    <div className="container-md m-auto">
      <div className="breadcrumbs">
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
      </div>
    </div>
  );
}

export default Breadcrumbs;
