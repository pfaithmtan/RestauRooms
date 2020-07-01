const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./controllers/dbMethods.js');

const app = express();
const port = 8080;

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/restaurant/:id', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/api/restaurant/:place_id', db.getRestaurantFromDb);
app.post('/api/restaurant/:place_id/review', db.saveToiletReview);
app.post('/api/restaurant', db.saveRestaurantToDb);

app.listen(port, () => console.log(`RestauRooms server listening on port ${port}!`));