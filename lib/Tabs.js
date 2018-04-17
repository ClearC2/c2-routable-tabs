'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.Tab = undefined
exports.Tabs = Tabs

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _propTypes = require('prop-types')

var _propTypes2 = _interopRequireDefault(_propTypes)

var _reactRouterDom = require('react-router-dom')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var TabLink = function TabLink (_ref) {
  var to = _ref.to,
    exact = _ref.exact,
    title = _ref.title,
    subtabs = _ref.subtabs

  if (subtabs) {
    return _react2.default.createElement(_reactRouterDom.Route, { path: to,
      exact: exact,
      children: function children (_ref2) {
        var match = _ref2.match
        return _react2.default.createElement(
          'li',
          { className: 'nav-item dropdown' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            {
              to: to,
              className: 'nav-link ' + (match ? 'active' : '') + ' dropdown-toggle',
              role: 'button',
              'data-toggle': 'dropdown'
            },
            title
          ),
          _react2.default.createElement(
            'div',
            { className: 'dropdown-menu' },
            subtabs.map(function (tab, i) {
              return _react2.default.createElement(
                _reactRouterDom.NavLink,
                {
                  key: i,
                  className: 'dropdown-item',
                  activeClassName: 'active-nav-link',
                  to: to + '/' + tab.to
                },
                tab.title
              )
            })
          )
        )
      } })
  }
  return _react2.default.createElement(_reactRouterDom.Route, { path: to,
    exact: exact,
    children: function children (_ref3) {
      var match = _ref3.match
      return _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: to, className: 'nav-link ' + (match ? 'active' : ''), role: 'tab' },
          title
        )
      )
    } })
}

TabLink.propTypes = {
  to: _propTypes2.default.string.isRequired,
  exact: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  subtabs: _propTypes2.default.array
}

var TabPanel = function TabPanel (_ref4) {
  var to = _ref4.to,
    exact = _ref4.exact,
    content = _ref4.content
  return _react2.default.createElement(_reactRouterDom.Route, { path: to,
    exact: exact,
    children: function children (_ref5) {
      var match = _ref5.match
      return _react2.default.createElement(
        'div',
        { className: 'tab-pane ' + (match ? 'active' : ''), role: 'tabpanel' },
        match ? content : null
      )
    } })
}

TabPanel.propTypes = {
  to: _propTypes2.default.string.isRequired,
  exact: _propTypes2.default.bool,
  content: _propTypes2.default.node
}

var Tab = exports.Tab = function Tab () {}

function Tabs (_ref6) {
  var children = _ref6.children,
    _ref6$className = _ref6.className,
    className = _ref6$className === undefined ? '' : _ref6$className

  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      'ul',
      { className: 'nav nav-tabs', role: 'tablist' },
      _react2.default.Children.map(children, function (tab) {
        return _react2.default.createElement(TabLink, {
          key: 'nav-item-' + tab.props.to,
          to: tab.props.to,
          exact: tab.props.exact,
          title: tab.props.title
        })
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'tab-content' },
      _react2.default.Children.map(children, function (tab) {
        return _react2.default.createElement(TabPanel, {
          key: 'tab-panel-' + tab.props.to,
          to: tab.props.to,
          exact: tab.props.exact,
          content: tab.props.children
        })
      })
    )
  )
}

Tabs.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.element]),
  className: _propTypes2.default.string
}
