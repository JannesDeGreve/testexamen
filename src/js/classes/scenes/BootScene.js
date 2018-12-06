import './../../../assets/preloader.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: `boot`
    });
    console.log(`In de Bootscene`);
  }
  preload() {
    console.log(`preload van de bootscene`);
    this.load.image(`loadingBar`, `./assets/preloader.png`);
  }
  create() {
    console.log(`create van de bootscene`);
    this.scene.start(`preload`);
  }
  update() {}
}
