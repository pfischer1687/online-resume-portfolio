import * as React from "react";
import * as styles from "./experience.module.css";
import TerminalWrapper from "./terminal-wrapper";

const Experience = () => {
  return (
    <TerminalWrapper
      prevSectionName="~/about"
      sectionName="experience"
      cdNumLetters={15}
      catNumLetters={18}
    >
      <section className={`${styles.experience} divider`}>
        <h2>Experience</h2>

        {/* <!-- Job 1 --> */}
        <section>
          <div className={styles.jobDetails}>
            <h3>Software Engineer (Contract)</h3>
            <p className={styles.expDate}>January 2026 – Present</p>
            <p>Independent Contractor | Costa Mesa, CA</p>
            <ul className={styles.expList}>
              <li>
                Sole engineer responsible for the architecture and
                implementation of a full-stack Python/FastAPI/SQL platform for
                ingesting, reconciling, and analyzing data from multiple
                external systems.
              </li>
              <li>
                Designed automated and operator-assisted reconciliation
                workflows to resolve inconsistent records, preserve
                traceability, and prevent silent data loss.
              </li>
              <li>
                Built structured logging, diagnostic tooling, health monitoring,
                and automated validation pipelines to support reliable operation
                and rapid debugging.
              </li>
              <li>
                Developed geospatial analysis capabilities enabling user-defined
                regions and custom statistical computations over large datasets.
              </li>
            </ul>
          </div>
        </section>

        {/* <!-- Job 2 --> */}
        <section>
          <div className={styles.jobDetails}>
            <h3>
              Software Engineer I | Vehicle Software (Mission Assurance &
              Vehicle Simulation | Test, Release & Deployment Engineering)
            </h3>
            <p className={styles.expDate}>July 2023 – December 2025</p>
            <p>Relativity Space | Long Beach, CA</p>
            <ul className={styles.expList}>
              <li>
                Owned the software configuration management and deployment
                platform for the full vehicle software lifecycle, enabling safe,
                repeatable software release and updates used by engineers and
                operators in live test environments.
              </li>
              <li>
                Designed and executed HITL validation procedures for vehicle
                software verification, supporting release readiness and
                system-level behavior testing under operator-defined
                requirements.
              </li>
              <li>
                Developed Rust-based hardware abstraction and reverse drivers
                from datasheets to enable HOOTL simulation environments for
                embedded software, accelerating early integration testing and
                defect discovery prior to hardware availability.
              </li>
              <li>
                Built a Python/FastAPI/SQL backend service for managing vehicle
                network packet schemas, improving the scalability of software
                configuration across engineering teams.
              </li>
              <li>
                Developed a full-stack deployment application (Rust/Axum +
                React/TypeScript/Vite/MUI) used by operators at test stands to
                manage and execute vehicle software release workflows.
              </li>
            </ul>
          </div>
        </section>

        {/* <!-- Job 3 --> */}
        <section>
          <div className={styles.jobDetails}>
            <h3>Graduate Assistant/Teaching Associate</h3>
            <p className={styles.expDate}>August 2019 – May 2022</p>
            <p>CSULB Physics Department | Long Beach, CA</p>
            <ul className={styles.expList}>
              <li>
                Mentored students in developing and debugging computational
                physics simulations in Python, emphasizing numerical methods and
                software correctness.
              </li>
            </ul>
          </div>
        </section>

        {/* <!-- Job 4 --> */}
        <section>
          <div className={styles.jobDetails}>
            <h3>Physics/AP Physics Teacher</h3>
            <p className={styles.expDate}>August 2016 – June 2019</p>
            <p>Saint Monica Catholic High School | Santa Monica, CA</p>
            <ul className={styles.expList}>
              <li>
                Taught experimental physics and data analysis, guiding students
                through quantitative modeling, statistics, and interpretation of
                measurement data.
              </li>
            </ul>
          </div>
        </section>
        {/* <!-- End of Job block. --> */}
      </section>
    </TerminalWrapper>
  );
};

export default Experience;
