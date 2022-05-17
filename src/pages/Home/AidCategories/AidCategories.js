import PropTypes from 'prop-types';

import './AidCategories.scss';
import AidCategory from './../AidCategory/AidCategory';

const AidCategories = ({list, title = 'Категорії допомоги'}) => (
  <section className="aid-categories">
    <h2 className="mt-3 mb-4">{title}</h2>

    <div className="aid-categories__grid">
      {list?.map((category, i) =>
        <AidCategory category={category} key={i} />)}
    </div>

  </section>
);

AidCategories.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

export default AidCategories;
