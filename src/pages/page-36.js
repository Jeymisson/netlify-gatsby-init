import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="page 36" />
    <p>Welcome to page 36</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
