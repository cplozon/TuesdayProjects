import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Diagnostic from './components/ODM';
import  YouTubeSeach  from './components/YouTube';
import  Elements  from './components/theme/Elements';
import AddCarData from './components/addCarData';
import Gmap from './components/map';

const App = (props) => 
 {
		return (
			<Router>
			<Switch>
				<Route exact path={"/"} component={Elements} />
				<Route exact path={"/VideoSearch"} component={YouTubeSeach} />
				<Route exact path={"/Diagnostic"} component={Diagnostic} />
				<Route exact path={"/AddYourCar"} component={AddCarData} />
				<Route exact path={"/FindMechanics"} component={Gmap} />
				</Switch>
			</Router>
			);
	}
    // <div>
    // 	 <Elements />
    //     <YouTubeSeach />
    //     <Diagnostic />
        
    // </div>

export default App;

