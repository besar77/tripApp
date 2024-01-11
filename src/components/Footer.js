import React from "react";
import { pageLinks, socialLinks } from "../data";

export default function Footer() {
  return (
    <div>
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((p) => {
            const { id, href, text } = p; // Destructure individual element 'p'

            return (
              <li key={id}>
                <a href={href} className="footer-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="footer-icons">
          {socialLinks.map((s) => {
            const { id, href, className } = s;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon"
                >
                  <i className={className}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </div>
  );
}
