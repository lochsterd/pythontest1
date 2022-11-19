function setupLevel (level: number) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else {
    	
    }
}
let mySprite: Sprite = null
let currentlevel = 1
controller.moveSprite(mySprite)
mySprite = sprites.create(assets.image`tom tv`, SpriteKind.Player)
setupLevel(currentlevel)
