import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Cards from './Cards'

const AllPost = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        dato {
          allArticles {
            excerpt
            image {
              url
            }
            id
            title
            _publishedAt
          }
        }
      }
    `}
    render={data =>
      data.dato.allArticles.map((post, i) => <Cards cards={post} key={i} />)
    }
  />
)

export default AllPost
