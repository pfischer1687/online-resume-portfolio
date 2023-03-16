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
        <h2>Work Experience</h2>

        {/* <!-- Job 1 --> */}
        <section>
          <div className={styles.jobDetails}>
            <h3>
              Graduate Assistant(PHYS 510/562)/Teaching Associate (PHYS
              100A/151)
            </h3>
            <p>California State University, Long Beach</p>
            <p>August 2019 -Present</p>
          </div>

          <div>
            <p>
              Taught statistical methods for analyzing and inferring conclusions
              fromexperimental physics data gathered in Microsoft Excel
              andcomputational experiments simulated in VPython. Measured
              student performance viagrades and providedtimely,
              constructivefeedback. Encouragedequalcollaboration and effective
              communication among students working in groups.
            </p>
          </div>
          {/* <!--
  <p>Optional list:</p>
  <ul>
    <li>Delete this list if you don't need it.</li>
    <li>Created...</li>
    <li>Lead...</li>
    <li>Responsible for...</li>
  </ul>
  --> */}
        </section>

        {/* <!-- Job 2 --> */}
        <section>
          <div className={styles.jobDetails}>
            <h3>Physics/AP Physics Teacher</h3>
            <p>Saint Monica Catholic High School</p>
            <p>August2016 –June 2019</p>
          </div>
          <div>
            <p>
              Developed and managedstudent laboratory projects analyzingrecorded
              datain Excelagainst predictive models, occasionallyinvolving real
              data sets from NASA. Attended monthly professional development
              events (such as College Board Workshops, the CA STEAM Symposium,
              and AAPT meetings) to better develop the skill ofeffectively
              communicatingtechnical ideasto a non-technical audience. Helped
              design the new makerspace, including strategies to encourage
              participation from underrepresented groups in science.
            </p>
          </div>
        </section>
        {/* <!-- End of Job block. --> */}
      </section>
    </TerminalWrapper>
  );
};

export default Experience;
