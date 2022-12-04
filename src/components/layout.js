import * as React from "react";
import * as styles from "./layout.module.css";
import Header from "./header";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "../components/global.css";

const Layout = ({
  children,
  navTerminalTime = 0,
  navLinksTime = 0,
  footerTerminalTime = 0,
  navAnim = false,
  pagePath = "",
}) => {
  React.useEffect(() => {
    const navTerminal = document.getElementById("nav-terminal");
    const navTerminalLs = document.getElementById("nav-terminal-ls");
    const navLinks = document.getElementById("nav-links");
    const footerTerminal = document.getElementById("footer-terminal");
    setTimeout(() => {
      navTerminal.classList.add(`${styles.show}`);
      if (navAnim) {
        navTerminalLs.classList.add(`${styles.typingLs}`);
      }
    }, navTerminalTime);
    setTimeout(() => {
      navLinks.classList.add(`${styles.show}`);
    }, navLinksTime);
    setTimeout(() => {
      footerTerminal.classList.add(`${styles.show}`);
    }, footerTerminalTime);
  });

  return (
    <>
      <Header />

      <nav className={`${styles.contentWrap} ${styles.terminalCode}`}>
        <h3 id="nav-terminal" className={styles.hidden}>
          <span className={styles.terminalUsr}>guest@guest</span>:
          <span className={styles.terminalPath}>~</span>${" "}
          <span id="nav-terminal-ls">ls</span>
        </h3>
        <h3 id="nav-links" className={styles.hidden}>
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
        <h3
          id="footer-terminal"
          className={`${styles.contentWrap} ${styles.terminalCode} ${styles.hidden}`}
        >
          <span className={styles.terminalUsr}>guest@guest</span>:
          <span className={styles.terminalPath}>~{pagePath}</span>${" "}
          <span className={styles.typingInf}>&nbsp;</span>
        </h3>
      </footer>
    </>
  );
};

export default Layout;
