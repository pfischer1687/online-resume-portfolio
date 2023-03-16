import * as React from "react";
import * as styles from "../components/404.module.css";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import TerminalWrapper from "../components/terminal-wrapper";

const NotFoundPage = () => {
  return (
    <Layout is404={true}>
      <TerminalWrapper
        sectionName="404"
        cdNumLetters={8}
        catNumLetters={11}
        precedesFooter={true}
      >
        <h2 className={styles.title}>404: Page Not Found</h2>
        <section className={styles.content}>
          <StaticImage
            className={styles.dogImg}
            alt="Cute gray dog lying in a driveway with its tongue sticking out"
            src="../images/dog-pic.jpg"
          />
          <p>
            Sorry, we couldn’t find what you were looking for. Please enjoy this
            picture of a cute dog and then click any of the navigation links
            above to navigate through the site.
          </p>

          <p>
            Photo by{" "}
            <a
              href="https://unsplash.com/@mutedtone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noreferrer"
            >
              Christopher Ayme
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              target="_blank"
              rel="noreferrer"
            >
              Unsplash
            </a>
          </p>
        </section>
      </TerminalWrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="404: Page not found" />;

export default NotFoundPage;
