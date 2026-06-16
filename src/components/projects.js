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
                Implemented RTOS-based firmware on an STM32F767ZI for real-time
                pedometer tracking, driven by MPU-6050 data-ready interrupts and
                multi-threaded sensor-processing pipelines.
              </li>
              <li>
                Developed a step-detection algorithm using filtered acceleration
                magnitude, zero-crossing peak detection, hysteresis, and timing
                constraints to reduce false positives.
              </li>
              <li>
                Architected inter-thread communication with lock-free queues and
                event signaling to maintain deterministic execution under
                real-time workloads.
              </li>
              <li>
                Built automated host-side and hardware-in-the-loop test tooling
                in Python, including firmware flashing, validation, and
                telemetry capture.
              </li>
              <li>
                Developed debugging infrastructure for streaming live DSP data
                over USB and visualizing intermediate processing stages during
                algorithm tuning.
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
                Analyzed ~8,000 wearable-sensor sequences for an 18-class
                gesture classification task, identifying sensor dropout patterns
                and orientation-related effects that complicated model
                generalization.
              </li>
              <li>
                Built an IMU-based feature pipeline combining temporal
                segmentation with statistical and frequency-domain features
                derived from FFT analysis.
              </li>
              <li>
                Trained and tuned a LightGBM baseline using Optuna and
                stratified cross-validation, establishing a reference point for
                future multimodal and sequence-model approaches.
              </li>
              <li>
                Investigated signal-processing techniques including gravity
                removal, spectral filtering, and orientation normalization to
                improve robustness across subjects.
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
                Built and published a Python CLI that correlates live network
                connections with the local processes responsible for them,
                providing real-time visibility into outbound system activity.
              </li>
              <li>
                Combined process inspection with IP geolocation, ASN, and
                ownership lookups to surface context about remote hosts directly
                in the terminal.
              </li>
              <li>
                Developed automated threat heuristics and HTML reporting to
                highlight potentially suspicious network behavior for further
                investigation.
              </li>
              <li>
                Packaged the project for PyPI and built it with a typed,
                test-driven Python workflow using Typer, Pydantic, Pyright,
                Ruff, and pytest.
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
                Introduced XX and YY coupling terms alongside the original ZZ
                formulation and tested their impact on optimization performance,
                improving results from roughly 0.70 to 0.90 on selected
                instances.
              </li>
              <li>
                Worked with teammates on further Hamiltonian and ansatz
                improvements, reaching approximately 0.94 on several benchmark
                runs.
              </li>
              <li>
                Turned a collection of Jupyter notebooks into a modular Python
                package, making it easier to iterate on Hamiltonian designs,
                circuit structures, and evaluation code.
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
