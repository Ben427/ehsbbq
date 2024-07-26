import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import logo from "../img/home_town_smoke_logo.png";
import cartIcon from "../img/cart-shopping.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item navBar-logo" title="Logo">
              <img src={logo} alt="Auke Bay Pizza Company Logo" style={{ width: "120px", height: "auto", maxHeight: "500px"}} />
            </Link>
            <div className="mobile-order-button-container">
              <Link to="https://order.toasttab.com/online/hometown-smoke-and-bbq" className="mobile-order-button"><button><img src={cartIcon} style={{ width: "20px", height: "20px"}} />&nbsp;&nbsp;Order now</button></Link>

            </div>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-container">
              <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="https://edmondsbbq.com/img/edmondsbbq_menu.pdf" target="_blank" rel="noopener noreferrer">
                Menu
              </Link>
              <Link className="navbar-item" to="#location">
                Location
              </Link>
              <a className="navbar-item" href=" https://order.toasttab.com/online/auke-bay-pizza-co-11735-glacier-highway" target="_blank">
              Order now
              </a>
              </div>
              {/*<Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>*/}
              
              <p className="navbar-item">
                <p className="footer-social"> <a title="facebook" href="https://www.facebook.com/edmondsbbq" target="_blank">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "2em", height: "2em" }}
                    className="social-facebook"
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/edmondsbbq/" target="_blank">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "2em", height: "2em" }}
                  />
                </a>
                </p>
              </p>
            </div>
            {/*<div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>*/}
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
