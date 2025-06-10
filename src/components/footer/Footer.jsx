import React from "react";
import "../../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div class="footer">
      <div class="footericon">
        <div>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
      <div>
        <p className="footp">&copy; த.ஸ்டாலின் குணசேகரன். All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;