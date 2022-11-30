import * as React from "react";
import * as styles from "../components/about.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import Layout from "../components/layout";

const AboutPage = () => {
  React.useEffect(() => {
    const cdTerminal = document.getElementById("cd-terminal");
    const cdTerminalAbout = document.getElementById("cd-terminal-about");
    const aboutContent = document.getElementById("about-content");
    setTimeout(() => {
      cdTerminal.classList.add(`${styles.show}`);
      cdTerminalAbout.classList.add(`${styles.typing}`);
    }, 1000);
    setTimeout(() => {
      aboutContent.classList.add(`${styles.show}`);
    }, 4000);
  });

  return (
    <Layout>
      <div className={`${styles.contentWrap} ${styles.terminalCode}`}>
        <h3 id="cd-terminal" className={styles.hidden}>
          <span className={styles.terminalUsr}>guest@guest</span>:
          <span className={styles.terminalPath}>~</span>${" "}
          <span id="cd-terminal-about">cd ~/about</span>
        </h3>
        <h3 id="about-terminal" className={styles.hidden}>
          <span className={styles.terminalUsr}>guest@guest</span>:
          <span className={styles.terminalPath}>~</span>${" "}
          <span id="nav-terminal-ls">ls</span>
        </h3>
      </div>

      <section
        id="about-content"
        className={`${styles.textFile} ${styles.contentWrap} ${styles.hidden}`}
      >
        <h2 className={styles.aboutMe}>About Me</h2>
        <section className={styles.aboutItem}>
          <div className={styles.aboutImg}>
            <StaticImage src="../images/about-me.jpg" alt="Photo of me." />
          </div>

          <div className={styles.aboutDetails}>
            <p>
              Hi! I'm Paul. I love to code everything from websites to
              computational physics simulations, financial data science,
              embedded systems in arduino, and more!
            </p>
            <p>
              After graduating with a B.S. in Physics with a minor in Applied
              Mathematics, I taught high school Physics and AP Physics. I
              enjoyed sharing my knowledge but wanted to return to do more
              research. During my M.S. in Computational Physics, I really
              developed my love of coding. My research involved working with
              Markov chain Monte Carlo simulations in the C programming language
              distributed among several nodes of a High Performance Cluster
              (HPC) in parallel via Open MPI on Red Hat Enterprise Linux. The
              analysis of my data was done in Python and utilized the libraries
              pandas, NumPy, SciPy, SymPy, and Matplotlib. My love f coding for
              my research drew me to my current career goals in software
              engineering.
            </p>
            <h3>Top Skills:</h3>
            <div className={styles.skillIcons}>
              <div>
                <StaticImage
                  src="../images/js-logo.jpg"
                  alt="JavaScript logo"
                />
                <div>JavaScript</div>
              </div>
              <div>
                <StaticImage
                  src="../images/github-logo.png"
                  alt="GitHub logo"
                />
                <div>Python</div>
              </div>
              <div>
                <StaticImage
                  src="../images/github-logo.png"
                  alt="GitHub logo"
                />
                <div>C</div>
              </div>

              <div>
                <StaticImage
                  src="../images/github-logo.png"
                  alt="GitHub logo"
                />
                <div>React.js</div>
              </div>
              <div>
                <StaticImage
                  src="../images/github-logo.png"
                  alt="GitHub logo"
                />
                <div>Gatsby</div>
              </div>
              <div>
                <StaticImage
                  src="../images/github-logo.png"
                  alt="GitHub logo"
                />
                <div>Linux</div>
              </div>
              <div>
                <StaticImage
                  src="../images/github-logo.png"
                  alt="GitHub logo"
                />
                <div>HTML</div>
              </div>
              <div>
                <StaticImage
                  src="../images/github-logo.png"
                  alt="GitHub logo"
                />
                <div>CSS</div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="About" />;

export default AboutPage;
