import React from "react"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import clsx from "clsx"
import styles from "./styles.module.css"

export default () => {
    return (
        <Layout
            title={"Downloads"}
            description="A page for the downloads of Cakebot."
        >
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">Downloads</h1>
                    <p className="hero__subtitle">
                        Download a stable version of Cakebot to run on your
                        computer, or a server of your choice.
                    </p>
                </div>
            </header>
            <main className={styles.spacing}>
                <section className={styles.buttons}>
                    <Link
                        className={clsx(
                            "button button--secondary button--lg",
                            styles.spacing
                        )}
                        to="https://api.github.com/repos/cakebotpro/cakebot/tarball/"
                    >
                        .tar.gz - macOS and Linux
                    </Link>
                </section>
                <section className={styles.buttons}>
                    <Link
                        className={clsx(
                            "button button--secondary button--lg",
                            styles.spacing
                        )}
                        to="https://api.github.com/repos/cakebotpro/cakebot/zipball/"
                    >
                        .zip - Windows
                    </Link>
                </section>
            </main>
        </Layout>
    )
}
