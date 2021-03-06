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

  // joining the game
  s.on('joinGame', function() {
    let playerId = s.id;
    let coords = game.generateCoord();
    let players = game.getPlayers();
    let isIt = (players.length == 0);
    game.addPlayer({id: playerId, x: coords.x, y: coords.y, isIt: isIt});
    s.emit('addPlayer', {players: players, id: playerId, x: coords.x, y: coords.y, isCurr: true, isIt: isIt});
    s.broadcast.emit('addPlayer', {players: players, id: playerId, x: coords.x, y: coords.y, isCurr: false, isIt: isIt});    
  });
  
  // handle updates
  s.on('localUpdate', function(player) {
    if (player != undefined) {
      game.updatePlayer(player);
      let data = game.getPlayers();
      s.emit('update', data);
      s.broadcast.emit('update', data);
    }
  });

  // ending game
  s.on('gameOver', function(playerId) {
    game.removePlayer(playerId);
    s.broadcast.emit('leaveGame', playerId);
  })
  
  //Handle disconnect event
  s.on('disconnect', function() {
    let players = game.getPlayers();
    if (players.length > 0 && players[0].id == s.id) {
      game.updateIt();
      s.broadcast.emit('update', players);
    }
    game.removePlayer(s.id);
    s.broadcast.emit('leaveGame', s.id);
  });

});