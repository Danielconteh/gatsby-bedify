import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../component/Layout"
import BedList from "../component/detail/BedList"
import * as Style from "../assets/style/about.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../component/SEO"

export default function About({
  data: {
    allContentfulBed: { nodes: data },
  },
}) {
  return (
    <>
      <Layout>
        <SEO title="About" />

        <div className="grid-container">
          <div className={Style.about_container}>
            <div className={Style.about_section1}>
              <div className={Style.about_section1_par}>
                <h1>how goal!</h1>
                <p>
                  Taxidermy forage glossier letterpress heirloom before they
                  sold out you probably haven't heard of them banh mi biodiesel
                  chia.
                </p>
                <p>
                  Taiyaki tumblr flexitarian jean shorts brunch, aesthetic
                  salvia retro.
                </p>
                <p>
                  Taxidermy forage glossier letterpress heirloom before they
                  sold out you probably haven't heard of them banh mi biodiesel
                  chia.
                </p>
                <Link to="/contact" className={Style.contact_link}>
                  <button>contact</button>
                </Link>
              </div>

              <div className={Style.img_container}>
                <StaticImage
                  src="../assets/images/bed/daybed_3.jpg"
                  alt="about-pic"
                  placeholder="blurred"
                  className={Style.about_img}
                />
              </div>
            </div>
            <div className={Style.title}>decorate you house</div>
            <div className={Style.bed_pic}>
              <BedList bed={data} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allContentfulBed(filter: { feature: { tags: { eq: "single-bed" } } }) {
      nodes {
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        title
        id
        detail {
          dimensions
        }
      }
    }
  }
`
