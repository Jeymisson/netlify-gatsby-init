import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="page 4609" />
    <p>Welcome to page 4609</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
