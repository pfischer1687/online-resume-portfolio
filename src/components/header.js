import * as React from "react";
import * as styles from "./header.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Header = () => (
  <header>
    {/* <div className={styles.contentWrap}> */}
    <div className="content-wrap">
      <div className={styles.headerContainer}>
        <Link to="/">
          <StaticImage
            src="../images/favicon.svg"
            alt="PF logo"
            className={styles.logo}
          />
        </Link>
        <div>
          <h1>Paul Fischer</h1>
          <h2>Software Engineer</h2>
          <h2>Physicist</h2>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
