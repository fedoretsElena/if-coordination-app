import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './App.scss';
import { Header, Breadcrumbs, Footer } from './components';
import ScrollToTop from './utils/ScrollToTop';
import { API_PATH } from './configs/api.config';
import { buildPaths, routes } from './configs/routes.config';

function App() {
  const [links, setLinks] = useState({});
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    fetch(`${API_PATH}links.json`, { headers })
      .then(response => response.json())
      .then(setLinks);

    fetch(`${API_PATH}contacts.json`, { headers })
      .then(response => response.json())
      .then(setContacts);
  }, [])

  const flattenRoutes = routes =>
    routes
      .map(route => [route.routes ? flattenRoutes(route.routes) : [], route])
      .flat(Infinity);

  return (
    <div className="app">
      <a href="#aidCategories">test</a>
      <Header links={links} />
      {/*<Breadcrumbs />*/}
      <ScrollToTop>
        <Routes>
          {flattenRoutes(buildPaths(routes)).map(route => (
            <Route path={route.path} exact={route.exact} element={route.component} />
          ))}
        </Routes>
      </ScrollToTop>

      <Footer contacts={contacts} links={links} />
    </div>
  );
}

export default App;
