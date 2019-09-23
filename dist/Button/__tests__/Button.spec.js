import { shallow } from 'enzyme'
import React from 'react'

import Button from '../'

describe('Button', () => {
  describe('Primary', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Button>Test</Button>)

      expect(wrapper).toMatchSnapshot()
    })
  })
})
