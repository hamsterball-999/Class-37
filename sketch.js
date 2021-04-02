var gamestate = 0;
var playercount;
var database;
var player;
var form;
var game;
var allplayers;

function setup(){
    database = firebase.database();
    createCanvas(500,500);

    game = new Game()
    game.getstate()
    game.launchform()
}

function draw(){
    background("skyblue");
    if(playercount === 2){
    game.updatestate(1);
    }
    if(gamestate === 1){
        clear()
        game.startgame();
    }
}    