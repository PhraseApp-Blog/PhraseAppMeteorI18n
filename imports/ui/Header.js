import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent();

export default class Header extends React.Component {

  render() {
    return (
      <T _tagType='h1'>Common.welcome</T>
    );
  }
}
