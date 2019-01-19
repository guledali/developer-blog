import formatDate from './formatDate'

test('formatDate works', () => {
  const value = formatDate('2018-12-21T14:07:09.256Z')

  expect(value).toBe('2018-12-19')
})
