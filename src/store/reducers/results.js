import * as actiontype from './../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){

        case actiontype.STORERESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result} )
            }

        case actiontype.DELETERESULT:
            const updatedresults = state.results.filter(result => result.id !== action.resultid);
            return{
                ...state,
                results: updatedresults
            }

        default:
            
            return state;
    }
}
    

export default reducer;