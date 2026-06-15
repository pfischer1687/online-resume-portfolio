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
            Hi, I'm Paul. I'm a software engineer with experience building
            aerospace software systems, full-stack applications, and simulation
            tooling. My work has spanned deployment and configuration management
            systems for vehicle software, enabling reliable software release and
            updates for operators running live hot fire tests, as well as
            full-stack tooling (Python/FastAPI/SQL, Rust/Axum, React/TypeScript)
            and simulation infrastructure supporting hardware-in-the-loop (HITL)
            and hardware-out-of-the-loop (HOOTL) testing. I hold an M.S. in
            Computational Physics where I specialized in Monte Carlo simulation
            on high-performance computing (HPC) clusters and numerical methods
            for dynamical physical system modeling. Thank you for visitng my
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
          <h3>Skills/Programming Languages:</h3>
          <div className={styles.skillIcons}>
            <div>
              <StaticImage src="../images/rust-logo.png" alt="Rust logo" />
              <div>Rust</div>
            </div>
            <div>
              <StaticImage src="../images/python-logo.png" alt="Python logo" />
              <div>Python</div>
            </div>
            <div>
              <StaticImage
                src="../images/cpp-logo.png"
                alt="The C++ programming language logo"
              />
              <div>C++</div>
            </div>
            <div>
              <StaticImage src="../images/react-logo.png" alt="React.js logo" />
              <div>React.js</div>
            </div>
          </div>
        </div>
      </section>
    </TerminalWrapper>
  );
};

export default About;
