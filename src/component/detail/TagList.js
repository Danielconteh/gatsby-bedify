import React from "react"
import { Link } from "gatsby"
import slugify from "slugify"
import * as Style from "../../assets/style/tagList.module.scss"

export const Tag = ({ bed }) => {
  const newTags = setUpTagList(bed)
  return (
    <div className={Style.tag_container}>
      <div className={Style.tag_container_title}>bed list</div>
      <div className={Style.tag_container_tag}>
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const slug = slugify(text, { lower: true })

          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text.split("-")[0]} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export const setUpTagList = item => {
  const allTags = {}

  item.forEach(el => {
    el.childrenContentfulBedFeatureJsonNode.forEach(el => {
      el.tags.forEach(tag => {
        if (allTags[tag]) {
          allTags[tag] = allTags[tag] + 1
        } else {
          allTags[tag] = 1
        }
      })
    })
  })

  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })

  return newTags
}
