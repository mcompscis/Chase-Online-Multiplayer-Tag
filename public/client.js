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

_socket.on('update', function(info) {
        game.update(info);
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

function followPlayer(app, player) {
    app.stage.position.x = app.renderer.width / 2;
    app.stage.position.y = app.renderer.height / 2;
    //scale it
    app.stage.scale.x = 2.0;
    app.stage.scale.y = 2.0;
    //now specify which point INSIDE stage must be (0,0)
    
    app.stage.pivot.x = player.sprite.position.x;
    app.stage.pivot.y = player.sprite.position.y;
}

function resizeApp(app) {
    // causing player to be very restricted in movements
    const winwidth = window.innerWidth;
    const winheight = window.innerHeight;
    let appwidth;
    let appheight;
    if (winheight / winwidth < app.screen.height / app.screen.width) {
        appheight = winheight;
        appwidth = (winheight * app.screen.width) / app.screen.height;
    } 
    else {
        appwidth = winwidth;
        appheight = (winwidth * app.screen.height) / app.screen.width;
    }
    app.renderer.resize(appwidth, appheight);
    app.stage.scale.set(appwidth / app.screen.width, appheight / app.screen.height);
}