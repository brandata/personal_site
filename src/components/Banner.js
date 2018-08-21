import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Brandon Haw.</h1>
      <h3>
        I am a software developer based out of Toronto, Ontario, with a strong
        interest in <span>Machine Learning</span> and <span>Artificial Intelligence</span>.
        On this page you'll find information about myself, my interests, and projects that I have worked on.

      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
