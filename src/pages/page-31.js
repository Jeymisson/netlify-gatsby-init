import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="page 31" />
    <p>Welcome to page 31</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
