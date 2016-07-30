import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
import angularMessages from 'angular-messages';
import mdTable from 'angular-material-data-table';

import Common from './common/common';
import Components from './components/components';
// import AppComponent from './app.component';

import 'normalize.css';
import 'angular-material/angular-material.css';
import 'angular-material-data-table/dist/md-data-table.min.css';

angular.module('app', [angularMaterial,
        angularMessages,
        angularAnimate,
        mdTable,
        uiRouter,
        Common.name,
        Components.name
    ])
    .constant('API_URL', '//localhost:3000')
    .config(($locationProvider) => {
        'ngInject';
        $locationProvider.html5Mode(false);
    });
