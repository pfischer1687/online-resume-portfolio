import * as React from "react";
import * as styles from "./experience.module.css";
import TerminalWrapper from "./terminal-wrapper";

const Experience = () => {
  return (
    <TerminalWrapper
      prevSectionName="~/education"
      sectionName="experience"
      cdNumLetters={15}
      catNumLetters={18}
      precedesFooter={true}
    >
      <section className={`${styles.experience} divider`}>
        <h2>Experience</h2>

        {/* <!-- Job 1 --> */}
        <section>
          <div className={styles.jobDetails}>
            <h3>Graduate Assistant/Teaching Associate</h3>
            <p className={styles.expDate}>August 2019 – May 2022</p>
            <p>CSULB Physics Department | Long Beach, CA</p>
            <ul className={styles.expList}>
              <li>
                Led students through the development and testing of
                computational physics simulations in Python
              </li>
            </ul>
          </div>
        </section>

        {/* <!-- Job 2 --> */}
        <section>
          <div className={styles.jobDetails}>
            <h3>Physics/AP Physics Teacher</h3>
            <p className={styles.expDate}>August 2016 – June 2019</p>
            <p>Saint Monica Catholic High School | Santa Monica, CA</p>
            <ul className={styles.expList}>
              <li>
                Directed students on how to leverage statistical techniques for
                data analysis in Microsoft Excel
              </li>
            </ul>
          </div>
        </section>
        {/* <!-- End of Job block. --> */}
      </section>
    </TerminalWrapper>
  );
};

export default Experience;
