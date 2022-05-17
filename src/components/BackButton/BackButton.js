import { Fragment, useEffect, useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';

import './BackButton.scss';

const BackButton = () => {
  const goToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <Fragment>
      { showTopBtn && (
        <button className="back-button" onClick={goToTop}>
          <MdArrowUpward />
        </button>
      )}
    </Fragment>
  )
};

export default BackButton;
