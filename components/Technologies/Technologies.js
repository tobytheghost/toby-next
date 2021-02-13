import React, { useState, useEffect } from "react";
import { Card } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas);
library.add(fab);

function Technologies() {
  return (
    <section className="section technologies section--background-grey">
      <article className="section__container">
        <h2 className="section__title technologies__title">My Skills</h2>

        <div className="section__cards section__cards--full">
          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "php"]}
                style={{ color: "#f48fb1", fontSize: "4rem" }}
              />
            </div>
            <h3 className="skill__title">PHP</h3>
          </Card>

          <Card className="skill align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "js-square"]}
                style={{ color: "#ff9800", fontSize: "4rem" }}
              />
            </div>
            <h3 className="skill__title">Javascript</h3>
          </Card>

          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "wordpress"]}
                style={{ color: "#2196f3", fontSize: "4rem" }}
              />
            </div>
            <h3 className="skill__title">WordPress</h3>
          </Card>

          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "sass"]}
                style={{ color: "#f48fb1", fontSize: "4rem" }}
              />
            </div>
            <h3 className="skill__title">Sass (Scss)</h3>
          </Card>

          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "html5"]}
                style={{ color: "#ff9800", fontSize: "4rem" }}
              />
            </div>
            <h3 className="skill__title">HTML5</h3>
          </Card>

          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "react"]}
                style={{ color: "#2196f3", fontSize: "4rem" }}
              />
            </div>
            <h3 className="skill__title">React</h3>
          </Card>

          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "git-alt"]}
                style={{ color: "#f44336", fontSize: "4rem" }}
              />
            </div>
            <h3 className="skill__title">Git</h3>
          </Card>

          <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "docker"]}
                style={{ color: "#2196f3", fontSize: "4rem" }}
              />
            </div>
            <h3 className="skill__title">Docker</h3>
          </Card>

          {/* <Card className="align-center">
            <div className="section__icons">
              <FontAwesomeIcon
                icon={["fab", "node-js"]}
                style={{ color: "#4caf50", fontSize: "4rem" }}
              />
            </div>
            <h3 className="skill__title">Node.js</h3>
          </Card> */}
        </div>
      </article>
    </section>
  );
}

export default Technologies;
