import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";

import axios from "../../../axios-orders";
import styles from "./ContactInformation.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactInformation extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Emil",
        address: {
          street: "Gone Street 5",
          zipCode: "2849",
          country: "Denmark"
        },
        email: "test@testing.com"
      },
      deliveryMethod: "express"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
    console.log(this.props.price);
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="text" name="street" placeholder="Street" />
        <input type="text" name="postal" placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.ContactInformation}>
        <h4>Enter your contact information:</h4>
        {form}
      </div>
    );
  }
}

export default ContactInformation;
