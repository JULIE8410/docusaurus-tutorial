import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Docusaurus Tutorial - 5min ⏱️
          </Link>
          <button
            onClick={() => {
              console.log("clicked");
            }}
          >
            Click me
          </button>
          <div class="AccordionRoot" data-orientation="vertical">
            <div
              data-state="open"
              data-orientation="vertical"
              class="AccordionItem"
            >
              <h3
                data-orientation="vertical"
                data-state="open"
                class="AccordionHeader"
              >
                <button
                  type="button"
                  aria-controls="radix-0"
                  aria-expanded="true"
                  data-state="open"
                  data-orientation="vertical"
                  id="radix-1"
                  class="AccordionTrigger"
                  data-radix-collection-item=""
                >
                  Is it accessible?
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="AccordionChevron"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="open"
                id="radix-0"
                role="region"
                aria-labelledby="radix-1"
                data-orientation="vertical"
                class="AccordionContent"
                style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width); transition-duration: 0s; animation-name: none; --radix-collapsible-content-height: 79.5px; --radix-collapsible-content-width: 300px;"
              >
                <div class="AccordionContentText">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </div>
              </div>
            </div>
            <div
              data-state="closed"
              data-orientation="vertical"
              class="AccordionItem"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                class="AccordionHeader"
              >
                <button
                  type="button"
                  aria-controls="radix-2"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-3"
                  class="AccordionTrigger"
                  data-radix-collection-item=""
                >
                  Is it unstyled?
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="AccordionChevron"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-2"
                hidden=""
                role="region"
                aria-labelledby="radix-3"
                data-orientation="vertical"
                class="AccordionContent"
                style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"
              ></div>
            </div>
            <div
              data-state="closed"
              data-orientation="vertical"
              class="AccordionItem"
            >
              <h3
                data-orientation="vertical"
                data-state="closed"
                class="AccordionHeader"
              >
                <button
                  type="button"
                  aria-controls="radix-4"
                  aria-expanded="false"
                  data-state="closed"
                  data-orientation="vertical"
                  id="radix-5"
                  class="AccordionTrigger"
                  data-radix-collection-item=""
                >
                  Can it be animated?
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="AccordionChevron"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h3>
              <div
                data-state="closed"
                id="radix-4"
                hidden=""
                role="region"
                aria-labelledby="radix-5"
                data-orientation="vertical"
                class="AccordionContent"
                style="--radix-accordion-content-height: var(--radix-collapsible-content-height); --radix-accordion-content-width: var(--radix-collapsible-content-width);"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
