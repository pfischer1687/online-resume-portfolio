import * as React from "react";
import * as styles from "../components/experience.module.css";
import Seo from "../components/seo";
import Layout from "../components/layout";
import TypingAnimation from "../components/typing-animation";

const ExperiencePage = () => {
  const pageTitle = "experience";
  React.useEffect(() => {
    TypingAnimation();
  });

  return (
    <Layout pagePath={`/${pageTitle}`}>
      <div className="content-wrap terminal-code">
        <h3>
          <span className="terminal-usr">guest@guest</span>:
          <span className="terminal-path">~</span>${" "}
          <span className={`typing ${styles.typingCd}`}>cd ~/{pageTitle}</span>
        </h3>
        <h3 id="cat-terminal" className="hidden">
          <span className="terminal-usr">guest@guest</span>:
          <span className="terminal-path">~/{pageTitle}</span>${" "}
          <span className="typing-cat-line-break"></span>
          <span id="cat-text" className={styles.typingCat}>
            cat {pageTitle}.txt
          </span>
        </h3>
      </div>

      <section
        id="content"
        className={`text-file content-wrap ${styles.experience} divider hidden`}
      >
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
            <p>August2016 ???June 2019</p>
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
    </Layout>
  );
};

export const Head = () => <Seo title="Experience" />;

export default ExperiencePage;
