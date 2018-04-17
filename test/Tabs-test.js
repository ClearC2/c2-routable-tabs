import React from 'react'
import {Tabs, Tab} from '../src/Tabs'
import {mount} from 'enzyme'
import {expect} from 'chai'
import {MemoryRouter} from 'react-router-dom'

describe('Tabs', () => {
  it('applies active class to correct tab', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Tabs>
          <Tab to='/' exact title='Home'>
            Test
          </Tab>
          <Tab to='/bar' title='Bar'>
            Bar
          </Tab>
        </Tabs>
      </MemoryRouter>
    )
    expect(wrapper.containsMatchingElement(<a className='nav-link active'>Home</a>)).to.equal(true)
  })

  it('shows correct content for tab', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/bar']}>
        <Tabs>
          <Tab to='/' exact title='Home'>
            Test
          </Tab>
          <Tab to='/bar' title='Bar'>
            Bar
          </Tab>
        </Tabs>
      </MemoryRouter>
    )
    expect(wrapper.containsMatchingElement(<div className='tab-pane active'>Bar</div>)).to.equal(true)
  })

  it('does not render inactive tab panel content', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/bar']}>
        <Tabs>
          <Tab to='/' exact title='Home'>
            Test
          </Tab>
          <Tab to='/bar' title='Bar'>
            Bar
          </Tab>
        </Tabs>
      </MemoryRouter>
    )
    expect(wrapper.containsMatchingElement(<div>Bar</div>)).to.equal(true)
    expect(wrapper.containsMatchingElement(<div>Test</div>)).to.equal(false)
  })

  it('clicking tab show applies active class to correct link', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Tabs>
          <Tab to='/' exact title='Home'>
            Test
          </Tab>
          <Tab to='/bar' title='Bar'>
            Bar
          </Tab>
        </Tabs>
      </MemoryRouter>
    )
    expect(wrapper.containsMatchingElement(<a className='nav-link active'>Home</a>)).to.equal(true)
    expect(wrapper.containsMatchingElement(<a className='nav-link active'>Bar</a>)).to.equal(false)
    wrapper.find('a .nav-link').at(1).simulate('click', {button: 0})
    expect(wrapper.containsMatchingElement(<a className='nav-link active'>Home</a>)).to.equal(false)
    expect(wrapper.containsMatchingElement(<a className='nav-link active'>Bar</a>)).to.equal(true)
  })

  it('clicking tab shows correct content', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Tabs>
          <Tab to='/' exact title='Home'>
            Test
          </Tab>
          <Tab to='/bar' title='Bar'>
            Bar
          </Tab>
        </Tabs>
      </MemoryRouter>
    )
    expect(wrapper.containsMatchingElement(<div>Test</div>)).to.equal(true)
    expect(wrapper.containsMatchingElement(<div>Bar</div>)).to.equal(false)
    wrapper.find('a .nav-link').at(1).simulate('click', {button: 0})
    expect(wrapper.containsMatchingElement(<div>Test</div>)).to.equal(false)
    expect(wrapper.containsMatchingElement(<div>Bar</div>)).to.equal(true)
  })

  it('accepts custom class name', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Tabs className='headless'>
          <Tab to='/' exact title='Home'>
            Test
          </Tab>
          <Tab to='/bar' title='Bar'>
            Bar
          </Tab>
        </Tabs>
      </MemoryRouter>
    )
    expect(wrapper.find('div.headless')).to.have.length(1)
  })
})
