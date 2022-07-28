const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 960,
  height: 480,
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: {
    preload,
    create,
    update
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 500},
      debug: true
    }
  }
}

const game = new Phaser.Game(config);

function preload() {
  this.load.image('tiles', 'assets/Terrain/Terrain (16x16).png');
  this.load.tilemapTiledJSON('map', 'assets/tile_maps/level2.json');
  this.load.spritesheet('maskDudeRun', 'assets/Main Characters/Mask Dude/Run (32x32).png', {frameWidth: 32, frameHeight: 32});
  this.load.spritesheet('maskDudeIdle', 'assets/Main Characters/Mask Dude/Idle (32x32).png', {frameWidth: 32, frameHeight: 32});
  this.load.spritesheet('maskDudeJump', 'assets/Main Characters/Mask Dude/Jump (32x32).png', {frameWidth: 32, frameHeight: 32});
}

function create() {
  const map = this.make.tilemap({key: 'map'});
  const tileset = map.addTilesetImage('platform_tiles', 'tiles');
  const platforms = map.createStaticLayer('platform_layer', tileset, 0, 0);

  platforms.setCollisionByExclusion(-1, true);

  this.player = this.physics.add.sprite(32, 32, 'maskDudeIdle');
  this.player.setBounce(0.1);
  this.player.setCollideWorldBounds(true);
  this.physics.add.collider(this.player, platforms);
}

function update() {

}
