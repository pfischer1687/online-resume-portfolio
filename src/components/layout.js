import * as React from "react";
import * as styles from "./layout.module.css";
import Header from "./header";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Layout = ({
  children,
  navTerminalTime = 0,
  currTerminalTime = 0,
  navAnim = false,
}) => {
  React.useEffect(() => {
    const navTerminal = document.getElementById("nav-terminal");
    const navTerminalLs = document.getElementById("nav-terminal-ls");
    const navLinks = document.getElementById("nav-links");
    const currTerminal = document.getElementById("curr-terminal");
    setTimeout(() => {
      navTerminal.classList.add(`${styles.show}`);
      if (navAnim) {
        navTerminalLs.classList.add(`${styles.typing}`);
      }
    }, navTerminalTime);
    setTimeout(() => {
      navLinks.classList.add(`${styles.show}`);
      currTerminal.classList.add(`${styles.show}`);
    }, currTerminalTime);
  });

  return (
    <>
      <Header />
      {/* <nav className={`${styles.contentWrap} ${styles.terminalCode}`}>
        <h3>
          <span className={styles.terminalUsr}>guest@guest</span>:
          <span className={styles.terminalPath}>~</span>$ <span>ls</span>
        </h3>
        <h3>
          <Link to="/about">about</Link> <a href="#projects">projects</a>{" "}
          <a className={styles.educationLink} href="#education">
            edu
          </a>{" "}
          <a className={styles.experienceLink} href="#experience">
            exp
          </a>
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
      </nav> */}
      <nav className={`${styles.contentWrap} ${styles.terminalCode}`}>
        <h3 id="nav-terminal" className={styles.hidden}>
          <span className={styles.terminalUsr}>guest@guest</span>:
          <span className={styles.terminalPath}>~</span>${" "}
          <span id="nav-terminal-ls">ls</span>
        </h3>
        <h3 id="nav-links" className={styles.hidden}>
          <Link to="/about">about</Link> <a href="#projects">projects</a>{" "}
          <a className={styles.educationLink} href="#education">
            edu
          </a>{" "}
          <a className={styles.experienceLink} href="#experience">
            exp
          </a>
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
      <h3
        id="curr-terminal"
        className={`${styles.contentWrap} ${styles.terminalCode} ${styles.hidden}`}
      >
        <span className={styles.terminalUsr}>guest@guest</span>:
        <span className={styles.terminalPath}>~</span>${" "}
        <span className={styles.typingInf}>&nbsp;</span>
      </h3>
      {/* <!-- *****************  CONTACT INFO / SOCIAL MEDIA  ***************** --> */}
      {/* <div className={`${styles.contentWrap} ${styles.terminalCode}`}>
        <h3 id="contact">
          <span className={styles.terminalUsr}>guest@guest</span>:
          <span className={styles.terminalPath}>~/experience</span>$ cd
          ~/contact
        </h3>
        <h3>
          <span className={styles.terminalUsr}>guest@guest</span>:
          <span className={styles.terminalPath}>~/contact</span>$ cat
          contact.txt
        </h3>
      </div>
      <footer className={`${styles.textFile} ${styles.contentWrap}`}>
        <h2>Let's Keep in Touch!</h2> */}

      {/* <!-- Social media and contact links. Add or remove any networks. --> */}
      {/* <ul className={styles.contactList}>
          <li>
            <a
              href="https://github.com/pfischer1687"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:paulfischerdev@gmail.com">
              paulfischerdev@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/paul-fischer-816042127/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </footer> */}
    </>
  );
};

export default Layout;
