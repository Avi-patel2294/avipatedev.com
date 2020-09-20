import React from "react";
import web from "../src/Images/work.jpg";
import { NavLink } from "react-router-dom";

const Experience = () => {
  return (
    <>
      <section id="header" className="">
        <div className="text-center">
          <h1 className="brand-name">Where I've worked</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <hr />
              <div className="row text-center">
                <div className="col-md-6 pt-lg-0 order-2 d-flex text-left flex-column">
                  <div className="card">
                    <div className="card-body">
                      <div className="mx-3">
                        <h4 className="font-weight-bold text-center">
                          Freelance Web Designer/Developer: <br /> 2017 -
                          Current
                        </h4>
                      </div>

                      <ul className="list-group list-group-flush mt-2">
                        <li className="list-group-item">
                          Developed an E-commerce website for Marvel Pizza
                          (London, Ontario).
                        </li>
                        <li className="list-group-item">
                          Created a variety of business/individual logos and
                          graphic templates for clients on 99designs and
                          upwork.com.
                        </li>
                        <li className="list-group-item">
                          Creating custom plugins and child themes for WordPress
                          using HTML,CSS, JavaScript, and PHP.
                        </li>
                        <li className="list-group-item">
                          Developing print media graphics for restaurants.
                        </li>
                        <li className="list-group-item">
                          Creating a variety of logos and banners for
                          businesses.
                        </li>
                        <li className="list-group-item">
                          Develop UI in different tools like Adobe XD, Adobe
                          Photoshop, .Net, Magento, and a few more.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pb-3 pt-lg-0 order-2 d-flex text-left flex-column">
                  <div className="card">
                    <div className="card-body">
                      <div className="mx-3">
                        <h4 className="font-weight-bold text-center">
                          Web Designer at Trois InfoTech: <br /> April 2014 -
                          May 2015
                        </h4>
                      </div>

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Maintained and enhanced existing web applications
                          using ASP.NET, MVC 4, Web API.
                        </li>
                        <li className="list-group-item">
                          Website design and development using HTML, CSS, and
                          implemented in visual studio.
                        </li>
                        <li className="list-group-item">
                          Created graphics and banners for social media
                          promotional pages.
                        </li>
                        <li className="list-group-item">
                          Designed and invoked the reports for Web Application
                          using Crystal Reports and SSRS (SQL Server Reporting
                          Services).
                        </li>
                        <li className="list-group-item">
                          Extensively used ASP.NET, Validation Controls and
                          JavaScript for client-side validations in the Web
                          Pages.
                        </li>
                      </ul>
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

export default Experience;
