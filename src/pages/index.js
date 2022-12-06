import * as React from "react";
import * as styles from "../components/index.module.css";
import Seo from "../components/seo";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <>
      <Layout navAnim={true}>
        {/* <!-- ******************  EDUCATION & CERTIFICATIONS ****************** --> */}
        {/* <div className={`${styles.contentWrap} ${styles.terminalCode}`}>
          <h3 id="education">
            <span className={styles.terminalUsr}>guest@guest</span>:
            <span className={styles.terminalPath}>~/projects</span>$ cd
            ~/education
          </h3>
          <h3>
            <span className={styles.terminalUsr}>guest@guest</span>:
            <span className={styles.terminalPath}>~/education</span>$ cat
            education.txt
          </h3>
        </div>

        <section
          className={`${styles.textFile} ${styles.contentWrap} ${styles.education} ${styles.divider}`}
        >
          <h2>Education</h2> */}

        {/* <!-- School 1 --> */}
        {/* <section>
            <h3>California StateUniversity - Long Beach, CA</h3>
            <p>
              Master of Science in Physics, Computational Physics Option, August
              2019 –Expected: August 2022
            </p>
            <p>
              Relevant Coursework: Advanced Computation (Plot2, Fortran),
              Computer Interfacing Exp Phys (LabVIEW, Arduino). Awards/Honors:
              Google Summer Research Assistantship.
            </p>
          </section> */}

        {/* <!-- School 2 --> */}
        {/* <section>
            <h3>Loyola Marymount University - Los Angeles, CA</h3>
            <p>
              Bachelor of Science in Physics, Minor in Applied Mathematics,
              August 2012 –August 2016
            </p>
            <p>
              Relevant Coursework: Algorithms and Applications (MATLAB).
              Awards/Honors: LMU Achievement Award, Physics Honor Society Sigma
              Pi Sigma, Dean’s List.
            </p>
          </section> */}
        {/* <!-- End of School block. --> */}
        {/* </section> */}

        {/* <!-- ***********************  WORK EXPERIENCE  *********************** --> */}
        <div className={`${styles.contentWrap} ${styles.terminalCode}`}>
          <h3 id="experience">
            <span className={styles.terminalUsr}>guest@guest</span>:
            <span className={styles.terminalPath}>~/education</span>$ cd
            ~/experience
          </h3>
          <h3>
            <span className={styles.terminalUsr}>guest@guest</span>:
            <span className={styles.terminalPath}>~/experience</span>$ cat
            experience.txt
          </h3>
        </div>

        <section
          className={`${styles.textFile} ${styles.contentWrap} ${styles.experience} ${styles.divider}`}
        >
          <h2>Work Experience</h2>

          {/* <!-- Job 1 --> */}
          <section className={styles.jobItem}>
            <div className={styles.jobDetails}>
              <h3>
                Graduate Assistant(PHYS 510/562)/Teaching Associate (PHYS
                100A/151)
              </h3>
              <p>California State University, Long Beach</p>
              <p>August 2019 -Present</p>
            </div>

            <div className={styles.jobSummary}>
              <p>
                Taught statistical methods for analyzing and inferring
                conclusions fromexperimental physics data gathered in Microsoft
                Excel andcomputational experiments simulated in VPython.
                Measured student performance viagrades and providedtimely,
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
          <section className={styles.jobItem}>
            <div className={styles.jobDetails}>
              <h3>Physics/AP Physics Teacher</h3>
              <p>Saint Monica Catholic High School</p>
              <p>August2016 –June 2019</p>
            </div>
            <div className={styles.jobSummary}>
              <p>
                Developed and managedstudent laboratory projects
                analyzingrecorded datain Excelagainst predictive models,
                occasionallyinvolving real data sets from NASA. Attended monthly
                professional development events (such as College Board
                Workshops, the CA STEAM Symposium, and AAPT meetings) to better
                develop the skill ofeffectively communicatingtechnical ideasto a
                non-technical audience. Helped design the new makerspace,
                including strategies to encourage participation from
                underrepresented groups in science.
              </p>
            </div>
          </section>
          {/* <!-- End of Job block. --> */}
        </section>
      </Layout>
    </>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
