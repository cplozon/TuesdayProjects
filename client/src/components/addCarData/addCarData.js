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

const carModels = [
	"4Runner",
	"A3 Quattro",
	"Accent",
	"Accord",
	"Accord Hybrid",
	"Aerio",
	"Altima",
	"Amanti",
	"Armada",
	"Avalon",
	"Azera",
	"Boxter",
	"C230",
	"C280",
	"C350",
	"C55 AMG",
	"CL65 AMG",
	"CLK350",
	"CLS500",
	"CLS55 AMG",
	"Camry",
	"Carrera 2 Coupe",
	"Cayenne",
	"Cayman S",
	"Civic",
	"Civic Hybrid",
	"Corolla",
	"Coupe Cambiocorsa",
	"CR-V",
	"E320 CDI",
	"E350",
	"E500",
	"E55 AMG",
	"Eclipse",
	"Elantra",
	"Element",
	"Endeavor",
	"Frontier",
	"FX35",
	"G35",
	"Galant",
	"Grand Vitara XL-7",
	"Grand Vitara XV6",
	"Golf",
	"Highlander",
	"Insight",
	"Jetta",
	"Lancer",
	"Lancer Evolution",
	"Lancer Sportback",
	"LR3",
	"M35",
	"M35X",
	"M45",
	"Maxima",
	"Maybach 57S",
	"Maybach 62",
	"Mazda 3",
	"Mazda 5",
	"Mazda 6",
	"Mazda RX-8",
	"MDX",
	"ML350",
	"ML500",
	"MPV",
	"MX-5",
	"Montero",
	"Murano",
	"New Beetle",
	"Odyssey",
	"Optima",
	"Outlander",
	"Passat",
	"Pathfinder",
	"Phaeton",
	"Pilot",
	"Prius",
	"R350",
	"R500",
	"Range Rover",
	"Range Rover Sport",
	"Ridgeline",
	"Rio",
	"RL",
	"RSX",
	"Q45",
	"Quattroporte",
	"Quest",
	"QX56",
	"Rabbit",
	"Rav4",
	"S-Type",
	"S2000",
	"S350",
	"S40",
	"S430",
	"S60",
	"S80",
	"SL500",
	"SL600",
	"SL65 AMG",
	"SLK280",
	"SLK350",
	"SLR",
	"Santa Fe",
	"Scion",
	"Sedona",
	"Sequoia",
	"Sentra",
	"Sienna",
	"Sonata",
	"Sorento",
	"Spectra",
	"Sportage",
	"Tacoma",
	"Tiburon",
	"Titan",
	"TL",
	"Touareg",
	"TSX",
	"Tucson",
	"Tundra",
	"V50",
	"V70",
	"VDP LWB",
	"X-Type",
	"XC 70",
	"XC 90",
	"XJ8",
	"XK8 Convertible",
	"XKR Convertible",
	"Xterra",
	"Yaris",
]


class Autocomplete extends Component {
	
	get value() {
		return this.refs.input.value
	}
	

	set value(inputValue) {
		this.refs.input.value = inputValue
	}

	render() {
		return (
			<div>
				<div>
					<input ref="input"
					   type="text" 
					   list={this.props.id}/>
					<datalist id={this.props.id}>
						{this.props.array.map(
							(opt, i) => 
							<option key={i}>{opt}</option>)}
					</datalist>
				</div>							
			</div>
		)
	}
}



const AddCarData = ({ make, 
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
			<label htmlFor="make">Make</label>
			<Autocomplete id={"carMakes"}
					      array={carMakes}
				   		  ref={input => _make = input}/>
			</div>
			<br></br>
			<div>
			<label htmlFor="model">Model</label>
			<Autocomplete id={"carModels"}
						  array={carModels}
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

export default AddCarData;