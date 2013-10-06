game.resources = [

	/**
     * Graphics.
     */
    // our level tileset
    {name: "lvl1",  type:"image", src: "data/img/map/lvl1.png"},
     
    /* 
     * Maps. 
     */
    {name: "lvl1", type: "tmx", src: "data/map/lvl1.tmx"},
    
    /*
     * Hero
     */
    {name: "hero", type:"image", src: "data/img/sprite/hero.png"},
    
	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
	
	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/", channel : 1},
	 */
    
    // our enemty entity
    {name: "note", type:"image", src: "data/img/sprite/sweet_note.gif"},
	
	/* Sound effects. 
	 *
	 */
	 {name: "jump", type: "audio", src: "data/sfx/", channel : 2}
	 
];
