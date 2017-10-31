const Car = require("../models/cars");

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