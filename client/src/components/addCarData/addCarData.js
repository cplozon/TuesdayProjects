import React, { PropTypes, Component } from 'react';
import Footer from '../theme/Footer';

const carMakes = [
	"Acura",
	"Alfa Romeo",
	"Aston Martin",
	"Audi", 
	"Bentley", 
	"BMW",
	"Bugatti",
	"Buick", 
	"Cadillac",
	"Chevrolet",
	"Chrysler",
	"Citroen",
	"Dodge",
	"Ferrari",
	"Fiat",
	"Ford",
	"Geely",
	"GM",
	"GMC",
	"Honda",
	"Hyundai",
	"Infiniti",
	"Jaguar",
	"Jeep",
	"Kia",
	"Koenigsegg",
	"Lamborghini",
	"Land Rover",
	"Lexus",
	"Maserati",
	"Mazda",
	"McLaren",
	"Mercedes-Benz",
	"Mini",
	"Mistubishi",
	"Nissan",
	"Pagani",
	"Peugot",
	"Porsche",
	"Ram",
	"Renault",
	"Rolls Royce",
	"Saab",
	"Subaru",
	"Suzuki",
	"Tata Motors",
	"Tesla",
	"Toyota",
	"Volkswagen",
	"Volvo"
]

class Autocomplete extends Component {
	
	get value() {
		return this.refs.inputCar.value
	}

	set value(inputValue) {
		this.refs.inputCar.value = inputValue
	}

	render() {
		return (
			<div>
				<input ref="inputCar"
					   type="text" 
					   list="carMakes" />
				<datalist id="carMakes">
					{this.props.options.map(
						(opt, i) => 
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}



export const AddCarData = ({ make, 
							 model, 
							 year, 
							 onNewCar }) => {
	
	let _make, _model, _year
	
	const submit = (e) => {
		e.preventDefault()
		onNewCar({
			make: _make.value,
			model: _model.value,
			year: _year.value
		})
		_make.value = ''
		_model.value = ''
		_year.value = ''
		
	}

	return (
		<form onSubmit={submit} className="add-car-data">

			<div>
			<label htmlFor="resort">Make</label>
			<Autocomplete options={carMakes}
				   		  ref={input => _make = input}/>
			</div>
			<br></br>
			<div>
			<label htmlFor="model">Model</label>
			<input id="model" 
				   type="text" 
				   required 
				   defaultValue={model}
				   ref={input => _model = input}/>
			</div>
			<br></br>
			<div>
				<input id="year" 
					   type="text" 
					   defaultValue={year}	
					   ref="year"
					   ref={input => _year = input}/>
				<label htmlFor="year">Year</label>
			</div>
			
			<button>Submit Car</button>
		</form>
	)
}

AddCarData.defaultProps = {
	make: "Honda",
	model: "Accord",
	year: "2009",
}

//AddCarData.propTypes = {
//	make: PropTypes.string.isRequired,
//	model: PropTypes.string.isRequired,
//	year: PropTypes.string.isRequired,
//}

export default AddCarData;