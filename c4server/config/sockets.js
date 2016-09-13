/**
 * WebSocket Server Settings
 * (sails.config.sockets)
 *
 * These settings provide transparent access to the options for Sails'
 * encapsulated WebSocket server, as well as some additional Sails-specific
 * configuration layered on top.
 *
 * For more information on sockets configuration, including advanced config options, see:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.sockets.html
 */

module.exports.sockets = {


  /***************************************************************************
  *                                                                          *
  * Node.js (and consequently Sails.js) apps scale horizontally. It's a      *
  * powerful, efficient approach, but it involves a tiny bit of planning. At *
  * scale, you'll want to be able to copy your app onto multiple Sails.js    *
  * servers and throw them behind a load balancer.                           *
  *                                                                          *
  * One of the big challenges of scaling an application is that these sorts  *
  * of clustered deployments cannot share memory, since they are on          *
  * physically different machines. On top of that, there is no guarantee     *
  * that a user will "stick" with the same server between requests (whether  *
  * HTTP or sockets), since the load balancer will route each request to the *
  * Sails server with the most available resources. However that means that  *
  * all room/pubsub/socket processing and shared memory has to be offloaded  *
  * to a shared, remote messaging queue (usually Redis)                      *
  *                                                                          *
  * Luckily, Socket.io (and consequently Sails.js) apps support Redis for    *
  * sockets by default. To enable a remote redis pubsub server, uncomment    *
  * the config below.                                                        *
  *                                                                          *
  * Worth mentioning is that, if `adapter` config is `redis`, but host/port  *
  * is left unset, Sails will try to connect to redis running on localhost   *
  * via port 6379                                                            *
  *                                                                          *
  ***************************************************************************/
  // adapter: 'memory',

  //
  // -OR-
  //

  // adapter: 'redis',
  // host: '127.0.0.1',
  // port: 6379,
  // db: 'sails',
  // pass: '<redis auth password>'



 /***************************************************************************
  *                                                                          *
  * Whether to expose a 'get /__getcookie' route with CORS support that sets *
  * a cookie (this is used by the sails.io.js socket client to get access to *
  * a 3rd party cookie and to enable sessions).                              *
  *                                                                          *
  * Warning: Currently in this scenario, CORS settings apply to interpreted  *
  * requests sent via a socket.io connection that used this cookie to        *
  * connect, even for non-browser clients! (e.g. iOS apps, toasters, node.js *
  * unit tests)                                                              *
  *                                                                          *
  ***************************************************************************/

  // grant3rdPartyCookie: true,



  /***************************************************************************
  *                                                                          *
  * `beforeConnect`                                                          *
  *                                                                          *
  * This custom beforeConnect function will be run each time BEFORE a new    *
  * socket is allowed to connect, when the initial socket.io handshake is    *
  * performed with the server.                                               *
  *                                                                          *
  * By default, when a socket tries to connect, Sails allows it, every time. *
  * (much in the same way any HTTP request is allowed to reach your routes.  *
  * If no valid cookie was sent, a temporary session will be created for the *
  * connecting socket.                                                       *
  *                                                                          *
  * If the cookie sent as part of the connetion request doesn't match any    *
  * known user session, a new user session is created for it.                *
  *                                                                          *
  * In most cases, the user would already have a cookie since they loaded    *
  * the socket.io client and the initial HTML pageyou're building.           *
  *                                                                          *
  * However, in the case of cross-domain requests, it is possible to receive *
  * a connection upgrade request WITHOUT A COOKIE (for certain transports)   *
  * In this case, there is no way to keep track of the requesting user       *
  * between requests, since there is no identifying information to link      *
  * him/her with a session. The sails.io.js client solves this by connecting *
  * to a CORS/jsonp endpoint first to get a 3rd party cookie(fortunately this*
  * works, even in Safari), then opening the connection.                     *
  *                                                                          *
  * You can also pass along a ?cookie query parameter to the upgrade url,    *
  * which Sails will use in the absense of a proper cookie e.g. (when        *
  * connecting from the client):                                             *
  * io.sails.connect('http://localhost:1337?cookie=smokeybear')              *
  *                                                                          *
  * Finally note that the user's cookie is NOT (and will never be) accessible*
  * from client-side javascript. Using HTTP-only cookies is crucial for your *
  * app's security.                                                          *
  *                                                                          *
  ***************************************************************************/
  // beforeConnect: function(handshake, cb) {
  //   // `true` allows the connection
  //   return cb(null, true);
  //
  //   // (`false` would reject the connection)
  // },


  /***************************************************************************
  *                                                                          *
  * This custom afterDisconnect function will be run each time a socket         *
  * disconnects                                                              *
  *                                                                          *
  ***************************************************************************/
	afterDisconnect: function(session, socket, cb) {
		// By default: do nothing.
		console.log("socket "+socket.id+" disconnected.");

	  if (sails.config.settings.robot.socket && socket.id === sails.config.settings.robot.socket.id) {
			console.log("ROS SOCKET DISCONNECTED!");

      var err = 'offline';
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      console.log('time...' + hours +':' + minutes)
      if(hours >= 8 && hours <= 19 && minutes < 45){
        console.log('maintenance')
        err = 'maintenance';
      }
      sails.config.settings.robot.status = err;
      sails.config.settings.robot.socket = null;
      sails.sockets.blast("status", {robot: err});

      // if bernard was disconnected before 09:45pm
      var millisTillSleep = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 19, 45, 0, 0) - date;
      if (millisTillSleep > 0) {
        console.log('not yet 21.45')
        timeouts['bernard_timeout'] = setTimeout(function(){
          err = 'offline';
          sails.config.settings.robot.status = err;
          sails.config.settings.robot.socket = null;
          sails.sockets.blast("status", {robot: err});
          console.log('its 21.45 bernard go to sleep')
        }, millisTillSleep);
      }
		}
		else {
			Session.findOne({socket: socket.id}, function (err, session) {
				if (!err && session) {
  				var session_id = session.id;
          // set timeout only for sessions in wait or aim
          if(session.status === 'wait'){
  					console.log("setting timeout for session "+session_id);
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
  								console.log("session deactivated after timeout");
  							}
  						});
  					}, 10000);
  					//console.log(timeouts);
          }
          else if(session.status !== 'aim'){
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
                console.log("session deactivated because not in wait status");
              }
            });
          }
          else{
            console.log("is your turn you still have 1 minutes");
          }
				}
				else if (!session) {
					console.log("socket "+socket.id+" had no queue session associated.");
				}
			});
		}

		return cb();
	}

  // More configuration options for Sails+Socket.io:
  // http://sailsjs.org/#/documentation/reference/sails.config/sails.config.sockets.html

};
