import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Results.css';

class Results extends Component {
    render(){
        return(
            <div className="results">
                <h3>Results</h3> 
                <hr/>
                <br/>
                <ol>
                    {this.props.storedresults.map(storedresult =>(
                        <li key={storedresult.id} onClick={()=>this.props.onDeleteResult(storedresult.id)}>{storedresult.value}</li>
                    ))}
                </ol>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        storedresults: state.result.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDeleteResult: (id) => dispatch({type: 'DELETERESULT', resultid: id}),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Results);