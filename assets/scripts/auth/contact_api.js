'use strict';

const app = require('../app_data.js');

const createContact = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/contacts',
    dataType: 'json',
    data,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  })
  .done(success)
  .fail(failure);
};


module.exports = {
  createContact,
  app,
};
