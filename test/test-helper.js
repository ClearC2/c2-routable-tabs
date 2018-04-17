import 'babel-polyfill'
import chai from 'chai'
import dirtyChai from 'dirty-chai'
import 'jsdom-global/register'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

global.NODE_ENV = 'testing'

Enzyme.configure({ adapter: new Adapter() })

chai.use(dirtyChai)
