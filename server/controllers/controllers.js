const axios = require('axios');
const faker = require('faker');
const config = require('../../config.js');
const db = require('../../db/index.js');
const { random } = require('faker');

const get20RestaurantsInSF = (req, res) => {
  axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
    params: {
      query: 'San Francisco',
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

}

const create100ReviewsForOneRestaurant = (req, res) => {
  for (let i = 0; i < 100; i++) {
    const review = {
      rating: Math.floor(Math.random() * (6 - 1) + 1),
      review: faker.lorem.sentences(),
    }

    db.Restaurant.find().limit(1)
      .then((data) => {
        const randomRestaurantPlaceId = data[0].place_id;

        db.Restaurant.findOneAndUpdate({ place_id: randomRestaurantPlaceId }, { $push: { toiletReviews: review } })
          .then((data) => {
            res.status(200).send(`FOUND ${place_id} and pushed a new review!`);
          })
          .catch((err) => {
            res.status(500).send(err);
          });

        res.status(200).send(randomRestaurantPlaceId);
      })
      .catch((err) => {
        res.status(500).send(err);
      })
  }
}

module.exports = {
  get20RestaurantsInSF,
  create100ReviewsForOneRestaurant,
}