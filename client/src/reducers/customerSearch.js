const customerSearch = (state = "", action) => {
    switch (action.type) {
        case 'SET_CUSTOMER_SEARCH':
            return action.search
        default:
            return state
    }
}

export default customerSearch