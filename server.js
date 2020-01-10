//jshint esversion: 6

var express = require("express");

// App setup
var app = express();
const pt = process.env.PORT || 3000;
var server = app.listen(pt, function () {
  var port = server.address().port;
	console.log('Server running at port %s', port);
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
let io = require('socket.io')(server);

//////////////////////////////////////////////////////////////////////////////////////////
function GameServer() {
  this.players = [];
  this.spawnCoords = [
    {x: 805, y: 105}, {x: 630, y: 1465}, {x: 1600, y: 800}, {x: 2020, y: 80}, 
    {x: 2555, y: 340}, {x: 3000, y: 480}, {x: 2535, y: 885}, {x: 1730, y: 1430}
  ];
  this.usedSpots = [];
}

GameServer.prototype = {
  addPlayer: function(player) {
    this.players.push(player);
  },
  removePlayer: function(playerId) {
    this.players = this.players.filter((p) => {
      return p.id != playerId;
    });
  },
  updatePlayer: function(player) {
    this.players.forEach((p) => {
      if (p.id == player.id) {
        p.x = player.x;
        p.y = player.y;
        p.isIt = player.isIt;
      }
    });
  },
  updateIt: function() {
    if (this.players.length > 1) this.players[1].isIt = true;
  },
  getPlayers: function() {
    return this.players;
  },
  generateCoord: function() {
    while (true) {
      let coord = this.spawnCoords[Math.floor(Math.random() * this.spawnCoords.length)];
      if (!this.usedSpots.includes(coord)) {
        this.usedSpots.push(coord);
        return coord;
      }
      if (this.usedSpots.length == 8) this.usedSpots = [];
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////

let game = new GameServer();

// Connections
io.on('connection', (s) => {
  console.log('User', s.id, 'connected.');

  // joining the game
  s.on('joinGame', function() {
    let playerId = s.id;
    game.addPlayer({id: playerId, x: 0, y: 0, isIt: false});
    // check if the current player is the first player
    let isIt = (game.getPlayers()[0].id == playerId);
    console.log(isIt);
    game.updatePlayer({id: game.getPlayers()[0].id, x: game.getPlayers()[0].x, y: game.getPlayers()[0].y, isIt: true});
    s.emit('addPlayer', {players: game.getPlayers(), id: playerId, x: 0, y: 0, isCurr: true, isIt: isIt, coord: game.generateCoord()});
    s.broadcast.emit('addPlayer', {players: game.getPlayers(), id: playerId, x: 0, y: 0, isCurr: false, isIt: isIt});
    console.log(game.getPlayers());
    
  });
  
  // handle updates
  s.on('localUpdate', function(player) {
    if (player != undefined) {
      // console.log("got update from local player");
      game.updatePlayer(player);
    }
    s.emit('update', game.getPlayers());
    s.broadcast.emit('update', game.getPlayers());
  });

  // ending game
  s.on('gameOver', function(playerId) {
    game.removePlayer(playerId);
    s.broadcast.emit('leaveGame', playerId);
  })
  
  //Handle disconnect event
  s.on('disconnect', function() {
    let players = game.getPlayers();
    console.log("quit event called", players.length);
    if (players.length > 0 && players[0].id == s.id) {
      game.updateIt();
      s.broadcast.emit('update', players);
    }
    game.removePlayer(s.id);
    console.log("players left:", players.length)
    console.log('User', s.id, 'disconnected.');
    s.broadcast.emit('leaveGame', s.id);
  });

});