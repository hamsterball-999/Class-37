class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Enter ur name bruh");
        this.playbutton = createButton("press to play :D");
        this.greeting = createElement("h3");
    }

    hide(){
        this.input.hide();
        this.playbutton.hide();  
        this.greeting.hide();
        this.title.hide();
    }

    showform(){
        // display the name of the game
        this.title.html("kerchoo boiiii :)");
        this.title.position(200,200);

        // display an input box for getting the name of the player
        this.input.position(200,300);

        // display a start/play button
        this.playbutton.position(200,400);

        // greet the player and ask them to wait until others join when they click on play button
        
            // when start is pressed -->
            this.playbutton.mousePressed(()=>{
            // hide the input button
            this.input.hide();
            // hide the start button
            this.playbutton.hide();
            // increase playerCount by 1
            playercount += 1;
            player.index = playercount;
            // update value in db
            player.updatecount(playercount);
            // get name of the player
            player.name = this.input.value();
            // set value in db
            player.update();
            // greet the player
            this.greeting.html("Hello! " + player.name);
            this.greeting.position(200,300);
        })
            
    }
}
