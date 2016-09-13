module.exports = function(req, res, next) {

	next();

	//var session = req.session;
	//if (req.isSocket) {
	//	var handshake = req.socket.manager.handshaken[req.socket.id];
	//	if (handshake) {
	//		//session = handshake.session;
	//		console.log(handshake);
	//	}
	//}
	////session now contains proper session object
	//
	//if(req.headers.hasOwnProperty('auth')) {
	//	var auth = req.headers['auth'];
	//	console.log(auth);
	//	if (auth != '') {
	//		User.findOne({token:req.headers['auth']}, function(err, user) {
	//			if (req.headers['auth'] != '') {
	//				if (!err && user) {
	//					next();
	//				}
	//				else {
	//					return res.send("You are not permitted to perform this action.", 403);
	//				}
	//			}
	//			else {
	//				return res.send("Bad access parameters.", 400);
	//			}
	//		});
	//	}
	//}
	//else {
	//	return res.send("Bad access parameters.", 400);
	//}
};