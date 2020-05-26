'use strict';

var mongoose = require('mongoose'),
  Student = mongoose.model('Students');


exports.listAll = function(req, res) {
  Student.find({}, function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};


exports.createStudent = function(req, res) {
  var newStudent = new Student(req.body);
  newStudent.save(function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};


exports.readStudent = function(req, res) {
  Student.findById(req.params.studentRut, function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};


exports.updateStudent = function(req, res) {
  Student.findOneAndUpdate({rut: req.params.studentRut}, req.body, {new: true}, function(err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
};


exports.deleteStudent = function(req, res) {
  Student.removeOne({
    rut: req.params.studentRut
  }, function(err, student) {
    if (err)
      res.send(err);
    res.json({ message: 'Student successfully deleted' });
  });
};
