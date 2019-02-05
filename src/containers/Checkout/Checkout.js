import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import ContactInformation from "../Checkout/ContactInformation/ContactInformation";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {

  render() {
    return (
      <div>
        <CheckoutSummary ingredients={this.props.ingredients} />
        <Route
          path={this.props.match.url + "/contact-information"}
          render={props => (
            <ContactInformation
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
    price: state.price
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
