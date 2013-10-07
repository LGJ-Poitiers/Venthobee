/*------------------- 
a player entity
-------------------------------- */
var leftP = true;
game.PlayerEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
        settings.image = "hero";
        
        this.parent(x, y, settings);

        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity(4, 17);
        this.updateColRect(10, 29, 4, 80);
        
        this.renderable.addAnimation("stand", [0, 1, 2], 30);
        this.renderable.addAnimation("walk", [8, 9, 10, 11, 12, 13, 14, 15]);
        
        this.renderable.setCurrentAnimation("stand");
       	 
        this.anchorPoint.set(0,0);
        //this.ylimit = me.game.currentLevel.height;

        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
        //me.debug.renderHitBox = true;
		this.alwaysUpdate = true;
		
		//me.game.viewport.follow(this.pos, me.game.viewport.AXIS.HORIZONTAL);
		this.life = 1000;
    },
 
    /* -----
 
    update the player pos
 
    ------ */
    update: function() {
 
        if (me.input.isKeyPressed('left')) {
        	this.renderable.setCurrentAnimation("walk");
        
            // flip the sprite on horizontal axis
            this.flipX(true);
            // update the entity velocity
            this.vel.x -= this.accel.x * me.timer.tick;
            leftP = true;
        } else if (me.input.isKeyPressed('right')) {
        	this.renderable.setCurrentAnimation("walk");
        
            // unflip the sprite
            this.flipX(false);
            // update the entity velocity
            this.vel.x += this.accel.x * me.timer.tick;
            leftP = false;
        } else {
        	this.renderable.setCurrentAnimation("stand");
        	this.parent();
            this.vel.x = 0;
        }
        
        if (me.input.isKeyPressed('jump')) {
            // make sure we are not already jumping or falling
            if (!this.jumping && !this.falling) {
                // set current vel to the maximum defined value
                // gravity will then do the rest
                this.vel.y = -this.maxVel.y * me.timer.tick;
                // set the jumping flag
                this.jumping = true;
                // play some audio 
                me.audio.play("jump");
            }
 
        }
        
        if (me.input.isKeyPressed('shoot')) {
        	if (leftP) {
        		shot = new bullet(this.pos.x+0, this.pos.y+20, leftP);
        	}
        	else {
        		shot = new bullet(this.pos.x+50, this.pos.y+20, leftP);
        	}
            me.game.add(shot, this.z);
            me.game.sort();
            //me.game.HUD.updateItemValue("score", -1);
    	}
 
        // check & update player movement
        this.updateMovement();
        
        // check for collision
        var res = me.game.collide(this);
     
        if (res) {
            // if we collide with an enemy
            if (res.obj.type == me.game.ENEMY_OBJECT) {
                // check if we jumped on it
                if ((res.y > 0) && ! this.jumping) {
                    // bounce (force jump)
                    this.falling = false;
                    this.vel.y = -this.maxVel.y * me.timer.tick;
                    // set the jumping flag
                    this.jumping = true;
                    
                    // remove enemy if jump on it
                    me.game.remove(res.obj);
     
                } else {
                    // let's flicker in case we touched an enemy
                    
                    this.life -= 20;
                    if (this.life <= 0) {
                    	
                       // display the game over screen
                 	   me.state.change(me.state.LOOSE);
                 	   // remove the player
                 	   me.game.remove(this);
                    }
                    this.renderable.flicker(45);
                }
            }
        }
 
        // update animation if necessary
        //if (this.vel.x!=0 || this.vel.y!=0) {
            // update object animation
            this.parent();
            return true;
        //}
         
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        //return false;
    }
 
});
