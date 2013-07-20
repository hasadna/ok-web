/**
 * ExamplesController
 *
 * @module		:: Controller
 * @description	:: This is an example controller - DO NOT USE IN YOUR CODE
 */

/**

// Copy below to your controller

module.exports = {

  // GET /examples/
  index: function (req, res) {
    "use strict";

    // We ask our Example model to fetch "Example" records from our api
    // We paginate through available records by passing `limit` and `offset` to the `find` method
    // limit: COUNT will limit the results to COUNT records
    // offset: COUNT will return the first COUNT records.
    // Example: {limit: 15, offset: 0} will return the first 15 records (0 - 15).
    // Example: {limit: 15, offset: 15} will return the second 15 records (15 - 29).
    Example.find({limit: 10, offset: 0}).done(function(err, examples){
      res.view({examples: examples});
    });

  },

  // GET /examples/1

  find: function(req, res){
    "use strict";

    Example.find({id: req.param('id')}).done(function(err, examples){

      // Model.find returns an array - we take the first member and use it in our template
      var example = examples[0];

      // we call res.view with a JSON object of variables to pass to the template
      // res.view will render the template under `views/<ControllerName>/<ActionName>.jade
      // In this case, res.view will render `views/examples/find.jade`

      res.view({example: example});
    });

  }

};
**/