import {createStore} from 'redux'
import reducer from './reducer'


const store = createStore(reducer)
console.log('store initial state', store.getState())

export default store 