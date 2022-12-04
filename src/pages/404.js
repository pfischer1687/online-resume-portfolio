// import * as React from "react";
// import Layout from "../components/layout";
// import { StaticImage } from "gatsby-plugin-image";
// import Seo from "../components/seo";
// import * as styles from "../components/about.module.css";

// const NotFoundPage = () => {
//   return (
//     <Layout>
//       <div className={styles.contentWrap}>
//         <h2>404: Page Not Found</h2>
//         <p>
//           Sorry, we couldn’t find what you were looking for. Please enjoy this
//           picture of a cute dog and then click any of the navigation links above
//           or footer links below to navigate through the site.
//         </p>
//         <StaticImage
//           alt="Cute gray dog lying in a driveway with its tongue sticking out"
//           src="../images/dog-pic.jpg"
//         />
//         <p>
//           Photo by{" "}
//           <a
//             href="https://unsplash.com/@mutedtone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Christopher Ayme
//           </a>{" "}
//           on{" "}
//           <a
//             href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Unsplash
//           </a>
//         </p>
//       </div>
//     </Layout>
//   );
// };

// export const Head = () => <Seo title="404: Page not found" />;

// export default NotFoundPage;

import * as React from "react";
import * as styles from "../components/about.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import Layout from "../components/layout";

const catTerminalTime = 3000;
const contentTime = 6000;
const footerTime = 7000;

const AboutPage = () => {
  React.useEffect(() => {
    const catAboutTerminal = document.getElementById("cat-about-terminal");
    const catAboutText = document.getElementById("cat-about-text");
    const aboutContent = document.getElementById("about-content");
    setTimeout(() => {
      catAboutTerminal.classList.add(`${styles.show}`);
      catAboutText.classList.add(`${styles.typingCatAbout}`);
    }, catTerminalTime);
    setTimeout(() => {
      aboutContent.classList.add(`${styles.show}`);
    }, contentTime);
  });

  return (
    <Layout footerTerminalTime={footerTime}>
      <div className={`${styles.contentWrap} ${styles.terminalCode}`}>
        <h3>
          <span className={styles.terminalUsr}>guest@guest</span>:
          <span className={styles.terminalPath}>~</span>${" "}
          <span className={styles.typingCdAbout}>cd ~/about</span>
        </h3>
        <h3 id="cat-about-terminal" className={styles.hidden}>
          <span className={styles.terminalUsr}>guest@guest</span>:
          <span className={styles.terminalPath}>~/about</span>${" "}
          <span id="cat-about-text">cat about.txt</span>
        </h3>
      </div>

      <section
        id="about-content"
        className={`${styles.textFile} ${styles.contentWrap} ${styles.hidden}`}
      >
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
