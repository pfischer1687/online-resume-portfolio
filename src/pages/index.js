import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";

const IndexPage = () => {
  return <Layout navAnim={true} footerTerminalTime={5000}></Layout>;
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
