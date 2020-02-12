const turf = require('@turf/turf')

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const isPointInLine = (coord, lineCoord) => {
    const point = turf.point([coord.latitude, coord.longitude])
    const line = turf.lineString(lineCoord)
    return turf.booleanPointOnLine(point, line)
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
        normal: [
            [-54.777426, -26.155681],
            [-46.603598, -34.016466]
        ],
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

module.exports = { verifyCoordinates, capitalize }