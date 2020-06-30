const db = require('../../db/index.js');
const axios = require('axios');
const config = require('../../config.js');

module.exports = {
  saveRestaurantToDb: (req, res) => {
    const { query } = req.query;

    axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
      params: {
        query,
        type: 'restaurant',
        key: config.TOKEN,
      }
    })
      .then((response) => {
        const restaurantsArr = response.data.results;

        for (let i = 0; i < restaurantsArr.length; i++) {
          const restaurant = new db.Restaurant(
            {
              place_id: restaurantsArr[i].place_id,
              name: restaurantsArr[i].name,
              address: restaurantsArr[i].formatted_address,
              toiletReviews: [],
            }
          );

          restaurant.save((err) => {
            if (err) return handleError(err);
            console.log(`Saved restaurant ${restaurantsArr[i].name} to db!`);
          });
        }

        res.status(200).send(`Successfully saved ${restaurantsArr.length} restaurants to DB!`);
      })
      .catch((error) => {
        console.log(error);
        console.log("DID NOT")
        res.status(500).send(error);
      })
  },

  getRestaurantFromDb: (req, res) => {
    const { place_id } = req.params;

    db.Restaurant.find({ place_id })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  saveToiletReview: (req, res) => {
    const { id } = req.params;

    const docToSave = {
      rating: id.rating,
      review: id.review
    }

    const review = new db.Review(docToSave);
    restaurant.save((err) => {

    });
  }
}