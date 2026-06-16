import * as React from "react";
import * as styles from "./projects.module.css";
import { StaticImage } from "gatsby-plugin-image";
import TerminalWrapper from "./terminal-wrapper";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [videoRef, videoInVew] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <TerminalWrapper
      prevSectionName="~/experience"
      sectionName="projects"
      cdNumLetters={13}
      catNumLetters={16}
    >
      <section ref={videoRef} className={`${styles.projects} divider`}>
        <h2>
          {" "}
          Projects
          <wbr />/<wbr />
          Publications
        </h2>

        {/* <!-- Project 1 --> */}
        <section className={styles.projectsItem}>
          <div>
            <StaticImage
              src="../images/rtos-pedometer.png"
              alt="Step detection algorithm test plot from the RTOS Pedometer project."
            />
          </div>

          <div>
            <h3>RTOS Pedometer</h3>
            <p className={styles.projectsDate}>February 2026 - May 2026</p>
            <ul className={styles.projectsList}>
              <li>
                Developed RTOS-based embedded firmware on an STM32 Nucleo-F767ZI
                using interrupt-driven IMU acquisition (MPU-6050 over I2C) and
                multi-threaded task scheduling for real-time sensor processing.
              </li>
              <li>
                Implemented a real-time signal processing pipeline including
                high-pass filtering, magnitude computation, smoothing, and
                slope-based zero-crossing step detection with hysteresis and
                interval gating.
              </li>
              <li>
                Designed RTOS-based task coordination using message queues and
                event signals for communication between IMU acquisition, DSP,
                and step detection threads.
              </li>
              <li>
                Built Python-based hardware-in-the-loop (HITL) testing and
                host-side tooling to automate build, flash, and validation
                workflows for firmware behavior on physical devices.
              </li>
              <li>
                Implemented USB-based command interface and real-time telemetry
                streaming for session control, debugging, and analysis of
                embedded system behavior.
              </li>
            </ul>
            <a
              href="https://github.com/pfischer1687/rtos-pedometer"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
        </section>

        {/* <!-- Project 2 --> */}
        <section className={styles.projectsItem}>
          <div>
            <StaticImage
              src="../images/kaggle-cmi.png"
              alt="IMU acceleration data for one subject pulling the hair above their ears from the Kaggle CMI competition."
            />
          </div>

          <div>
            <h3>Kaggle: CMI – Detect Behavior with Sensor Data</h3>
            <p className={styles.projectsDate}>August 2025 - September 2025</p>
            <ul className={styles.projectsList}>
              <li>
                Performed exploratory data analysis on an 18-class gesture
                classification dataset using multimodal wearable sensor data
                (IMU acceleration/orientation, thermopile, and time-of-flight
                sensors), analyzing sequence structure, missing modalities, and
                phase-based labeling.
              </li>
              <li>
                Investigated sensor behavior across sequences, identifying
                systematic missing-data patterns, orientation-dependent signal
                distortions, and differences in signal characteristics across
                gesture phases and subjects.
              </li>
              <li>
                Developed a time-series feature engineering pipeline for IMU
                data including z-score normalization, segmentation of sequences
                into temporal windows, and extraction of statistical and
                FFT-based spectral features.
              </li>
              <li>
                Built a LightGBM baseline model using Optuna hyperparameter
                tuning and stratified cross-validation, evaluated using the
                macro F1 score.
              </li>
              <li>
                Analyzed frequency-domain structure of repetitive motion and IMU
                signal characteristics (including gravity-related components and
                orientation effects) to guide feature design decisions.
              </li>
            </ul>
            <a
              href="https://www.kaggle.com/code/lcooper1972/bfrb-detection-eda-deep-dive-into-wrist-sensor-da"
              target="_blank"
              rel="noreferrer"
            >
              Exploratory Data Analysis (EDA)
            </a>
            <a
              href="https://www.kaggle.com/code/lcooper1972/cmi-baseline-feature-engineering-and-lightgbm"
              target="_blank"
              rel="noreferrer"
            >
              Feature Engineering & Model Development
            </a>
            <a
              href="https://github.com/pfischer1687/kaggle-cmi-bfrb"
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
              src="../images/netwatcher-cli.png"
              alt="Screenshot of the Netwatcher CLI's network traffic visualization."
            />
          </div>

          <div>
            <h3>Netwatcher CLI</h3>
            <p className={styles.projectsDate}>May 2025</p>
            <ul className={styles.projectsList}>
              <li>
                Built a Python CLI tool for real-time inspection of network
                activity, correlating active sockets with local processes to
                support system observability, diagnostics, and operational
                debugging.
              </li>
              <li>
                Implemented a network enrichment pipeline combining IP
                geolocation, ASN/BGP routing information, and ownership metadata
                to provide operational context for active connections.
              </li>
              <li>
                Developed process attribution capabilities linking network
                activity to executable metadata, including process identifiers,
                command-line arguments, and binary paths.
              </li>
              <li>
                Designed a rule-based analysis framework to identify anomalous
                connection patterns and generate structured reports for
                investigation and troubleshooting.
              </li>
            </ul>
            <a
              href="https://github.com/pfischer1687/netwatcher-cli"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
            <a
              href="https://pypi.org/project/netwatcher-cli/"
              target="_blank"
              rel="noreferrer"
            >
              PyPI Project
            </a>
          </div>
        </section>

        {/* <!-- Project 4 --> */}
        <section className={styles.projectsItem}>
          <div>
            <StaticImage
              src="../images/iquhack.png"
              alt="Visualization of the parametrerized quantum circuit based on my team's ansatz at the MIT iQuHACK 2025 hackathon."
            />
          </div>

          <div>
            <h3>MIT iQuHack 2025: IonQ Challenge</h3>
            <p className={styles.projectsDate}>January 2025 - February 2025</p>
            <ul className={styles.projectsList}>
              <li>
                Proposed and implemented XX and YY interaction terms in addition
                to the baseline ZZ couplings, incorporating
                entanglement-sensitive interactions into the Hamiltonian and
                increasing solution quality on some problem instances from
                approximately 0.70 to approximately 0.90.
              </li>
              <li>
                Contributed to subsequent team efforts refining the Hamiltonian
                formulation and ansatz design, helping improve solution quality
                further to approximately 0.94 on multiple evaluated
                configurations.
              </li>
              <li>
                Refactored experimental Jupyter notebook code into a modular
                Python package to support rapid experimentation with Hamiltonian
                formulations, circuit architectures, and evaluation workflows.
              </li>
            </ul>
          </div>
        </section>

        {/* <!-- Project 5 --> */}
        <section className={styles.projectsItem}>
          <div>
            <StaticImage
              src="../images/mean-variance.png"
              alt="The potential difference due to LLM compared to the electron configurations accepted by the Metropolis-Hastings algorithm."
            />
            <p className={styles.ytVideoTitle}>Demo Video</p>
            {videoInVew && (
              <iframe
                className={styles.ytVideo}
                src="https://www.youtube-nocookie.com/embed/nWyH2oi91QU"
                title="Mean-Variance Analyzer Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              />
            )}
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
                Lighthouse report - Performance: 100, Accessibility: 97, Best
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

        {/* <!-- Project 6 --> */}
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

        {/* <!-- Project 7 --> */}
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
            <a
              href="https://github.com/pfischer1687/wolfram-physics-project"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </div>
        </section>
      </section>
    </TerminalWrapper>
  );
};

export default Projects;
