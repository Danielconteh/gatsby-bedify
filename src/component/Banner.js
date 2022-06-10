// import { Link } from "gatsby"
import React from "react"
import BannerAnim, { Element } from "rc-banner-anim"
import TweenOne from "rc-tween-one"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "rc-banner-anim/assets/index.css"
const BgElement = Element.BgElement

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "bed" } }) {
      totalCount
      nodes {
        uid
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`

export default function Banner() {
  const data = useStaticQuery(query)
  const { nodes } = data.allFile
  return (
    <>
      <div className="Banner">
        <header className="hero">
          <BannerAnim
            prefixCls="banner-user"
            type={["across", "vertical"]}
            arrow={false}
            autoPlay
            thumb={false}
          >
            {nodes.map((image, index) => {
              const { name } = image
              const pathToImage = getImage(image)
              return (
                <Element prefixCls="banner-user-elem" key={index}>
                  <BgElement key="bg" className="bg">
                    <GatsbyImage
                      image={pathToImage}
                      alt={name}
                      className="carousel-img"
                      style={{
                        height: "100%",
                      }}
                    />
                    <div className="carousel_overlay"></div>
                  </BgElement>
                  <TweenOne
                    className="banner-user-title"
                    animation={{
                      left: 90,
                      bottom: 20,
                      opacity: 0,
                      type: "from",
                    }}
                  >
                    Enjoy The Luxury
                  </TweenOne>
                  <TweenOne
                    className="banner-user-text"
                    animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
                  >
                    Sleep On Soft And Reliable Bed
                  </TweenOne>
                </Element>
              )
            })}
          </BannerAnim>
        </header>
      </div>
    </>
  )
}
