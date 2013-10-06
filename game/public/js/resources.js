game.resources = [

	// title screen
    {name: "title",  type:"image", src: "data/img/gui/title.png"},
    
    // level tileset
    {name: "lvl1",  type:"image", src: "data/img/map/lvl1.png"},
     
    // map lvl1
    {name: "lvl1", type: "tmx", src: "data/map/lvl1.tmx"},
    
    //hero
    {name: "hero", type:"image", src: "data/img/sprite/hero.png"},
    
    /*
     *  Enemy
     */
    {name: "note", type:"image", src: "data/img/sprite/sweet_note.gif"},
    
    /*
     * Bullet
     */
    {name: "bullet", type:"image", src: "data/img/sprite/sweet_note.gif"},
    
	/* Sound effects. 
	 *
	 */
	 {name: "jump", type: "audio", src: "data/sfx/", channel : 2},
	 
    //font
    {name: "32x32_font", type:"image", src: "data/img/font/32x32_font.png"},
 
    // our enemty entity
    {name: "note", type:"image", src: "data/img/sprite/sweet_note.png"},
	
	// sound effect
	{name: "jump", type: "audio", src: "data/sfx/", channel : 2}
];
