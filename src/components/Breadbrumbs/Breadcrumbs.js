import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

import { routes } from './../../configs/routes.config';
import {MdKeyboardArrowRight} from 'react-icons/md';
import './Breadcrumbs.scss';

function findRoute(fullPath, currentRoute, acc) {
  if (!fullPath.includes(currentRoute.path)) {
    return;
  }

  acc.push(currentRoute);

  if (fullPath === currentRoute.path) {
    return acc;
  }

  if (currentRoute.routes) {
    return checkRouteList(currentRoute.routes, fullPath, acc);
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

const Breadcrumbs = ({theme = 'light', fullPath}) => {
  const activeRoutes = checkRouteList(routes, fullPath, []);

  return (
    <div className="container-md m-auto">
      <div className={'breadcrumbs ' + theme }>
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
