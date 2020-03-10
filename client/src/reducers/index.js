import { combineReducers } from 'redux'
import customerFilter from './customerFilter'
import customerSearch from './customerSearch'

export default combineReducers({
    customerFilter,
    customerSearch
})