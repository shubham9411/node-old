'use strict';
module.exports = function(app) {
  var test = require('../controllers/test');


  // test Routes
  app.route('/test')
    .get(test.test)
    .post(test.test);
};