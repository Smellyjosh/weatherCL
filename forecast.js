const request = require('request')
const forecast = (latitude, longitude, callback) =>
{
    const url= 'https://api.darksky.net/forecast/9faeb00501ec2a461aad89a91af404d6/' + latitude + ',' + longitude

    request({url, json: true}, (error, {body}) =>{
        if (error){
            callback('Unable to connect to weather service', undefined)
        } else if (body.error){
            callback('Unable to find locaion, try another search',undefined)
        } else{
            callback(undefined, 'It is ' + body.currently.temperature + ' degress outside with a ' + body.currently.precipProbability +' percent chance of rain')
        }
    })
}
module.exports = forecast