'use strict';

const app = require('../app_data');

const createContact = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/contacts',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    contentType: false,
    processData: false,
    data,
  })
  .done(success)
  .fail(failure);
};


module.exports = {
  createContact,
  app,
};
