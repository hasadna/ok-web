/**
 * MembersController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  index: function (req, res) {
    "use strict";

    Member.find().done(function(err, members){
      res.view({members: members});
    });

  },

  find: function(req, res){
    "use strict";
    Member.find({id: req.param('id')}).done(function(err, member){
      res.view({member: member[0]});
    });

  }

};
