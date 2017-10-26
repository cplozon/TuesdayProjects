import React from 'react';
import './report.css';

const  Report = (props) =>
    <div className='report'>
        <h3>{props.year}  {props.make}</h3>
        <p>
            <span className='system'>{props.system}</span> 
            :
            <span className='fault'>{props.fault}</span>
        </p>
    </div>

export default Report;