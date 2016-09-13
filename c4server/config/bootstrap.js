/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

	sails.services.passport.loadStrategies();

	Relic.findOrCreate({id: 1}, {id: 1, name: 'reperto 1'}).exec(function createdCB(err,created){ console.log("created relic"); });
	Relic.findOrCreate({id: 2}, {id: 2, name: 'reperto 2'}).exec(function createdCB(err,created){ console.log("created relic"); });
	General.findOrCreate({id: 1}, {status: 'on', current_relic: 1}).exec(function createdCB(err,created){console.log("created status");});

/*
 attributes: {
 username    : { type: 'string', unique: true },
 email       : { type: 'email',  unique: true },
 displayName : { type: 'string'},
 photo       : { type: 'string'},
 provider    : { type: 'string'},
 token		: { type: 'string'},
 passports   : { collection: 'Passport', via: 'user' },
 sessions	: { collection: 'Session', via: 'user'}
 },

 */
	User.create({username: 'ros',   token: 'no7iecA78EDi72yn7dfy487kk23bxYsi'}).exec(function createdCB(err,created){console.log("created user ros");});
	User.create({username: 'relic', token: 'aYhi56HAht2d76t34h298GUhtDs1wHIu'}).exec(function createdCB(err,created){console.log("created user relic");});

	// deactivates sessions that were incorrectly left active because of previous server restart
	Session.update({active: true}, {active: false, ended: new Date()}).exec(function updatedCB(err,updated){console.log("deactivated pending sessions");});

	// check if it's a reconnection of an active session
	sails.io.on("connect",function(newSocket){
		console.log("a socket connected");
		//console.log(newSocket);
	});


	// set first bernard status
	var stats = 'offline';

   var date = new Date();
   var hours = date.getHours();
   console.log('hours on bootstrap...',hours)
   if(hours >= 8 && hours < 20){
   	stats = 'maintenance';
   }
	sails.config.settings.robot.status = stats;

	// It's very important to trigger this callback method when you are finished
	// with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
	cb();
};
