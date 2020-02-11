const axios = require('axios').default
const turf = require('@turf/turf')
const { ApolloServer, gql } = require('apollo-server')

const baseURL = "https://storage.googleapis.com/juntossomosmais-code-challenge/input-frontend-apps.json"

var pt = turf.point([-77, 44]);
var poly = turf.polygon([[
    [-81, 41],
    [-81, 47],
    [-72, 47],
    [-72, 41],
    [-81, 41]
]]);

console.log('TEST', turf.booleanPointInPolygon(pt, poly))

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const isPointInLine = (coord, lineCoord) => {
    console.log('coord inside func', coord)
    // const point = turf.point([coord.latitude, coord.longitude])
    // const line = turf.lineString(lineCoord)
    // return turf.booleanPointOnLine(point, line)
    return coord.latitude >= lineCoord.minlat
        && coord.latitude <= lineCoord.maxlat
        && coord.longitude >= lineCoord.minlon
        && coord.longitude <= lineCoord.maxlon
}

const isPointInPolygon = (coord, polygonCoord) => {
    console.log('coord inside func', coord)
    const point = turf.point([coord.latitude, coord.longitude])
    const polygon = turf.polygon([polygonCoord])
    return turf.booleanPointInPolygon(point, polygon)
}

const verifyCoordinates = (coord, category) => {

    const pointCoordinates = {
        longitude: parseFloat(coord.longitude),
        latitude: parseFloat(coord.latitude)
    }

    const categoryCoordinates = {
        // normal: [
        //     [-54.777426, -26.155681],
        //     [-46.603598, -34.016466]
        // ],
        normal: {
            minlon: -26.155681,
            minlat: -54.777426,
            maxlon: -34.016466,
            maxlat: -46.603598
        },
        especial: [
            [-46.361899, -2.196998],
            [-34.276938, -15.411580],
            [-52.997614, -19.766959],
            [-44.428305, -23.966413],
            [-46.361899, -2.196998],
        ]
    }

    if (category == 'especial') {
        return isPointInPolygon(pointCoordinates, categoryCoordinates.especial)
    }

    if (category == 'normal') {
        return isPointInLine(pointCoordinates, categoryCoordinates.normal)
    }

    if (category == 'trabalhoso') {
        return !isPointInPolygon(pointCoordinates, categoryCoordinates.especial) && !isPointInLine(pointCoordinates, categoryCoordinates.normal)
    }

}

const typeDefs = gql`

    type Name {
        title: String
        first: String
        last: String
        fullname: String
    }

    type Coordinates {
        latitude: String
        longitude: String
    }

    type Location {
        street: String
        city: String
        state: String
        postcode: Int
        coordinates: Coordinates
    }

    type Dob {
        date: String 
        age: Int
    }

    type Register {
        date: String
        age: Int
    }

    type Picture {
        large: String
        medium: String
        thumbnail: String
    }

    type Customer {
        gender: String
        name: Name
        location: Location
        email: String
        dob: Dob
        registered: Register
        phone: String 
        cell: String
        picture: Picture
    }

    type Pagination {
        customers: [Customer]
        totalPages: Int
    }

    type Query {
        getCustomers(page:Int, size:Int, region: String): Pagination
    }
    
`

const resolvers = {
    Query: {
        getCustomers: (_, { page, size, region }) => axios.get(baseURL).then(res => {

            const initial = (size * page) - size
            const final = size * page
            const customerResult = res.data.results.slice(initial, final)
                .filter(customer => verifyCoordinates(customer.location.coordinates, region))
            console.log("TESTEE", verifyCoordinates({ latitude: -45.163965169364175, longitude: -11.623001746111221 }, "especial"))
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

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Running at ${url}`)
})

