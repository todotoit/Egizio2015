/**
 * RelicController
 *
 * @description :: Server-side logic for managing relics
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

function inside(id, array) {
	for (var i = 0; i < array.length; i++) {
		var el = array[i];
		if (el.hasOwnProperty('id')) {
			if (el.id === id) {
				return true;
			}
		}
	}
	return false;
}

module.exports = {
	list: function(req, res) {
		var relic = '> 0';
		General.findOne({id: 1}, function(err, general) {
			if (err) res.send(500);
			if (general) {
				if (req.param('id')) {
					if (req.param('id') === 'all') {
						relic = '> 0';
					}
					else {
						relic = '= ' + req.param('id');
					}
				}
				else {
					relic = '= '+general.current_relic;
				}

				var query = 'select u.displayName,u.photo,u.id from session s join user u on s.user = u.id where s.relic '+relic+' and s.video is not null group by u.id';

				var terms = {};
				var users = [];
				if (req.param('id')) {
					terms.relic = req.param('id');
				}
				else {
					terms.relic = general.current_relic;
				}
				Session.query(query, function(err, users) {
					if(err) {
						console.log(err);
						res.send(500,err);
					}
					else {
						res.ok({relic_id: terms.relic, users: users});
					}
				});
			}
		});
	},
	
	show: function(req, res) {
		Relic.find(function(err, relics) {
			if (err) {return res.serverError(err);}
			return res.ok({relics: relics});
		});
	}


};

