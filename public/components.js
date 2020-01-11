let testmap = 
[   2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2,
    2,1,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,2, 1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,2, 1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,2,
    2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2, 0,0,0,0,0, 0,1,1,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2,
    2,0,0,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,0,0,0, 0,0,0,0,2, 0,0,0,0,0, 0,1,1,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,2, 0,0,0,0,0, 0,0,0,0,1, 1,1,1,0,0, 0,0,0,0,0, 0,0,0,0,2,
    2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2, 0,0,0,0,0, 0,0,0,0,0, 0,0,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 0,0,0,0,0, 0,0,0,1,0, 0,0,0,1,0, 0,0,0,0,0, 0,0,0,0,2,
        
    2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,2, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,1,0,0, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,2,
    2,0,0,1,0, 0,1,1,0,0, 1,0,0,1,1, 1,1,1,1,1, 1,1,1,1,2, 0,0,0,0,0, 0,0,0,0,0, 1,1,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 1,0,0,0,0, 0,1,0,0,0, 0,0,0,0,0, 1,0,0,0,0, 0,0,0,0,2,
    2,0,0,1,0, 0,1,1,0,0, 1,0,0,1,1, 1,1,1,1,1, 1,1,1,1,2, 0,0,0,0,0, 0,0,0,0,0, 1,1,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 1,0,0,0,0, 1,0,0,0,0, 0,0,0,0,0, 1,0,0,0,0, 0,0,0,0,2,
    2,0,1,1,0, 0,0,0,0,0, 1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2, 1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 1,0,0,0,1, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,2,
    2,0,1,1,0, 0,0,0,0,0, 1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 1,0,0,0,1, 0,0,0,0,0, 0,0,0,1,0, 0,0,0,0,0, 0,0,0,0,2,

    2,0,1,1,0, 0,1,0,0,0, 1,0,0,1,0, 0,1,1,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 1,0,0,0,1, 0,0,0,0,0, 0,0,1,0,0, 0,0,0,0,0, 0,0,0,0,2,
    2,0,0,1,0, 0,0,1,0,0, 1,0,0,0,0, 0,1,1,0,0, 0,1,1,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 1,0,0,0,1, 0,0,0,0,0, 0,1,0,0,0, 0,0,0,0,0, 0,0,0,0,2,
    2,0,0,1,0, 0,0,0,0,0, 1,0,0,1,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,2,0,0, 0,0,0,0,0, 2,2,2,2,2, 2,2,2,2,2, 2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2,
    2,0,0,0,0, 0,1,0,0,0, 1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,2,0,0, 0,0,0,0,0, 0,0,0,0,1, 2,1,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2,
    2,0,0,0,0, 0,0,0,0,0, 1,0,0,0,0, 0,1,1,0,0, 1,1,1,0,0, 2,0,0,0,0, 0,0,2,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,1, 1,1,1,1,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2,
        
    2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,1,1, 0,0,2,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,0,0,0, 0,0,1,1,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2,
    2,0,1,1,0, 0,1,1,0,0, 1,0,0,1,1, 1,1,1,1,1, 1,1,1,1,0, 2,0,0,1,1, 0,0,2,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,0,0,0, 1,1,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,2,
    2,0,1,1,0, 0,1,1,0,0, 1,0,0,1,1, 1,1,1,1,1, 1,1,1,1,0, 2,0,0,0,0, 0,0,2,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,0,0,0, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2,
    2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,1,0,0,0, 0,1,2,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,2,
    2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,2,2,2,2, 2,2,2,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2,

    2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,1,0,0,0, 0,1,2,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,0,0,0, 1,0,0,0,0, 0,0,0,0,0, 1,1,0,0,0, 1,1,0,0,0, 1,1,0,0,2,
    2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,2,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,0,0,0, 0,1,0,0,0, 0,0,1,0,0, 1,1,0,0,0, 1,1,0,0,0, 1,1,0,0,2,
    2,1,1,1,1, 1,1,1,1,1, 1,1,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,1,1, 0,0,2,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,0,0,0, 0,0,1,1,1, 1,1,0,0,0, 1,1,0,0,0, 1,1,0,0,0, 1,1,0,0,2,
    2,0,0,0,0, 0,0,0,0,0, 0,0,1,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,1,1, 0,0,2,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,0,0,0, 0,1,0,0,0, 0,0,1,0,0, 1,1,0,0,0, 1,1,0,0,0, 1,1,0,0,2,
    2,0,0,0,0, 0,0,0,0,0, 0,0,0,1,1, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,2,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,0,0,0, 1,0,0,0,0, 0,0,0,0,0, 1,1,0,0,0, 1,1,0,0,0, 1,1,0,0,2,
        
    2,0,0,0,0, 0,0,1,1,0, 0,0,0,1,1, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,2,0,0, 0,0,0,0,0, 0,0,0,0,1, 2,1,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2,
    2,0,0,1,0, 0,0,1,1,0, 0,0,0,1,0, 0,0,0,0,0, 0,0,0,0,0, 2,0,0,0,0, 0,0,2,0,0, 0,0,0,0,0, 2,2,2,2,2, 2,2,2,2,2, 2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2,
    2,0,0,1,0, 0,0,1,1,0, 0,0,0,1,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 1,1,1,1,1, 1,1,1,1,1, 1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,2,
    2,0,0,1,0, 0,0,0,0,0, 0,0,0,1,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2,
    2,0,0,1,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 1,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,2,

    2,0,0,1,0, 0,0,1,1,0, 0,0,0,0,0, 0,0,0,0,0, 0,1,1,0,0, 0,0,0,0,0, 1,1,1,1,1, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,2,
    2,0,0,1,1, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,1,1,1, 0,0,0,0,0, 1,1,1,1,1, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,2,
    2,0,0,0,1, 0,0,1,1,0, 0,0,0,0,1, 1,1,1,1,0, 0,0,1,1,1, 0,0,0,0,0, 1,1,1,1,1, 0,0,0,0,0, 0,2,2,2,2, 2,2,2,2,2, 2,2,2,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,2,
    2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 1,1,1,1,1, 0,0,0,0,0, 0,2,1,0,0, 0,0,0,0,0, 0,1,2,0,0, 0,0,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 0,0,0,1,2,
    2,0,0,0,0, 0,1,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 1,1,1,1,1, 0,0,0,0,0, 0,2,0,0,0, 0,0,0,0,0, 0,0,2,0,0, 0,0,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 0,0,0,1,2,

    2,0,1,0,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,2,0,0,0, 1,1,1,0,0, 0,0,2,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2,
    2,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,0, 0,0,0,1,2, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,2,0,0,0, 1,1,1,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2,
    2,0,0,0,1, 0,0,0,0,0, 0,0,1,1,0, 0,0,0,0,0, 1,0,1,0,2, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,2,0,0,0, 0,0,0,0,0, 0,0,1,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,2,
    2,1,1,1,0, 0,0,0,0,0, 0,0,0,0,1, 1,0,0,1,0, 0,0,0,1,2, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 1,2,1,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,1,2,
    2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2
];

