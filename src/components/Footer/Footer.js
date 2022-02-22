import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="text-center mail-div display-sm-none" data-aos="zoom-in" data-aos-duration="3000">
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
      <div>
        <p className="fs-16 text-center">
          <span>
            Copyright &copy; {year} Borhan Uddin, All Rights Reserved.
          </span>
        </p>
        <div className="footer-social d-flex justify-content-center">
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
