import { Resettlers, Home, Accommodation, Business, CityLeisure, Volunteers } from '../pages';

export const combinePaths = (parent, child) =>
  `${parent.replace(/\/$/, "")}/${child.replace(/^\//, "")}`;

export const buildPaths = (navigation, parentPath = "") =>
  navigation.map(route => {
    const path = combinePaths(parentPath, route.path);

    return {
      ...route,
      path,
      ...(route.routes && { routes: buildPaths(route.routes, path) })
    };
  });

export const routes = [
  {
    path: '/',
    component: <Home/>,
    exact: true,
    breadcrumbName: 'Головна',
    routes: [
      {
        path: '/resettlers',
        component: <Resettlers/>,
        exact: true,
        breadcrumbName: 'Переселенцям',
        routes: [{
          path: '/accommodation',
          component: <Accommodation/>,
          breadcrumbName: 'Розміщення',
        }]
      },
      {
        path: '/business',
        component: <Business/>,
        exact: true,
        breadcrumbName: 'Бізнесу'
      },
      {
        path: '/volunteers',
        component: <Volunteers/>,
        exact: true,
        breadcrumbName: 'Волонтерам'
      },
      {
        path: '/city-leisure',
        component: <CityLeisure/>,
        exact: true,
        breadcrumbName: 'Цікаве у місті'
      },
    ]
  },
];
