import React from "react";
import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/">Burger Builder</NavigationItem>

      {props.auth ? (
        <>
          <NavigationItem link="/orders">Orders</NavigationItem>
          <NavigationItem link="/logout">Sign Out</NavigationItem>
        </>
      ) : (
        <NavigationItem link="/auth">Sign In</NavigationItem>
      )}
    </ul>
  );
};

export default navigationItems;
