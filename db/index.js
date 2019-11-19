const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurooms', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    // we're connected!
    console.log('connected!')
});

const reviewSchema = new mongoose.Schema({
    rating: Number,
    review: String
});

const restaurantSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    name: String,
    address: String,
    toiletReviews: [reviewSchema]
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = { Restaurant, Review };
