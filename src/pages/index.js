import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Experience from "../components/expericence"
import Project from "../components/project"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Experience />
    <Project />
  </Layout>
)

export default IndexPage
