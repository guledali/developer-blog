import { graphql } from "gatsby"
import React from "react"
import dateformat from "dateformat"

export default ({ data }) => {
  const article = data.dato.article
  return (
    <div>
      <h1>{article.title}</h1>
      <div>Posted at: {dateformat(article.createdAt, `fullDate`)}</div>
      <div class="content"> {article.body} </div>
    </div>
  )
}

export const query = graphql`
  query($articleID: DatoCMS_ItemId!) {
    dato {
      article(filter: { id: { eq: $articleID } }) {
        title
        createdAt: _createdAt
        body
      }
    }
  }
`
