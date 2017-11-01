import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Diagnostic from './components/ODM';
import  YouTubeSeach  from './components/YouTube';
import  Elements  from './components/theme/Elements';
import AddCarData from './components/addCarData';
import Gmap from './components/map';
//import Gmap2 from './components/map';
import MainChart from './components/flowchart/MainChart';
import LooksLike from './components/flowchart/LooksLike';
import SoundsLike from './components/flowchart/SoundsLike';
import RoughEngine from './components/flowchart/RoughEngine';
import SmellsLike from './components/flowchart/SmellsLike';
import FeelsLike from './components/flowchart/FeelsLike';
import NotWorking from './components/flowchart/NotWorking';
import PoorGas from './components/flowchart/PoorGas';
import Smoke from './components/flowchart/Smoke';
import BlackSmoke from './components/flowchart/BlackSmoke';
import BlackSmokeOne from './components/flowchart/BlackSmokeOne';
import BlackSmokeTwo from './components/flowchart/BlackSmokeTwo';
import BlueSmoke from './components/flowchart/BlueSmoke';
import WhiteSmoke from './components/flowchart/WhiteSmoke';
import WhiteSmokeOne from './components/flowchart/WhiteSmokeOne';
import WhiteSmokeTwo from './components/flowchart/WhiteSmokeTwo';
import AtIdle from './components/flowchart/AtIdle';
import HighwaySpeeds from './components/flowchart/HighwaySpeeds';
import SmellOne from './components/flowchart/SmellOne';
import SmellTwo from './components/flowchart/SmellTwo';


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
				<Route exact path={"/MainChart"} component={MainChart} />
				<Route exact path={"/LooksLike"} component={LooksLike} />
				<Route exact path={"/SoundsLike"} component={SoundsLike} />
				<Route exact path={"/SmellsLike"} component={SmellsLike} />
				<Route exact path={"/FeelsLike"} component={FeelsLike} />
				<Route exact path={"/NotWorking"} component={NotWorking} />
				<Route exact path={"/PoorGas"} component={PoorGas} />
				<Route exact path={"/Smoke"} component={Smoke} />
				<Route exact path={"/BlackSmoke"} component={BlackSmoke} />
				<Route exact path={"/BlueSmoke"} component={BlueSmoke} />
				<Route exact path={"/WhiteSmoke"} component={WhiteSmoke} />
				<Route exact path={"/WhiteSmokeOne"} component={WhiteSmokeOne} />
				<Route exact path={"/WhiteSmokeTwo"} component={WhiteSmokeTwo} />
				<Route exact path={"/BlackSmokeOne"} component={BlackSmokeOne} />
				<Route exact path={"/BlackSmokeTwo"} component={BlackSmokeTwo} />
				<Route exact path={"/RoughEngine"} component={RoughEngine} />
				<Route exact path={"/AtIdle"} component={AtIdle} />
				<Route exact path={"/HighwaySpeeds"} component={HighwaySpeeds} />
				<Route exact path={"/SmellOne"} component={SmellOne} />
				<Route exact path={"/SmellTwo"} component={SmellTwo} />


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

