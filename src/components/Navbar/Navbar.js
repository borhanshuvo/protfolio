import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import resume from "../../resume/Borhan_Uddin_Resume.pdf";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg pt-4 navbar-dark fixed-top" style={{ backgroundColor: "#1f2028" }}>
        <div className="container-fluid">
          <div classNameName="ms-auto">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-style">
              <li className="nav-item pe-4">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/home"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item pe-4">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item pe-4">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/project"
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item pe-4">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/blog"
                >
                  BLOGS
                </Link>
              </li>
              <li className="nav-item pe-4">
                <Link
                  className="nav-link text-white"
                  aria-current="page"
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
              <li className="nav-item pe-4">
                <Link
                  className="nav-link text-white"
                  ria-current="page"
                  to={`${resume}`}
                  target="_blank"
                  download
                >
                  <FontAwesomeIcon icon={faDownload} /> RESUME
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
