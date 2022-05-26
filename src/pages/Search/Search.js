import { MdArrowBack, MdCancel, MdPermIdentity, MdSearch } from 'react-icons/md';
import { Link } from "react-router-dom";
import { useState } from "react";

import './Search.scss';
import { LoadingSpinner } from './../../components';

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const resetQuery = () => {
    setQuery('');
    setResults([]);
  }

  const fetchItems = (value = query) => {
    setIsLoading(true);

    if (!value?.length) {
      setIsLoading(false);
      setResults([]);
      return;
    }

    fetch(`/search?q=${value}`,)
      .then((res) => res.json())
      .then(
        (result) => {
          setResults(result);
          setIsLoading(false);
        },
        () => {
          setTimeout(() => setIsLoading(false), 1000);
          setResults([{
            title: 'Мапа Бомбосховищ',
            link: '/'
          }, {
            title: 'Цікаве у місті',
            description: 'Бомбосховища, різні види курсів, можливості працевлаштування, туристичні аттракції.',
            link: '/'
          }]);
        }
      );
  };

  return <div className="search pb-5 mb-5">
    <div className="search-header d-flex">
      <Link to='/'><MdArrowBack className="search-header__icon-back"/></Link>

      <h3 className="m-auto">Пошук</h3>
    </div>

    <div className="search-input container-md m-auto my-3">
      <MdSearch className="search-input__icon search-input__search-icon mr-2"/>
      <input
        value={query}
        className="search-input__el"
        placeholder="Почніть вводити..."
        onChange={(e) => {
          setQuery(e.target.value);
          fetchItems(e.target.value);
        }}
      />
      {!!query.length && <MdCancel className="search-input__icon search-input__cancel-icon" onClick={resetQuery}/>}
    </div>

    {isLoading && <LoadingSpinner className="my-4"/>}

    {!results?.length && !isLoading && <section className="search-no-results container-md m-auto">
      <div className="search-no-results__icon-circle m-auto mt-5 mb-4">
        <MdPermIdentity className="search-no-results__icon"/>
      </div>

      <div className="search-no-results__text px-2">
        Введіть потрібні ключові слова та почніть пошук серед наших ресурсів
      </div>
    </section>}

    {!!results?.length && !isLoading && <section className="search-results container-md m-auto my-3">
      <h3 className="search-results__title">Результати пошуку</h3>

      <ul>
        {results.map((item) => <li>
          <Link className="search-results-item my-3" to={item.link} key={item.title}>
            <h4>{item.title}</h4>
            {item.description && <div className="mt-1">{item.description}</div>}
          </Link>
        </li> )}
      </ul>
    </section>}
  </div>
}

export default Search;
