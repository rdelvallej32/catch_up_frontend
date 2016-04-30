'use strict';

const app = require('../app_data.js');

//UI the handles succesfully creating a contact
const createContactSuccess = (data) => {
  console.log(data);
  console.log("created contact!");
  $('#create-contact-modal').modal('hide');
  $(".modal-backdrop").hide();
};

//Function to invoke the handlebars template
const displayContacts = function(contacts){
  let contactListingTemplate = require('../templates/contact-listing.handlebars');

    $('.table').append(contactListingTemplate({contacts}));
};

//UI the handles succesfully updating a contact
const updateContactSuccess = (data) => {
  console.log(data);
  console.log("updated contact!");
  ///need to render contacts table because of async -- crazy
  displayContacts();
  $('#update-contact-modal').modal('hide');
  $(".modal-backdrop").hide();
};

//UI the handles succesfully deleting a contact
const deleteContactSuccess = (data) => {
  console.log(data);
  console.log("deleted contact!");
  displayContacts();
  $('#delete-contact-modal').modal('hide');
  $(".modal-backdrop").hide();
};

const success = (data) => {
  console.log(data);
  console.log("Buenisimo");
};

const failure = (error) => {
  console.error(error);
};

const formatDate = (contact) => {
    let stringToParse = contact.last_contacted;
    let dateString = stringToParse.match(/\d{4}\/\d{2}\/\d{2}/);
    return new Date(dateString);

};

module.exports = {
  failure,
  success,
  createContactSuccess,
  updateContactSuccess,
  deleteContactSuccess,
  displayContacts,
  formatDate,
  app
};
