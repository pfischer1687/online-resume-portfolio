import * as React from "react";
import * as styles from "./layout.module.css";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <nav class={`${styles.contentWrap} ${styles.terminalCode}`}>
        <div class="content-wrap terminal-code">
          <h3>
            <span className={styles.terminalUsr}>guest@guest</span>:
            <span className={styles.terminalPath}>~</span>$ ls
          </h3>
          <h3>
            <a href="#about">about</a>&emsp;<a href="#contact">contact</a>&emsp;
            <a href="#education">education</a>&emsp;
            <a href="#experience">experience</a>&emsp;
            <a href="#projects">projects</a>
          </h3>
        </div>
      </nav>
      <main>{children}</main>
      {/* <!-- *****************  CONTACT INFO / SOCIAL MEDIA  ***************** --> */}
      <div className={`${styles.contentWrap} ${styles.terminalCode}`}>
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
        <h2>Let's Keep in Touch!</h2>

        {/* <!-- Social media and contact links. Add or remove any networks. --> */}
        <ul className={styles.contactList}>
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
      </footer>
    </>
  );
};

export default Layout;
