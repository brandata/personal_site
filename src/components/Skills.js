import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand photoshop" />
            <em>Python</em>
          </li>
          <li>
            <span className="bar-expand illustrator" />
            <em>R</em>
          </li>
          <li>
            <span className="bar-expand wordpress" />
            <em>JS/NodeJS</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>CSS</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>C/C++</em>
          </li>
          <li>
            <span className="bar-expand nodejs" />
            <em>Java</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
