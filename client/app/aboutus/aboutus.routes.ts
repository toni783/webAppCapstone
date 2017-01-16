'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('aboutus', {
      url: '/aboutus',
      template: '<aboutus></aboutus>'
    });
}
