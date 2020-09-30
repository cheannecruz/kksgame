//=======================================//
console.log("Loading => game.js");
//=======================================//

var game = new Phaser.Game(
    800,
    600,
    Phaser.AUTO,
    'phaser-example',
    {
        preload: preload,
        create: create,
        update:update,
        render:render,
        getTime() {
            //make a new date object
            let d = new Date();

            //return the number of milliseconds since 1 January 1970 00:00:00.
            return d.getTime();
        },
        getDeltaTime() {
            //subtract the start time from the time now
            let elapsed = ( (this.getTime()-this.start) / 1000);

            //reset the start time
            this.start = this.getTime();

            return elapsed;
    }
});





//=======================================//
//  SYSTEM
//=======================================//
var deltaTime = 0;
var nextJump = 0;
var end_state = "";
var game_ended = false;
var end_count_down = 0;
var end_level_time = 3;


//=======================================//
//  WORLD
//=======================================//
var exit;


//=======================================//
//  PLAYER
//=======================================//
var score = 0;
var player;



//=======================================//
//  CONTROLS
//=======================================//
var left=false;
var right=false;
var jump=false;
var jumping = false;


//=======================================//
//  UI
//=======================================//
var life_text;
var score_text;
var drunk_text;



//=======================================//
//  CONSOLE OUTPUT
//=======================================//
function log(msg, type) {
    // Define different types of styles
    let baseStyles = [
        "color: #fff",
        "background-color: #444",
        "padding: 2px 4px",
        "border-radius: 2px"
    ].join(';');
    let error = [
        "color: #eee",
        "background-color: red"
    ].join(';');
    let domStyles = [
        "background-color: gray"
    ].join(';');
    let successStyles = [
        "background-color: green"
    ].join(';');

    // Set style based on input type
    let style = baseStyles + ';';
    switch(type) {
        case "error": style += error; break;
        case "dom": style += domStyles; break;
        case "success": style += successStyles; break;
        default: break;
    }
    console.log(`%c${msg}`, style);
};


function preload() {
    //spritesheet for animations
    //game.load.spritesheet('player-sprite', 'assets/misc/player-spritespritesheet-small.png',50,50); // key, sourcefile, framesize x, framesize y


    game.load.spritesheet(
        'player-sprite',
        player_spritesheet,
        player_size.width,
        player_size.height
    );




    if (backgrounds.layer_1.active) {
        game.load.image('background_layer_1', backgrounds.layer_1.image);
    };

    if (background_end.layer_1.active) {
        game.load.image('background_end_layer_1', background_end.layer_1.image);
    };


    if (foreground.active) {
        game.load.image('foreground-image', foreground.image);
    };


    if (ground.active) {
        game.load.image('ground-image', ground.image);
    };



    game.load.image('exit', level_exit.image);



    //=======================================//
    //  PRELOAD GAMEOBJECTS
    //=======================================//
    preloadAllGameObjects();





    // fullscreen setup
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
}



//=======================================//
//  GET GAMEOBJECT
//=======================================//
function GetGameObject($name) {
    var $object = null;

    $.each( gameobjects, function( key, value ) {
        if ($name == value.name) {
            $object = value;
        };

    });

    if ($object == null) {
        log("!! ERROR !! => GameObject Does Not Exist! [" + $name + "]", "error");
    };

    return $object;
};





//=======================================//
//  PRELOAD GAMEOBJECTS
//=======================================//
function preloadAllGameObjects() {
    console.log("GameObjects => Preload GameObjects...");



    $.each( gameobjects, function( key, value ) {
        preloadGameObject(value);
    });


    console.log("GameObjects => Completed Preload GameObjects");


}



function preloadGameObject($gameobject) {
    console.log("Preload GameObject => " + $gameobject.name);

    //  Preload Image
    game.load.image($gameobject.name, $gameobject.image);
    //game.add.audio($gameobject.name + ' - Impact Sound', $gameobject.impactSound);

    if ($gameobject.impactSound != null) {
        $gameobject.impactSound = new Audio($gameobject.impactSound);
    };


}







//=======================================//
//  CREATE GAMEOBJECTS
//=======================================//
function createAllGameObjects($game) {
    console.log("GameObjects => Creating GameObjects...");



    $.each( level_gameobjects, function( key, value ) {
        createGameObject(value, $game);
    });




    console.log("GameObjects => Completed Creating GameObjects");
}



