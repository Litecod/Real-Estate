import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading, 
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from '../../utils/accordion'
import "./Value.css";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/*left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.jpg" alt="value" />
          </div>
        </div>

        {/*right side */}

        <div className="flexColStart v-right">
            <span className="orangeText">Our Value</span>
            <span className="primaryText">Value We Give To You</span>
            <span className="secondaryText">We're always ready to help provide the best services for you 
                <br />
                We Beleive a good blace to live can make you better
            </span>

            <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
                {
                    data.map((item, i) => {
                        const [className, setClassName] = React.useState(null)

                        return (
                            <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenter accordionButton">

                                        <AccordionItemState>
                                            {({expanded}) => expanded ? setClassName('expanded') : setClassName('collapsed')}
                                        </AccordionItemState>

                                        <div className="flexCenter">{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })    
                }
            </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
