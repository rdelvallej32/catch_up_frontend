'use strict';

const app = require('../app_data.js');

const createContactSuccess = (data) => {
  console.log(data);
  console.log("Buenisimo");
  $('#create-contact-modal').modal('hide');
  $(".modal-backdrop").hide();
};

const displayContacts = function(contacts){
  debugger;
  let contactListingTemplate = require('../templates/contact-listing.handlebars');

    $('.table').append(contactListingTemplate({contacts}));
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
  displayContacts,
  app
};
