'use strict';
module.exports = function(app) {
  var List = require('../controllers/ListController');

  app.route('/people')
    .get(List.listAll)
    .post(List.createStudent);


  app.route('/people/:rut')
    .get(List.readStudent)
    .put(List.updateStudent)
    .delete(List.deleteStudent);
};
