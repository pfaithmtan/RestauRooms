const controllers = require('../server/controllers/controllers.js')

// start off database with 20 restaurants in SF and 100 reviews for Garaje (manually added in)

controllers.get20RestaurantsInSF();
controllers.create100ReviewsForOneRestaurant();