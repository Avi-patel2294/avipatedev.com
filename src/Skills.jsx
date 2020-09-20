import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdobe,
  faAndroid,
  faApple,
  faGit,
  faGulp,
  faHtml5,
  faJava,
  faJsfiddle,
  faLinux,
  faMagento,
  faNpm,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";

import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    <>
      <section id="header">
        <div className="text-center">
          <h1 className="brand-name">Here's a few of my favourites.</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <hr />
              <div className="row text-center gy-4">
                <div className="col-md-10 col-12 table-responsive-md mx-auto">
                  <table class="table">
                    {/* <thead>
                      <tr>
                        <th scope="col">Front-End</th>
                        <th scope="col">Back-End</th>
                        <th scope="col">CMS</th>
                        <th scope="col">OS</th>
                      </tr>
                    </thead> */}
                    <tbody>
                      <tr>
                        <td>
                          <a
                            href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faHtml5} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://reactjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faReact} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://nodejs.org/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faNode} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.php.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faPhp} size="3x" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://angularjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faAngular} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://vuejs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faVuejs} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://wordpress.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faWordpress} size="3x" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://www.w3schools.com/js/js_es6.asp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faJs} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.java.com/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faJava} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://sass-lang.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faSass} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.adobe.com/ca/creativecloud.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faAdobe} size="3x" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://magento.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faMagento} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.npmjs.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faNpm} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://git-scm.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faGit} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.mongodb.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faDatabase} size="3x" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a
                            href="https://gulpjs.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faGulp} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.linux.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faLinux} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.apple.com/ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faApple} size="3x" />
                          </a>
                        </td>
                        <td>
                          <a
                            href="https://www.android.com/intl/en_ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lang"
                          >
                            <FontAwesomeIcon icon={faAndroid} size="3x" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
