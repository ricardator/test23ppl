'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Student = new Schema({

  rut: {
    type: String,
    required: [true, 'rut field is mandatory'],
  },

  name: {
    type: String,
    required: [true, 'Please enter your name']
  },

  lastName: {
    type: String,
    required: [true, 'Last Name field is mandatory']
  },

  age: {
    type: String,
    required: [true, 'you will never be old!']
  },

  course: {
    type: String,
    required: [true, 'do not miss your class']
  }

});

module.exports = mongoose.model('Students', Student);
