import React from 'react'
import renderer from 'react-test-renderer'
import Cards from './Cards'

describe('<Cards />', () => {
  it('Display component with data', () => {
    const tree = renderer.create(<Cards />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
