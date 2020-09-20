import React from "react";
import web from "../src/Images/work.jpg";
import { NavLink } from "react-router-dom";
import Time from "./Time";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

const About = () => {
  return (
    <>
      <section id="header" className="">
        <div className="text-center">
          <h1 className="brand-name">A little bit about me</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <hr />
              <div className="row">
                <div className="col-md-6 order-2 d-flex justify-content-center flex-column">
                  <h2 className="my-3">
                    I LOVE TO CREATE WEBSITES AND WEB GRAPHICS.
                  </h2>
                  <div className="mt-3">
                    <p className="about-me">
                      Hi, I am a Web Designer and Developer living in Surrey,
                      British Columbia. I have a degree in Internet Application
                      and Web Development from Fanshawe College. I enjoy
                      spending my free time watching soccer, playing video
                      games, or traveling to new places...
                      <br />
                      <br />
                      To begin with, Throughout my Freelancing, 1-year Web
                      designer experience, and education, I have developed a
                      range of websites from static single page websites to
                      e-commerce websites using the HTML, CSS, PHP, C#, latest
                      JavaScript libraries (Angular, React, and a few more),
                      WordPress and .NET framework.
                      <br />
                      <br />
                      In addition to my Web Development skills, I also possess a
                      great eye and experience for graphic design. I have
                      developed a wide range of print media and web-based
                      graphics. Some of which include website UI design, logos,
                      digital menus, and banners. I can work on the web and
                      print-based projects for a range of clients providing Web
                      Design, Development, E-commerce Solutions, Corporate
                      Branding, and Graphic Design.
                      <br />
                      <br />I am always available to discuss your project in
                      person, over the phone, or via Email/Skype/Zoom.
                      <br />
                      P.S. You can view my resume by hitting the button below.
                    </p>
                    <hr />
                  </div>
                  <div className="resume text-center mb-2">
                    <a
                      href="https://drive.google.com/file/d/1mnxDudg6QkFw9RNrwDKRL69teQM_XUyW/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn-get-started resume-btn"
                    >
                      Resume
                    </a>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-lg-2">
                  <h2 className="my-3 text-center">Education</h2>
                  <Time />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
