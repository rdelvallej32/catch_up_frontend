'use strict';

const app = require('../app_data');

const signUpSuccess = (data) => {
  app.user = data.user;
  // $('#eraseBoard').click();
  console.log(app);
  $('#myModal').modal('hide'); //hide modal after sign-up
  $('.jumbotron').hide();
  $('#sign-out').show();
};

const signInSuccess = (data) => {
  app.user = data.user;
  // $('#eraseBoard').click();
  console.log(app);
  $('#sign-in-modal').modal('hide'); //hide modal after sign-in
  $('.jumbotron').hide();
  $('#sign-out').show();
};

const signOutSuccess = (data) => {
  console.log(data);
  app.user = null;
  console.log(data);
  $('.user-name').html('');
  $('#sign-out').hide();
};

const success = (data) => {
  console.log(data);
  console.log("Buenisimo");
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  app,
};
