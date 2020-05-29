import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes.js';
import HomeController from './home.controller';

export default angular.module('myApp.home', [uirouter])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;