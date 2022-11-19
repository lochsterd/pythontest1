function setupLevel (level: number) {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else {
    	
    }
}
let currentlevel = 1
let mySprite = sprites.create(assets.image`tom tv`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
setupLevel(currentlevel)
