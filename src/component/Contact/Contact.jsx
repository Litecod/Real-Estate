import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="con-wrapper">
      <div className="paddings con-container">
        {/** Left side */}

        <div className="flexColStart con-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We're always ready to help provide the best services for you <br />{" "}
            We Beleive a good blace to live can make you better{" "}
          </span>

          <div className=" contactModes">
            {/**first row */} 
            <div className="flexStart row">
              <div className="FlexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 234 444 95</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              <div className="FlexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 234 444 95</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/**second row */}
            <div className="flexStart row">
              <div className="FlexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 234 444 95</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              <div className="FlexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 234 444 95</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/** Right side */}

        <div className="con-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
