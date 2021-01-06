import React from "react"
import Layout from "@theme/Layout"
import clsx from "clsx"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"
import useBaseUrl from "@docusaurus/useBaseUrl"

export default () => {
    return (
        <Layout
            title="Our Sponsor"
            description="Learn more about our sponsor, CloudRepo, and how they help us!"
        >
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
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
                        legendary Maven and PyPI repositories.
                    </p>
                    <p>
                        CloudRepo provides highly-available, fully managed Maven
                        and Python Repositories. Based in the cloud, CloudRepo
                        stores repositories across multiple physical servers
                        ensuring that they are secure. This allows your team to
                        focus on building software. CloudRepo is a proud sponsor
                        of open-source projects, including Cakebot.
                    </p>
                    <div className="admonition admonition-caution alert alert--danger">
                        <div className="admonition-heading">
                            <span className="admonition-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
                                    ></path>
                                </svg>
                            </span>
                            <h4>Removal of Python</h4>
                        </div>
                        <div className="admonition-content">
                            <p>
                                Python, as well as Cakebot v1, are being phased
                                out in favor of the TypeScript rewrite. Check
                                the blog post for more details.
                            </p>
                            <Link to={useBaseUrl("blog/2021/01/06/cakebot-2")} className="button button--outline button--secondary button--lg">
                                View Blog Post
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
