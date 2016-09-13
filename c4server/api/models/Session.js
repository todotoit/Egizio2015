/**
* Session.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		socket	: {type: 'string'},
		active	: {type: 'boolean', defaultsTo: true},
		status	: {type: 'string', enum: ['wait','aim','blow','move','done','ok','quit','timeout','error'], defaultsTo: 'wait'},
		started	: {type: 'datetime', defaultsTo: function() {return new Date();}},
		ended		: {type: 'datetime'},
		microphone  : {type: 'boolean', defaultsTo: true},
		queue		: {type: 'boolean', defaultsTo: true},
		x			: {type: 'float', defaultsTo: 0.0},
		y			: {type: 'float', defaultsTo: 0.0},
		video		: {type: 'string'},
		relic		: {model: 'Relic', required: true},
		user		: {model: 'User', required: true}
	},
	afterUpdate: function(updated, cb) {
		sails.sockets.blast("session", updated);
		cb();
	},
	afterCreate: function(created, cb) {
		sails.sockets.blast("session", created);
	}
};

