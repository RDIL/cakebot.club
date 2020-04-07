import React from "react"
import classnames from "classnames"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"
import styles from "./styles.module.css"

const features = [
  {
    title: <>Easy to Use</>,
    description: (
      <>
        Cakebot can be installed in less than 2 minutes (with minimal effort),
        and has no configuration required until you want it.
      </>
    )
  },
  {
    title: <>Focus on What Matters</>,
    description: (
      <>
        This webpage is brand new so we will come up with something to put here
        later.
      </>
    )
  },
  {
    title: <>Powered by React</>,
    description: <>Thanks for understanding.</>
  }
]

function Feature({ title, description }) {
  return (
    <div className={classnames("col col--4", styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title={"Welcome"} description="The homepage for Cakebot.">
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/home/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}
