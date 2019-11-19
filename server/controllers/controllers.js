// const request = require('request');
const axios = require('axios');
const config = require('../../config.js');

const getRestaurantsFromZomato = (req, res) => {
    // let options = {
    //     url: 'https://developers.zomato.com/api/v2.1/restaurant',
    //     headers: {
    //         'User-Agent': 'request',
    //         'Authorization': `token ${config.TOKEN}`
    //     }
    // };

    console.log('HERES THE REQUEST:', req);

    // request('http://www.google.com', (error, response, body) => {
    //     console.log('error:', error); // Print the error if one occurred
    //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //     console.log('body:', body); // Print the HTML for the Google homepage.
    // });

    axios.get('https://developers.zomato.com/api/v2.1/restaurant', { headers: {'user-key': `${config.TOKEN}`} })
        .then((data) => {
            // handle success
            console.log(data);
            console.log("HELLO WENT THROUGH")
            res.status(200).send(data);
            
        })
        .catch((error) => {
            // handle error
            console.log(error);
            console.log("DID NOT")
            res.status(500).send(error);
        })

    // axios({
    //     method: "GET",
    //     url: "https://developers.zomato.com/api/v2.1/restaurant",
    //     headers: {
    //         "user-key": `${config.TOKEN}`,
    //         "content-type": "application/json"
    //     }
    // })
    //     .then((response) => {
    //         console.log(response.data.restaurants[0].restaurant.name);
    //         res.status(200).send(response.data[0]);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         res.status(500).send(error);
    //     });

}

module.exports.getRestaurantsFromZomato = getRestaurantsFromZomato;