// Make connection
var _socket = io.connect('https://tag-multiplayer.herokuapp.com/');
let keys = {};
let b = new Bump(PIXI);
let game = new Game(_socket);
let move = 5;
let speed = 5;

//events
_socket.on('addPlayer', function(data) {
    game.addPlayer(data);
});

_socket.on('update', function(players) {
    game.update(players);
});

_socket.on('leaveGame', function(playerId) {
    if (game.localPlayer != undefined && playerId == game.localPlayer.id) game.endGame(playerId);
    else game.removePlayer(playerId);
});

// html
$(document).ready(function() {
    $('#game-ended').hide();
    $('#join').click(function() {
        joinGame();
    });
    $('#playagain').click(function() {
        document.location.reload(true);
    });
});
$(document).keypress(function(e) {
    e = e || window.event;
    if ((e.keyCode == 13) && $('#prompt').is(":visible")) {
        joinGame();
    } else if ((e.keyCode == 13) && $('#game-ended').is(":visible")) {
        document.location.reload(true);
    }
});

window.addEventListener("keydown", keysDown);
window.addEventListener("keyup", keysUp); 

//functions
function joinGame() {
    $('#game-ended').hide();
    $('#prompt').hide();
    _socket.emit('joinGame', {});
    document.body.appendChild(game.app.view);
}

function keysDown(e) {
    if (e.keyCode == "37" || e.keyCode == "38" || e.keyCode == "39" || e.keyCode == "40") {
        keys[e.keyCode] = true;
    }
}

function keysUp(e) {
    if (e.keyCode == "37" || e.keyCode == "38" || e.keyCode == "39" || e.keyCode == "40") {
        keys[e.keyCode] = false;
    }
}

function numKeysPressed(kys) {
    return (keys["37"] && keys["38"]) || (keys["37"] && keys["40"]) 
        || (keys["39"] && keys["38"]) || (keys["39"] && keys["40"]);
}