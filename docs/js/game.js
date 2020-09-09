
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var bottles;
var bombs;
var greenBottles;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('bottle', 'assets/bottle.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('alcoholOne', 'assets/alcohol-1.png');
    this.load.spritesheet('dude', 'assets/karen-run.png', { frameWidth: 75, frameHeight: 145 });
}

function create ()
{
    //  A simple background for our game
    this.add.image(400, 300, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    //  Now let's create some ledges
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    // The player and its settings
    player = this.physics.add.sprite(75, 145, 'dude');

    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 3 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 3, end: 5}),
        frameRate: 10,
        repeat: -1
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  Some bottles to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    bottles = this.physics.add.group({
        key: 'bottle',
        repeat: 2,
        setXY: { x: 200, y: 0, stepX: 200 }
    });

    bottles.children.iterate(function (child) {
        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    greenBottles = this.physics.add.group({
        key: 'alcoholOne',
        repeat: 1,
        setXY: { x: 300, y: 0, stepX: 200 }
    });

    greenBottles.children.iterate(function (child) {
        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.3));

    });

    bombs = this.physics.add.group();

    //  The score
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    //  Collide the player and the bottles with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(bottles, platforms);
    this.physics.add.collider(greenBottles, platforms);
    this.physics.add.collider(bombs, platforms);

    //  Checks to see if the player overlaps with any of the bottles, if he does call the collectWater function
    this.physics.add.overlap(player, bottles, collectWater, null, this);

    this.physics.add.collider(player, bombs, hitBomb, null, this);

    this.physics.add.collider(player, greenBottles, hitEnemies, null, this);
}

function update ()
{
    if (gameOver)
    {
        return;
    }

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}

function collectWater (player, bottle)
{
    bottle.disableBody(true, true);

    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);

    if (bottles.countActive(true) === 0)
    {
        //  A new batch of bottles to collect
        bottles.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

    }
}

function hitEnemies (player, enemy)
{
    player.setTint(0xff0000);

    setTimeout( function() {
        player.setTint();
    }, 500);

    enemy.disableBody(true, true);

    //  Add and update the score
    score -= 10;
    scoreText.setText('Score: ' + score);

    if (greenBottles.countActive(true) === 0)
    {
        //  A new batch of greenBottles to collect
        greenBottles.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });
    }
}

function hitBomb (player, bomb)
{
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;

    if (score > 0) {
        window.location.href = "lost.html";
    } else {
        window.location.href = "lost.html";
    };
}
