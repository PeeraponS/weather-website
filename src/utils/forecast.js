const request = require('request');
const chalk = require('chalk');

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f094a346ca43f5a5e6360bee7cf06fc3&query=' + latitude +',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
           callback('Unable to connecr to weather service!', undefined) 
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out.")
        }
    })
}

module.exports = forecast
