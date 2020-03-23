const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/204137da2b89bcc972969f0f224b4f9c/${latitude},${longitude}?units=si&lang=en`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast