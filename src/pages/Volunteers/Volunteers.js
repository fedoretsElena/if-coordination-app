import { Fragment, useEffect, useState } from 'react';

import './Volunteers.scss';
import Headline from './../../components/Headline/Headline';
import AidCategoriesAccordion from './../../components/AidCategoriesAccordion/AidCategoriesAccordion';
import { API_PATH } from './../../configs/api.config';
import Breadcrumbs  from './../../components/Breadbrumbs/Breadcrumbs';

const Volunteers = () => {
  const [aidCategories, setAidCategories] = useState({});
  const [headline, setHeadline] = useState({});
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  useEffect(() => {
    const fetchData = async () => {
      const headline = await fetch(`${API_PATH}volunteers/about.json`, { headers })
        .then(response => response.json());
      const aidCategories = await fetch(`${API_PATH}volunteers/aidCategories.json`, { headers })
        .then(response => response.json());

      setHeadline(headline);
      setAidCategories(aidCategories);
    };

    fetchData();
  }, [])

  return <Fragment>
    <Headline
      title={headline.title}
      text={headline.text}
      backgroundImgURL={headline.backgroundImgURL}
    />

    <Breadcrumbs fullPath="/volunteers" />

    <AidCategoriesAccordion title={aidCategories.title} list={aidCategories.list} />
  </ Fragment>
}

export default Volunteers;
