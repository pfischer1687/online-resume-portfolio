import * as React from "react";
import * as styles from "../components/about.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import Layout from "../components/layout";
import TypingAnimation from "../components/typing-animation";

const AboutPage = () => {
  React.useEffect(() => {
    TypingAnimation();
  });

  return (
    <Layout pagePath="/about">
      <div className="content-wrap terminal-code">
        <h3>
          <span className={"terminal-usr"}>guest@guest</span>:
          <span className={"terminal-path"}>~</span>${" "}
          <span className={`typing ${styles.typingCd}`}>cd ~/about</span>
        </h3>
        <h3 id="cat-terminal" className="hidden">
          <span className="terminal-usr">guest@guest</span>:
          <span className="terminal-path">~/about</span>${" "}
          <span id="cat-text" className={styles.typingCat}>
            cat about.txt
          </span>
        </h3>
      </div>

      <section id="content" className="text-file content-wrap hidden">
        <h2 className={styles.aboutMe}>About Me</h2>
        <section className={styles.aboutItem}>
          <div>
            <StaticImage
              className={styles.aboutImg}
              src="../images/about-me.jpg"
              alt="Photo of me."
            />
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
                  style={{ borderRadius: "5px" }}
                  src="../images/js-logo.png"
                  alt="JavaScript logo"
                />
                <div>JavaScript</div>
              </div>
              <div>
                <StaticImage
                  src="../images/react-logo.png"
                  alt="React.js logo"
                />
                <div>React.js</div>
              </div>
              <div>
                <StaticImage
                  src="../images/python-logo.png"
                  alt="Python logo"
                />
                <div>Python</div>
              </div>
              <div>
                <StaticImage
                  src="../images/c-logo.png"
                  alt="The C programming language logo"
                />
                <div>C</div>
              </div>
              <div>
                <StaticImage src="../images/linux-logo.png" alt="Linux logo" />
                <div>Linux</div>
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
