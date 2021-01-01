import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

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

const addIngredient = (state , action) => {
    return {
        ...state,
        ingredients:{
            ...state.ingredients,
            [action.ingredientName]:state.ingredients[action.ingredientName] +1
        },
        totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
}

const removeIngredient = (state ,action) => {
    return {
        ...state,
        ingredients:{
            ...state.ingredients,
            [action.ingredientName]:state.ingredients[action.ingredientName] -1
        },
        totalPrice:state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    }
}

const setIngredients = (state ,action) => {
    return updateObject(state , 
        {ingredients:{salad:action.ingredients.salad,
            bacon:action.ingredients.bacon,
            cheese:action.ingredients.cheese,
            meat:action.ingredients.meat},
        totalPrice:initialState.totalPrice,
        error:false 
        }
    )
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action)
            
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state ,action)
            
        case actionTypes.SET_INGREDIENTS: return setIngredients(state , action)
            
        case actionTypes.FETCH_INGREDIENTS_FAILED: return updateObject(state , {error : true})

        default: return state;
    }
} ;

export default reducer;