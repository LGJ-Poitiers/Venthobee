game.LooseScreen = me.ScreenObject.extend({
    // constructor
    init: function() {
        this.parent(true);
 
        // title screen image
        this.title = null;
 
        this.font = null;
        
    },
 
    // reset function
    onResetEvent: function() {
        if (this.title == null) {
            // init stuff if not yet done
            this.title = me.loader.getImage("win");
            // font to display the menu items
            this.font = new me.BitmapFont("32x32_font", 32); 
        }
        
    },
 
    // update function
    update: function() {
        return true;
    },
 
    // draw function
    draw: function(context) {
        context.drawImage(this.title, 0, 0);
 
        //this.font.draw(context, "GAME OVER!", 20, 240);
        //this.font.draw(context, me.game.HUD., 20, 272);
    },
 
    // destroy function
    onDestroyEvent: function() { }
 
});