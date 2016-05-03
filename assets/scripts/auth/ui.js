'use strict';

const app = require('../app_data');
const authApi = require('./api.js');
const contApi = require('./contact_api');
const contUi = require('./contact_ui');

const success = (data) => {
  console.log(data);
  console.log("Buenisimo");
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  $('#sign-in-modal').modal('hide'); //hide modal after sign-in
  $('.header').hide();
  $('.sign-out-trigger').show();
  $('.change-password-trigger').show();
  $('#createContactBtn').show();

  // Should invoke the handlebars template if succesfull
  contApi.getContacts(contUi.showContactsSuccess, contUi.failure);

};

const signUpSuccess = (data) => {
  app.user = data.user;
  // $('#eraseBoard').click();
  console.log(app);
  $('#myModal').modal('hide'); //hide modal after sign-up
};

const signOutSuccess = (data) => {
  console.log(data);
  app.user = null;
  console.log(data);
  $('#sign-out-modal').hide('hide');
  $(".modal-backdrop").hide();
  $('.header').show();
  $('.sign-out-trigger').hide();
  $('.change-password-trigger').hide();
  $('.table').empty();
  $('#createContactBtn').hide();
  $('.reminder').hide();
};

const changePwSuccess = (data) => {
  console.log(data);
  console.log("Password Change Clicked!");
  $('#change-password-modal').hide('hide');
  $(".modal-backdrop").hide();
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePwSuccess,
  app,
};
