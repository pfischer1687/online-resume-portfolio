import * as React from "react";
import * as styles from "./projects.module.css";
import { StaticImage } from "gatsby-plugin-image";
import TerminalWrapper from "./terminal-wrapper";

const Projects = () => {
  return (
    <TerminalWrapper
      sectionName="projects"
      cdNumLetters={13}
      catNumLetters={16}
    >
      <section className={`${styles.projects} divider`}>
        <h2> Projects/Publications</h2>

        {/* <!-- Project 1 --> */}
        <section className={styles.projectsItem}>
          <div>
            <StaticImage
              src="../images/mean-variance.png"
              alt="The potential difference due to LLM compared to the electron configurations accepted by the Metropolis-Hastings algorithm."
            />
            <h4 className={styles.ytVideoTitle}>Demo Video</h4>
            <iframe
              className={styles.ytVideo}
              src="https://www.youtube-nocookie.com/embed/nWyH2oi91QU"
              title="Mean-Variance Analyzer Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            ></iframe>
          </div>

          <div>
            <h3>Mean-Variance Analyzer</h3>
            <p className={styles.projectsDate}>October 2022 - March 2023</p>
            <ul className={styles.projectsList}>
              <li>
                Developed a progressive web app (PWA) for financial portfolio
                optimization with React.js deployed on Gatsby Cloud
              </li>
              <li>
                Gathered, cleaned, and modified financial market data with
                IPython/Jupyter and Pandas
              </li>
              <li>
                Ensured accuracy of linear algebra functions across updates with
                unit tests utilizing Jest
              </li>
              <li>
                Designed custom UI/UX with CSS modules and incorporated requests
                from multiple code reviewers via Git
              </li>
              <li>
                Lighthouse report - Performance: 99, Accessibility: 97, Best
                Practices: 100, SEO: 100
              </li>
            </ul>
            <a href="https://mvanalyzer.dev/" target="_blank" rel="noreferrer">
              Website
            </a>
            <a
              href="https://github.com/pfischer1687/mean-variance-analyzer"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
            <a
              href="https://github.com/pfischer1687/get-asset-data-for-mva"
              target="_blank"
              rel="noreferrer"
            >
              Data
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
              Master’s Thesis: A Systematic Method for Constructing Realistic
              Potentials in Real Space for Use in Fractional Quantum Hall Monte
              Carlo Simulations
            </h3>
            <p className={styles.projectsDate}>January 2020 - September 2022</p>
            <ul className={styles.projectsList}>
              <li>
                Distributed multi-threaded calculations across nodes of a
                high-performance computing (HPC) cluster via C, MPI, and Linux
              </li>
              <li>
                Cleaned, visualized, and analyzed data with IPython/Jupyter,
                Numpy, Pandas, Matplotlib and SciPy
              </li>
              <li>
                Constructed scheme for incorporating novel effects into
                simulations of systems studied for quantum computing
                applications
              </li>
            </ul>
            <a
              href="https://www.proquest.com/docview/2779955260"
              target="_blank"
              rel="noreferrer"
            >
              Publication
            </a>
            <a
              href="https://github.com/pfischer1687/ms-thesis"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
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
              Wolfram Physics Project: Rules Generating Elementary Particle
              Behavior in the Wolfram Model
            </h3>
            <p className={styles.projectsDate}>December 2020 – January 2021</p>
            <ul className={styles.projectsList}>
              <li>
                Generated hypergraph defect evolutions via Wolfram programming
                language and utilized machine learning to find clusters
              </li>
              <li>
                Established framework for discovering rules which induce
                particle-like motion in topological defects on a hypergraph
              </li>
              <li>
                Selected to join exclusive collaboration of international
                researchers where project was awarded Staff Pick
              </li>
            </ul>
            <a
              href="https://community.wolfram.com/groups/-/m/t/2162975"
              target="_blank"
              rel="noreferrer"
            >
              Post
            </a>
          </div>
        </section>
      </section>
    </TerminalWrapper>
  );
};

export default Projects;
