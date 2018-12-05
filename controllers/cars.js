const Car = require("../models/cars");
const mongoose = require('mongoose');
const url = require("url");

// example request: http://localhost:3000/cars?userId=59f7b7d48d393e2b14f2e8a6
exports.getCars = function(req, res, next) {
	const url_parts = url.parse(req.url, true);
	const query = url_parts.query;
	Car.find({user: mongoose.Types.ObjectId(query.userId)}, function (err, docs) {
		if (err) {
		    return res
		    .status(400)
		    .send({ error: err});
		} else {
			return res.status(200).send(docs);
			}
	})
};

exports.saveCar = function(req, res, next) {

	const make = req.body.make;
	const model = req.body.model;
	const year = req.body.year;
	const user = req.body.user;

	Car.findOne({ make: make, model: model, year: year, user: user }, function(err, existingCar) {
		if (err) {
		 	return next(err);
		}

		// If user is not unique, return error
		if (existingCar) {
		  return res
		    .status(422)
		    .send({ error: "This car is already saved." });
		}

		let car = new Car({
		  make: make,
		  user: user,
		  model: model,
		  year: year
		});

		car.save(function(err, car) {
		  if (err) {
		    return res
		    .status(400)
		    .send({ error: err});
		  }
		});
	});
};