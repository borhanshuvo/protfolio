import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="text-center mail-div">
        <h4 className="mail-title">Let’s work together</h4>
        <h2 className="mail">
          <a
            href="mailto:borhan015@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="fs-60"
          >
            borhan015@gmail.com
          </a>
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6 order-1 order-md-0">
          <p>
            <span className="fs-20">
              Copyright &copy; {year}, Borhan Uddin, All Rights Reserved.
            </span>
          </p>
        </div>
        <div className="col-md-6 footer-social order-0 order-md-1 d-md-flex justify-content-end">
          <ul className="social">
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="facebook"
                href="https://web.facebook.com/borhan814/"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="gmail"
                href="mailto:borhan015@gmail.com"
              >
                Gmail
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="linkedin"
                href="https://www.linkedin.com/in/borhan-uddin-015/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="github"
                href="https://github.com/borhanshuvo"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
