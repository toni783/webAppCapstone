'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './profile.routes';

export class ProfileComponent {

  getCurrentUser: Function;

  constructor(Auth) {
    'ngInject';
    
    this.getCurrentUser = Auth.getCurrentUserSync;
    console.log(this.getCurrentUser().name);
  }
  
}

export default angular.module('webVersionApp.profile', [uiRouter])
  .config(routes)
  .component('profile', {
    template: require('./profile.html'),
    controller: ProfileComponent
  })
  .name;
