import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actiontype from './../../store/actions';

import {Row, Col, Input } from 'antd';
import './Counter.css';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state={
        value:'',
        operation:'',
        label:''
    }
    changehandler = (event)=>{
        const state= this.state;
       const value= event.target.value;
       this.setState({
           ...state,
           [event.target.name]: value
       })
       console.log(value);
    }

    render () {
        return (
            <div className="calc">
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button className="calcbutton" onClick={() => this.props.onStoreResult(this.props.counter)}>Store Result</button>
                <hr/>
                <div className="form">
                <h3>Add Control</h3> 
                <hr/>
                <Row className="formitem">
                    <Col >
                    <Input name="label"  onChange={this.changehandler}  value={this.state.label} placeholder="LABEL" />
                    </Col>
                </Row>
                <Row className="formitem">
                    <Col >
                    <label>Operation: </label>
                    <select onChange={this.changehandler} name="operation" value={this.state.operation}>
                        <option value={actiontype.ADD}>ADD</option>
                        <option value='SUBTRACT'>SUBTRACT</option>
                        <option value='MULTIPLY'>MULTIPLY</option>
                        <option value='DEVIDE'>DEVIDE</option>
                    </select>
                    </Col>
                </Row>
                <Row className="formitem">
                    <Col >
                    <Input onChange={this.changehandler} name="value" value={this.state.value} placeholder="VALUE" />
                    </Col>
                </Row>
                <Row className="formitem">
                    <Col >
                    <button className="addbutton" onClick={() => this.props.onAddControl(this.state.value, this.state.operation, this.state.label) }  >Add Control</button>
                    </Col>
                </Row>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actiontype.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actiontype.DECREMENT}),
        onAddCounter: () => dispatch({type: actiontype.ADD, val: 5}),
        onSubtractCounter: () => dispatch({type: actiontype.SUBTRACT, val: 5}),
        onStoreResult: (result) => dispatch({type: actiontype.STORERESULT, result: result}),
        onAddControl: (value, operation, label) => dispatch({type: actiontype.ADDCONTROL, val: value, label: label, operation: operation})    
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);