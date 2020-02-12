const { mergeTypes } = require('merge-graphql-schemas')
const paginationType = require('./paginationType')
const geoLocalizationTypes = require('./geoLocalizationTypes')
const pictureType = require('./pictureType')
const customerType = require('./customerType')

const types = [
    paginationType,
    customerType,
    pictureType,
    geoLocalizationTypes
]

module.exports = mergeTypes(types, { all: true })