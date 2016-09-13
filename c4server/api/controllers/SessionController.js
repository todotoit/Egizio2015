/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var http = require('http');

function sessionData(s, id) {
	var current_user = (s.socket == id);
	return {status: s.status, started: s.started, microphone: s.microphone, x: s.x, y: s.y, user: {id: s.user.id, displayName: s.user.displayName, photo: s.user.photo, provider: s.user.provider, current: current_user}};
}

function isRobot(req, cb) {
	console.log("is robot?");
	if (req.isSocket && req.body.hasOwnProperty('token')) {
		if (req.body.token != '') {
			User.findOne({token: req.body.token, username: 'ros'}, function(err, user) {
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

	home: function(req, res) {	
		return res.view('homepage', {
			facebookAppId: sails.config.passport.facebook.options.clientID
		});
	},

	coordsForRelic: function(req, res) {
		General.findOne({id: 1}, function(err, general) {
			// current relic
			if (err) res.send(500);
			if (general) {
				var relic = general.current_relic;
				if (req.param('relic')) {
					relic = req.param('relic');
				}
				Session.find({relic: relic}, function(err, sessions) {
					if (err) res.send(err.message);
					else {
						var output = {relic: relic, coordinates: []};
						for(var i = 0; i < sessions.length; i++) {
							output.coordinates.push({x: sessions[i].x, y: sessions[i].y});
						}
						res.ok(output);
					}
				});

			}
		});
	},

	userstats: function (req, res) {
		console.log("user stats");
		var output = {};
		// user signups grouped by day
		User.query('select count(*) as number, DATE_FORMAT(createdAt, "%Y-%m-%d") as `date` from user group by DATE_FORMAT(createdAt, "%Y-%m-%d") order by `date` asc', function(err, users) {
			if (err) res.send(500, err.message);
			if (users) {
				output.users = users;
				Session.query('select count(*) as number, DATE_FORMAT(createdAt, "%Y-%m-%d") as `date` from session where video is not null group by DATE_FORMAT(createdAt, "%Y-%m-%d") order by `date` asc', function(err, sessions) {
					if (err) res.send(500, err.message);
					if (sessions) {
						output.blows = sessions;

						res.view({
							layout: 'layout_nosocket',
							output: output
						});
					}
				});

			}
		});
	},

	contributors: function(req, res) {
		User.query('select u.id, u.displayName, u.photo, s.createdAt as last_session from user u join session s on s.user = u.id where s.video is not null group by u.id order by last_session DESC limit 40', function(err, users) {
			if (err) res.send(500, err.message);
			else {
				res.send({contributors: users});
			}
		});
	},

	stats: function(req, res) {
		console.log("stats");

		Session.query('select user,count(id) from session where video is not null group by user', function(err, users) {
			if (err) res.send(err.message);
			else {
				Session.query('select count(*) as blows from session where video is not null', function(err, count_total) {
					if (err) res.send(err.message);
					else {
						Session.query('select count(*) as blows from session where video is not null and relic = (select current_relic from general where id = 1)', function(err, count_current) {
							if (err) res.send(err.message);
							else {
								Session.findOne({where: {active: true}, sort: 'started ASC'}).populate('user').exec(function(err, activeSession) {
									if (err) res.send(err.message);
									else {
										console.log(activeSession);

										var output = {
											users_count: users.length,
											blows_current: count_current[0]['blows'],
											blows_total: count_total[0]['blows']
										};

										if (activeSession && activeSession.hasOwnProperty('user')){

											var active = activeSession.user;
											output.active_user = {
													displayName: active.displayName,
													provider: active.provider,
													id: active.id,
													photo: active.photo
												};
										}
										else {
											output.active_user = null;
										}

										res.ok(output);
									}
								});
							}
						});
					}
				});
			}
		});



		//Session.count({status: 'ok'}).exec(function(err, sessions) {
		//	if (err) res.send(err.message);
		//	else {
		//		Session.findOne({where: {active: true}, sort: 'started ASC'}).populate('user').exec(function(err, activeSession) {
		//			if (err) res.send(err.message);
		//			else {
		//				var active = null;
		//				console.log(activeSession);
		//				if (activeSession && activeSession.hasOwnProperty('user')){
		//
		//					active = activeSession.user;
		//					res.ok({users_count: sessions, active_user: {
		//						displayName: active.displayName,
		//						provider: active.provider,
		//						id: active.id,
		//						photo: active.photo
		//					}});
		//				}
		//				else{
		//					res.ok({users_count: sessions, active_user: active});
		//				}
		//			}
		//		});
		//
		//	}
		//});
	},

	video: function(req, res) {
		// create a page with the video player for the specified session
		Session.findOne({id: req.param('id')}, function(err, session) {
			if (!err && session) {
				var fullUrl = sails.config.proxyHost + req.originalUrl; //session.video
				res.view({
					layout: 'layout_videoshare',
					videoURL: session.video,
					thumbURL: sails.config.settings.streaming.cdnUrl + 'video.jpg',
					pageURL: fullUrl,
					videoID: session.id
				});
			}
			else {
				res.send(404);
			}
		});

	},

	video_en: function(req, res) {
		// create a page with the video player for the specified session
		Session.findOne({id: req.param('id')}, function(err, session) {
			if (!err && session) {
				var fullUrl = sails.config.proxyHost + req.originalUrl; //session.video
				res.view({
					layout: 'layout_videoshare_en',
					videoURL: session.video,
					thumbURL: sails.config.settings.streaming.cdnUrl + 'video.jpg',
					pageURL: fullUrl,
					videoID: session.id
				});
			}
			else {
				res.send(404);
			}
		});

	},


	hello: function(req, res) {
		// this must be called by the socket on connect
		console.log("Hello from socket " + req.socket.id);
		req.socket.emit("status", {robot: sails.config.settings.robot.status});
		// if it finds an active queue session it sticks  to it
		if (req.hasOwnProperty('user')) {
			console.log("session user: " + req.user.id);
			// if session is active and in wait
			Session.findOne({user: req.user.id, active: true, or:[{status:'wait'},{status:'aim'}]}, function(err, session) {
				if (!err && session) {
					console.log("found a session to resume");
					if ((session.status === 'wait') && timeouts.hasOwnProperty(session.id.toString())) {
						console.log("timeout invalidated for session " + session.id);
						clearTimeout(timeouts[session.id]);
						delete timeouts[session.id];
					}
					Session.update({id: session.id}, {socket: req.socket.id}, function(err, update) {
						if (err) {
							console.log("ERROR in updating session");
						}
						else {
							console.log("session updated");
							req.socket.emit("session", {session: update});
						}
					});
				}
				else if (!session) {
					console.log("found no active session for user " + req.user.id);
				}
			});
		}
		else {
			console.log("socket req has no user");
		}
	},

	active: function(req, res) {
		//console.log("sessions/active");
		if (req.isSocket) {
			//Session.watch(req);
			Session.find({where: {active: true}, sort: 'started ASC'}).populate('user').exec(function(err, sessions) {
				if (sessions) {
					//Session.subscribe(req.socket,sessions);
					//console.log("subscribers:");
					//console.log(Session.subscribers(sessions));
					var sessions_output = [];
					for (var i = 0; i < sessions.length; i++) {
						var s = sessions[i];
						var data = sessionData(s, req.socket.id);
						data.action = (data.user.current && i == 0); // first in line, action!
						//console.log("SESSION DATA FOR "+ s.id+" (i "+i+"):");
						//console.log(data);
						if (data.action && req.socket.id == s.socket) {
							console.log("User "+data.user.displayName+" id "+data.user.id+", session "+ s.id+" is first in line");
							Session.update({id: s.id, status: 'wait'}, {status: 'aim'}).exec(function(err, result) {
								if (err) {
									console.log('ERROR setting status wait->aim');
								}
								if (result) {
									console.log(result);
									var status = s.status;
									var session_id = s.id;
									if (result.length) {
										var updated = result[0];
										status = updated.status;
										session_id = updated.id;
									}

									data.status = status;

									// console.log("current status: "+status);
									// console.log('session:',session_id)
									if ((status != 'wait') && !timeouts.hasOwnProperty(session_id.toString())) {
										console.log(' Start performance timeout');
										// Start performance timeout
										console.log("setting performance timeout for session "+session_id);
										timeouts[session_id.toString()] = setTimeout(function() {
											console.log("TIMEOUT for session "+session_id+"!");
											Session.update({id: session_id}, {
												active: false,
												ended: new Date(),
												status: 'quit'
											}, function updatedCB(err, updated) {
												// set related session as inactive
												if (err) {
													console.log("error while deactivating session");
												}
												else {
													console.log("session deactivated after performance timeout");
													delete timeouts[session_id];
												}
											});
										}, 60000);
										//console.log(timeouts);
									}
								}
							});
						}
						sessions_output.push(data);
					}
					//console.log("SESSIONS OUTPUT: ");
					//console.log(sessions);
					res.send(sessions_output);
				}
			});
		}
	},

	start: function(req, res) {
		console.log("START");
		if (req.isSocket) {

			// check if user has already an active session
			Session.find({user: req.user.id, active: true}, function findCB(err, found) {
				if (err) console.log("error checking for existing session: " + err.message);
				if (found.length) {
					// an active session exists, do nothing
					console.log("An active session for user " + req.user.id + " already exists!");
				}
				else {
					General.findOne({id: 1}, function(err, general) {
						if (err) {
							console.log(err.message);
						}
						if (general) {
							console.log(general);
							var relic = general.current_relic;
							console.log('Started queue for user ' + req.user.id + ', relic ' + relic);
							Session.findOrCreate({user: req.user.id, active: true}, {
								user: req.user.id,
								relic: relic,
								socket: req.socket.id
							}).exec(function createCB(err, s) {
								if (err) {
									console.log('session create ERROR: ' + err.message);
								}
								if (s) {
									console.log('session created');
								}
							});
						}
					});
				}
			});
		}
	},

	aim: function(req, res) {
		console.log("AIM");
		//console.log(req.user);
		//console.log(req.body);
		if (req.isSocket) { // socket only
			if (typeof req.user !== 'undefined') {
				var mic = false;
				if (req.body.hasOwnProperty('microphone')) {
					mic = req.body.microphone;
				}
				// console.log(mic)
				Session.update({user: req.user.id, active: true}, {
					microphone: mic,
					status: 'blow'
				}).exec(function updatedCB(err, updated) {
					if (err) {
						console.log('session update on aim ERROR: ' + err.message);
					}
					if (updated) {
						var session = updated[0];
						console.log('updated session ' + session + ': AIM -> BLOW');
						res.send(session);
					}
				})
			}
			else {
				console.log("*** AIM function call got no user in req!");
			}
		}
	},


	blow: function(req, res) {
		console.log("BLOW");
		if (req.isSocket) { // socket only
			if (typeof req.user !== 'undefined') {
				if (req.body.hasOwnProperty('x') && req.body.hasOwnProperty('y')) {
					Session.update({user: req.user.id, active: true}, {
						x: req.body.x,
						y: req.body.y,
						status: 'done',
						active: true
					}).exec(function updatedCB(err, updated) {
						if (err) {
							console.log('session update on blow ERROR: ' + err.message);
						}
						if (updated.length) {
							console.log("UPDATED: " + JSON.stringify(updated));
							var session = updated[0];
							console.log('updated session ' + session.id + ': BLOW -> DONE');
							// tell the robot this session has blown, send coordinates
							if (sails.config.settings.robot.socket) {
								console.log("Sending session and data to robot socket (id " + sails.config.settings.robot.socket.id + ")");
								sails.config.settings.robot.socket.emit("start", {
									id: session.id,
									x: session.x,
									y: session.y
								});
								res.send(session);
							}
							else {
								console.log("No robot socket! Quitting session.");
								Session.update({user: req.user.id, active: true}, {
									status: 'error',
									active: false
								}).exec(function updatedCB(err, updated) {
									req.socket.emit("robot_error", {error: "Robot is offline"});
								});
							}
						}
						else {
							console.log("*** No session was updated on blow for user " + req.user.id);
						}
					})
				}
			}
			else {
				console.log("*** BLOW function call got no user in req!");
			}
		}
	},

	robotauth: function(req, res) {
		isRobot(req, function(robot) {
			if (robot) {

				// clear ros socket disconnected timeout on ros auth
			   if (timeouts.hasOwnProperty('bernard_timeout')) {
			     console.log("timeout invalidated for socket " + req.socket.id);
			     clearTimeout(timeouts['bernard_timeout']);
			     delete timeouts['bernard_timeout'];
			   }

				console.log("ROS SOCKET CONNECTED (auth)");
				var bernardStatus = req.param('bernardStatus');
				console.log("bernard?",bernardStatus);
				var stats = 'offline';

			   var date = new Date();
			   var hours = date.getHours();
			   console.log('hours on auth...',hours)
			   if(hours >= 8 && hours < 20){
			   	stats = 'maintenance';
			   }
				if(bernardStatus === 'ready'){
					stats = 'ready';
				}
				sails.config.settings.robot.socket = req.socket;
				sails.config.settings.robot.status = stats;
				sails.sockets.blast("status", {robot: stats}, sails.config.settings.robot.socket);
			}
			else {
				console.log("no robot");
				res.send(403);
			}
		});
	},

	robotstart: function(req, res) {
		isRobot(req, function(robot) {
			if (robot) {
				console.log("robot session START (called by ROS)");

				var sessionID = req.param('id');
				var video = "video" + sessionID;
				var streaming = sails.config.settings.streaming;


				if (sessionID) {
					Session.findOne({id: req.param('id')}, function(err, session) {
						if (!err && session) {
							// start video recording
							var request = streaming.url+streaming.start+video+streaming.fileExt;
							console.log("START VIDEO http request: "+request);

							http.get(request, function(response) {
								console.log("Got response: " + response.statusCode);
								console.log("Started recording for session ".sessionID);
								Session.update({id: sessionID}, {
									status: 'move',
									active: true
								}).exec(function updatedCB(err, updated) {
									if (err) {
										console.log('session update on done->move ERROR: ' + err.message);
									}
									if (updated) {
										var session = updated[0];
										if (session.socket) {
											sails.sockets.emit(session.socket, 'video', {status: 'started'});
										}
										res.send(session);
									}
								});
							}).on('error', function(e) {
								console.log("Got error: " + e.message);
							});


							//var options = {
							//	host: streaming.url,
							//	port: 80,
							//	path: streaming.start + video,
							//	method: 'GET'
							//};
							//
							//var req = http.request(options, function(res) {
							//	console.log('STATUS: ' + res.statusCode);
							//	console.log('HEADERS: ' + JSON.stringify(res.headers));
							//	res.setEncoding('utf8');
							//	res.on('data', function(chunk) {
							//		console.log('BODY: ' + chunk);
							//	});
							//
							//	console.log("Started recording for session ".req.param('id'));
							//	Session.update({id: req.param('id')}, {
							//		status: 'move',
							//		active: false
							//	}).exec(function updatedCB(err, updated) {
							//		if (err) {
							//			console.log('session update on done->move ERROR: ' + err.message);
							//		}
							//		if (updated) {
							//			var session = updated[0];
							//			res.send(session);
							//		}
							//	});
							//
							//});
							//req.on('error', function(e) {
							//	console.log('problem with request: ' + e.message);
							//});
							//req.end();
						}
					});
				}
				else {
					res.send(400);
				}
			}
			else {
				console.log("no robot");
				res.send(403);
			}
		});
	},

	robotend: function(req, res) {
		isRobot(req, function(robot) {
			if (robot) {
				console.log("robot session END (called by ROS)");

				var sessionID = req.param('id');
				var video = "video" + sessionID;
				var streaming = sails.config.settings.streaming;


				if (sessionID) {
					Session.findOne({id: req.param('id')}, function(err, session) {
						if (!err && session) {
							// stop video recording
							var request = streaming.url+streaming.stop+video+streaming.fileExt;
							console.log("STOP VIDEO http request: "+request);

							http.get(request, function(response) {
								console.log("Got response: " + response.statusCode);
								console.log("Finished recording for session ".sessionID);
								var video_output = streaming.cdnUrl + video + streaming.fileExt;
								Session.update({id: sessionID}, {
									status: 'ok',
									active: false,
									video: video_output
								}).exec(function updatedCB(err, updated) {
									if (err) {
										console.log('session update on move->ok ERROR: ' + err.message);
									}
									if (updated) {

										// clear timeout on session ok
										if (timeouts.hasOwnProperty(sessionID.toString())) {
											console.log("timeout invalidated for session " + sessionID + " ended ok");
											clearTimeout(timeouts[sessionID]);
											delete timeouts[sessionID];
										}

										var session = updated[0];
										if (session.socket) {
											sails.sockets.emit(session.socket, 'video', {status: 'ended', id: sessionID, url: video_output});
										}
										res.send(session);
									}
								});
							}).on('error', function(e) {
								console.log("Got error: " + e.message);
							});

							//var options = {
							//	host: streaming.url,
							//	port: 80,
							//	path: streaming.stop + video,
							//	method: 'GET'
							//};
							//
							//http.request(options, function(res) {
							//	console.log('STATUS: ' + res.statusCode);
							//	console.log('HEADERS: ' + JSON.stringify(res.headers));
							//	res.setEncoding('utf8');
							//	res.on('data', function(chunk) {
							//		console.log('BODY: ' + chunk);
							//	});
							//
							//	console.log("Finished recording for session ".req.param('id'));
							//	var video_output = streaming.cdnUrl + video + streaming.fileExt;
							//	Session.update({id: req.param('id')}, {
							//		status: 'ok',
							//		active: false,
							//		video: video_output
							//	}).exec(function updatedCB(err, updated) {
							//		if (err) {
							//			console.log('session update on move->ok ERROR: ' + err.message);
							//		}
							//		if (updated) {
							//			var session = updated[0];
							//			res.send(session);
							//		}
							//	});
							//}).end();

						}
					});
				}
				else {
					res.send(400);
				}
			}
			else {
				console.log("no robot");
				res.send(403);
			}
		});
	},

	roboterror: function(req, res) {
		isRobot(req, function(robot) {
			if (robot) {
				console.log("robot session ERROR MESSAGE (called by ROS)");
				console.log("error received: "+req.param('error'));
				var robot_error = req.param('error');
				sails.sockets.blast('robot_error', {robot: robot_error});

				sails.config.settings.robot.status = robot_error;
				sails.sockets.blast("status", {robot: robot_error});
			}
		});
	}
};