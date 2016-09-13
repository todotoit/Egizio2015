/**
 * Created by fabio on 07/03/15.
 */

var actions_displayed = false;
var session_active = false;
var robot_online = false;

io.socket.on('connect', function(obj) {
	console.log("hello");
	io.socket.get('/sessions/hello', function(resData, jwres) {
		console.log(resData);
	});
});

io.socket.on('robot_error', function(obj) {
	output("Received error from robot:");
	console.log(JSON.stringify(obj));
});


io.socket.on('session', function(obj) {
	output("Received session object:");
	console.log(JSON.stringify(obj));
	getActiveSessions();
});

io.socket.on('status', function(status) {
	if (status.hasOwnProperty('robot')) {
		if (status.robot === 'online') {
			robot_online = true;
			document.getElementById("robot").style.color = 'green';
			document.getElementById("robot").innerHTML = 'ONLINE';
		}
		else if (status.robot === 'offline') {
			robot_online = false;
			document.getElementById("robot").style.color = 'red';
			document.getElementById("robot").innerHTML = 'OFFLINE';
		}
	}
});

io.socket.on('video', function(video) {
	if (video.hasOwnProperty('status')) {
		if (video.status === 'started') {
			document.getElementById("video").innerHTML = 'STARTED';
		}
		else if (video.status === 'ended') {
			if (video.hasOwnProperty('url')) {
				document.getElementById("video").innerHTML = 'AVAILABLE'; //<a href="/video/'+video.id+'">/video/'+video.id+'</a>';
				document.getElementById("share").innerHTML = '<a href="https://www.facebook.com/sharer/sharer.php?app_id=113869198637480&sdk=joey&u=http%3A%2F%2Ftest.egizio2015.it%2Fvideo%2F'+video.id+'&display=popup&ref=plugin&src=share_button" target="_blank">Share on Facebook</a><br>' +
				'<a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Ftest.egizio2015.it%2Fvideo%2F'+video.id+'&text='+encodeURIComponent('Ecco il mio contributo alla scoperta dei tesori del nuovo Museo Egizio! #egizio2015')+'&via=MuseoEgizio&related=egizio2015" target="_blank">Share on Twitter</a>';
				//document.getElementById("share").innerHTML = '<div class="fb-share-button" data-href="http://test.egizio2015.it/video/'+video.id+'" data-layout="button"></div>';
			}
		}
	}
});

function aim() {
	io.socket.post('/sessions/aim/', function(resData, jwres) {
		console.log(resData);
	});
}

function blow() {
	io.socket.post('/sessions/blow/', {x: Math.random(), y: Math.random()}, function(resData, jwres) {
		console.log(resData);
	});
}


function getActiveSessions() {
	io.socket.get('/session/active', function(resData, jwres) {
		output("active sessions:");
		console.log(JSON.stringify(resData));
		showQueue(resData);
	});
}

function startSession() {
	console.log('Starting session');
	io.socket.get('/sessions/start/', function(resData, jwres) {
		document.getElementById('enter').innerHTML = '';
		console.log(resData);
	});
}

function output(msg) {
	console.log(msg);
	//document.getElementById('output').innerHTML = document.getElementById('output').innerHTML+"\n"+msg;
}

function showQueue(sessions) {
	var actions = false;
	var actions_session = null;
	var queue = document.getElementById('queue');
	while (queue.firstChild) {
		queue.removeChild(queue.firstChild);
	}
	for (var i = 0; i < sessions.length; i++) {
		var s = sessions[i];
		console.log(i+" "+ s.user.displayName);
		var q = document.createElement("DIV");
		var bg = s.user.current ? "#eeeeff" : "#eee";
		q.setAttribute("style", "padding: 5px; width: 260px; height: 35px; background-color: "+bg+";");
		var img = document.createElement("IMG");
		img.src = s.user.photo;
		img.setAttribute("style", "float: left; width: 35px; height: 35px;");
		q.appendChild(img);

		var span = document.createElement("SPAN");
		span.setAttribute("style", "float: right; width: 205px; height: 35px; font-size: 12px;"+(s.user.current ? "font-weight: bold" : ""));
		var t1 = document.createTextNode((i+1)+": "+s.user.displayName+" ("+s.user.provider+")");
		span.appendChild(t1);
		var br = document.createElement("BR");
		span.appendChild(br);
		var t2 = document.createTextNode("status: "+s.status);
		span.appendChild(t2);
		q.appendChild(span);
		document.getElementById('queue').appendChild(q);

		if (s.user.current && s.action) {
			actions = true;
			actions_session = s;
		}
	}
	if (actions) {
		showActions(actions_session);
	}
	else {
		hideActions();
	}
}

function hideActions() {
	if (actions_displayed) {
		var actions = document.getElementById('actions');
		while (actions.firstChild) {
			actions.removeChild(actions.firstChild);
		}
		actions_displayed = false;
	}
}

function showActions(session) {

	hideActions(); // reset

	var buttons = document.createElement("DIV");

	var t = document.createTextNode("Actions:");
	buttons.appendChild(t);

	if (session.status == 'aim') {
		var b = document.createElement("BUTTON");
		b.setAttribute('class', 'addButton');
		b.setAttribute('onclick', 'aim();');
		var tb = document.createTextNode('AIM');
		b.appendChild(tb);
		buttons.appendChild(b);
	}
	else if (session.status == 'blow') {
		var b = document.createElement("BUTTON");
		b.setAttribute('class', 'addButton');
		b.setAttribute('onclick', 'blow();');
		var tb = document.createTextNode('BLOW');
		b.appendChild(tb);
		buttons.appendChild(b);
	}

	document.getElementById('actions').appendChild(buttons);

	actions_displayed = true;

}