'use strict';
// @flow
const angular = require('angular');

interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}

export default class SignupController {
  user: User = {
    name: '',
    email: '',
    password: '',
    role: ''
  };
  errors = {};
  submitted = false;
  Auth;
  $state;
  test = '';

  /*@ngInject*/
  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
  }

  register(form) {
    console.log(this.test);
    this.submitted = true;

    if(form.$valid) {
      return this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        role: "patient"
      })
      .then(() => {
        // Account created, redirect to home
                this.$state.go('main');      })
      .catch(err => {
        err = err.data;
        this.errors = {};
        // Update validity of form fields that match the mongoose errors
        angular.forEach(err.errors, (error, field) => {
          form[field].$setValidity('mongoose', false);
          this.errors[field] = error.message;
        });

      });
    }
  }
}
