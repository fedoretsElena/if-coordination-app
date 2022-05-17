import { Fragment, useEffect, useState } from 'react';

import './CityLeisure.scss';
import Headline from './../../components/Headline/Headline';
import AidCategoriesAccordion from './../../components/AidCategoriesAccordion/AidCategoriesAccordion';
import { API_PATH } from './../../api-config';

const CityLeisure = () => {
  const [aidCategories, setAidCategories] = useState({});
  const [headline, setHeadline] = useState({});

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    Promise.allSettled([
      fetch(`${API_PATH}city-leisure/about.json`, { headers }).then(response => response.json()),
      fetch(`${API_PATH}city-leisure/aidCategories.json`, { headers }).then(response => response.json()),
    ]).then(res => {
      const results = res.map(({value}) => value);
      [setHeadline, setAidCategories].forEach((func, index) => func(results[index]));
    });
  }, [])

  return <Fragment>
    <Headline
      title={headline.title}
      text={headline.text}
      backgroundImgURL={headline.backgroundImgURL}
    />

    <AidCategoriesAccordion title={aidCategories.title} list={aidCategories.list} />
  </ Fragment>
}

export default CityLeisure;
