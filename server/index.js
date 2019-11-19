const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./controllers/dbMethods.js');
const controllers = require('./controllers/controllers.js');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/api/restaurant/:id', db.getRestaurant);
app.get('/api/restaurant/', controllers.getRestaurantsFromZomato);

app.listen(port, () => console.log(`RestauRooms server listening on port ${port}!`));