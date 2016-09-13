var relicToken = 'aYhi56HAht2d76t34h298GUhtDs1wHIu';

var session = null;

// io.sails.autoConnect = false;
io.sails.url = 'http://test.egizio2015.it:1337';


io.socket.on('message', function(data) {
    console.log("message: "+data);
});

// io.socket.on('connect', function(data) {
//     console.log("Connected.");  
//     io.socket.post('/ros/auth/', {token: 'no7iecA78EDi72yn7dfy487kk23bxYsi'}, function(resData, jwres) {
//         console.log("sent auth.");
//         console.log(resData);
//     });
// });

// io.socket.on('start', function(d) {
//     var data = d; //JSON.parse(d);
//     console.log(data);
//     console.log("NEW SESSION: "+data.id);
//     session = data.id;
//     message("Current session: "+data.id+" (x: "+data.x+", y: "+data.y+")");
//     showStart();
// });

function message(text) {
    document.getElementById('message').innerHTML = text;
}

// function start() {
//     io.socket.post('/ros/start/', {id: session, token: 'no7iecA78EDi72yn7dfy487kk23bxYsi'}, function(resData, jwres) {
//         console.log(resData);
//     });
//     showEnd();
// }

// function end() {
//     io.socket.post('/ros/end/', {id: session, token: 'no7iecA78EDi72yn7dfy487kk23bxYsi'}, function(resData, jwres) {
//         console.log(resData);
//     });
//     hideButtons();
//     message('');
// }

function sendError() {
    var error = document.getElementById('error').value;
    console.log(error)
    if (error) {
        io.socket.post('/ros/error/', {error: error, token: 'no7iecA78EDi72yn7dfy487kk23bxYsi'}, function(resData, jwres) {
            console.log(resData);
        });
    }
}

function hideButtons() {
    var actions = document.getElementById('content');
    while (actions.firstChild) {
        actions.removeChild(actions.firstChild);
    }
}

function showStart() {
    hideButtons();
    var b = document.createElement("BUTTON");
    b.setAttribute('class', 'addButton');
    b.setAttribute('onclick', 'start();');
    var tb = document.createTextNode('START ROBOT');
    b.appendChild(tb);
    document.getElementById('content').appendChild(b);
}

function showEnd() {
    hideButtons();
    var b = document.createElement("BUTTON");
    b.setAttribute('class', 'addButton');
    b.setAttribute('onclick', 'end();');
    var tb = document.createTextNode('END ROBOT');
    b.appendChild(tb);
    document.getElementById('content').appendChild(b);
}

function changeRelic() {
    var relic = document.getElementById('relic').value;
    console.log(relic)
    io.socket.get('/general/relic/'+relic, {token: 'aYhi56HAht2d76t34h298GUhtDs1wHIu'}, function(resData, jwres) {
        console.log(resData);
    });
}
