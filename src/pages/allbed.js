import React from "react"
import Bed from "../component/Bed"

import Layout from "../component/Layout"
import SEO from "../component/SEO"

const All_bed = () => {
  return (
    <Layout>
      <SEO title="All-Item" />
      <div className="grid-container">
        <Bed />
      </div>
    </Layout>
  )
}

export default All_bed
