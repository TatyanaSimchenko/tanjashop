import React from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import logo from "../assets/images/Logo-2.png";

const footerAboutLinks = [
  {
    display: "About us",
    path: "/about",
  },
  {
    display: "Contacts",
    path: "/about",
  },
  {
    display: "Recruit",
    path: "/about",
  },
  {
    display: "News",
    path: "/about",
  },
  {
    display: "Stores",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Return policy",
    path: "/about",
  },
  {
    display: "Guarantee policy",
    path: "/about",
  },
  {
    display: "Refund policy",
    path: "/about",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Call center support</div>
            <div className="footer__content">
              <p>
                Contact us to order <strong>0123456789</strong>
              </p>
              <p>
                Problems with the order <strong>0123456789</strong>
              </p>
              <p>
                Comments, complains <strong>0123456789</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">About YoLo</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Customer service</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="logo" />
              </Link>
            </p>
            <p>
              The goal is to give millions of consumers the joy of dressing in a
              new way every day. Let's accompany Yolo to have a more active and
              positive life.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
