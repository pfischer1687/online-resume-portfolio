import * as React from "react";
import * as styles from "./header.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Header = () => (
  <header>
    <div className={styles.contentWrap}>
      <Link to="/">
        <StaticImage
          src="../images/favicon.png"
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
  </header>
);

export default Header;
