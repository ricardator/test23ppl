var express = require('express'),
  app = express(),
  port = process.env.PORT || 1337,
  mongoose = require('mongoose'),
  Student = require('./api/models/ListModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/23ppldb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/ListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Student Maintainer API server started: ' + port);
