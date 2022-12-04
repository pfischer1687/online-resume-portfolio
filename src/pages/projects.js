import * as React from "react";
import * as styles from "../components/projects.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import Layout from "../components/layout";

const catTerminalTime = 3000;
const contentTime = 6000;
const footerTime = 7000;

const ProjectsPage = () => {
  React.useEffect(() => {
    const catProjectsTerminal = document.getElementById(
      "cat-projects-terminal"
    );
    const catProjectsText = document.getElementById("cat-projects-text");
    const projectsContent = document.getElementById("projects-content");
    setTimeout(() => {
      catProjectsTerminal.classList.add(`${styles.show}`);
      catProjectsText.classList.add(`${styles.typingCatProjects}`);
    }, catTerminalTime);
    setTimeout(() => {
      projectsContent.classList.add(`${styles.show}`);
    }, contentTime);
  });

  return (
    <Layout footerTerminalTime={footerTime} pagePath="/projects">
      <div className={`${styles.contentWrap} ${styles.terminalCode}`}>
        <h3>
          <span className={styles.terminalUsr}>guest@guest</span>:
          <span className={styles.terminalPath}>~</span>${" "}
          <span className={styles.typingCdProjects}>cd ~/projects</span>
        </h3>
        <h3 id="cat-projects-terminal" className={styles.hidden}>
          <span className={styles.terminalUsr}>guest@guest</span>:
          <span className={styles.terminalPath}>~/projects</span>${" "}
          <span id="cat-projects-text">cat projects.txt</span>
        </h3>
      </div>
      {/* 
      <div className={`${styles.contentWrap} ${styles.terminalCode}`}>
<h3 id="projects">
  <span className={styles.terminalUsr}>guest@guest</span>:
  <span className={styles.terminalPath}>~/about</span>$ cd ~/projects
</h3>
<h3>
  <span className={styles.terminalUsr}>guest@guest</span>:
  <span className={styles.terminalPath}>~/projects</span>$ cat
  projects.txt
</h3>
</div> */}

      <section
        id="projects-content"
        className={`${styles.textFile} ${styles.contentWrap} ${styles.projects} ${styles.divider} ${styles.hidden}`}
      >
        <h2>Featured Projects and Publications</h2>
        <p>
          View selected projects and publications below. More details for each
          project can be found by clicking the "View project" link.
        </p>

        {/* <!-- Project 1 --> */}
        <section className={styles.projectsItem}>
          <div>
            <StaticImage
              src="../images/realistic-fractional.png"
              alt="The potential difference due to LLM compared to the electron configurations accepted by the Metropolis-Hastings algorithm."
            />
          </div>

          <div>
            <h3>
              Realistic Fractional Quantum Hall Energy Gaps in Graphene via
              Monte Carlo Simulations
            </h3>
            <p>
              MS thesis(California State University, Long Beach). Developed a
              scheme for incorporating Landau level mixing into parallelized
              simulations of fractional quantum Hall effect states of graphene
              run in theHigh Performance Computing (HPC) Lab. Technical Skills:
              C, MPI, Python, Pandas, Matplotlib, NumPy, SciPy, SymPy, Jupyter
              Notebook, LaTeX, Visual Studio Code, Makefile, Linux Command Line,
              Probability/Statistics.
            </p>
            {/* <!-- wait for ProQuest to publish
  <a href="#" target="_blank" rel="noreferrer">View project / case study</a>
  --> */}
          </div>
        </section>

        {/* <!-- Project 2 --> */}
        <section className={styles.projectsItem}>
          <div>
            <StaticImage
              src="../images/rules-generating.png"
              alt="A hypergraph created from a planar, triangular tiling with a nonplanar hypergraph as an obstruction (blue) and rules in which the obstruction’s effects remained localized (red)."
            />
          </div>

          <div>
            <h3>
              Rules generating elementary particle behavior in the Wolfram Model
            </h3>
            <p>
              Wolfram Physics Project Winter School 2021. Built a framework for
              discovering the rules which induce particle-like motion in
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
        </section>

        {/* <!-- Project 3 --> */}
        <section className={styles.projectsItem}>
          <div>
            <StaticImage
              src="../images/using-dodd.png"
              alt="Using a least squares model to best fit historical Real GDP growth to MSFT % growth so that future Real GDP growth predictions can be used to predict MSFT stock prices given Federal Reserve data in the COVID-19 pandemic."
            />
          </div>

          <div className={styles.projectsDetails}>
            <h3>
              Using Dodd-Frank Act Stress Test data to predict percentage growth
              ofMicrosoft Corporation stock price through 2023 Q1
            </h3>
            <p>
              Wolfram Data Science Bootcamp 2020 (Wolfram Certified Level II in
              Multiparadigm Data Science). Created a model for theperformance of
              Microsoft stock price during the pandemic of COVID-19 according
              tostress test dataprovided by the Federal Reserve for severely
              adverse conditions. Technical Skills: Wolfram Mathematica,Data
              Visualization,Data Cleaning, Data Manipulation.
            </p>
            <a
              href="https://github.com/pfischer1687/Data-Science/blob/main/Wolfram%20Certified%20Level%20II%20in%20Multiparadigm%20Data%20Science/ComputationalEssayPaulFischer.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View project
            </a>
          </div>
        </section>

        {/* <!-- Project 4 --> */}
        <section className={styles.projectsItem}>
          <div>
            <StaticImage
              src="../images/an-objective.png"
              alt="The graph of the percentage of students who answered a question incorrectly on their first try vs. the total C scores."
            />
          </div>

          <div>
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
        </section>
        {/* <!-- End of Project block. --> */}
      </section>

      {/* <section
        id="about-content"
        className={`${styles.textFile} ${styles.contentWrap} ${styles.hidden}`}
      >
        <h2 className={styles.aboutMe}>About Me</h2>
        <section className={styles.aboutItem}>
          <div>
            <StaticImage
              className={styles.aboutImg}
              src="../images/about-me.jpg"
              alt="Photo of me."
            />
          </div>

          <div className={styles.aboutDetails}>
            <p>
              Hi! I'm Paul. I love to code everything from websites to
              computational physics simulations, financial data science,
              embedded systems in arduino, and more!
            </p>
            <p>
              After graduating with a B.S. in Physics with a minor in Applied
              Mathematics, I taught high school Physics and AP Physics. I
              enjoyed sharing my knowledge but wanted to return to do more
              research. During my M.S. in Computational Physics, I really
              developed my love of coding. My research involved working with
              Markov chain Monte Carlo simulations in the C programming language
              distributed among several nodes of a High Performance Cluster
              (HPC) in parallel via Open MPI on Red Hat Enterprise Linux. The
              analysis of my data was done in Python and utilized the libraries
              pandas, NumPy, SciPy, SymPy, and Matplotlib. My love f coding for
              my research drew me to my current career goals in software
              engineering.
            </p>
            <h3>Top Skills:</h3>
            <div className={styles.skillIcons}>
              <div>
                <StaticImage
                  style={{ borderRadius: "5px" }}
                  src="../images/js-logo.png"
                  alt="JavaScript logo"
                />
                <div>JavaScript</div>
              </div>
              <div>
                <StaticImage
                  src="../images/react-logo.png"
                  alt="React.js logo"
                />
                <div>React.js</div>
              </div>
              <div>
                <StaticImage
                  src="../images/python-logo.png"
                  alt="Python logo"
                />
                <div>Python</div>
              </div>
              <div>
                <StaticImage
                  src="../images/c-logo.png"
                  alt="The C programming language logo"
                />
                <div>C</div>
              </div>

              <div>
                <StaticImage src="../images/linux-logo.png" alt="Linux logo" />
                <div>Linux</div>
              </div>
            </div>
          </div>
        </section>
      </section> */}
    </Layout>
  );
};

export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;
