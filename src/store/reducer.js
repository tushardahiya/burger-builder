import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        meat:0,
        cheese:0,
        salad:0,
        bacon:0
    },
    totalPrice: 20
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
        default:
            return state;
    }
} ;

export default reducer;