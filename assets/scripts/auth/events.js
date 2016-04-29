'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./api');
const authUi = require('./ui');
const contApi = require('./contact_api');
const contUi = require('./contact_ui');

const addHandlers = function() {
  //Authentication Events//
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
      authApi.passwordChange(authUi.changePwSuccess, authUi.failure, data);
    });
    //User / Contact Events
    $('#create-contact').on('submit', function (event) {
      event.preventDefault();
      let data = getFormFields(this);
      contApi.createContact(contUi.createContactSuccess, contUi.failure, data);
    });

    $('#update-contact').on('submit', function (event) {
      event.preventDefault();
      let id = $(".update-contact-btn").attr("data-contact-id");
      let data = getFormFields(this);
      contApi.updateContact(contUi.updateContactSuccess, contUi.failure, data, id);
    });

    $('.table').on('click', '.update-contact', function(e){
      e.preventDefault();
      let id = $(e.target).attr("data-contact-id");
      $(".update-contact-btn").attr("data-contact-id", id);
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
