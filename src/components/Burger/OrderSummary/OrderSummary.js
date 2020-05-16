import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummary= Object.keys(props.ingredients)
        .map(igkey=>{
            return(
            <li key={igkey}>
                <span style={{textTransform:'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]} 
            </li>)
});    

return (
    <Auxiliary>
        <h3>YOUR ORDER</h3>
        <p>A delicious burger with the following ingredients :</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue to Checkout ?</p>
        <button>CANCEL</button>
        <button>CONTINUE</button>
    </Auxiliary>
    )
    
}

export default orderSummary;