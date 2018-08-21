import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaLinkedin
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
      <a href="https://www.google.ca" target="_blank">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="#">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
