import React from "react";
import web from "../src/Images/pic.png";
import { NavLink } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-7 pt-2 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Howdy, I am
                    <br />
                    <strong className="brand-name">
                      Avikumar Patel (Avi).
                    </strong>
                  </h1>
                  <h2 className="my-3">
                    I LOVE TO CREATE WEBSITES AND WEB GRAPHICS.
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/contact" className="btn-get-started">
                      Get In Touch
                    </NavLink>
                  </div>
                  <div className="mt-2">
                    <IconButton
                      href="https://github.com/Avi-patel2294"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon fontSize="large" color="primary" />
                    </IconButton>
                    <IconButton
                      href="https://www.linkedin.com/in/avi-patel2294/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon fontSize="large" color="primary" />
                    </IconButton>
                    <IconButton
                      href="https://www.facebook.com/avi.patel.35"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FacebookIcon fontSize="large" color="primary" />
                    </IconButton>
                    <IconButton
                      href="https://www.instagram.com/avipatel_mufc/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon fontSize="large" color="primary" />
                    </IconButton>
                  </div>
                </div>

                <div className="col-lg-5 col-5 order-1 order-lg-2">
                  <img src={web} className="img-fluid" alt="home img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="col-md-10 mx-auto d-none d-lg-block">
        <footer className="text-center">
          <p>
            Made with <FavoriteIcon /> & Passion | Avikumar Patel &copy; 2020
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
