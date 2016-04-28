'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');

const signCheck = function() {
  $('#sign-up').on('submit', function(event){
    event.preventDefault();
    let data = getFormFields(this);
    authApi.signUp(authUi.success, authUi.failure, data);

    $('#SignUpModal').modal('hide'); //hide modal after sign-in
      return false;
  });
    $('#sign-in').on('submit', function(event){
      event.preventDefault();
      let data = getFormFields(this);
      console.log(data);
      authApi.signIn(authUi.signInSuccess, authUi.failure, data);

      $('#SignUpModal').modal('hide'); //hide modal after sign-in
        return false;

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


};

module.exports = {
  signCheck,
};
