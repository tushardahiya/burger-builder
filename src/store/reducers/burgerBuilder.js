import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients:null,
    totalPrice: 20,
    error:false
};

const INGREDIENT_PRICES = {
    salad: 5.0,
    cheese: 15.0,
    meat: 30.0,
    bacon: 20.0,
  };

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName] +1
                },
                totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName] -1
                },
                totalPrice:state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
        
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients:action.ingredients,
                error:false
            }

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error:true
            }

        default:
            return state;
    }
} ;

export default reducer;