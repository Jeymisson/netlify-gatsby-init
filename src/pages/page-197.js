import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="page 197" />
    <p>Welcome to page 197</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