function createGameObject($level_gameobject, $game) {
    console.log("Creating GameObject => Creating Level GameObject - " + $level_gameobject.name);

    $gameobject = GetGameObject($level_gameobject.name);

    //console.log("Found GameObject => " + $gameobject.name);



    var new_gameobject;

    //  Creating a sprite in game
    //  https://www.phaser.io/docs/2.6.2/Phaser.Sprite.html
    //  new Sprite(game, x, y, key, frame)


    new_gameobject = $game.add.sprite($level_gameobject.position.x, $level_gameobject.position.y, $gameobject.name);

    new_gameobject.scale.set($gameobject.scale, $gameobject.scale);

    //  ADD PHYSICS
    $game.physics.p2.enable(new_gameobject);
    new_gameobject.body.fixedRotation = $gameobject.fixedRotation;
    new_gameobject.body.mass = $gameobject.mass;
    player.body.createBodyCallback(new_gameobject, gameobjectCollide, this);
    new_gameobject.body.static = $gameobject.static;

    //new_gameobject.impactSound = game.sound.add($gameobject.name + ' - Impact Sound');


    //  Set Object Alive
    new_gameobject.alive = true;


    //  Attach sprite to body for collision reference
    new_gameobject.body.phaser_object = new_gameobject;
    new_gameobject.body.gameobject = $gameobject;


    //  Add created gameobject to levelobjects
    $level_gameobject.phaser_object = new_gameobject;
    $level_gameobject.gameobject = $gameobject;



}



//=======================================//
//  GAMEOBJECT COLLISONS
//=======================================//
function gameobjectCollide(body1, body2) {

    $gameobject = body2.gameobject;
    $phaser_object = body2.phaser_object;

    if (!$phaser_object.alive) {
        return;
    };

    if ($gameobject.impactSound != null) {
        $gameobject.impactSound.play();
    };



    score += $gameobject.score;

    drunk_o_meter.value += $gameobject.alcohol;



    //console.log("$gameobject:", $gameobject, " | $phaser_object", $phaser_object);


    if ($gameobject.destroyOnImpact) {
        //  DESTROY $phaser_object
        $phaser_object.destroy(true);
        $phaser_object.alive = false;
    };


    //  UPDATE DRUNK-O-METER
    CheckDrunkOMeter();

    PlayerHit($gameobject.damage);


    //console.log("drunk_o_meter: ", drunk_o_meter);
}




//=======================================//
//  UPDATE GAMEOBJECTS
//=======================================//
function updateAllGameObjects($game) {

    $.each( level_gameobjects, function( key, value ) {
        updateGameObject(value, $game);
    });

}



function updateGameObject($level_gameobject, $game) {

    if (!$level_gameobject.phaser_object.alive) {
        return;
    };


    moveGameObject(
        $level_gameobject.phaser_object.body,
        $level_gameobject.gameobject.movement.x,
        $level_gameobject.gameobject.movement.y
        );
}



function moveGameObject($body, $x, $y) {

    if ($x != 0) {
        $body.moveRight($x);
    };

    if ($y != 0) {
        $body.moveUp($y);
    };

}





//=======================================//
//  INITIATE GAMEOBJECTS
//=======================================//
/* function initiateAllGameObjects() {
    console.log("GameObjects => Initiate GameObjects...");



    console.log("GameObjects => Completed Initiating GameObjects");
}


function initiateGameObject($gameobject) {
    console.log("Placing GameObject => " + $gameobject.name);
}
 */



