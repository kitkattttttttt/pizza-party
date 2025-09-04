mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).setKind(SpriteKind.Enemy)
})
mp.onControllerEvent(ControllerEvent.Connected, function (thisPlayer) {
    pizza.setPlayersWith(characters, mp.getPlayerProperty(thisPlayer, mp.PlayerProperty.Number))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 100)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    mp.changePlayerStateBy(mp.getPlayerBySprite(otherSprite), MultiplayerState.score, -1)
    sprite.setKind(SpriteKind.Player)
})
mp.onScore(20, function (thisPlayer) {
    game.gameOver(true)
})
let projectile: Sprite = null
let characters: Image[] = []
characters = [
newpizzaassets.red,
newpizzaassets.blue,
newpizzaassets.orange,
newpizzaassets.green
]
scene.setBackgroundImage(newpizzaassets.city)
pizza.setPlayersWith(characters, 1)
game.splash("Press (A) when everyone is", "ready to start the game")
music.play(music.createSong(assets.song`countdown`), music.PlaybackMode.UntilDone)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, randint(-100, 100), randint(-100, 100))
})
