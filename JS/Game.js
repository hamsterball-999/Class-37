class Game{
    constructor(){}
// read the gameState value in database
    getstate(){
      var gamestatedb = database.ref("gamestate")  
      gamestatedb.on("value", function(data){
          gamestate = data.val()
      })
    }

    // update the gameState value in the db
    updatestate(count){
        database.ref("/").update({gamestate:count});
    }
    // update Name in db 

    // if the required number of players is there, the game should be launched else the form to admit new players should be displayed
    launchform(){
    if(gamestate === 0){
        // create a new Form for the new player
            form = new Form();
            // display the form
        form.showform();
            // create a new player
            player = new Player()
            // get player Count
            player.getcount()
    }   
    }
        startgame(){
            form.hide()

            textSize(25);
            text("Loading... Patience Pays off... :)", 120,100);

            Player.getplayerinfo();
            if(allplayers !== undefined){
                var pos = 130;
                for(var plr in allplayers){
                    pos += 20;
                    textSize(15);
                    text(allplayers[plr].name + ": " + allplayers[plr].distance, 120,pos);
                }
            }
        }

}