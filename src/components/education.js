import * as React from "react";
import * as styles from "./education.module.css";
import TerminalWrapper from "./terminal-wrapper";

const Education = () => {
  return (
    <TerminalWrapper
      prevSectionName="~/projects"
      sectionName="education"
      cdNumLetters={14}
      catNumLetters={17}
    >
      <section className={`${styles.education} divider`}>
        <h2>Education</h2>

        <section>
          <h3>Online Courses/Certifications</h3>
          <ul>
            <li>
              <span className={styles.educationTitle}>LinkedIn Learning:</span>{" "}
              Advanced NLP with Python for Machine Learning (01/2023), Parallel
              and Concurrent Programming with C++ (12/2022), C Programming for
              Embedded Applications (12/2022), Advanced Linux: The Linux Kernel
              (12/2022), Linux Device Drivers (12/2022), Become a Full-Stack Web
              Developer (10/2022), Tableau and R for Analytics Projects
              (02/2022), Learning Assembly Language (12/2021), Ethical Hacking:
              Scanning Networks (08/2021)
            </li>
            <li className={styles.certsBullet}>
              <span className={styles.educationTitle}>Udemy:</span> Financial
              Engineering and Artificial Intelligence in Python (01/2022)
            </li>
            <li className={styles.certsBullet}>
              <span className={styles.educationTitle}>Certifications:</span>{" "}
              Certified LabVIEW Associate Developer (01/2021), Wolfram Certified
              Level II in Multiparadigm Data Science (07/2020,{" "}
              <a
                href="https://github.com/pfischer1687/wolfram-data-science-bootcamp"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
              )
            </li>
          </ul>
        </section>

        {/* <!-- School 1 --> */}
        <section>
          <h3>
            California State University, Long Beach (CSULB) | Long Beach, CA
          </h3>
          <p className={styles.degreeDate}>Degree Conferred: August 2022</p>
          <p>
            Master of Science in Physics, Computational Physics Option, GPA:
            4.00
          </p>
          <ul>
            <li>
              Awards/Honors: Google Summer Research Assistantship, Graduate
              Dean’s List of University Scholars and Artists (top 1% of graduate
              students in the College of Natural Sciences and Mathematics)
            </li>
          </ul>
        </section>

        {/* <!-- School 2 --> */}
        <section>
          <h3>Loyola Marymount University (LMU) | Los Angeles, CA</h3>
          <p className={styles.degreeDate}>Degree Conferred: August 2016</p>
          <p>Bachelor of Science in Physics, Minor in Applied Mathematics</p>
          <ul>
            <li>
              Awards/Honors: Dean’s List, LMU Achievement Award, Sigma Pi Sigma
            </li>
          </ul>
        </section>
        {/* <!-- End of School block. --> */}
      </section>
    </TerminalWrapper>
  );
};

export default Education;
