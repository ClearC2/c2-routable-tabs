import 'babel-polyfill'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'
import dirtyChai from 'dirty-chai'
import jsdom from 'jsdom'
import 'jsdom-global/register'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

global.NODE_ENV = 'testing'

const dom = new jsdom.JSDOM('<!doctype html><html><body></body></html>')
const {window} = dom

function copyProps (src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop)
    }), {})
  Object.defineProperties(target, props);
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js'
}
copyProps(window, global)

global.localStorage = mockLocalStorage()

Enzyme.configure({ adapter: new Adapter() })

chai.use(chaiImmutable)
chai.use(dirtyChai)

function mockLocalStorage () {
  let storage = {}
  return {
    setItem: function (key, value) {
      storage[key] = value || ''
    },
    getItem: function (key) {
      return key in storage ? storage[key] : null
    },
    removeItem: function (key) {
      delete storage[key]
    },
    get length () {
      return Object.keys(storage).length
    },
    key: function (i) {
      const keys = Object.keys(storage)
      return keys[i] || null
    }
  }
}
