module.exports =  `
    type Name {
        title: String
        first: String
        last: String
        fullname: String
    }

    type Dob {
        date: String 
        age: Int
    }

    type Register {
        date: String
        age: Int
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

    type Query {
        getCustomers(page:Int, size:Int, region: String): Pagination
    }
`