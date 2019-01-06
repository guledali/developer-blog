import React from 'react'
import renderer from 'react-test-renderer'
import Cards from './Cards'
import formatDate from '../../utils/formatDate'

//title={post.title}
//image={post.image.url}
//date={post._createdAt}
//short={post.excerpt}
//id={post.id}
//key={i}
describe('<Cards />', () => {
  it('Display component with data', () => {
    const data = {
      data: {
        dato: {
          allArticles: {
            excerpt:
              'When PHP Framework Sucks Series: How not to shape your app in the shape of the framework',
            image: {
              url:
                'https://www.datocms-assets.com/8778/1546791237-php-example.png',
            },
            id: '592737',
            title: 'Part of "When PHP Framework Sucks" series',
            _createdAt: '2018-12-21T14:07:09.256Z',
          },
        },
      },
    }
    const tree = renderer
      .create(
        <Cards
          title={data.data.dato.allArticles.title}
          image={data.data.dato.allArticles.image.url}
          date={formatDate(data.data.dato.allArticles._createdAt)}
          short={data.data.dato.allArticles.excerpt}
          id={data.data.dato.allArticles.id}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
