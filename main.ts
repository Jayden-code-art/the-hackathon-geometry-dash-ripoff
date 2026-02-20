controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    music.jumpDown.play()
    if (checkpoint == 1) {
        tiles.placeOnRandomTile(sprite, assets.tile`myTile10`)
    } else {
        tiles.placeOnRandomTile(sprite, assets.tile`myTile5`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile8`)) {
        tiles.setTileAt(value2, assets.tile`myTile6`)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`myTile12`)) {
        tiles.setTileAt(value3, assets.tile`myTile11`)
    }
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile11`, function (sprite, location) {
    sprite.destroy()
    tiles.setTileAt(location, assets.tile`myTile12`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (blastable == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            a a a 
            a a a 
            a a a 
            `, mySprite, 150, 0)
        blastable = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    Next_Level()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    if (checkpoint == 0) {
        sprite.sayText("Checkpoint reached!", 2000, false)
    }
    checkpoint = 1
})
function Next_Level () {
    tiles.setCurrentTilemap(maps.shift())
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        tiles.setWallAt(value, true)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile5`)
    level += 1
    checkpoint = 0
    if (level == 5) {
        game.over(true)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    music.jumpDown.play()
    if (checkpoint == 1) {
        tiles.placeOnRandomTile(sprite, assets.tile`myTile10`)
    } else {
        tiles.placeOnRandomTile(sprite, assets.tile`myTile5`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile8`)) {
        tiles.setTileAt(value2, assets.tile`myTile6`)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`myTile12`)) {
        tiles.setTileAt(value3, assets.tile`myTile11`)
    }
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile6`, function (sprite, location) {
    sprite.destroy()
    tiles.setTileAt(location, assets.tile`myTile8`)
})
let projectile: Sprite = null
let blastable = 0
let checkpoint = 0
let level = 0
let mySprite: Sprite = null
let maps: tiles.TileMapData[] = []
maps = [
tileUtil.createSmallMap(tilemap`level17`),
tileUtil.createSmallMap(tilemap`level21`),
tileUtil.createSmallMap(tilemap`level22`),
tileUtil.createSmallMap(tilemap`level23`),
tileUtil.createSmallMap(tilemap`level24`),
tileUtil.createSmallMap(tilemap`level27`)
]
tiles.setCurrentTilemap(maps.shift())
mySprite = sprites.create(img`
    c c c c c c 
    c e 8 8 8 c 
    c 8 8 e e c 
    c 8 8 8 8 c 
    c e e 8 8 c 
    c c c c c c 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 490
mySprite.sayText(Credits.credit("Jayden, Bradley, Marcus"), 2500, false)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile5`)
mySprite.vx = 100
let whichWay = 0
level = 0
checkpoint = 0
game.onUpdateInterval(2000, function () {
    blastable = 1
})
game.onUpdateInterval(1, function () {
    mySprite.vx = 50
})
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        tiles.setWallAt(value, true)
    }
    music.setVolume(255)
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    if (level == 1) {
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Half))
    }
    if (level == 2) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(220, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(220, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
    }
    if (level == 3) {
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
    }
    if (level == 4) {
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
    }
})
