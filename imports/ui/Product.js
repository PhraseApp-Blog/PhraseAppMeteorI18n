import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent('Common');

export default class Product extends Component {
  render() {
    return (
      <T _tagType='li'>
        {this.props.product.name}
        <span className="price" data-price={this.props.product.price}></span>
      </T>
    );
  }
}

//  _namespace='Common'
