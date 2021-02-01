'use strict'
const Game=new Phaser.Game(400, 400, Phaser.AUTO, 'game-canvas',{preload, create, update})

let cursors
function preload() {
   
    Game.load.image('background', 'images/background-space.png')    
}

function create(){
    Game.scale.pageAlignHorizontally = true
    Game.stage.backgroundColor = '#fff'
    Game.add.sprite(0, 0, 'background')
    Game.world.setBounds(0, 0, 1052, 1052)

    cursors = Game.input.keyboard.createCursorKeys()

    Game.input.keyboard.addKey(Phaser.Keyboard.T).onDown.add(fade)
    Game.input.keyboard.addKey(Phaser.Keyboard.A).onDown.add(flash)
    Game.input.keyboard.addKey(Phaser.Keyboard.S).onDown.add(shake)
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
const fade=function(){
    Game.camera.fade(0x000000, 6000)
}
const flash=function(){
    Game.camera.flash(0x00ff00, 800)
}

const shake=function(){
    Game.camera.shake(0.05, 500)
}
