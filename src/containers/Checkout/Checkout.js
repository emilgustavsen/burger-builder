import React, { Component } from "react";
import { Route } from "react-router-dom";

import ContactInformation from "../Checkout/ContactInformation/ContactInformation";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    let ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, price: price });
  }

  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.state.ingredients} />
        <Route
          path={this.props.match.url + "/contact-information"}
          render={props => (
            <ContactInformation
              ingredients={this.state.ingredients}
              price={this.state.price}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
