import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import ContactInformation from "../Checkout/ContactInformation/ContactInformation";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {



  render() {
    let summary = <Redirect to="/" />;
    
    if (this.props.ingredients) {
      const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary ingredients={this.props.ingredients} />
          <Route
            path={this.props.match.url + "/contact-information"}
            render={props => <ContactInformation {...props} />}
          />
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
