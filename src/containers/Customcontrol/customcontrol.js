import React, {Component} from 'react';
import {connect} from 'react-redux';
// import * as actiontype from './../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import './customcontrol.css';


class Addcontrol extends Component {

    render(){
        return(
            <div className="Addcontrol">
                <h3>Custom Controls</h3>
                <hr/>
                {this.props.Controls.map(control=>(
                    <CounterControl classname="customcontrol" clicked={() => this.props.operationhandle(control.operation, control.value)} label={control.label +" "+ control.value}   />
                ))}
                </div>
        )
    }
}

const mapStatetoProps = state =>{
    return{
        Controls: state.controls.controls
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        operationhandle: (operation, value) => dispatch({type: operation, val: value})
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Addcontrol);