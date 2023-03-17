import * as React from "react";
import * as styles from "./experience.module.css";
import TerminalWrapper from "./terminal-wrapper";

const Experience = () => {
  return (
    <TerminalWrapper
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
            <h3>August 2019 – May 2022</h3>
            <h3>CSULB Physics Department | Long Beach, CA</h3>
            <ul>
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
            <h3>August 2016 – June 2019</h3>
            <h3>Saint Monica Catholic High School | Santa Monica, CA</h3>
            <ul>
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
