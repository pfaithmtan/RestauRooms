const data = require('./dummyData.js');
const db = require('./index.js');

for (let i = 0; i < data.length; i++) {
    const restaurant = new db.Restaurant(data[i]);
    restaurant.save((err) => {
        if (err) return handleError(err);
        // saved!
        console.log('Saved to db!');
    });
}
