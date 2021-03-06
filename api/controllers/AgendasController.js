/**
 * AgendasController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  index: function (req, res) {
    "use strict";

    Agenda.find().done(function(err, agendas){
      res.view({agendas: (agendas || [])});
    });

  },

  find: function(req, res){
    "use strict";

    Agenda.find({id: req.param('id')}).done(function(err, agenda){
      res.view({agenda: agenda});
    });

  }
};
