import React from 'react';
import classes from '../Burger/Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

let transformedIngredients = Object.keys(props.ingredients)
        .map( igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i)=> {
               return <BurgerIngredient key={igKey + i } type={igKey} />
            })
        } ).reduce( (arr,el) => {
            return arr.concat(el);
        },[] )

        if(transformedIngredients.length===0){
            transformedIngredients= <p>Please start adding ingredients</p>
        }

        console.log(transformedIngredients);
    
        return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    ); 
};

export default burger;


    // LOGIC OF CONST TRASFORMEDINGREDIENTS
    //   array of keys [meat,bacon....]

        // map received meat for example
        
        // returns an array [    with length=(depends on the ingredient value)  ]
        
        
        // this final array will have different length depending upon the value
        // for example for meat the array is [ _,_ ] maybe 
        
        // on this array  (dont care about the value of the elements but their index 
        // so map(_,i) => {<burgeringredient /> }
        // this will run on each element of array with the key increasing each time according to the index