import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import i18n from 'meteor/universe:i18n';

export default class Language extends Component {
  switchLocale(event) {
    i18n.setLocale(this.props.lang.code);
  }

  render() {
    return (
      <li onClick={this.switchLocale.bind(this)}>{this.props.lang.name}</li>
    );
  }
}
