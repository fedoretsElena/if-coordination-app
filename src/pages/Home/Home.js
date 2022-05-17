import { Fragment, useEffect, useState } from 'react';

import './Home.scss';
import AidCategories from './AidCategories/AidCategories';
import OfficialSources from './OfficialSources/OfficialSources';
import Headline from './../../components/Headline/Headline';
import { API_PATH } from './../../api-config';

const Home = () => {
   const [aidCategories, setAidCategories] = useState({});
   const [officialSources, setOfficialSources] = useState({});
   const [headline, setHeadline] = useState({});

   useEffect(() => {
      const headers = {
         'Content-Type': 'application/json',
         'Accept': 'application/json'
      };

      Promise.allSettled([
         fetch(`${API_PATH}home/about.json`, { headers }).then(response => response.json()),
         fetch(`${API_PATH}home/aidCategories.json`, { headers }).then(response => response.json()),
         fetch(`${API_PATH}home/officialSources.json`, { headers }).then(response => response.json()),
     ]).then(res => {
        const results = res.map(({value}) => value);
        console.log(results);
        [setHeadline, setAidCategories, setOfficialSources].forEach((func, index) => func(results[index]));
      });
   }, [])

   return <Fragment>
      <Headline
        title={headline.title}
        text={headline.text}
        backgroundImgURL={headline.backgroundImgURL}
     />
      <AidCategories title={aidCategories.title} list={aidCategories.list} />
      <OfficialSources title={officialSources.title} list={officialSources.list} />
   </ Fragment>
}

export default Home;
