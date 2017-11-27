import React from 'react'
import Sidebar from '../sidebar'
import lukeLogo from '../../assets/images/logo.svg'

import { mount, shallow } from 'enzyme'

describe('Sidebar component', () => {
  it('mounts without crashing', () => {
    mount(<Sidebar />)
  })

  it('renders with the correct className', () => {
    const wrapper = shallow(<Sidebar />)
    expect(wrapper.hasClass('sidebar')).toBe(true)
  })

  it('renders the logo', () => {
    const wrapper = shallow(<Sidebar />)
    expect(wrapper.containsMatchingElement(
      <img src={lukeLogo} alt="Luke Rollans" width="120" height="120" />
    )).toBe(true)
  })

  it('renders an email link', () => {
    const wrapper = shallow(<Sidebar />)
    expect(wrapper.containsMatchingElement(
      <a href="mailto:hello@lukerollans.me">
        hello@lukerollans.me
      </a>
    )).toBe(true)
  })

  it('renders a link to my github profile', () => {
    const wrapper = shallow(<Sidebar />)
    expect(wrapper.find('.github').containsMatchingElement(
      <a href="https://github.com/lukerollans">lukerollans</a>
    )).toBe(true)
  })

  it('renders a link to my twitter profile', () => {
    const wrapper = shallow(<Sidebar />)
    expect(wrapper.find('.twitter').containsMatchingElement(
      <a href="https://twitter.com/lukerollans">lukerollans</a>
    )).toBe(true)
  })
})
