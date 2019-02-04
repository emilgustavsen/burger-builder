import React from "react";

import styles from "./Order.module.css";

const order = props => {
  const ingredients = [];
  console.log(props.ingredients);

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
    console.log(ingredients);
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name}: {ig.amount}
      </span>
    );
  });

  //   let transformedIngredients = Object.keys(props.ingredients)
  //     .map(igKey => {
  //       return [...Array(props.ingredients[igKey])].map((_, i) => {
  //         return <BurgerIngredient key={igKey + i} type={igKey} />;
  //       });
  //     })
  //     .reduce((arr, el) => {
  //       return arr.concat(el);
  //     }, []);

  return (
    <div className={styles.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: {Number.parseFloat(props.price).toFixed(2)}</p>
    </div>
  );
};

export default order;