function create() {

    //=======================================//
    //  START GAME SYSTEM
    //=======================================//
    //  record the start time
    this.start = this.getTime();

    if (!game.device.desktop) { //go fullscreen on mobile devices
        game.input.onDown.add(gofull, this);
    };

    game.physics.startSystem(Phaser.Physics.P2JS);  //activate physics


    //=======================================//
    //  SETUP WORLD
    //=======================================//
    game.physics.p2.gravity.y = gravity;  //realistic gravity
    game.world.setBounds(0, 0, world_bounds.width, world_bounds.height);//(x, y, width, height)

    game.physics.p2.setBoundsToWorld(true, true, false, true, false); //(left, right, top, bottom, setCollisionGroup)
    game.physics.p2.friction = 5;   // default friction between ground and player or fireballs



    //clouds = game.add.tileSprite(0, 0, 2048, 600, 'clouds'); //add tiling sprite to cover the whole game world



    //=======================================//
    //  BACKGROUND
    //=======================================//


    //  BACKGROUND LAYER 1
    if (backgrounds.layer_1.active) {

        background_1 = game.add.tileSprite(
            backgrounds.layer_1.position.x,
            backgrounds.layer_1.position.y,
            backgrounds.layer_1.size.x,
            backgrounds.layer_1.size.y,
            'background_layer_1'
            ); //add tiling sprite to cover the whole game world

    };

    if (background_end.layer_1.active) {

        background_end = game.add.tileSprite(
            background_end.layer_1.position.x,
            background_end.layer_1.position.y,
            background_end.layer_1.size.x,
            background_end.layer_1.size.y,
            'background_end_layer_1'
            ); //add tiling sprite to cover the whole game world

    };



    //=======================================//
    //  GROUND
    //=======================================//
    ground_layer = game.add.tileSprite(
        ground.position.x,
            ground.position.y,
            ground.size.x,
            ground.size.y,
        'ground-image'
        );

    game.physics.p2.enable(ground_layer);  //enable physics so our player will not fall through ground but collide with it
    ground_layer.body.static=true;    // ground should not move







    //=======================================//
    //  CREATE PLAYER
    //=======================================//
    player = game.add.sprite(player_start_position.x, player_start_position.y, 'player-sprite'); //create and position player

    game.physics.p2.enable(player);
    player.body.fixedRotation=true; // do not rotate on collision
    player.body.mass = player_mass;

    // add some animations
    player.animations.add('idle', idle_animation.frames, idle_animation.fps, idle_animation.loop);  // (key, framesarray, fps,repeat)
    player.animations.add('walk', walk_animation.frames, walk_animation.fps, walk_animation.loop);  // (key, framesarray, fps,repeat)
    player.animations.add('jump', jump_animation.frames, jump_animation.fps, jump_animation.loop);
    player.animations.add('hurt', hurt_animation.frames, hurt_animation.fps, hurt_animation.loop);
    player.animations.add('dead', dead_animation.frames, dead_animation.fps, dead_animation.loop);




    //=======================================//
    //  CREATE GAMEOBJECTS
    //=======================================//
    createAllGameObjects(game);




    //=======================================//
    //  FOREGROUND
    //=======================================//

    //  BACKGROUND LAYER 1
    if (foreground.active) {

        foreground_layer = game.add.tileSprite(
            foreground.position.x,
            foreground.position.y,
            foreground.size.x,
            foreground.size.y,
            'foreground-image'
            ); //add tiling sprite to cover the whole game world

    };





    //=======================================//
    //  CAMERA
    //=======================================//
    //  Notice that the sprite doesn't have any momentum at all,
    //  it's all just set by the camera follow type.
    //  0.1 is the amount of linear interpolation to use.
    //  The smaller the value, the smooth the camera (and the longer it takes to catch up)
    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, camera_speed, camera_speed);




    //=======================================//
    //  INPUT
    //=======================================//
    cursors = game.input.keyboard.createCursorKeys();




    //=======================================//
    //  LEVEL EXIT
    //=======================================//
    exit = game.add.sprite(level_exit.position.x, level_exit.position.y, 'exit');

    exit.scale.set(level_exit.scale, level_exit.scale);

    game.physics.p2.enable(exit);
    exit.body.fixedRotation=true; // do not rotate on collision
    exit.body.mass = level_exit.mass;
    exit.alpha = level_exit.alpha;

    //  PHYSICS IMPACT
    player.body.createBodyCallback(exit, levelComplete, this);









    //=======================================//
    //  PHYSICS IMPACTS
    //=======================================//


    //  Here we create a Body specific callback.
    //  Note that only impact events between the ship and the panda are used here, the sweet/candy object is ignored.




    //  And before this will happen, we need to turn on impact events for the world
    game.physics.p2.setImpactEvents(true);




    //=======================================//
    //  CREATE UI
    //=======================================//
    life_text = game.add.text(10, 30, "Life: ", font);
    life_text.fixedToCamera = true;

    score_text = game.add.text(10, 60, "Score: ", font);
    score_text.fixedToCamera = true;

    drunk_text = game.add.text(10, 90, "Drunk: ", font);
    drunk_text.fixedToCamera = true;

};



function updateUI() {
    life_text.setText("Life: " + life_points);
    score_text.setText("Score: " + score);
    drunk_text.setText("Drunk: " + Math.round(drunk_o_meter.value));
}






