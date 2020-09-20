import React from "react";
import web from "../src/Images/vitabalance.JPG";
import web2 from "../src/Images/healthtrader.JPG";
import web3 from "../src/Images/materialui.JPG";
import web4 from "../src/Images/angular.JPG";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <>
      <section id="header">
        <div className="my-3 text-center">
          <h1 className="brand-name">Some of my projects</h1>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <hr />
                {/* 
              Card 1 
              */}
                <div className="col-md-6 col-10 mx-auto">
                  <div class="card">
                    <a
                      href="https://www.vitabalance.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={web}
                        class="card-img-top rounded-lg border-bottom-1"
                        alt="Vita Balance"
                      />
                    </a>
                    <div class="card-body">
                      <div className="mx-3">
                        <h5 class="card-title font-weight-bold">
                          Vita Balance
                        </h5>
                      </div>
                      <p class="card-text">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            Design UI of websites as per the provided visual
                            guidelines.
                          </li>
                          <li className="list-group-item">
                            Managed complete site renovations including
                            planning, design, and check browser compatibility.
                          </li>
                        </ul>
                      </p>
                      <a
                        href="https://www.vitabalance.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-get-started resume-btn"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
                {/* 
              Card 2 
              */}
                <div className="col-md-6 col-10 mx-auto">
                  <div class="card">
                    <a
                      href="https://www.healthtrader.com/us/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={web2}
                        class="card-img-top rounded-lg border-bottom-1"
                        alt="Health Trader"
                      />
                    </a>
                    <div class="card-body">
                      <div className="mx-3">
                        <h5 class="card-title font-weight-bold">
                          Health Trader
                        </h5>
                      </div>
                      <p class="card-text">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            As a junior web designer, designed frontend,
                            affiliate admin-panel, and master admin panel.
                          </li>
                          <li className="list-group-item">
                            Designed commercial banners with different sizes for
                            affiliates.
                          </li>
                        </ul>
                      </p>
                      <a
                        href="https://www.healthtrader.com/us/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-get-started resume-btn"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
                {/* 
              Card 3 
              */}
                <div className="col-md-6 col-10 mx-auto">
                  <div class="card">
                    <a
                      href="https://github.com/Avi-patel2294/React-Form-Material-UI"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={web3}
                        class="card-img-top rounded-lg border-bottom"
                        alt="Material UI Form"
                      />
                    </a>
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold">
                        Material UI Form
                      </h5>
                      <p class="card-text">
                        Multi Step form with multiple components made using
                        react and material-ui
                      </p>
                      <a
                        href="https://github.com/Avi-patel2294/React-Form-Material-UI"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-get-started resume-btn"
                      >
                        Check out on GitHub
                      </a>
                    </div>
                  </div>
                </div>
                {/* 
              Card 4 
              */}
                <div className="col-md-6 col-10 mx-auto">
                  <div class="card">
                    <a
                      href="https://github.com/Avi-patel2294/Angular8-binding-api"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={web4}
                        class="card-img-top rounded-lg border-bottom"
                        alt="Angular-8 Binding API"
                      />
                    </a>
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold">
                        Angular-8 Binding API
                      </h5>
                      <p class="card-text">
                        My first angular project includes data & class binding,
                        along with fetching data from an API with the http
                        client.
                      </p>
                      <a
                        href="https://github.com/Avi-patel2294/Angular8-binding-api"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-get-started resume-btn"
                      >
                        Check out on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
