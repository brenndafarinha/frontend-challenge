const { verifyCoordinates, capitalize, formatAddress } = require('./helpers')
const axios = require('axios').default

const baseURL = "https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json"

const resolvers = {
    Query: {
        getCustomers: (_, { page, size, category, searchKey }) => axios.get(baseURL).then(res => {
            const initial = (size * page) - size
            const final = size * page
            const customerCategoryResult = res.data.results.filter(customer => verifyCoordinates(customer.location.coordinates, category))
            const customerCategoryResultPerPage = customerCategoryResult.slice(initial, final)

            const customersResult = searchKey ? customerCategoryResultPerPage.filter(customer => {
                const fullname = customer.name.first + customer.name.last
                return fullname.toLowerCase().includes(searchKey.toLowerCase())
            }) : customerCategoryResultPerPage

            return {
                customers: customersResult,
                totalPages: Math.ceil((searchKey ? customersResult.length : customerCategoryResult.length)/ size),
                totalCustomers: searchKey ? customersResult.length : customerCategoryResult.length
            }
        })
    },
    Name: {
        fullname: (parent, _) => `${capitalize(parent.first)} ${capitalize(parent.last)}`
    },
    Location: {
        fullAddress: (parent, _) => formatAddress(parent)
    }
}

module.exports = resolvers