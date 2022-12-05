import * as React from "react";
import * as styles from "./layout.module.css";
import Header from "./header";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "./global.css";

const Layout = ({
  children,
  footerTerminalTime = 7000,
  navAnim = false,
  pagePath = "",
}) => {
  React.useEffect(() => {
    // Nav menu typing animation
    if (navAnim) {
      const navTerminalTime = 1000;
      const navLinksTime = 4000;

      const navTerminal = document.getElementById("nav-terminal");
      const navTerminalLs = document.getElementById("nav-terminal-ls");
      const navLinks = document.getElementById("nav-links");

      setTimeout(() => {
        navTerminal.classList.add("show");
        if (navAnim) {
          navTerminalLs.classList.add("typing");
        }
      }, navTerminalTime);
      setTimeout(() => {
        navLinks.classList.add("show");
      }, navLinksTime);
    }

    // footer typing animation
    const footerTerminal = document.getElementById("footer-terminal");
    setTimeout(() => {
      footerTerminal.classList.add("show");
    }, footerTerminalTime);
  });

  return (
    <>
      <Header />

      <nav className="content-wrap terminal-code">
        <h3 id="nav-terminal" className={navAnim ? "hidden" : null}>
          <span className="terminal-usr">guest@guest</span>:
          <span className="terminal-path">~</span>${" "}
          <span id="nav-terminal-ls" className={styles.typingLs}>
            ls
          </span>
        </h3>
        <h3 id="nav-links" className={navAnim ? "hidden" : null}>
          <Link to="/about">about</Link> <Link to="/projects">projects</Link>{" "}
          <Link className={styles.educationLink} to="/education">
            edu
          </Link>{" "}
          <Link className={styles.experienceLink} to="/experience">
            exp
          </Link>{" "}
          <Link to="/404">404</Link>
          <div className={styles.contactLinks}>
            <a
              href="https://github.com/pfischer1687"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <StaticImage
                  src="../images/github-logo.png"
                  alt="GitHub logo"
                />
              </div>
              <div>GitHub</div>
            </a>
            <a
              href="https://www.linkedin.com/in/paul-fischer-816042127"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <StaticImage
                  src="../images/linkedin-logo.png"
                  alt="LinkedIn logo"
                />
              </div>
              <div>LinkedIn</div>
            </a>
            <a
              href="https://twitter.com/PaulFis43236408"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <StaticImage
                  src="../images/twitter-logo.png"
                  alt="Twitter logo"
                />
              </div>
              <div>Twitter</div>
            </a>
            <a
              href="mailto:paulfischerdev@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <StaticImage
                  src="../images/gmail-logo.png"
                  alt="Gmail logo"
                  style={{ filter: "invert(100%)" }}
                />
              </div>
              <div className={styles.gmailName}></div>
            </a>
          </div>
        </h3>
      </nav>

      <main>{children}</main>

      <footer>
        <h3 id="footer-terminal" className="content-wrap terminal-code hidden">
          <span className="terminal-usr">guest@guest</span>:
          <span className="terminal-path">~{pagePath}</span>$
          <span className={`typing ${styles.typingFooter}`}>&nbsp;</span>
        </h3>
      </footer>
    </>
  );
};

export default Layout;
