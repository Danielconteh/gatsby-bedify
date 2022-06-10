import React from "react"
import { Link } from "gatsby"
import * as Style from "../../assets/style/bedlist.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const Bed = ({ bed = [] }) => {
  return (
    <div className={Style.container_bed}>
      {bed.map((el, i) => {
        const { title, type, image } = el
        const pathToImg = getImage(image)
        return (
          <Link to={`/${slugify(title, { lower: true })}`} key={title}>
            <GatsbyImage
              image={pathToImg}
              alt={title}
              className={Style.container_bed_img_wrapper}
            />
            <h5>{title}</h5>
            <p>the bed is made up of &nbsp;{type} material</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Bed
