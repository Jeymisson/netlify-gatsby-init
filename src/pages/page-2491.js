import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="page 2491" />
    <p>Welcome to page 2491</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
