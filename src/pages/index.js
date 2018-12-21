import { graphql } from "gatsby"
import React from "react"
import dateformat from "dateformat"

export default ({ data }) => (
  <div>
    <h1>My Gatsby Blog</h1>
    <p>
      <a href="https://www.gatsbyjs.org/packages/gatsby-source-graphql/">
        Using gatsby-source-graphql
      </a>
    </p>
    {data.dato.allArticles.map((article, i) => (
      <a key={i} href={`/article/${article.id}`}>
        <h2>
          {dateformat(article.createdAt, `fullDate`)} - {article.title}
        </h2>
      </a>
    ))}
  </div>
)

export const query = graphql`
  query {
    dato {
      allArticles {
        id
        title
        createdAt: _createdAt
      }
    }
  }
`
