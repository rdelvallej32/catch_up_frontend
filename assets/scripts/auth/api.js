'use strict';

const app = require('../app_data');

const signUp = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/sign-up',
    data,

  })
  .done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/sign-in',
    data,

  })
  .done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  $.ajax({
    method: "DELETE",
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const passwordChange = (success, failure, data) => {
  //if(!app.user) bad;
  $.ajax({
    method: "PATCH",
    url: app.api + '/change-password/' + app.user.id,
    data,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const notifyUser = (success, failure) => {

  $.ajax({
    method: "POST",
    url: app.api + '/profiles/notify',
      data: {
        'foo': 'bar'
      }
  })
  .done(success)
  .fail(failure);

};

module.exports = {
  signUp,
  signIn,
  signOut,
  passwordChange,
  notifyUser,
  app,
};
