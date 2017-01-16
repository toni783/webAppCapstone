'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './aboutus.routes';

export class AboutusComponent {
  /*@ngInject*/
  constructor() {
    //this.message = 'Hello';
  }
}

export default angular.module('webVersionApp.aboutus', [uiRouter])
  .config(routes)
  .component('aboutus', {
    template: require('./aboutus.html'),
    controller: AboutusComponent,
    controllerAs: 'aboutusCtrl'
  })
  .name;
