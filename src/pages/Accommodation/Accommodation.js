import { useEffect, useState } from 'react';
import { MdPhone, MdLocationPin, MdOutlineLanguage } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';

import './Accommodation.scss';
import { API_PATH } from './../../configs/api.config';

const Accommodation = () => {
  const [data, setData] = useState({title: 'Розміщення та тимчасові прихистки', shelters: []});

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    fetch(`${API_PATH}accommodation/data.json`, { headers })
      .then(response => response.json())
      .then(setData);
    }, [])

    return <section className="accommodation">
      <div className="container-md m-auto">
        <h2 className="accommodation__title mb-4 pb-1">{data.title}</h2>

        {data.shelters.map(({name, description, phones, site, address, socialLink}) => (
          <div className="shelter shadow-box" key={name}>
            <h3 className="shelter__name pr-5">{name}</h3>
            <hr className="my-3"/>
            <pre>{description}</pre>

            {phones?.length && <div className="shelter__phones shelter__grid mt-3">
                <MdPhone className="shelter__icon"/>
                <div>
                  {phones.map(phone => <a className="link mb-1 d-block" href={'tel: ' + phone} key={phone}>{phone}</a>)}
                </div>
              </div>
            }

            {address && <div className="shelter__address shelter__grid align-items-center mt-3">
                <MdLocationPin className="shelter__icon" />
                {address}
              </div>
            }

            {site && <div className="shelter__site shelter__grid align-items-center mt-3">
              <MdOutlineLanguage className="shelter__icon" />
              <a className="link d-block" href={site} target="_blank">{site}</a>
            </div>
            }

            {socialLink && <div className="shelter__social shelter__grid align-items-center mt-3">
              <FaFacebookF className="shelter__icon" />
              <a className="link d-block" href={socialLink} target="_blank">{socialLink}</a>
            </div>
            }
          </div>
        ))}
      </div>
  </section>
}

export default Accommodation;
