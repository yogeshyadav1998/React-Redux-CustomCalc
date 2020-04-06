import * as actiontype from './../actions';

const initialState ={
    controls: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case actiontype.ADDCONTROL:
            const newcontrol ={
                label: action.label,
                operation: action.operation,
                value: action.val
            }
            return {
                ...state,
                controls: state.controls.concat(newcontrol)
            }

        default:
            return state;
    }
}

export default reducer;