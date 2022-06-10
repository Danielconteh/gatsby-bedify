import React from "react"
import Banner from "../component/Banner"
import Bed from "../component/Bed"
import Layout from "../component/Layout"
import SEO from "../component/SEO"

import "rc-banner-anim/assets/index.css"

export default function Home() {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <div className="grid-container">
          <Banner />
          <Bed />
        </div>
      </Layout>
    </>
  )
}
