import { Fragment, useEffect, useState } from 'react';

import './Resettlers.scss';
import Headline from './../../components/Headline/Headline';
import AidCategoriesAccordion from './../../components/AidCategoriesAccordion/AidCategoriesAccordion';
import { API_PATH } from './../../configs/api.config';
import Breadcrumbs  from './../../components/Breadbrumbs/Breadcrumbs';

const Resettlers = () => {
  const [aidCategories, setAidCategories] = useState({});
  const [headline, setHeadline] = useState({});

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    Promise.allSettled([
      fetch(`${API_PATH}resettlers/about.json`, { headers }).then(response => response.json()),
      fetch(`${API_PATH}resettlers/aidCategories.json`, { headers }).then(response => response.json()),
    ]).then(res => {
      const results = res.map(({value}) => value);
      [setHeadline, setAidCategories].forEach((func, index) => func(results[index]));
    });
  }, [])

  return <Fragment>
    <Headline
      size='sm'
      title={headline.title}
      text={headline.text}
      backgroundImgURL={headline.backgroundImgURL}
    />

    <Breadcrumbs fullPath="/resettlers"/>

    <AidCategoriesAccordion title={aidCategories.title} list={aidCategories.list} />
  </ Fragment>
}

export default Resettlers;
