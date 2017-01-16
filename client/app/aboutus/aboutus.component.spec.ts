'use strict';

describe('Component: AboutusComponent', function() {
  // load the controller's module
  beforeEach(module('webVersionApp.aboutus'));

  var AboutusComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AboutusComponent = $componentController('aboutus', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
