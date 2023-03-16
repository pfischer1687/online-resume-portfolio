import * as React from "react";
import Layout from "../components/layout";
import About from "../components/about";
import Projects from "../components/projects";
import Education from "../components/education";
import Experience from "../components/experience";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
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
