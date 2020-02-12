module.exports = `
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
`