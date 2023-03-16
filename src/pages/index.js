import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import About from "../components/about";
import Projects from "../components/projects";
import Education from "../components/education";
import Experience from "../components/experience";

const IndexPage = () => {
  return (
    <Layout navAnim={true} footerTerminalTime={5000}>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="experience">
        <Experience />
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
