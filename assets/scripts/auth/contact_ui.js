'use strict';

const app = require('../app_data.js');
const contApi = require('./contact_api.js');

//Function to invoke the handlebars template
const displayContacts = function(contacts){
  let contactListingTemplate = require('../templates/contact-listing.handlebars');
    $('.table').empty();
    $('.table').append(contactListingTemplate({contacts}));
};

const showContactsSuccess = (data) => {
  // console.log(data);
  app.contacts = data.contacts;
  // app.contacts.forEach(formatDate);
  displayContacts(data);
  console.log(app.contacts);
};

const success = (data) => {
  console.log(data);
  console.log("Buenisimo");
};

const failure = (error) => {
  console.error(error);
};

//UI the handles succesfully creating a contact
const createContactSuccess = (data) => {
  console.log(data);
  console.log("created contact!");
  $('#create-contact-modal').modal('hide');
  $(".modal-backdrop").hide();
  contApi.getContacts(showContactsSuccess,failure);
};

const formatDate = (contact) => {
    let stringToParse = contact.last_contacted;
    let dateString = stringToParse.match(/\d{4}\/\d{2}\/\d{2}\s+\d{2}:\d{2}/);
    console.log(new Date(dateString));

};

//UI the handles succesfully updating a contact
const updateContactSuccess = (data) => {
  console.log(data);
  console.log("updated contact!");
  ///need to render contacts table because of async -- crazy
  $('#update-contact-modal').modal('hide');
  $(".modal-backdrop").hide();
  contApi.getContacts(showContactsSuccess,failure);
};

//UI the handles succesfully deleting a contact
const deleteContactSuccess = (data) => {
  console.log(data);
  console.log("deleted contact!");
  displayContacts();
  $('#delete-contact-modal').modal('hide');
  $(".modal-backdrop").hide();
  contApi.getContacts(showContactsSuccess,failure);
};

module.exports = {
  failure,
  success,
  createContactSuccess,
  updateContactSuccess,
  deleteContactSuccess,
  displayContacts,
  showContactsSuccess,
  formatDate,
  app
};
