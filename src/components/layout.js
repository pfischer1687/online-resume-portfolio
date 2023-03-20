import * as React from "react";
import * as styles from "./layout.module.css";
import Header from "./header";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "./global.css";

const Layout = ({ is404 = false, children }) => {
  const [isNavVisible, setIsNavVisible] = React.useState(false);

  React.useEffect(() => {
    let navMenuDelay = 1000;
    if (is404) navMenuDelay = 0;
    setTimeout(() => setIsNavVisible(true), navMenuDelay);
  });

  return (
    <>
      <Header />

      <nav className="content-wrap terminal-code">
        <h3>
          <span className="terminal-usr">guest@guest</span>:
          <span className="terminal-path">~</span>${" "}
          <span
            style={{ "--num-letters": 2 }}
            className={is404 ? "show" : "typing"}
          >
            ls
          </span>
        </h3>
        <h3 className={isNavVisible ? "show" : "hidden"}>
          <div className={styles.navLinks}>
            <div>
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
                <div className={styles.contactLinks}>GitHub</div>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/paul-fischer1687"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <StaticImage
                    src="../images/linkedin-logo.png"
                    alt="LinkedIn logo"
                  />
                </div>
                <div className={styles.contactLinks}>LinkedIn</div>
              </a>
            </div>
            <div>
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
                <div className={styles.contactLinks}>Twitter</div>
              </a>
            </div>
            <div>
              <a
                href="mailto:paulfischerdev@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  <StaticImage
                    src="../images/gmail-logo.png"
                    alt="Gmail logo"
                  />
                </div>
                <div
                  className={`${styles.contactLinks} ${styles.gmailName}`}
                ></div>
              </a>
            </div>
            <div>
              <Link to={is404 ? "/" : "#about"}>about</Link>
            </div>{" "}
            <div>
              <Link to={is404 ? "/" : "#projects"}>projects</Link>
            </div>
            <div>
              <Link to={is404 ? "/" : "#education"}>education</Link>
            </div>
            <div>
              <Link to={is404 ? "/" : "#experience"}>experience</Link>
            </div>{" "}
            <div>
              <Link to="/404">404</Link>
            </div>
          </div>
        </h3>
      </nav>

      <main>{children}</main>
    </>
  );
};

export default Layout;
