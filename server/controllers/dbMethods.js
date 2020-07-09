const db = require('../../db/index.js');
const axios = require('axios');
const config = require('../../config.js');

module.exports = {
  getInitialRestaurantsFromDb: (req, res) => {
    db.Restaurant.find()
      .sort({ name: 1 })
      .limit(10)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

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
    const { rating, review } = req.body;
    const { place_id } = req.params;

    const docToSave = {
      rating,
      review,
    }

    db.Restaurant.findOneAndUpdate({ place_id }, { $push: { toiletReviews: docToSave } })
      .then((data) => {
        res.status(200).send(`FOUND ${place_id} AND saved review!`);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  deleteAllReviewsFromRestaurant: (req, res) => {
    const { place_id } = req.params;

    db.Restaurant.findOneAndUpdate({ place_id }, { $set: { toiletReviews: [] } })
      .then((data) => {
        res.status(200).send(`Deleted all reviews from ${place_id}`);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
}