function setupLevel (level: number) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else {
    	
    }
}
let currentlevel = 1
let mySprite = sprites.create(assets.image`tom tv`, SpriteKind.Player)
setupLevel(currentlevel)
