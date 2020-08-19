import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello world</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>

    <button onClick={gitHubAuth}> GitHub Login </button>
  </Layout>
)

const gitHubAuth = async () => {
  console.log('Authorizing...')
  window.open('https://github.com/login/oauth/authorize?client_id=Iv1.853babdc582ce5f0&redirect_uri=https://vtex.io&state=hashxpasoa')
}

export default IndexPage
