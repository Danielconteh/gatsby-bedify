import React from "react"
import * as Style from "../assets/style/bed.module.scss"
import BedList from "./detail/BedList"
import { Tag } from "./detail/TagList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulBed(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        type
        childrenContentfulBedFeatureJsonNode {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default function BedComponent() {
  const {
    allContentfulBed: { nodes: bed },
  } = useStaticQuery(query)

  return (
    <>
      <main className="bed_container">
        <div className={Style.bed_container}>
          {/* <div className={Style.bed_container_tag}> */}
          <Tag bed={bed} />
          {/* </div> */}
          {/* <div className={Style.bed_container_bed}> */}
          <BedList bed={bed} />
          {/* </div> */}
        </div>
      </main>
    </>
  )
}
