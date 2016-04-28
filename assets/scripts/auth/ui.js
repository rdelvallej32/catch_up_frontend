'use strict';

const app = require('../app-data');

const signInSuccess = (data) => {
  app.user = data.user;
  // $('#eraseBoard').click();
  console.log(app);
  $('#userInfo').hide();
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
  signOutSuccess,
  app,
};
