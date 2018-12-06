export default class InfoScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'info'
    });
  }
  init(score) {
    this.score = score.score;
  }
  preload() {}
  create() {
    this.space = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.rect = new Phaser.Geom.Rectangle(0, 0, 700, 700);
    this.graphics = this.add.graphics({fillStyle: {color: 0x000000}});
    this.graphics.fillRectShape(this.rect);

    this.startText = this.add
      .text(
        this.sys.game.config.width / 2,
        650,
        `Press space to start the game`,
        {
          fontSize: `30px`,
          fill: `#00ff00`
        }
      )
      .setOrigin(0.5, 0.5);

    this.showInfoText();
  }
  showInfoText() {
    console.log('info');
    this.infoText1 = this.add
      .text(this.sys.game.config.width / 2, 50, `How to play Pew Pew Zombie`, {
        fontSize: `30px`,
        fill: `#00ff00`
      })
      .setOrigin(0.5, 0.5);
    this.infoText2 = this.add
      .text(this.sys.game.config.width / 2, 150, `Controls:`, {
        fontSize: `30px`,
        fill: `#ffffff`
      })
      .setOrigin(0.5, 0.5);
    this.infoText3 = this.add
      .text(
        this.sys.game.config.width / 2,
        200,
        `Use the arrow keys or WASD/ZQSD to move the player`,
        {
          fontSize: `20px`,
          fill: `#ffffff`
        }
      )
      .setOrigin(0.5, 0.5);
    this.infoText4 = this.add
      .text(
        this.sys.game.config.width / 2,
        250,
        `Use the mouse to aim and shoot enemies`,
        {
          fontSize: `20px`,
          fill: `#ffffff`
        }
      )
      .setOrigin(0.5, 0.5);
    this.infoText8 = this.add
      .text(this.sys.game.config.width / 2, 350, `In-game goals:`, {
        fontSize: `30px`,
        fill: `#ffffff`
      })
      .setOrigin(0.5, 0.5);
    this.infoText5 = this.add
      .text(
        this.sys.game.config.width / 2,
        400,
        `Pick up more ammo to keep shooting enemies`,
        {
          fontSize: `20px`,
          fill: `#ffffff`
        }
      )
      .setOrigin(0.5, 0.5);
    this.infoText6 = this.add
      .text(
        this.sys.game.config.width / 2,
        450,
        `Enemies will be stronger as you progress`,
        {
          fontSize: `20px`,
          fill: `#ff0000`
        }
      )
      .setOrigin(0.5, 0.5);
    this.infoText7 = this.add
      .text(
        this.sys.game.config.width / 2,
        550,
        `So kill them all, and don't die!`,
        {
          fontSize: `30px`,
          fill: `#ffffff`
        }
      )
      .setOrigin(0.5, 0.5);
  }
  update() {
    if (this.space.isDown) {
      this.scene.start(`game`);
    }
  }
}
