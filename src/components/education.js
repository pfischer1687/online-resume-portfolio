import * as React from "react";
import * as styles from "./education.module.css";
import TerminalWrapper from "./terminal-wrapper";

const Education = () => {
  return (
    <TerminalWrapper
      sectionName="education"
      cdNumLetters={14}
      catNumLetters={17}
    >
      <section className={`${styles.education} divider`}>
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
    </TerminalWrapper>
  );
};

export default Education;
