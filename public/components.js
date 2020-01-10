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
function Player(id, isCurr, isIt) {
    this.id = id;
    this.isCurr = isCurr;
    this.isIt = isIt;
    this.sprite = new PIXI.Sprite.from("it.png");
    this.sprite.x = 300;
    this.sprite.y = 300;
    this.defineProperties();
    this.sprite.circular = true;
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
function Game(s) {
    this.otherPlayers = [];
    this.s = s;
    this.app = new PIXI.Application({width:3200,height:1600,backgroundColor:0xbbbbbb});
    this.container = new PIXI.Container();
    this.localPlayer = new Player(0, true, false);
    this.walls = [];
    this.gameEnded = false;
    this.setupWalls();
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
        let player = new Player(data.id, data.isCurr, data.isIt);
        var _this = this;
        if (data.isCurr) {
            //current player added
            this.localPlayer.setId(data.id);
            this.localPlayer.setCoords(data.coord.x, data.coord.y);
            this.localPlayer.setIsIt(data.isIt);
            if (data.isIt) this.localPlayer.updatePlayer();
            this.container.addChild(this.localPlayer.sprite);
            this.sendData(this.localPlayer);

            var _this = this;
            data.players.forEach((pl) => {
                if (pl.id != _this.localPlayer.id) {
                    let prevP = new Player(pl.id, false, pl.isIt);
                    prevP.setCoords(pl.x, pl.y)
                    prevP.setIsIt(pl.isIt);
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
        var _this = this;
        players.forEach((p) => {
            if (p.id == _this.localPlayer.id) {
                // console.log("local:", _this.localPlayer.sprite.x, _this.localPlayer.sprite.y);
                // console.log("new:", p.x, p.y);
                // if (_this.localPlayer.sprite.x != p.x && _this.localPlayer.sprite.y != p.y) 
                _this.localPlayer.setCoords(p.x, p.y);
                _this.localPlayer.setIsIt(p.isIt);
                if (p.isIt) _this.localPlayer.updatePlayer();
            }
            else {
                _this.otherPlayers.forEach((op) => {
                    if (op.id == p.id) {
                        if (op.sprite.x != p.x && op.sprite.y != p.y) op.setCoords(p.x, p.y);
                        op.setIsIt(p.isIt);
                        if (p.isIt) op.updatePlayer();
                    }
                });
            }
        });
    },
    sendData: function(player) {
        var data = {
            id: player.id,
            x: player.sprite.x,
            y: player.sprite.y,
            isIt: player.isIt
        };
        this.s.emit('localUpdate', data);
    },
    removePlayer: function(playerId) {
        for (player of this.otherPlayers) {
            if (player.id == playerId) {
                this.container.removeChildAt(this.container.children.indexOf(player.sprite));
            }
        }
        // console.log(this.otherPlayers.length, "before");
        this.otherPlayers = this.otherPlayers.filter ((op) => {
            return op.id != playerId;
        });
        // console.log(this.otherPlayers.length, "after");
    },
    endGame: function(playerId) {
        if (playerId == this.localPlayer.id) {
            this.container.removeChildAt(this.container.children.indexOf(this.localPlayer.sprite));
            this.app.ticker.remove(gameLoop);
            document.body.removeChild(game.app.view);
            this.gameEnded = true;
            this.s.emit('gameOver', playerId);
            $('#game-ended').show();
        }
        else {
            this.removePlayer(playerId);
            this.s.emit('gameOver', playerId);
        }
    }
}