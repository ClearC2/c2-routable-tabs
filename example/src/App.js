import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Tabs, Tab} from 'c2-routable-tabs'

export default function App () {
  return (
    <Router>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-4'>
            <Tabs>
              <Tab to='/' exact title='Home'>
                Test
              </Tab>
              <Tab to='/bar' title='Bar'>
                Bar
              </Tab>
              <Tab to='/baz' title='Baz'>
                Baz
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </Router>
  )
}
