import React from 'react';

import './CounterControl.css';

const counterControl = (props) => (
    <div className={props.classname ? "customcontrol" : "CounterControl"} onClick={props.clicked}>
        {props.label}
    </div>
);

export default counterControl;