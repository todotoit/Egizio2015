/**
 * GeneralController
 *
 * @description :: Server-side logic for managing generals
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

function checkUser(req, name, cb) {
	console.log("is user "+name+"?");
	if (req.body.hasOwnProperty('token')) {
		if (req.body.token != '') {
			User.findOne({token: req.body.token, username: name}, function(err, user) {
				console.log("USER FOUND: "+user);
				if (err) {
					console.log(err.message);
					cb(false);
				}
				if (user) {
					console.log("OK!");
					cb(true);
				}
			});
		}
		else cb(false);
	}
	else cb(false);
}


module.exports = {
	setRelic: function(req, res) {
		checkUser(req, 'relic', function(ok) {
			if (ok) {
				console.log(req.params);
				if (req.param('relic')) {
					General.update({id: 1}, {current_relic: req.param('relic')}, function(err, updated) {
						if (err) {
							res.send(400);
						}
						else {
							console.log("Current relic updated to: "+req.param('relic'));
							res.ok('Relic updated');
						}
					});
				}
				else {
					res.send(400);
				}
			}
			else {
				res.send(401);
			}
		});
	},
	setStatus: function(req, res) {
		checkUser(req, 'relic', function(ok) {
			if (ok) {
				console.log(req.params);
				if (req.param('status')) {
					General.update({id: 1}, {status: req.param('status')}, function(err, updated) {
						if (err) {
							res.send(400);
						}
						else {
							console.log("General status updated to: "+req.param('status'));
							res.ok('Status updated');
						}
					});
				}
			}
			else {
				res.send(401);
			}
		});
	}
};

