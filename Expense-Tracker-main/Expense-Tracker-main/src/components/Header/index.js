import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="header-container">
    <div className="header">
      <div className="header-logo">
        Xpensr
        <i className="fi-rr-credit-card" />.
      </div>
      <div className="header-button">
        <a
          href="https://github.com/svp12345"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-github-original colored" />
          Star
        </a>
      </div>
    </div>
  </div>
  );
}