import Phaser from "./phaser.min";

import game_scene from './scenes/game_scene'

var config = {
    type: Phaser.AUTO,
    width: world.width,
    height: world.height,
    parent: "game-container",
    transparent: true,
    input:{
        mouse:{
            preventDefaultWheel: false
        }
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity:{y:200},
            debug: false
        }
    },
    scene: [game_scene]
};

export default new Phaser.Game(config);

