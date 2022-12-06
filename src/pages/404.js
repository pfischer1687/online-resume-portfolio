import * as React from "react";
import * as styles from "../components/about.module.css";
import Seo from "../components/seo";
import Layout from "../components/layout";
import TypingAnimation from "../components/typing-animation";
import { StaticImage } from "gatsby-plugin-image";

const NotFoundPage = () => {
  const pageTitle = "404";
  React.useEffect(() => {
    TypingAnimation();
  });

  return (
    <Layout pagePath={`/${pageTitle}`}>
      <div className="content-wrap terminal-code">
        <h3>
          <span className="terminal-usr">guest@guest</span>:
          <span className="terminal-path">~</span>${" "}
          <span className={`typing ${styles.typingCd}`}>cd ~/{pageTitle}</span>
        </h3>
        <h3 id="cat-terminal" className="hidden">
          <span className="terminal-usr">guest@guest</span>:
          <span className="terminal-path">~/{pageTitle}</span>${" "}
          <span id="cat-text" className={styles.typingCat}>
            cat {pageTitle}.txt
          </span>
        </h3>
      </div>

      <section id="content" className="content-wrap hidden text-file ">
        <h2 className={styles.aboutMe}>404: Page Not Found</h2>
        <section className={styles.aboutItem}>
          <StaticImage
            className={styles.aboutImg}
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
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="404: Page not found" />;

export default NotFoundPage;
