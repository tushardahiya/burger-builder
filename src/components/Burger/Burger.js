import React from "react";
import classes from "../Burger/Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  // LOGIC OF TRASFORMEDINGREDIENTS
  //   array of keys [meat,bacon....]

  // map received meat for example

  // returns an array [    with length=(depends on the ingredient value)  ]

  // this final array will have different length depending upon the value
  // for example for meat the array is [ _,_ ] maybe

  // on this array  (dont care about the value of the elements but their index
  // so map(_,i) => {<burgeringredient /> }
  // this will run on each element of array with the key increasing each time according to the index

  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      // i will get in array of arrays(will have different length depending on amount of ingredients)
      // i will take each array one by one and concat them to an empty array to get an array of objects
      // that will each be an individual ingredient
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
