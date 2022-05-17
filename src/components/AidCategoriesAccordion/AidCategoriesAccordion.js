import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './AidCategoriesAccordion.scss';

const AidCategoriesAccordion = ({list, title = 'Категорії допомоги'}) => (
  <section className="aid-categories">
    <h2 className="my-3">{title}</h2>

    <Accordion className="accordion shadow-box" preExpanded={[0]}>
      {list?.map((category, key) =>
        <AccordionItem key={key} uuid={key}>
          <AccordionItemHeading>
            <AccordionItemButton>
              {category.title}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {category.text && <pre>
                {category.text}
              </pre>
            }
            {category.link && <a className="d-block m-auto button details-button mt-3" href={category.link} target="_blank">Детальніше</a>}
          </AccordionItemPanel>
      </AccordionItem>
    )}
    </Accordion>
  </section>
);

AidCategoriesAccordion.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string || undefined,
  })),
};

export default AidCategoriesAccordion;
