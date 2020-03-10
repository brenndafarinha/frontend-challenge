export const customerFilters = {
    SHOW_ALL: '',
    SHOW_TRABALHOSO: 'SHOW_TRABALHOSO',
    SHOW_ESPECIAL: 'SHOW_ESPECIAL',
    SHOW_NORMAL: 'SHOW_NORMAL'
}

export const setCustomerFilter = filter => ({
    type: 'SET_CUSTOMER_FILTER',
    filter
})


export const setCustomerSearch = search => ({
    type: 'SET_CUSTOMER_SEARCH',
    search
})