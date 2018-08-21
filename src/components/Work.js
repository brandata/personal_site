import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Siemens Canada</h3>
          <p className="info">
            Engineering Project Support
            <span>&bull;</span>
            <em className="date">March 2010 - Present</em>
          </p>

          <h5>PLM Project</h5>
          <ul>
          <li> Part of Siemens Product Lifecycle Management (PLM) Team, tasked with improving the manufacturing and engineering efficiency of Siemens through the deployment of Siemens owned PLM software</li>
          <li> Conducted site visits and interviews in various Siemens plants to map all business and engineering processes and their associated IT/software systems</li>
          <li> Identified issues present within the business/engineering processes and uncovered root causes </li>
          <li> &bull; Aligned software solutions to business requirements, targeting high </li>
          <li> Worked with solutions team to develop a deployment plan best suited for the client’s needs </li>
          <li> Generated proposals and budgets to be used for sales purposes </li>
          </ul>

          <h5>Siemens Engineering and Technology Academy</h5>
          <p>
          <span>&bull;</span> Provided project support in the creation of a new youth development program within Siemens<br/>
          <span>&bull;</span> Created project schedules, timelines, and contributed to cost estimate and budget documentation<br/>
          <span>&bull;</span> Presented the program at various schools throughout Ontario and networked with potential students<br/>
          </p>

          <h5>Engineering Enabler Project</h5>
          <p>
          <span>&bull;</span> Part of Engineering Enabler Team, tasked with realizing CEO Robert Hardt's Country Opportunity Plan aimed at capitalizing on Siemens engineering strengths to drive future growth<br/>
          <span>&bull;</span> Helped develop plan to enhance the cohesiveness of the engineering culture within Siemens to help increase the retention of current employees and better attract new employees<br/>
          <span>&bull;</span> Part of small team tasked with restructuring Siemens Canada's internal engineering career path infrastructure<br/>
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Super Cool Studio</h3>
          <p className="info">
            UX Designer
            <span>&bull;</span>
            <em className="date">March 2007 - February 2010</em>
          </p>

          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
