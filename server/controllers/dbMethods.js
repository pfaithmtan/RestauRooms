const db = require('../../db/index.js');

module.exports = {
    getRestaurant: (req, res) => {
        const { id } = req.params;

        db.Restaurant.find({ id: id })
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((err) => {
                res.status(500).send(err);
            });
    }
}