class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    //preload assets
    preload() {
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
    }

    create() {
        this.add.text(20, 20, "Menu scene");
        this.scene.start("playScene"); //Temporary
    }
}