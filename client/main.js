import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import i18n from 'meteor/universe:i18n';

import Header from '../imports/ui/Header.js';
import Products from '../imports/ui/Products.js';
import Locales from '../imports/ui/Locales.js';

Meteor.startup(() => {
  i18n.addTranslations('en-US', {
    Common: {
      welcome: 'Welcome to the Shop Fu!',
      bag: 'Stylish bag',
      sunglasses: 'Cool sunglasses'
    }
  });
  i18n.addTranslations('ru-RU', {
    Common: {
      welcome: 'Добро пожаловать в Shop Fu!',
      bag: 'Модная сумка',
      sunglasses: 'Крутые очки'
    }
  });
  i18n.setOptions({
    // default locale
    defaultLocale: 'en-US',
  });

  function getLang () {
    return (
        navigator.languages && navigator.languages[0] ||
        navigator.language ||
        navigator.browserLanguage ||
        navigator.userLanguage ||
        'en-US'
    );
  }

  function updatePrices(locale) {
    ratios = {
      "ru-RU": 63,
      "en-US": 1
    }

    $('.price').each(function() {
      let $this = $(this);
      let price = parseFloat($this.data('price')) * ratios[locale];

      $this.text(i18n.getCurrencySymbol(locale) + ' ' + i18n.parseNumber(price));
    });
  };



  i18n.onChangeLocale(function(newLocale){
    updatePrices(newLocale);
  });



  render(<Header />, document.getElementById('welcome'));
  render(<Products />, document.getElementById('products'));
  render(<Locales />, document.getElementById('locales'));

  i18n.setLocale(getLang());
});
