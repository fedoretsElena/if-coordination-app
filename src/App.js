import { Route, Routes } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';

import './App.scss';
import { Header, Breadcrumbs, Footer } from './components';
import { Business, Home, Resettlers, Volunteers, CityLeisure, Accommodation } from './pages';
import { API_PATH } from './api-config';

function App() {
  const [links, setLinks] = useState({});
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    fetch(`${API_PATH}/links.json`, { headers })
      .then(response => response.json())
      .then(setLinks);

    fetch(`${API_PATH}/contacts.json`, { headers })
      .then(response => response.json())
      .then(setContacts);
  }, [])

  return (
    <div className="container">
      <Header />
      {/*<Breadcrumbs  />*/}

      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/resettlers" exact element={<Resettlers />}/>
        <Route path="/resettlers/accommodation" exact element={<Accommodation />}/>
        <Route path="/business" exact element={<Business />}/>
        <Route path="/volunteers" exact element={<Volunteers />}/>
        <Route path="/city-leisure" exact element={<CityLeisure />}/>

        {/*<Route path="*" component={NotFound} />*/}
      </Routes>

      <Footer contacts={contacts} links={links.nav} socialNetworks={links.socialNetworks} />
    </div>
  );
}

export default App;
