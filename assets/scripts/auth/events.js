'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = function() {
  $('#sign-up').on('submit', function(event){
    event.preventDefault();
    let data = getFormFields(this);
    authApi.signUp(authUi.signUpSuccess, authUi.failure, data);
  });
    $('#sign-in').on('submit', function(event){
      event.preventDefault();
      let data = getFormFields(this);
      console.log(data);
      authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    });
    $('#sign-out').on('click', function(event){
      event.preventDefault();
      authApi.signOut(authUi.signOutSuccess, authUi.failure);
    });
    $('#change-password').on('submit', function (event) {
      event.preventDefault();
      let data = getFormFields(this);
      authApi.passwordChange(authUi.success, authUi.failure, data);
    });
    $('.signInTrigger').on('click', function(event) {
      event.preventDefault();
      $('#myModal').modal('hide');
      $('#sign-in-modal').modal('show');
    });

};

module.exports = {
  addHandlers,
};
