import 'babel-polyfill'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'
import dirtyChai from 'dirty-chai'
import 'jsdom-global/register'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

global.NODE_ENV = 'testing'
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
