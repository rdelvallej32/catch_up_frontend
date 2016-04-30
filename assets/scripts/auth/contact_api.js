'use strict';

const app = require('../app_data.js');

//sends a post request to create a new contact associated to the user
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

//Send an Get request to index all the contacts associated to the user
const getContacts = (success, failure) => {
  $.ajax({
    method: "GET",
    url: app.api + '/contacts',
    dataType: 'json',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  })
.done(success)
.fail(failure);
};

//Sends a Patch Request to Update Contact
const updateContact = (success, failure, data, contact_id) => {
  //if(!app.user) bad;
  $.ajax({
    method: "PATCH",
    url: app.api + '/contacts/' + contact_id,
    data,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

//sends a delete request to delete a contact associated to the user
const deleteContact = (success, failure, contact_id) => {
    $.ajax({
      url: app.api + '/contacts/' + contact_id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    })
    .done(success)
    .fail(failure);
  };


module.exports = {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
  app,
};
