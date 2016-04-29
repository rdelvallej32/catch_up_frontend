'use strict';

const app = require('../app_data.js');

const createContactSuccess = (data) => {
  console.log(data);
  console.log("Buenisimo");
  $('#create-contact-modal').modal('hide');
  $(".modal-backdrop").hide();
};

const displayContacts = function(contacts){
  let contactListingTemplate = require('../templates/contact-listing.handlebars');

    $('.table').append(contactListingTemplate({contacts}));
};

const updateContactSuccess = (data) => {
  console.log(data);
  console.log("Buenisimo");
  displayContacts();
  $('#update-contact-modal').modal('hide');
  $(".modal-backdrop").hide();
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
  createContactSuccess,
  updateContactSuccess,
  displayContacts,
  app
};
