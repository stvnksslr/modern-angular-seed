import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';
import angularMessages from 'angular-messages';

import Common from './common/common';
import Components from './components/components';

// import AppComponent from './app.component';

import 'normalize.css';

angular.module('app', [
  angularMessages,
  angularAnimate,
  uiRouter,
  Common.name,
  Components.name
])
  .constant('API_URL', '//localhost:3000')

  .config(($locationProvider) => {
    'ngInject';

    // remove ! hash prefix
    $locationProvider.hashPrefix('');
    // disable html 5 mode
    $locationProvider.html5Mode(false);
  });
