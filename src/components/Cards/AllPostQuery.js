import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Cards from './Cards'

const  AllPost  = ({ children }) => (
  <StaticQuery
    query={graphql`
    query {
        dato {
          allArticles {
            id
            title
            createdAt: _createdAt
          }
        }
      }
    `}
    render={data => (
      data.dato.allArticles.map((post, i) => (
        <Cards cards={post} key={i} />
      ))
    )}
  />
)

export default AllPost 

