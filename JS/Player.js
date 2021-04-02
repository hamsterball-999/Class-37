class Player { 
// construct the player 
constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
} 
// read the playerCount value in database 
getcount(){
    var playercountdb = database.ref("playercount");
    playercountdb.on("value", function(data){
    playercount = data.val();
    })  
}

// update the player count value in the db 
updatecount(count){
    database.ref("/").update({playercount:count});
}
// update Name in db 
update(){
   var playerindex = "players/player" + this.index; 
   database.ref(playerindex).set({name:this.name, distance:this.distance});
} 

static getplayerinfo(){
    var getplayer = database.ref("players");
    getplayer.on("value", function(data){
    allplayers= data.val();
    })  
}

}
