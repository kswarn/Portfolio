import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AttachmentIcon from "@material-ui/icons/Attachment";

function Socials() {
  return (
    <div className="socials">
      <ul>
        <li>
          <a className="socials-link" href="https://github.com/kswarn">
            <GitHubIcon />
          </a>
          <p>Github </p>
        </li>
        <li>
          <a
            className="socials-link"
            href="https://www.linkedin.com/in/swarna-kadagadkai-ba79a3175/"
          >
            <LinkedInIcon />
          </a>
          <p>LinkedIn </p>
        </li>
        <li>
          <a
            className="socials-link"
            href="https://drive.google.com/file/d/19b6pK03l4ey_gLGJAyZgwBfeVkN314hm/view?usp=sharing"
          >
            <AttachmentIcon />
          </a>
          <p>Resume </p>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
