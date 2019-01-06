// @ts-nocheck
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Cards from './Cards'
import PropTypes from 'prop-types'

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
            _createdAt
          }
        }
      }
    `}
    render={data =>
      data.dato.allArticles.map((post, i) => (
        <Cards
          title={post.title}
          image={post.image.url}
          date={post._createdAt}
          short={post.excerpt}
          key={i}
        />
      ))
    }
  />
)

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
export default AllPost
