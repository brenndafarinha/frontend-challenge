import { customerFilters } from '../actions'

const customerFilter = (state = customerFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_CUSTOMER_FILTER':
            return action.filter
        default:
            return state
    }
}

export default customerFilter