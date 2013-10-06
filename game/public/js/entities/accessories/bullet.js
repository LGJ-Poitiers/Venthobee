var bullet = me.ObjectEntity.extend({

    init: function (x, y, leftP) {
    	
    	settings = {};
    	settings.image = 'bullet';
    	//settings.spritewidth = 32;
    	
        this.parent(x, y, settings);
        this.collidable = true;
        //this.accel = 2;
        //this.gravity = -0.3;
        //this.setVelocity(8, 10);
        //this.vel.x = 0;
		//this.doWalk(left);
        //this.left = left;
        this.vel.x = leftP? -20 : 20;
        this.gravity = (Math.random()-0.5)*1.5;
        this.startX = this.pos.x;

    },

    update: function () {
        
		if (!this.visible){
			// remove myself if not on the screen anymore
            me.game.remove(this);
		}
		
		if (Math.abs(this.pos.x - this.startX) >= 400)
			me.game.remove(this);
		
		//this.vel.y -= this.gravity;
		
		// check for collision
        var res = me.game.collide(this);
        if (res) {
        	//if (res.obj.type != me.game.PLAYER) {
        		me.game.remove(this);
	        	if (res.obj.type == me.game.ENEMY_OBJECT) {
	                me.game.remove(res.obj);
	        	}
        	//}
            /*if (res.obj.type == me.game.CHOPPER || res.obj.type == me.game.TANK) {
				//log points and play sound
                console.log("bullet hit enemy");
                me.game.HUD.updateItemValue("score", 10);
                me.audio.play("points");
				
				//explosion
				console.log("explosion");
				bang = new explosionEntity(this.pos.x, this.pos.y, { image: 'explosion', spritewidth: 64, spriteheight: 64 });
				me.game.add(bang, this.z);
				me.game.sort();
                
				//remove object
				me.game.remove(this);
                me.game.remove(res.obj);
            }*/
        }

        this.updateMovement();
        return true;
    }
});