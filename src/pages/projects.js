import * as React from "react";
import * as styles from "../components/projects.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import Layout from "../components/layout";
import TypingAnimation from "../components/typing-animation";

const ProjectsPage = () => {
  const pageTitle = "projects";
  React.useEffect(() => {
    TypingAnimation();
  });

  return (
    <Layout pagePath="/projects">
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
        className={`text-file content-wrap ${styles.projects} divider hidden`}
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
              src="../images/mean-variance.png"
              alt="The potential difference due to LLM compared to the electron configurations accepted by the Metropolis-Hastings algorithm."
            />
          </div>

          <div>
            <h3>Mean-Variance Analyzer</h3>
            <p>
              Learn about modern portfolio theory - interactively! Technical
              skills: JavaScript, HTML/CSS, Python, React.js, Gatsby, Pandas,
              npm, Visual Studio Code, IPython/Jupyter, Chart.js, Formik, yup,
              yfinance
            </p>
            <a
              href="https://meanvarianceanalyzermain.gatsbyjs.io/"
              target="_blank"
              rel="noreferrer"
            >
              View live site
            </a>
          </div>
        </section>

        {/* <!-- Project 2 --> */}
        <section className={styles.projectsItem}>
          <div>
            <StaticImage
              src="../images/realistic-fractional.png"
              alt="A plot of the efficient frontier generated by the Mean-Variance Analyzer web app's Monte Carlo simulation for sample assets."
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
            {/* <a href="#" target="_blank" rel="noreferrer">
              View project
            </a> */}
          </div>
        </section>

        {/* <!-- Project 3 --> */}
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

        {/* <!-- Project 4 --> */}
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

        {/* <!-- Project 5 --> */}
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

        {/* <!-- Project 5 --> */}
        {/* <section className={styles.projectsItem}>
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
        </section> */}
        {/* <!-- End of Project block. --> */}
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Projects" />;

export default ProjectsPage;
