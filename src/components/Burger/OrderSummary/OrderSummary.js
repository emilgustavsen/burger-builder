import React, {Component} from 'react';
import Button from '../../UI/Button/Button'



class OrderSummary extends Component {

    // Does not have to be a class - Changed only for testing.
    
    
    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
            <span style={{textTransform: "capitalize"}}>{igKey}</span> {this.props.ingredients[igKey]}</li>
        })
        return(
            <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price: <strong>{this.props.price.toFixed(2)}$</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={this.props.cancel}>CANCEL</Button>
            <Button btnType='Success' clicked={this.props.continue}>CONTINUE</Button>
        </>
        )
    }

};

export default OrderSummary;