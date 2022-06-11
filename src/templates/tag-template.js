import React from "react"
import { graphql } from "gatsby"
import Layout from "../component/Layout"
import "../assets/style/dynamic.scss"
import Bed from "../component/detail/BedList"

const mainStyle = {
  minHeight: `calc(100vh - 15rem)`,
}

const spacing = {
  padding: "0.5rem 1rem",
}
const TagTemplate = ({ data }) => {
  const bed = data?.allContentfulBed?.nodes

  return (
    <>
      <Layout>
        <main style={mainStyle}>
          <div className="grid-container" style={spacing}>
            {/* <div className={Style.bed_container_bed}> */}
            <Bed bed={bed} />
            {/* </div> */}
          </div>
        </main>
      </Layout>
    </>
  )
}

export const query = graphql`
  query getSingleBed($tag: String) {
    allContentfulBed(filter: { feature: { tags: { eq: $tag } } }) {
      nodes {
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
export default TagTemplate