//player object
function Player(id, x, y, isIt) {
    this.id = id;
    this.isIt = isIt;
    this.sprite = new PIXI.Sprite.from("it.png");
    this.setCoords(x, y);
    // this.defineProperties();
    // this.sprite.circular = true;
}

Player.prototype = {
    setCoords: function(x, y) {
        this.sprite.x = x;
        this.sprite.y = y;
    },
    setIsIt: function(val) {
        this.isIt = val;
    },
    setId: function(id) {
        this.id = id;
    },
    updatePlayer: function() {
        this.sprite.tint = 0x6a0dad;
    },
    defineProperties: function() {
         //circular
         if (this.sprite.circular === undefined) {
            Object.defineProperty(this.sprite, "circular", {
              get: function get() {
                return true;
              },
              enumerable: true, configurable: true
            });
        }
    }
}

//wall object
function Wall(x, y, isSpike) {
    this.sprite = isSpike ? new PIXI.Sprite.from("spike.png") : new PIXI.Sprite.from("wall.png");
    this.sprite.x = x;
    this.sprite.y = y;
    this.isSpike = isSpike;
}

//Game object
function Game(socket) {
    this.otherPlayers = [];
    this.socket = socket;
    this.app = new PIXI.Application({width:3200,height:1600,backgroundColor:0xbbbbbb});
    this.container = new PIXI.Container();
    this.walls = [];
    this.setupWalls();
    this.app.ticker.add(gameLoop);
}

