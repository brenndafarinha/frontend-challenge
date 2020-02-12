const { verifyCoordinates, capitalize } = require('./helpers')
const axios = require('axios').default

const baseURL = "https://storage.googleapis.com/juntossomosmais-code-challenge/input-frontend-apps.json"

const resolvers = {
    Query: {
        getCustomers: (_, { page, size, region }) => axios.get(baseURL).then(res => {
            const initial = (size * page) - size
            const final = size * page
            const customerResult = res.data.results.slice(initial, final)
                .filter(customer => verifyCoordinates(customer.location.coordinates, region))
            return {
                customers: customerResult,
                totalPages: Math.ceil(res.data.results.length / size)
            }
        })
    },
    Name: {
        fullname: (parent, _) => `${capitalize(parent.first)} ${capitalize(parent.last)}`
    }
}

module.exports = resolvers