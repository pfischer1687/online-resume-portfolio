import * as React from "react";
import * as styles from "../components/index.module.css";
import Seo from "../components/seo";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <>
      <Layout
        navTerminalTime={1000}
        navLinksTime={4000}
        footerTerminalTime={7000}
        navAnim={true}
      >
        {/* <!-- ********************  PROJECTS / PORTFOLIO  ********************* --> */}
        {/* <div className={`${styles.contentWrap} ${styles.terminalCode}`}>
          <h3 id="projects">
            <span className={styles.terminalUsr}>guest@guest</span>:
            <span className={styles.terminalPath}>~/about</span>$ cd ~/projects
          </h3>
          <h3>
            <span className={styles.terminalUsr}>guest@guest</span>:
            <span className={styles.terminalPath}>~/projects</span>$ cat
            projects.txt
          </h3>
        </div>

        <section
          className={`${styles.textFile} ${styles.contentWrap} ${styles.projects} ${styles.divider}`}
        >
          <h2>Featured Projects and Publications</h2>
          <p>
            View selected projects and publications below. More details for each
            project can be found by clicking the "View project" link.
          </p> */}

        {/* <!-- Project 1 --> */}
        {/* <section className={styles.projectsItem}>
            <div className={styles.projectsImg}>
              <StaticImage
                src="../images/realistic-fractional.png"
                alt="The potential difference due to LLM compared to the electron configurations accepted by the Metropolis-Hastings algorithm."
              />
            </div>

            <div className={styles.projectsDetails}>
              <h3>
                Realistic Fractional Quantum Hall Energy Gaps in Graphene via
                Monte Carlo Simulations
              </h3>
              <p>
                MS thesis(California State University, Long Beach). Developed a
                scheme for incorporating Landau level mixing into parallelized
                simulations of fractional quantum Hall effect states of graphene
                run in theHigh Performance Computing (HPC) Lab. Technical
                Skills: C, MPI, Python, Pandas, Matplotlib, NumPy, SciPy, SymPy,
                Jupyter Notebook, LaTeX, Visual Studio Code, Makefile, Linux
                Command Line, Probability/Statistics.
              </p> */}
        {/* <!-- wait for ProQuest to publish
            <a href="#" target="_blank" rel="noreferrer">View project / case study</a>
            --> */}
        {/* </div>
          </section> */}

        {/* <!-- Project 2 --> */}
        {/* <section className={styles.projectsItem}>
            <div className={styles.projectsImg}>
              <StaticImage
                src="../images/rules-generating.png"
                alt="A hypergraph created from a planar, triangular tiling with a nonplanar hypergraph as an obstruction (blue) and rules in which the obstruction’s effects remained localized (red)."
              />
            </div>

            <div className={styles.projectsDetails}>
              <h3>
                Rules generating elementary particle behavior in the Wolfram
                Model
              </h3>
              <p>
                Wolfram Physics Project Winter School 2021. Built a framework
                for discovering the rules which induce particle-like motion in
                topological defects on a hypergraph. Featured Contributor Badge.
              </p>
              <a
                href="https://community.wolfram.com/groups/-/m/t/2162975"
                target="_blank"
                rel="noreferrer"
              >
                View project
              </a>
            </div>
          </section> */}

        {/* <!-- Project 3 --> */}
        {/* <section className={styles.projectsItem}>
            <div className={styles.projectsImg}>
              <StaticImage
                src="../images/using-dodd.png"
                alt="Using a least squares model to best fit historical Real GDP growth to MSFT % growth so that future Real GDP growth predictions can be used to predict MSFT stock prices given Federal Reserve data in the COVID-19 pandemic."
              />
            </div>

            <div className={styles.projectsDetails}>
              <h3>
                Using Dodd-Frank Act Stress Test data to predict percentage
                growth ofMicrosoft Corporation stock price through 2023 Q1
              </h3>
              <p>
                Wolfram Data Science Bootcamp 2020 (Wolfram Certified Level II
                in Multiparadigm Data Science). Created a model for
                theperformance of Microsoft stock price during the pandemic of
                COVID-19 according tostress test dataprovided by the Federal
                Reserve for severely adverse conditions. Technical Skills:
                Wolfram Mathematica,Data Visualization,Data Cleaning, Data
                Manipulation.
              </p>
              <a
                href="https://github.com/pfischer1687/Data-Science/blob/main/Wolfram%20Certified%20Level%20II%20in%20Multiparadigm%20Data%20Science/ComputationalEssayPaulFischer.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View project
              </a>
            </div>
          </section> */}

        {/* <!-- Project 4 --> */}
        {/* <section className={styles.projectsItem}>
            <div className={styles.projectsImg}>
              <StaticImage
                src="../images/an-objective.png"
                alt="The graph of the percentage of students who answered a question incorrectly on their first try vs. the total C scores."
              />
            </div>

            <div className={styles.projectsDetails}>
              <h3>
                An Objective Rating Scale for the Difficulty of Introductory
                Mechanics Problems
              </h3>
              <p>
                BS thesis (Loyola Marymount University, 2016). Honed a framework
                for identifying the cognitive load required to solve mechanics
                problems and designed an experiment to measure student homework
                scores as a function of cognitive load.
              </p>
              <a
                href="https://github.com/pfischer1687/Physics/blob/main/PHYS%20481%20Senior%20Thesis/phys_481_senior_thesis.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View project
              </a>
            </div>
          </section> */}
        {/* <!-- End of Project block. --> */}
        {/* </section> */}

        {/* <!-- ******************  EDUCATION & CERTIFICATIONS ****************** --> */}
        <div className={`${styles.contentWrap} ${styles.terminalCode}`}>
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
          <h2>Education</h2>

          {/* <!-- School 1 --> */}
          <section>
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
          </section>

          {/* <!-- School 2 --> */}
          <section>
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
          </section>
          {/* <!-- End of School block. --> */}
        </section>

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
