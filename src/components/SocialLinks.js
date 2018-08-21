import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin,
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="#">
        <FaGooglePlus />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/brandonhaw/" target="_blank">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://github.com/brandata" target="_blank">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
