import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="text-center mx-5">
        <h4 className="title">Let’s work together</h4>
        <h2 className="mail">
          <a href="mailto:borhan015@gmail.com">borhan015@gmail.com</a>
        </h2>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <p>
            {" "}
            &copy; <span> Borhan Uddin {year} , all rights reserved.</span>{" "}
          </p>
        </div>
        <div className="footer-social">
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
