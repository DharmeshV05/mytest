import React from "react";
import { Link } from "react-router-dom";
import '../CSS/main-module.css';
const Home = () => {
    return (
      <>
      <React.StrictMode>
        <div className="overlay">
          <div className="row">
            <div className="container2">
              <div className="content">
                <h1>
                  CS.io <strong>Development Services</strong>
                </h1>
                <p>
                  Bring on a new era and power your team, from development to
                  marketing, by implementing the CS.io suite of enterprise
                  products. The CS.io services team can set you up for success.
                </p>
                <div type="button">
                  <Link to="/contact"
                    className="but"
                    href="../pages/Contact.js"
                    title="Contact us"
                  >
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row1">
          <div className="container">
            <div className="column">
              <h2>Mobile</h2>
              <p>
                We have over a million hours of experience building mobile apps
                that scale to millions of users. If you're looking for a team that
                delivers enterprise quality and functionality at startup speed
                across all the most popular mobile platforms, we have you covered.
              </p>
            </div>
            <div className="column">
              <h2>Internet of Things</h2>
              <p>
                Dive into IoT with us. Let’s build something together that no one
                has built before. The Internet of Things is all about software,
                connected APIs, and enterprise integrations that matter – and we
                are experts.
              </p>
            </div>
            <div className="column">
              <h2>Web</h2>
              <p>
                Implementing and managing complex enterprise web properties is our
                forte. Whether you are launching a series of microsites, upgrading
                your digital presence or overhauling your entire web
                infrastructure, we can help.
              </p>
            </div>
            <div className="button jst-ctr">
              <a
                className="but"
                href="https://www.Dome.io"
                title="Get Development Services"
              >
                GET DEVELOPMENT SERVICES
              </a>
            </div>
          </div>
        </div>
        <div className="row2 ">
          <div className="container">
            <h2>CS.io Suite Training</h2>
            <p className="para">
              The Dome.io team offers training courses on all two Dpme.io tools:
              Backend and Flow. Contact us for more information on how to turn
              your team into Dome.io experts.
            </p>
            <div type="button">
              <a className="but" href="https://www.Dome.io" title="Get Training">
                GET TRAINING
              </a>
            </div>
          </div>
        </div>
        <div className="row3 ">
          <div className="container flex jst-ctr">
            <div className="column2">
              <ul>
                <h3>Company</h3>
                <li>
                  <a className="down" title="News and Awards" href>
                    News and Awards
                  </a>
                </li>
                <li>
                  <a className="down" title="Careers" href>
                    Careers
                  </a>
                </li>
                <li>
                  <a className="down" title="Contact" href>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="column2">
              <ul>
                <h3>Products</h3>
                <li>
                  <a className="down" title="CS.io Flow" href>
                    Dome.io Flow
                  </a>
                </li>
                <li>
                  <a className="down" title="CS.io Contentstack" href>
                    Dome.io Contentstack
                  </a>
                </li>
                <li>
                  <a className="down" title="CS.io Backend" href>
                    Dome.io Backend
                  </a>
                </li>
              </ul>
            </div>
            <div className="column2">
              <ul>
                <h3>Developers</h3>
                <li>
                  <a className="down" title="CS.io Flow Docs" href>
                    Dome.io Flow Docs
                  </a>
                </li>
                <li>
                  <a className="down" title="CS.io Contentstacks Docs" href>
                    Dome.io Contentstacks Docs
                  </a>
                </li>
                <li>
                  <a className="down" title="CS.io Backend Docs" href>
                    Dome.io Backend Docs
                  </a>
                </li>
              </ul>
            </div>
            <div className="column2">
              <ul>
                <h3>Supports</h3>
                <li>
                  <a className="down" title="CS.io Backend Support" href>
                    Dome.io Backend Support
                  </a>
                </li>
                <li>
                  <a className="down" title="CS.io Flow Support" href>
                    Dome.io Flow Support
                  </a>
                </li>
                <li>
                  <a className="down" title="CS.io Status" href>
                    Dome.io Status
                  </a>
                </li>
              </ul>
            </div>
            <div className="column2">
              <ul>
                <h3>Social</h3>
                <a href="https://www.linkedin.com/in/dharmesh-vishwakarma-937aa723b/">
                  <i
                    className="fa fa-linkedin"
                    style={{ fontSize: "22px", color: "#0077B5" }}
                    title="linkedin"
                  />
                </a>
                <a href="https://www.facebook.com/">
                  <i
                    className="fa fa-facebook-official"
                    style={{ fontSize: "22px", color: "#3B5998" }}
                    title="facebook"
                  />
                </a>
                <a href="https://twitter.com/home">
                  <i
                    className="fa fa-twitter"
                    style={{ fontSize: "22px", color: "#1DA1F2" }}
                    title="twitter"
                  />
                </a>
                <a href="https://github.com/DharmeshV05">
                  <i
                    className="fa fa-github-alt"
                    style={{ fontSize: "22px", color: "black" }}
                    title="github-alt"
                  />
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <p>
              <small>
                Get in touch with our sales team at{" "}
                <a title="sales@Dome.io" href>
                  sales@Dome.io
                </a>
                . For any other assistance, contact us at{" "}
                <a title="support-flow@Dome.io" href>
                  support-flow@Dome.io
                </a>
              </small>
            </p>
          </div>
        </div>
        <div className="footer2">
          <div className="container flex jst-spac-btw">
            <ul>
              <li>
                <a title="Terms of Service" href>
                  Terms of Service
                </a>
              </li>
              <li>
                <a title="Privacy Policy" href>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a title="Cookie Policy" href>
                  Cookie Policy
                </a>
              </li>
            </ul>
            <footer style={{ color: "gray", float: "right" }}>
                Copyright © 2022-2023 CS.io. All Rights Reserved.
              </footer>
          </div>
        </div>
      
      </React.StrictMode>
      </>
    );
  }


export default Home;
