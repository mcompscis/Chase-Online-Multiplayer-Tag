// Make connection
var _socket = io.connect('https://tag-multiplayer.herokuapp.com/');
let keys = {};
let b = new Bump(PIXI);
let game = new Game(_socket);
let local;
let speed;
let enemy;
let move = 5;

// html
$(document).ready(function() {
    $('#game-ended').hide();
    $('#join').click(function() {
        joinGame();
        startGame();
    });
    $('#playagain').click(function() {
        document.location.reload(true);
    });
});
$(document).keypress(function(e) {
    e = e || window.event;
    if ((e.keyCode == 13) && $('#prompt').is(":visible")) {
        joinGame();
        startGame();
    } else if ((e.keyCode == 13) && $('#game-ended').is(":visible")) {
        document.location.reload(true);
    }
});

function startGame() {
    // Game Board HTML
    game.localPlayer.sprite.setParent(game.app.stage);
    speed = 5;
    document.body.appendChild(game.app.view);
    
    // Current player movements
    window.addEventListener("keydown", keysDown);
    window.addEventListener("keyup", keysUp);
    game.app.ticker.add(gameLoop);
    game.app.ticker.autoStart = false;

    //events
    _socket.on('addPlayer', function(data) {
        console.log("added player", data.id, data.isIt);
        game.addPlayer(data);
    });

    _socket.on('update', function(players) {
        game.update(players);
    });

    _socket.on('leaveGame', function(playerId) {
        if (playerId == game.localPlayer.id) game.endGame(playerId);
        else game.removePlayer(playerId);
    });
}

//functions
function joinGame() {
    $('#game-ended').hide();
    $('#prompt').hide();
    _socket.emit('joinGame', {});
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

function movePlayerForward(direction, player, spd) {
    switch(direction) {
        case "left":
            player.sprite.x -= spd;
            break;
        case "right":
            player.sprite.x += spd;
            break;
        case "top":
            player.sprite.y -= spd;
            break;
        case "bottom":
            player.sprite.y += spd;
            break;
        case "topleft":
            player.sprite.x -= spd;
            player.sprite.y -= spd;
            break;
        case "bottomleft":
            player.sprite.x -= spd;
            player.sprite.y += spd;
            break;
        case "topright":
            player.sprite.x += spd;
            player.sprite.y -= spd;
            break;
        case "bottomright":
            player.sprite.x += spd;
            player.sprite.y += spd;
            break;
        default:
    }
}

function movePlayerBackward(direction, player, spd) {
    switch(direction) {
        case "left":
            player.sprite.x += spd;
            break;
        case "right":
            player.sprite.x -= spd;
            break;
        case "top":
            player.sprite.y += spd;
            break;
        case "bottom":
            player.sprite.y -= spd;
            break;
        case "topleft":
            player.sprite.x += spd;
            player.sprite.y += spd;
            break;
        case "bottomleft":
            player.sprite.x += spd;
            player.sprite.y -= spd;
            break;
        case "topright":
            player.sprite.x -= spd;
            player.sprite.y += spd;
            break;
        case "bottomright":
            player.sprite.x -= spd;
            player.sprite.y -= spd;
            break;
        default:
    }
}

function bumpArray(player) {
    let result = [];
    for (other of game.otherPlayers) {
        if (player.id != other.id) {
            let collision = b.hit(player.sprite, other.sprite);
            if (collision) {
                if (!player.isIt && !other.isIt) result.push(other);
                else if (player.isIt || other.isIt) {
                    player.isIt ? game.endGame(other.id) : game.endGame(player.id);
                    result = null;
                    break;
                }
            }
        }
    }
    return result;
}

function intersect(p1, p2) {
    let p1bounds = p1.getBounds();
    let p2bounds = p2.getBounds();

    return p1bounds.x + p1bounds.width > p2bounds.x &&
        p1bounds.x < p2bounds.x + p2bounds.width &&
        p1bounds.y + p1bounds.height > p2bounds.y &&
        p1bounds.y < p2bounds.y + p2bounds.height;
}

function bumpWall(player) {
    let result = false;
    let spike = false;
    for (wall of game.walls) {
        let collision = intersect(player.sprite, wall.sprite);
        if (collision) {
            result = collision;
            if (wall.isSpike) spike = true;
            break;
        }
    }

    return {result: result, spike: spike};
}
function bump(direction, player) {
    console.log(player.sprite.x, player.sprite.y);
    movePlayerForward(direction, player, speed);
    let wall = bumpWall(player);
    if (wall.result) {
        console.log("wall touched");
        if (wall.spike && !player.isIt) game.endGame(player.id);
        else if (!wall.spike) movePlayerBackward(direction, player, speed);
    }
    else {
        bumpOtherPlayers(direction, player);
    }
}

function bumpOtherPlayers(direction, player) {
    let firstContact = bumpArray(player);
    if (firstContact == null) return;
    if (firstContact.length > 0) {
        if (firstContact.length == 1) {
            movePlayerForward(direction, firstContact[0], speed);
            let bounds = b.contain(firstContact[0].sprite, {x: 0, y: 0, width: 3200, height: 1600}, true);
            let wallTouch = bumpWall(firstContact[0]);
            let secondContact = bumpArray(firstContact[0]);
            if (bounds != undefined) movePlayerBackward(direction, player, speed);
            if (secondContact == null) return;
            if (wallTouch.result || (secondContact.length > 0)) {
                movePlayerBackward(direction, player, speed);
                movePlayerBackward(direction, firstContact[0], speed);
                if (wallTouch.result && wallTouch.spike) game.endGame(firstContact[0].id);
            }
        } else {
            movePlayerBackward(direction, player, speed);
        }
        game.sendData(firstContact[0]);
    }
    game.sendData(player);
}

function numKeysPressed(kys) {
    return (keys["37"] && keys["38"]) || (keys["37"] && keys["40"]) 
        || (keys["39"] && keys["38"]) || (keys["39"] && keys["40"]);
}

function followPlayer() {
    game.app.stage.position.x = game.app.renderer.width / 2;
    game.app.stage.position.y = game.app.renderer.height / 2;
    //scale it
    game.app.stage.scale.x = 2.0;
    game.app.stage.scale.y = 2.0;
    //now specify which point INSIDE stage must be (0,0)
    
    game.app.stage.pivot.x = game.localPlayer.sprite.position.x;
    game.app.stage.pivot.y = game.localPlayer.sprite.position.y;
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

function gameLoop() {
    b.contain(game.localPlayer.sprite, {x: 0, y: 0, width: 3200, height: 1600}, true);

    let oneOrMore = numKeysPressed(keys);
    if (oneOrMore) {
        speed = 4;
        if ((keys["37"] && keys["38"])) bump("topleft", game.localPlayer);
        if ((keys["37"] && keys["40"])) bump("bottomleft", game.localPlayer);
        if ((keys["39"] && keys["38"])) bump("topright", game.localPlayer);
        if ((keys["39"] && keys["40"])) bump("bottomright", game.localPlayer);
        speed = 5;
    } else {
        //left
        if (keys["37"]) bump("left", game.localPlayer);
        //top
        if (keys["38"]) bump("top", game.localPlayer);
        //right
        if (keys["39"]) bump("right", game.localPlayer);
        //bottom
        if (keys["40"]) bump("bottom", game.localPlayer);
    }

    followPlayer();
    resizeApp(game.app);
}