//=======================================//
//  LEVEL COMPLETE
//=======================================//
function levelComplete() {
    end_state = "Game Complete";
    game_ended = true;

    player.animations.play('idle');

    end_count_down = end_level_time;
}




//=======================================//
//  PLAYER DEAD
//=======================================//
function playerDead() {
    end_state = "Player Dead";
    game_ended = true;

    player.animations.play('dead');

    end_count_down = end_level_time;
}





//=======================================//
//  END GAME ACTIONS
//=======================================//
function endGame($end_state) {
    if ($end_state == "Game Complete") {
        window.location.href = "win.html";
    } else if ($end_state == "Player Lost") {
        window.location.href = "lost.html";
    } else if ($end_state == "Player Dead") {
        window.location.href = "lost.html";
    };
}








//=======================================//
//  LIFE POINTS
//=======================================//
function PlayerHit($damage) {

    life_points -= $damage;

    if ($damage < 0) {
        return;
    };

    if (life_points <= 0) {
        playerDead();
    } else {
        player.animations.play('hurt');
    };
}


//=======================================//
//  DRUNK-O-METER
//=======================================//
function DrunkOMeterUpdate () {
    drunk_o_meter.value -= drunk_o_meter.sober_speed * deltaTime;

    CheckDrunkOMeter();
}


function CheckDrunkOMeter() {
    if (drunk_o_meter.value < 0)  {
        drunk_o_meter.value = 0;
    } else if (drunk_o_meter.value > 100)  {
        drunk_o_meter.value = 100;
    };
}









//=======================================//
//  FRAME UPDATE
//=======================================//
function update() {

    deltaTime = this.getDeltaTime();



    if (game_ended) {
        end_count_down -= deltaTime;

        if (end_count_down <= 0) {
            endGame(end_state);
        };

        return;
    };


    //  DRUNK O METER
    DrunkOMeterUpdate();

    //  UI
    updateUI();


    //  INPUT
    left = cursors.left.isDown;
    right = cursors.right.isDown;
    jump = cursors.up.isDown;


    //  PLAYER CONTROL
    // define what should happen when a button is pressed

    if (left) {
        player.scale.x = -1;
        player.body.moveLeft(500);
        if (!jumping) {
            player.animations.play('walk');
        };
    }
    else if (right) {
        player.scale.x = 1;
        player.body.moveRight(500);
        if (!jumping) {
            player.animations.play('walk');
        };
    }
    else {
        if (!jumping) {
            player.animations.play('idle');
        };
    };


    if (jump && !jumping){
        playerJump();
        player.animations.play('jump');
    };


    if (jumping) {
        if (game.time.now > nextJump ){
            jumping = false;
        };
    };







    if (game.input.currentPointers == 0 && !game.input.activePointer.isMouse){
        right=false;
        left=false;
        jump=false;
    }; //this works around a "bug" where a button gets stuck in pressed state


    updateAllGameObjects(game);

};


//=======================================//
//  RENDER
//=======================================//
function render(){
    game.debug.text(
        'jump:' + jump +
        ' left:' + left +
        ' right:' + right +
        ' deltatime:' + deltaTime,

        10, 10);
}



//=======================================//
//  FULL SCREEN
//=======================================//
function gofull() {
    game.scale.startFullScreen(false);
}




//=======================================//
//  PLAYER
//=======================================//
function playerJump(){  //jump with small delay
    if (game.time.now > nextJump ){
        player.body.moveUp(jumpVelocity);
        nextJump = game.time.now + jumpRate;
        jumping = true;
    };
}






function fire_now() {
    if (game.time.now > nextFire){
        nextFire = game.time.now + fireRate;
        var fireball = fireballs.getFirstExists(false); // get the first created fireball that no exists atm
        if (fireball){
            fireball.exists = true;  // come to existance !
            fireball.lifespan=2500;  // remove the fireball after 2500 milliseconds - back to non-existance
            if(player.scale.x == -1){  // if player looks to the left - create the fireball on his left side
                fireball.reset(player.x-20, player.y);
                game.physics.p2.enable(fireball);
                fireball.body.moveLeft(800);
                fireball.body.moveDown(180);
            }else{
                fireball.reset(player.x+20, player.y);
                game.physics.p2.enable(fireball);
                fireball.body.moveRight(800);
                fireball.body.moveDown(180);
            }
            fireball.body.setCircle(10);
        }
    }
}




//=======================================//
console.log("Loaded => game.js");
//=======================================//