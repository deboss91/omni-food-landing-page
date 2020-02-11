import React from "react";
import navLogo from "../header/Omni-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="navHead">
        <div className="navLogoDivMain">
          <div className="navLogoDiv">
            <img src={navLogo} className="navLogo" alt="imageslogo" />
          </div>
        </div>
        <div className="navUlDiv-main">
          <div className="navUlDiv-sub">
            <div className="navUlDiv flex">
              <ul>
                <a href="/">
                  <li>foods delivery</li>
                </a>
                <a href="/">
                  <li>how it works</li>
                </a>
                <a href="/">
                  <li>our cities</li>
                </a>
                <a href="/">
                  <li>signup</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
