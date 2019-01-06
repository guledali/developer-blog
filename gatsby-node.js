const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      dato {
        allArticles {
          id
        }
      }
    }
  `)

  data.dato.allArticles.forEach(article => {
    actions.createPage({
      path: `/SinglePost/${article.id}`,
      component: path.resolve(`./src/components/Article.js`),
      context: {
        articleID: article.id,
      },
    })
  })
}
