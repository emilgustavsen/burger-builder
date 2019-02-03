import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import styles from "./CheckoutSummary.module.css";
import { withRouter } from "react-router-dom";

const checkoutSummary = props => {
  return (
    <div className={styles.Checkout}>
      <h1>We hope you enjoy your meal!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={() => props.history.goBack()}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={() => props.history.replace('/checkout/contact-information')}>
        CONTINUE
      </Button>
    </div>
  );
};

export default withRouter(checkoutSummary);
