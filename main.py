def setupLevel(level: number):
    if level == 1:
        tiles.set_current_tilemap(tilemap("""
            level1
        """))
    else:
        pass
currentlevel = 1
mySprite = sprites.create(assets.image("""
    tom tv
"""), SpriteKind.player)
setupLevel(currentlevel)