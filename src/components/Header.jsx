import React from "react";
import Profile from "./images/profile.jpeg";

function Header() {
  return (
    <div>
      <img src={Profile} alt="Profile" />
      <h2>Swarna Kadagadkai</h2>
      <h4>
        I am an Information Science graduate from JSS Academy of Technical
        Education, Bengaluru.
      </h4>
    </div>
  );
}

export default Header;
