'use strict';
// @flow
const angular = require('angular');

interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
}

export default class SignupController {
  user: User = {
    firstname: '',
    lastname: '',
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
    //console.log(this.$state.current.name);
  }

  register(form) {

    this.submitted = true;

    if(form.$valid) {
      if(this.$state.current.name=='signupPatient'){
        return this.Auth.createUser({
          firstname: this.user.firstname,
          lastname: this.user.lastname,
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
      }else{

        if(this.$state.current.name=='signupDoctor'){
          return this.Auth.createUser({
            firstname: this.user.firstname,
            lastname: this.user.lastname,
            email: this.user.email,
            password: this.user.password,
            role: "doctor"
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

  }
}