Game.prototype = {
    setupWalls: function() {
        for (let i = 0; i < 3200; ++i) {
            if (testmap[i] == 1 || testmap[i] == 2) {
                var quotient = 40 * Math.floor(i/80);
                var remainder = 40 * (i % 80);
                let wall = (testmap[i] == 1) ? new Wall(remainder, quotient, true): new Wall(remainder, quotient, false);
                this.walls.push(wall);
                this.container.addChild(wall.sprite);
            }
        }
        this.app.stage.addChild(this.container);
    },
    addPlayer: function(data) {
        let player = new Player(data.id, data.x, data.y, data.isIt);
        var _this = this;
        if (data.isCurr) {
            this.localPlayer = player;
            if (data.isIt) this.localPlayer.updatePlayer();
            this.container.addChild(this.localPlayer.sprite);
            this.sendData(this.localPlayer);

            var _this = this;
            data.players.forEach((pl) => {
                if (pl.id != _this.localPlayer.id) {
                    let prevP = new Player(pl.id, pl.x, pl.y, pl.isIt);
                    if (pl.isIt) prevP.updatePlayer();
                    _this.otherPlayers.push(prevP);
                    _this.container.addChild(prevP.sprite);
                    _this.sendData(prevP);
                }
            });
        }
        else {
            //other players added
            this.otherPlayers.push(player);
            this.container.addChild(player.sprite);
            this.sendData(player);
        }

    },
    update: function(players) {
        if (players != undefined) {
            var _this = this;
            players.forEach((p) => {
                if (p.id == _this.localPlayer.id) {
                    // _this.localPlayer.setCoords(p.x, p.y);
                    if(p.isIt != undefined) _this.localPlayer.setIsIt(p.isIt);
                    if (p.isIt) _this.localPlayer.updatePlayer();
                }
                else {
                    _this.otherPlayers.forEach((op) => {
                        if (op.id == p.id) {
                            op.setCoords(p.x, p.y);
                            op.setIsIt(p.isIt);
                            if (p.isIt) op.updatePlayer();
                        }
                    });
                }
            });
        }
    },
    sendData: function(player) {
        var data = {
            id: player.id,
            x: player.sprite.x,
            y: player.sprite.y,
            isIt: player.isIt
        };
        this.socket.emit('localUpdate', data);
    },
    removePlayer: function(playerId) {
        for (player of this.otherPlayers) {
            if (player.id == playerId) {
                this.container.removeChildAt(this.container.children.indexOf(player.sprite));
            }
        }
        this.otherPlayers = this.otherPlayers.filter ((op) => {
            return op.id != playerId;
        });
    },
    endGame: function(playerId) {
        if (this.localPlayer != undefined && playerId == this.localPlayer.id) {
            this.container.removeChildAt(this.container.children.indexOf(this.localPlayer.sprite));
            this.app.ticker.remove(gameLoop);
            document.body.removeChild(this.app.view);
            this.socket.emit('gameOver', playerId);
            $('#game-ended').show();
        }
        else {
            this.removePlayer(playerId);
            this.socket.emit('gameOver', playerId);
        }
    },
    movePlayerForward: function(direction, player, spd) {
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
    },
    movePlayerBackward: function(direction, player, spd) {
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
    },
    bumpArray: function(player) {
        let result = [];
        for (other of this.otherPlayers) {
            if (player.id != other.id) {
                let collision = this.intersect(player.sprite, other.sprite);
                if (collision) {
                    if (!player.isIt && !other.isIt) result.push(other);
                    else if (player.isIt || other.isIt) {
                        player.isIt ? this.endGame(other.id) : this.endGame(player.id);
                        // this.sendData(player);
                        result = null;
                        break;
                    }
                }
            }
        }
        return result;
    },
    intersect: function(p1, p2) {
        let p1bounds = p1.getBounds();
        let p2bounds = p2.getBounds();

        return p1bounds.x + p1bounds.width > p2bounds.x &&
            p1bounds.x < p2bounds.x + p2bounds.width &&
            p1bounds.y + p1bounds.height > p2bounds.y &&
            p1bounds.y < p2bounds.y + p2bounds.height;
    },
    bumpWall: function(player) {
        let result = false;
        let spike = false;
        for (wall of this.walls) {
            let collision = this.intersect(player.sprite, wall.sprite);
            if (collision) {
                result = collision;
                if (wall.isSpike) spike = true;
                break;
            }
        }

        return {result: result, spike: spike};
    },
    bump: function(direction, player, speed) {
        this.movePlayerForward(direction, player, speed);
        let wall = this.bumpWall(player);
        if (wall.result) {
            if (wall.spike && !player.isIt) this.endGame(player.id);
            else if (!wall.spike) this.movePlayerBackward(direction, player, speed);
        }
        else {
            this.bumpOtherPlayers(direction, player);
        }
        this.sendData(player);
    },
    bumpOtherPlayers: function(direction, player, speed) {
        let firstContact = this.bumpArray(player);
        if (firstContact == null) return;
        // if (firstContact.length > 0) {
        //     if (firstContact.length == 1) {
        //         this.movePlayerForward(direction, firstContact[0], speed);
        //         let bounds = b.contain(firstContact[0].sprite, {x: 0, y: 0, width: 3200, height: 1600}, true);
        //         let wallTouch = this.bumpWall(firstContact[0]);
        //         let secondContact = this.bumpArray(firstContact[0]);
        //         if (bounds != undefined) this.movePlayerBackward(direction, player, speed);
        //         if (secondContact == null) return;
        //         if (wallTouch.result || (secondContact.length > 0)) {
        //             this.movePlayerBackward(direction, player, speed);
        //             this.movePlayerBackward(direction, firstContact[0], speed);
        //             if (wallTouch.result && wallTouch.spike) game.endGame(firstContact[0].id);
        //         }
        //     } else {
        //         this.movePlayerBackward(direction, player, speed);
        //     }
        //     // this.sendData(firstContact[0]);
        // }
        // this.sendData(player);
    }
}
function gameLoop() {
    if (game.localPlayer != undefined) {
        b.contain(game.localPlayer.sprite, {x: 0, y: 0, width: 3200, height: 1600}, true);
        let oneOrMore = numKeysPressed(keys);
        if (oneOrMore) {
            speed = 4;
            if ((keys["37"] && keys["38"])) game.bump("topleft", game.localPlayer, speed);
            else if ((keys["37"] && keys["40"])) game.bump("bottomleft", game.localPlayer, speed);
            else if ((keys["39"] && keys["38"])) game.bump("topright", game.localPlayer, speed);
            else if ((keys["39"] && keys["40"])) game.bump("bottomright", game.localPlayer, speed);
            speed = 5;
        } else {
            //left
            if (keys["37"]) game.bump("left", game.localPlayer, speed);
            //top
            else if (keys["38"]) game.bump("top", game.localPlayer, speed);
            //right
            else if (keys["39"]) game.bump("right", game.localPlayer, speed);
            //bottom
            else if (keys["40"]) game.bump("bottom", game.localPlayer, speed);
        }

        followPlayer(game.app, game.localPlayer);
        resizeApp(game.app);
    }
}
