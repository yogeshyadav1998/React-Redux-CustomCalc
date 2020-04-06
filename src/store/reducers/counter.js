import * as actiontype from './../actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case actiontype.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter= state.counter + 1;
            return newState;
        
        case actiontype.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }

        case actiontype.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        
        case actiontype.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
            
        default:
            
            return state;
    }
}
    

export default reducer;