import * as React from "react";
import * as styles from "./about.module.css";
import { StaticImage } from "gatsby-plugin-image";
import TerminalWrapper from "./terminal-wrapper";

const About = () => {
  return (
    <TerminalWrapper
      prevSectionName="~"
      sectionName="about"
      cdNumLetters={10}
      catNumLetters={13}
      animationDelay={1000}
      lineBreak={false}
    >
      <h2 className={styles.aboutMe}>About Me</h2>
      <section className={styles.aboutItem}>
        <div className={styles.aboutImg}>
          <StaticImage
            src="../images/about-me.png"
            alt="Photo of Paul Fischer."
          />
        </div>
        <div className={styles.aboutDetails}>
          <p>
            Hi, I'm Paul. During my Master's degree in Computational Physics, I
            gained research experience writing multi-threaded simulations in C
            for a high performance computing (HPC) cluster and leveraging Python
            for data analysis. I am passionate about solving complex
            optimization problems, writing readable, well-tested code, and being
            a strong team player. I'm excited to continue learning more about
            the latest trends in full-stack development. Thank you for visitng
            my website, feel free to take a look at some of my recent projects
            below as well as the{" "}
            <a
              href="https://github.com/pfischer1687/online-resume-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              source code
            </a>{" "}
            for this site.
          </p>
          <h3>Skills/Programming Languages:</h3>
          <div className={styles.skillIcons}>
            <div>
              <StaticImage src="../images/python-logo.png" alt="Python logo" />
              <div>Python</div>
            </div>
            <div>
              <StaticImage
                style={{ borderRadius: "5px" }}
                src="../images/js-logo.png"
                alt="JavaScript logo"
              />
              <div>JavaScript</div>
            </div>
            <div>
              <StaticImage src="../images/react-logo.png" alt="React.js logo" />
              <div>React.js</div>
            </div>
            <div>
              <StaticImage
                src="../images/cpp-logo.png"
                alt="The C++ programming language logo"
              />
              <div>C/C++</div>
            </div>
            <div>
              <StaticImage src="../images/linux-logo.png" alt="Linux logo" />
              <div>Linux</div>
            </div>
          </div>
        </div>
      </section>
    </TerminalWrapper>
  );
};

export default About;
