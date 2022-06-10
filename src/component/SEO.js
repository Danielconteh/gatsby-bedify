import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={title}
      meta={[
        { name: "description", content: "simple bed web site" },
        { name: "author", content: "Daniel Conteh" },
        { name: "author", content: "Daniel Conteh" },
      ]}
      defer={false}
    ></Helmet>
  )
}

export default SEO
