'use strict';

const app = require('../app_data.js');

const createContactSuccess = (data) => {
  console.log(data);
  console.log("Buenisimo");
  $('#create-contact-modal').modal('hide');
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
  app
};
