import PropTypes from 'prop-types';

import './Contacts.scss';

const Contacts = ({places, phones}) => {
  return (
    <section className="contacts">
      <h2 className="contacts-title">Контакти</h2>
      <hr/>
      <div className="contacts-grid">
        {places?.map(({name, address}, key) => <div key={key}>
            <h4 className="my-1 text-uppercase">{name}</h4>
            <div className="caption">{address}</div>
          </div>
        )}
      </div>

      <div className="mt-3">
        <h4 className="mb-2">Тел.</h4>
        {phones?.map((value, key) =>
          <div className='caption my-1' key={key}><a href={'tel: ' + value} key={key}> {value} </a></div>
        )}
      </div>
    </section>
  );
}

Contacts.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.string),
  places: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string
  })),
};

export default Contacts;
