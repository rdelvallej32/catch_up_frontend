'use strict';

const app = require('../app_data.js');
const contApi = require('./contact_api.js');
const authApi = require('./api.js');

const success = (data) => {
  console.log(data);
  console.log("Buenisimo");
};

const failure = (error) => {
  console.error(error);
};

//Function to invoke the handlebars template
const displayContacts = function(contacts) {
  let contactListingTemplate = require('../templates/contact-listing.handlebars');
  $('.table').empty();
  $('.table').append(contactListingTemplate({
    contacts
  }));
};

const dateAdd = (date, interval, units) => {
  var ret = new Date(date); //don't change original date
  switch (interval.toLowerCase()) {
    case 'year':
      ret.setFullYear(ret.getFullYear() + units);
      break;
    case 'month':
      ret.setMonth(ret.getMonth() + 1 * units);
      break;
    default:
      ret = undefined;
      break;
  }
  return ret;
};

const formatDate = (contact) => {
  console.log(contact.last_contacted);

  //user.reminder = data.reminder
  let oldDate = new Date(contact.last_contacted);

  let reminder = dateAdd(oldDate, 'month', contact.reminder);

  let today = new Date();

  if (reminder <= today) {
    $('.reminder').fadeIn(1200);
    $('.reminder').append("Find some time to catch up with " + contact.first_name +
      " " + contact.last_name + ", it has been over " + contact.reminder + " " +
      "month(s), since your last contact!");

      //Test Twilio notification
      // authApi.notifyUser(success, failure);
  }

  console.log(today);
  console.log(reminder);
  console.log(oldDate);

};

const showContactsSuccess = (data) => {
  app.contacts = data.contacts;
  // app.contacts.forEach(formatDate);
  displayContacts(data);
  console.log(app.contacts);
  app.contacts.forEach(formatDate);
};

//UI the handles succesfully creating a contact
const createContactSuccess = (data) => {
  console.log(data);
  console.log("created contact!");
  $('#create-contact-modal').modal('hide');
  $(".modal-backdrop").hide();
  contApi.getContacts(showContactsSuccess, failure);
};

//UI the handles succesfully updating a contact
const updateContactSuccess = (data) => {
  console.log(data);
  console.log("updated contact!");
  ///need to render contacts table because of async -- crazy
  $('#update-contact-modal').modal('hide');
  $(".modal-backdrop").hide();
  contApi.getContacts(showContactsSuccess, failure);
};

//UI the handles succesfully deleting a contact
const deleteContactSuccess = (data) => {
  console.log(data);
  console.log("deleted contact!");
  displayContacts();
  $('#delete-contact-modal').modal('hide');
  $(".modal-backdrop").hide();
  contApi.getContacts(showContactsSuccess, failure);
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
