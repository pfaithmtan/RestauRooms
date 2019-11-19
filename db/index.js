const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurooms', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    // we're connected!
    console.log('connected!')
});

const restaurantSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: String,
    address: String,
    toiletRating: Number,
    toiletReview: String
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports.Restaurant = Restaurant;
