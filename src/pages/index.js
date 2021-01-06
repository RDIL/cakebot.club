import React from "react"
import clsx from "clsx"
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
                Cakebot can be installed in less than 2 minutes (with minimal
                effort), and has no configuration required until you want it.
            </>
        ),
    },
    {
        title: <>Lots of Commands</>,
        description: (
            <>
                We have a lot of commands now, ranging from fun to educational,
                and have new commands in most of our updates.
            </>
        ),
    },
    {
        title: <>Self-hostable</>,
        description: (
            <>
                If you aren't happy with Cakebot being on our servers, you can
                get it on your own. This allows for a lot of flexibility. Plus,
                anybody can do it.
            </>
        ),
    },
]

function Feature({ title, description }) {
    return (
        <div className={clsx("col col--4", styles.feature)}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default () => {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    return (
        <Layout
            title={"Welcome"}
            description="The homepage for Cakebot, a modern and feature rich Discord bot."
        >
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
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
