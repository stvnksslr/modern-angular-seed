import angular from 'angular';
import uiRouter from 'angular-ui-router';
import footerComponent from './footer.component';

let footerModule = angular.module('footer', [
    uiRouter
])

.component('footer', footerComponent);

export default footerModule;
