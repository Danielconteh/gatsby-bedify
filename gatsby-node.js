const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetRecipe {
      allContentfulBed {
        nodes {
          title
          feature {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulBed.nodes.forEach(recipe => {
    recipe.feature.tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag,
        },
      })
    })
  })
}
