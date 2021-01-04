import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    token:null,
    userId:null,
    loading:false,
    error:null,

}


const reducer = ( state=initialState , action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return updateObject( state, {error:null , loading :true});
        case actionTypes.AUTH_SUCCESS: return updateObject( state , {error:null , loading:false , token:action.idToken ,userId:action.userId } );
        case actionTypes.AUTH_FAIL: return updateObject( state , {loading:false , error:action.error});
        default:return state;
    }
};

export default reducer;