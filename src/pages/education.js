import * as React from "react";
import * as styles from "../components/education.module.css";
import Seo from "../components/seo";
import Layout from "../components/layout";
import TypingAnimation from "../components/typing-animation";

const EducationPage = () => {
  const pageTitle = "education";
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
        className={`text-file content-wrap ${styles.education} divider hidden`}
      >
        <h2>Education</h2>

        {/* <!-- School 1 --> */}
        <section>
          <h3>California StateUniversity - Long Beach, CA</h3>
          <p>
            Master of Science in Physics, Computational Physics Option, August
            2019 –Expected: August 2022
          </p>
          <p>
            Relevant Coursework: Advanced Computation (Plot2, Fortran), Computer
            Interfacing Exp Phys (LabVIEW, Arduino). Awards/Honors: Google
            Summer Research Assistantship.
          </p>
        </section>

        {/* <!-- School 2 --> */}
        <section>
          <h3>Loyola Marymount University - Los Angeles, CA</h3>
          <p>
            Bachelor of Science in Physics, Minor in Applied Mathematics, August
            2012 –August 2016
          </p>
          <p>
            Relevant Coursework: Algorithms and Applications (MATLAB).
            Awards/Honors: LMU Achievement Award, Physics Honor Society Sigma Pi
            Sigma, Dean’s List.
          </p>
        </section>
        {/* <!-- End of School block. --> */}
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Education" />;

export default EducationPage;
