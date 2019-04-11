import {combineReducers} from 'redux'
import todos from './redux/todos.redux'
import visibilityFilter from './redux/visibilityFilter.redux'

export default combineReducers({
  todos,
  visibilityFilter
})
