let playerDefinition = {
    width:50,
    height:50,
    fillColor: Phaser.Display.Color.HexStringToColor("#df7126").color
}
class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y){
        super(scene, x, y);
        scene.physics.add.existing(this);
        
        this.setCollideWorldBounds(true); 
        this.setBounce(0.2);

        this.moveSpeed = 250;

        scene.add.existing(this);
        this.create();
    }

    create(){
        this.add.rectangle(x,y,playerDefinition.width,playerDefinition.height,playerDefinition.fillColor);
    }
    handleJump(){
        if(world.cursors.right.isDown) {
            this.body.setVelocityX(this.moveSpeed);
        } else if(world.cursors.left.isDown) {
            this.body.setVelocityX(-this.moveSpeed);
        } else {
            this.setVelocityX(0);
        }
    }
    updatePlayer(){
        this.handleJump();
    }

}