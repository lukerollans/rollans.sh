import React from 'react'
import MeatAndPotatoes from '../meat-and-potatoes'

import { mount, shallow } from 'enzyme'

describe('MeatAndPotatoes component', () => {
  it('mounts without crashing', () => {
    mount(<MeatAndPotatoes />)
  })

  it('renders with the correct className', () => {
    const wrapper = shallow(<MeatAndPotatoes />)
    expect(wrapper.hasClass('meat-and-potatoes')).toBe(true)
  })

  it('renders an introduction', () => {
    const wrapper = shallow(<MeatAndPotatoes />)
    expect(wrapper.find('h1').text()).toBe("Full stack web app developer with a passion for product and user experience.Based in Perth, Australia")
  })

  it('renders a mission statement', () => {
    const wrapper = shallow(<MeatAndPotatoes />)
    expect(wrapper.find('p').first().text()).toBe("I seek to improve the lives of real people through cool, well tested and simplistic software that does more with less.")
  })

  it('renders a list of stuff I like', () => {
    const wrapper = shallow(<MeatAndPotatoes />)
    const tech = ["Elixir", "Ruby", "React", "Phoenix Framework", "Ruby on Rails", "HTML/CSS/SCSS/JavaScript"]

    for(const lang of tech) {
      expect(wrapper.containsMatchingElement(
        <li>{lang}</li>
      )).toBe(true)
    }

    expect(wrapper.find('ul').first().children('li').length).toEqual(tech.length)
  })

  it('renders my time at Shippit', () => {
    const wrapper = shallow(<MeatAndPotatoes />)
    expect(wrapper.containsMatchingElement(
      <li>
        Shippit, 2017 - current,<br />
        Ruby, React
      </li>
    )).toBe(true)
  })

  it('renders my time at Bonsai', () => {
    const wrapper = shallow(<MeatAndPotatoes />)
    expect(wrapper.containsMatchingElement(
      <li>
        Bonsai Branding, 2016 - 2017<br />
        Elixir, React
      </li>
    )).toBe(true)
  })

  it('renders my time at reinteractive', () => {
    const wrapper = shallow(<MeatAndPotatoes />)
    expect(wrapper.containsMatchingElement(
      <li>
        reinteractive, 2015 - 2016<br />
        Ruby
      </li>
    )).toBe(true)
  })

  it('renders my time at birdbrain', () => {
    const wrapper = shallow(<MeatAndPotatoes />)
    expect(wrapper.containsMatchingElement(
      <li>
        birdbrain, 2012 - 2015<br />
        PHP
      </li>
    )).toBe(true)
  })
})
