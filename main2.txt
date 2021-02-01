'use strict'
const Game=new Phaser.Game(400, 400, Phaser.AUTO, 'game-canvas',{preload, create, update})


let cursors

function preload() {
    Game.load.image('ship', 'images/ship (0).png')
    Game.load.image('background', 'images/background-space.png')    
}

function create(){
    Game.scale.pageAlignHorizontally = true
    Game.stage.backgroundColor = '#fff'
    Game.add.sprite(0, 0, 'background')
    Game.world.setBounds(0, 0, 1052, 1052)

    const player = Game.add.sprite(Game.width/2, Game.height/2, 'ship')
    player.anchor.setTo(0.5)
    player.scale.setTo(0.7)
    
    player.fixedToCamera=true
    cursors = Game.input.keyboard.createCursorKeys()
}

function update(){  
    if (cursors.left.isDown) {
        Game.camera.x -=4 // x=x-4 <=> x -=4
    } else if (cursors.right.isDown) {
        Game.camera.x +=4
    
    }
    if (cursors.up.isDown) {
        Game.camera.y -=4
    } else if (cursors.down.isDown) {
        Game.camera.y +=4
    } 
}

