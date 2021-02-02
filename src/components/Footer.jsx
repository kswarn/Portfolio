import React from "react";
import EmailIcon from "@material-ui/icons/Email";

function Footer() {
  return (
    <footer>
      <p>Contact me:</p>
      <a className="socials-link" href="mailto:swarnakadagadkai1@gmail.com">
        <EmailIcon className="icon" />
      </a>
    </footer>
  );
}

export default Footer;
