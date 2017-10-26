import React, {Component} from 'react';
import Form from './Form';
import Report from './Report';
import {lookupError, lookupCar} from './lib/api';

class Diagnostic extends Component {
     state = {
         make: '',
         year: '',
         system: '',
         fault: ''
     };

     handleErrorRequest = (info) => {
        const resultInfo = {
            make: '',
            year: '',
            system: '',
            fault: ''
        };

        lookupCar(info.vin).then(result => {
            resultInfo.make = result.data.vin_data.maker;
            resultInfo.year = result.data.vin_data.year;
            
            lookupError(info).then(result => {
                console.log(result);
                resultInfo.system = result.data.dtc_data.system;
                resultInfo.fault = result.data.dtc_data.fault;

                this.setState(resultInfo);
            }).catch(e => console.log(e));
        }).catch(err => console.log(err));
     }

     renderReport = () => {
         if(this.state && this.state.make) {
             return <Report {...this.state} />
         } else {
             return null;
         }
     }
 
     render() {
         return (
            <div {...this.props}>
            <Form onSubmit={this.handleErrorRequest} />
            {this.renderReport()}
            {this.props.children}
         </div>
        );
     }
 
}

export default Diagnostic;
 
  
