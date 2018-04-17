import React from 'react'
import PropTypes from 'prop-types'
import {Route, Link, NavLink} from 'react-router-dom'

const TabLink = ({to, exact, title, subtabs}) => {
  if (subtabs) {
    return (
      <Route path={to} exact={exact} children={({ match }) => (
        <li className='nav-item dropdown'>
          <Link
            to={to}
            className={`nav-link ${match ? 'active' : ''} dropdown-toggle`}
            role='button'
            data-toggle='dropdown'
          >
            {title}
          </Link>
          <div className='dropdown-menu'>
            {subtabs.map((tab, i) => (
              <NavLink
                key={i}
                className='dropdown-item'
                activeClassName='active-nav-link'
                to={`${to}/${tab.to}`}
              >
                {tab.title}
              </NavLink>
            ))}
          </div>
        </li>
      )} />
    )
  }
  return (
    <Route path={to} exact={exact} children={({match}) => (
      <li className='nav-item'>
        <Link to={to} className={`nav-link ${match ? 'active' : ''}`} role='tab'>
          {title}
        </Link>
      </li>
    )} />
  )
}

TabLink.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  title: PropTypes.string,
  subtabs: PropTypes.array
}

const TabPanel = ({to, exact, content}) => (
  <Route path={to} exact={exact} children={({match}) => (
    <div className={`tab-pane ${match ? 'active' : ''}`} role='tabpanel'>
      {match ? content : null}
    </div>
  )} />
)

TabPanel.propTypes = {
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  content: PropTypes.node
}

export const Tab = () => {}

export function Tabs ({children, className = ''}) {
  return (
    <div className={className}>
      <ul className='nav nav-tabs' role='tablist'>
        {React.Children.map(children, tab => (
          <TabLink
            key={`nav-item-${tab.props.to}`}
            to={tab.props.to}
            exact={tab.props.exact}
            title={tab.props.title}
          />
        ))}
      </ul>
      <div className='tab-content'>
        {React.Children.map(children, tab => (
          <TabPanel
            key={`tab-panel-${tab.props.to}`}
            to={tab.props.to}
            exact={tab.props.exact}
            content={tab.props.children}
          />
        ))}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]),
  className: PropTypes.string
}
