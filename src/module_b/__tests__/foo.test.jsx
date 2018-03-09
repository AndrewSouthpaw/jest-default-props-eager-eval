import React from 'react'
import { Foo } from '../foo'

jest.mock('moment', () => {
  const moment = require.requireActual('moment')
  return () => moment.utc('2018-03-09 14:43')
})

describe('Foo', () => {
  it('should work', () => {
    expect(1).toEqual(1)
  })
})
