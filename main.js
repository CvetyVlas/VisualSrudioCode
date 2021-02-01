'use strict'
const Game=new Phaser.Game(400, 400, Phaser.AUTO, 'game-canvas',
{preload, create, update})

const playerSpeed=200
let player, cursors

function preload() {
    Game.load.image('ship', 'images/ship (0).png')
    Game.load.image('background', 'images/background-space.png')    
}

function create(){
    Game.scale.pageAlignHorizontally = true
    Game.stage.backgroundColor = '#fff'
    Game.add.sprite(0, 0, 'background')
    Game.world.setBounds(0, 0, 1052, 1052)

    player = Game.add.sprite(300, 300, 'ship')
    player.anchor.setTo(0.5)
    player.scale.setTo(0.7)
    Game.physics.enable(player)
    Game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER, 0.1, 0.1)

    cursors = Game.input.keyboard.createCursorKeys()
}

function update(){
    movePlayer()
}
const movePlayer=function(){
    if (cursors.left.isDown) {
        player.body.velocity.x = -playerSpeed
    } else if (cursors.right.isDown) {
        player.body.velocity.x = playerSpeed
    } else {
        player.body.velocity.x = 0
    }
    if (cursors.up.isDown) {
        player.body.velocity.y = -playerSpeed
    } else if (cursors.down.isDown) {
        player.body.velocity.y = playerSpeed
    } else {
        player.body.velocity.y = 0
    }
}

