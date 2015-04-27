'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

var routerDemo = angular.module('router-demo', ['ui.router']);

routerDemo.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    // HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./home/_home.html')
        });
}]);

export default routerDemo;
