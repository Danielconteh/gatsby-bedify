import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../component/Layout"
import "../assets/style/dynamic.scss"
import SEO from "../component/SEO"

const mainStyle = {
  minHeight: `calc(100vh - 15rem)`,
}


const ContentfullBed = ({ data }) => {
  const { nodes } = data?.allContentfulBed

  const wordCheck = el => {
    return el
  }

  return (
    <Layout>
      {nodes.map(el => {
        const {
          title,
          image,
          description: { description },
          detail: { dimensions, inches_long, inches_wide_ },
          childrenContentfulBedFeatureJsonNode: { tag },
        } = el
        console.log(dimensions, inches_long, inches_wide_, tag)
        return (
          <main style={mainStyle}>
            <SEO title={title} />
            <div className="grid-container">
              <div className="container">
                {/* IMAGE SECTION */}
                <div className="container_imageWrapper">
                  <GatsbyImage
                    image={getImage(image)}
                    title={title}
                    className="img"
                  />
                </div>
                {/* DESCRITION SECTION */}
                <div className="des">
                  <h1 className="des_title">{title}</h1>
                  <p>{wordCheck(description)}</p>
                </div>
              </div>

              {/* other items */}

              <div className="detail">
                <div className="detail_title">description</div>
                {/*  dimensions, inches_long, inches_wide_ */}

                <div className="item_container">
                  <div>
                    <span className="item_des"> dimension</span>
                    <span className="item_num"> {dimensions}</span>
                  </div>

                  <div>
                    <span className="item_des"> inches long</span>
                    <span className="item_num"> {inches_long}</span>
                  </div>

                  <div>
                    <span className="item_des"> inches wide</span>
                    <span className="item_num"> {inches_wide_}</span>
                  </div>
                </div>

                {/* <span>{dimensions}</span> */}
              </div>
            </div>
          </main>
        )
      })}
    </Layout>
  )
}
export const query = graphql`
  query SingleQuery($title: String) {
    allContentfulBed(filter: { title: { eq: $title } }) {
      nodes {
        title
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
        description {
          description
        }
        detail {
          dimensions
          inches_long
          inches_wide_
        }
        childrenContentfulBedFeatureJsonNode {
          tags
        }
      }
    }
  }
`

export default ContentfullBed
