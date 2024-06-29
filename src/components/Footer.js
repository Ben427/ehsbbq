import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/home_town_smoke_logo.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer" style={{borderTop:"4px solid #CE892D"}}>
        <div className="content has-text-centered columns" style={{alignItems: "center"}}>
          
          <div className="column is-12 columns has-text-left footer-mods" style={{}}>
            <img
                src={logo}
                alt="Auke Bay Pizza Company"
                style={{ maxWidth: "250px", height: "auto",backgroundColor:"#ffffff", margin: "0px 40px"  }}
              />
            <p className="footer-address" style={{}}><strong>Address</strong><br/><a href="https://maps.app.goo.gl/RmgaoWJMpE9SMiqJA">550 5th Ave S - Edmonds, WA 98020</a></p>
            <p className="footer-phone" style={{}}><strong>Phone</strong><br/> 425-640-2313</p>
            {/*<p className="footer-social"><strong>Social</strong><br/><a href="https://www.facebook.com/aukebaypizzaco">Follow us on Facebook</a></p>*/}
            <p className="footer-social"> <a title="facebook" href="#" target="_blank">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "2em", height: "2em" }}
                    className="social-facebook"
                  />
                </a>
                <a title="instagram" href="#" target="_blank">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "2em", height: "2em" }}
                  />
                </a>
                </p>
                {/*<a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>*/}
              </div>
            </div>
        <div className="content has-text-centered  has-text-white-ter">
          <div className="container  has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              {/*<div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>*/}
              
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
