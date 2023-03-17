import * as React from "react";
import * as styles from "./about.module.css";
import { StaticImage } from "gatsby-plugin-image";
import TerminalWrapper from "./terminal-wrapper";

const About = () => {
  return (
    <TerminalWrapper
      sectionName="about"
      cdNumLetters={10}
      catNumLetters={13}
      animationDelay={1500}
      lineBreak={false}
    >
      <h2 className={styles.aboutMe}>About Me</h2>
      <section className={styles.aboutItem}>
        <div>
          <StaticImage
            className={styles.aboutImg}
            src="../images/about-me.png"
            alt="Photo of Paul Fischer."
          />
        </div>
        <div className={styles.aboutDetails}>
          <p>
            Hi, I'm Paul. I love writing code for everything from websites to
            financial engineering, embedded systems, theoretical physics
            research, and more. I am passionate about readability, testing,
            performance, and being a good teammate. Thank you for visitng my
            website, feel free to take a look at some of my recent projects
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
          <h3>Top Skills:</h3>
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
