'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Student = new Schema({

  rut: {
    type: String,
    required: 'Rut'
  },

  name: {
    type: String,
    required: 'Name'
  },

  lastName: {
    type: String,
    required: 'Last Name'
  },

  age: {
    type: String,
    required: 'Age'
  },

  course: {
    type: String,
    required: 'Class',
  }

});

module.exports = mongoose.model('Students', Student);
