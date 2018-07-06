import React, { Component } from 'react';
import Language from './Language.js';
import i18n from 'meteor/universe:i18n';

export default class Locales extends React.Component {
  getLanguages() {
    return i18n.getLanguages().map(code => ({
      code,
      name: i18n.getLanguageNativeName(code)
    })
    );
  }

  renderLanguages() {
    return this.getLanguages().map((lang) => (
      <Language key={lang.code} lang={lang} />
    ));
  }

  render() {
    return (
      <ul>
        {this.renderLanguages()}
      </ul>
    );
  }
}
