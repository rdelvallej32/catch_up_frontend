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
  $('.signInTrigger').hide();
  $('.intro').hide();
  $('.change-password-trigger').show();
  $('#createContactBtn').show();
  $( '#sign-in' ).each(function(){
    this.reset();
});

  // Should invoke the handlebars template if succesfull
  contApi.getContacts(contUi.showContactsSuccess, contUi.failure);

};

const signUpSuccess = (data) => {
  //Should invoke sign-in ajax call to sign user in after sign up
  // authApi.signIn(signInSuccess, failure, data);
  app.user = data.user;
  console.log(data);
  console.log(app);
  $('#myModal').modal('hide'); //hide modal after sign-up
  $('.signInTrigger').show();
  $( '#sign-up' ).each(function(){
    this.reset();
  });

  console.log(app.user);


};

const signOutSuccess = (data) => {
  console.log(data);
  app.user = null;
  console.log(data);
  $('#sign-out-modal').hide('hide');
  $(".modal-backdrop").hide();
  $('.intro').show();
  $('body').removeClass('modal-open');
  $('.header').show();
  $('.sign-out-trigger').hide();
  $('.change-password-trigger').hide();
  $('.table').empty();
  $('#createContactBtn').hide();
  $('.reminder').hide();
  $('.signInTrigger').show();
};

const changePwSuccess = (data) => {
  console.log(data);
  console.log("Password Change Clicked!");
  $('#change-password-modal').hide('hide');
  $(".modal-backdrop").hide();
  $('body').removeClass('modal-open');
  $( '#change-password' ).each(function(){
    this.reset();
  });
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
