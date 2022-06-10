import React from "react"
import Layout from "../component/Layout"
import { graphql } from "gatsby"
import { setUpTagList } from "../component/detail/TagList"
import { Link } from "gatsby"
import slugify from "slugify"
import * as Style from "../assets/style/tag.module.scss"
import SEO from "../component/SEO"

const Tag = ({ data }) => {
  const newTags = setUpTagList(data.allContentfulBed.nodes)
  return (
    <Layout>
      <SEO title="Tags" />
      <div className={Style.tag_wrapper}>
        <div className={Style.tag_container}>
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const slug = slugify(text, { lower: true })

            return (
              <Link to={`/tags/${slug}`} key={index} className="tag">
                <h5>{text.split("-")[0]}</h5>
                <p>{value} bed</p>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBed {
      nodes {
        childrenContentfulBedFeatureJsonNode {
          tags
        }
      }
    }
  }
`

export default Tag
