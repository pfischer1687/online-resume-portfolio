import * as React from "react";
import * as styles from "./header.module.css";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => (
  <header>
    <div className={styles.contentWrap}>
      <a href="/">
        <StaticImage
          src="../../static/favicon.png"
          alt="PF logo"
          className={styles.logo}
        />
      </a>
      <div>
        <h1>Paul Fischer</h1>
        <h2>Software Engineer</h2>
        <h2>Physicist</h2>
      </div>
    </div>
  </header>
);

export default Header;
