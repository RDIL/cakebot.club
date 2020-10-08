import React from "react"
import Layout from "@theme/Layout"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

export default () => {
    return (
        <Layout
            title={"Our Sponsor"}
            description="Learn more about our sponsor, CloudRepo, and how they help us!"
        >
            <header
                className={clsx("hero hero--primary", styles.heroBanner)}
            >
                <div className="container">
                    <h1 className="hero__title">Our Sponsor</h1>
                    <Link to={"https://cloudrepo.io/"}>
                        <img
                            className="hero__subtitle"
                            src="https://downloads.intercomcdn.com/i/o/208033487/db466dac9058fe351b10dd3b/CloudRepo-Landscape-Brand-Blue.png"
                        />
                    </Link>
                </div>
            </header>
            <main className={styles.spacing}>
                <section className={styles.pushCenter}>
                    <p>
                        The team would like to thank CloudRepo for their
                        legendary Maven repositories.
                    </p>
                    <p>
                        CloudRepo provides highly-available, fully managed Maven
                        and Python Repositories. Based in the cloud, CloudRepo
                        stores repositories across multiple physical servers
                        ensuring that they are secure. This allows your team to
                        focus on building software. CloudRepo is a proud sponsor
                        of open-source projects, including Cakebot.
                    </p>
                </section>
            </main>
        </Layout>
    )
}
