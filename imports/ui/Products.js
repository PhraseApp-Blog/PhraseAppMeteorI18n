import React, { Component } from 'react';
import Product from './Product.js';

export default class Products extends React.Component {
  getProducts() {
    return [
      {
        id: 1,
        name: "bag",
        price: 20
      },
      {
        id: 2,
        name: "sunglasses",
        price: 30
      }
    ]
  }

  renderProducts() {
    return this.getProducts().map((product) => (
      <Product key={product.id} product={product} />
    ));
  }

  render() {
    return (
      <ul>
        {this.renderProducts()}
      </ul>
    );
  }
}
