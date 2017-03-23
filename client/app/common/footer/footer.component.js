import template from './footer.html';
import controller from './footer.controller';
import './footer.scss';

let footerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default footerComponent;
