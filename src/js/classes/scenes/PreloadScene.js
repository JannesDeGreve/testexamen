import './../../../assets/emoticons.png';
import './../../../assets/emoticons.json';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({
      key: `preload`
    });
  }
  preload() {
    // this.preloader = this.add.graphics();
    // this.loadingText = this.add
    //   .text(this.sys.game.config.width / 2, 300, `Loading: 0%`, {
    //     fontSize: `32px`,
    //     fill: `#00ff00`
    //   })
    //   .setOrigin(0.5, 0.5);
    // this.loadingBar = this.add.image(150, 350, 'loadingBar');
    // this.loadingBar.setVisible(false);

    this.load.on(`progress`, this.onProgress, this);
    this.load.on(`complete`, this.onComplete, this);

    // this.load.spritesheet('playerwalking', './assets/img/playerwalking.png', {
    //   frameWidth: 258,
    //   frameHeight: 220,
    //   endFrame: 20
    // });
  }

  onProgress(value) {
    //console.log(`Loading: ${Math.round(value * 100)}%`);
    this.preloader.clear();
    this.preloader.fillStyle(0xff0000, 1);

    this.loadingText.setText(`Loading: ${Math.round(value * 100)}%`);
    this.loadingBar.setOrigin(0, 0);
    this.loadingBar.setVisible(true);
    this.loadingBar.scaleX = Math.round(value * 4);
  }

  onComplete() {}

  create() {}

  update() {
    if (this.cursors.space.isDown) {
      this.scene.start(`game`);
    }
  }
}
