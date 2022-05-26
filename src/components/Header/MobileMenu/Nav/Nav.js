import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

import './Nav.scss';

const Nav = ({nav, closeMenu}) => {
  return (
    <nav className="top-nav">

      <Accordion className="top-nav__main my-3" allowZeroExpanded={true}>
        {nav?.map((item) => {
          return <Fragment>
            {!item.sublinks && <Link className="d-block top-nav__item" to={item.value} onClick={closeMenu}>{item.name}</Link>}
            {item.sublinks &&
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className="top-nav__item d-flex align-items-center justify-content-between">
                    <span className="mr-4">{item.name}</span>
                    <MdKeyboardArrowDown />
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="top-nav__sublist-container">
                  <ul className="top-nav__sublist">
                    {item.sublinks?.map((item, index) => <li className={"top-nav__subitem"} key={item.name + '_' + index}>
                        <Link to={item.value} onClick={closeMenu}>
                          {item.name}
                        </Link>
                      </li>
                    )}
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>
            }
          </Fragment>
        })}
      </Accordion>
      <Link className="d-block mt-4 top-nav__item" to={'/'}>Про нас</Link>
      <Link className="d-block top-nav__item" to={'/'}>Мапа прихистків</Link>
    </nav>
  );
}

export default Nav;
