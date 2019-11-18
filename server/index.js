const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controllers = require('../db/dbMethods.js');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/api/restaurant/:id', controllers.getRestaurant);

app.listen(port, () => console.log(`Restaurant toilet reviews app listening on port ${port}!`));