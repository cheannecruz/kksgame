//=======================================//
console.log("Loading => game.js");
//=======================================//

var screen_size = {
    x: 800,
    y: 600
}

var game = new Phaser.Game(
    screen_size.x,
    screen_size.y,
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
var game_time = 0;

//=======================================//
//  WORLD
//=======================================//
var exit;


//=======================================//
//  PLAYER
//=======================================//
var score = 0;
var player;
var max_life_points = life_points;
var drunk_points = 0;
var jump_sound = null;
var mask_on = false;

//=======================================//
//  CONTROLS
//=======================================//
var left=false;
var right=false;
var jump=false;
var jumping = false;
var powerKey;
var power_press= false;


//=======================================//
//  UI
//=======================================//
var life_text;
var score_text;
var drunk_text;
var press_p_button_ui;



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



//  The Google WebFont Loader will look for this object, so create it before loading the script.
WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    //active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: googleFonts
    }

};




function preload() {
    //spritesheet for animations
    //game.load.spritesheet('player-sprite', 'assets/misc/player-spritespritesheet-small.png',50,50); // key, sourcefile, framesize x, framesize y


    //  Load the Google WebFont Loader script
    game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');


    // game sound
    game.load.audio('bg_music', 'assets/level-music.mp3');

    game.load.spritesheet(
        'player-sprite',
        player_spritesheet,
        player_size.width,
        player_size.height
    );

    //game.load.audio('bass', 'assets/audio/tech/bass.mp3');

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


    if (drunk_o_meter.active) {
        game.load.image('drunk-overlay', drunk_o_meter.overlay_image);
    };


    if (life_point_icon.active) {
        game.load.image('life-point', life_point_icon.image);
    };

    if (toilet_paper_point_icon.active) {
        game.load.image('toilet-paper-point', toilet_paper_point_icon.image);
    };

    if (press_p_icon.active) {
        game.load.image('press-p-button', press_p_icon.image);
    };

    if (drunk_o_meter_icon.active) {
        game.load.image('drunk-point', drunk_o_meter_icon.image);
        if (drunk_o_meter_icon.background.active) {
            game.load.image('drunk-ui-background', drunk_o_meter_icon.background.image);

        };
    };

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


//  TIME RELEASED GAME OBJECTS
function timeReleaseGameObjects($game) {

    $.each( timerelease_gameobjects, function( key, value ) {
        if (!value.released) {
            if (game_time >= value.time) {
                console.log("GameObjects => Releasing GameObject = " + value.name);
                createGameObject(value, $game);
                if (value.repeat > 0) {
                    value.time = (game_time + value.repeat);
                } else {
                    value.released = true;
                };
            };
        };
    });

    //console.log("GameObjects => Completed Creating GameObjects");
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
        if (game_ended == false) {
            if (mask_on) {
                if ($gameobject.damage < 1) {
                    $gameobject.impactSound.play();
                }
            } else {
                $gameobject.impactSound.play();
            }
        }
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

    PlayerToiletPaperCollect($gameobject.tp_score);
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

var bg_sound;

function create() {
    //=======================================//
    //  START GAME SYSTEM
    //=======================================//
    //  record the start time
    this.start = this.getTime();

    if (!game.device.desktop) { //go fullscreen on mobile devices
        game.input.onDown.add(gofull, this);

        powerKey.onDown.add();
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

    bg_sound = this.sound.add('bg_music',0.2,true);
    bg_sound.play();

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
    player.animations.add('idle', idle_animation.frames, idle_animation.fps, idle_animation.loop);
    player.animations.add('idle_mask', idle_mask_animation.frames, idle_mask_animation.fps, idle_mask_animation.loop);  // (key, framesarray, fps,repeat)
    player.animations.add('walk', walk_animation.frames, walk_animation.fps, walk_animation.loop);
    player.animations.add('walk_mask', walk_mask_animation.frames, walk_mask_animation.fps, walk_mask_animation.loop);  /// (key, framesarray, fps,repeat)
    player.animations.add('jump', jump_animation.frames, jump_animation.fps, jump_animation.loop);
    player.animations.add('jump_mask', jump_mask_animation.frames, jump_mask_animation.fps, jump_mask_animation.loop);
    player.animations.add('hurt', hurt_animation.frames, hurt_animation.fps, hurt_animation.loop);
    player.animations.add('hurt_mask', hurt_mask_animation.frames, hurt_mask_animation.fps, hurt_mask_animation.loop);
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
    powerKey = game.input.keyboard.addKey(Phaser.Keyboard.M);




    //=======================================//
    //  LEVEL EXIT
    //=======================================//
    if (level_exit.active) {
        exit = game.add.sprite(level_exit.position.x, level_exit.position.y, 'exit');

        exit.scale.set(level_exit.scale, level_exit.scale);

        game.physics.p2.enable(exit);
        exit.body.fixedRotation=true; // do not rotate on collision
        exit.body.mass = level_exit.mass;
        exit.alpha = level_exit.alpha;

        //  PHYSICS IMPACT
        player.body.createBodyCallback(exit, levelComplete, this);
    };










    //=======================================//
    //  PHYSICS IMPACTS
    //=======================================//


    //  Here we create a Body specific callback.
    //  Note that only impact events between the ship and the panda are used here, the sweet/candy object is ignored.




    //  And before this will happen, we need to turn on impact events for the world
    game.physics.p2.setImpactEvents(true);




    //=======================================//
    //  DRUNK-O-METER OVERLAY
    //=======================================//


    //  BACKGROUND LAYER 1
    if (drunk_o_meter.active && drunk_o_meter.overlay_image != null) {

        drunk_o_meter_overlay = game.add.tileSprite(
            0,
            0,
            screen_size.x,
            screen_size.y,
            'drunk-overlay'
            ); //add tiling sprite to cover the whole game world
        drunk_o_meter_overlay.fixedToCamera = true;
        drunk_o_meter_overlay.alpha = Math.round(drunk_o_meter.value);
    };


    //=======================================//
    //  CREATE UI
    //=======================================//

    life_point_icons = [];
    var left_alignment = 0;

    //  CREATE LIFE POINT ICON UI
    if(life_point_icon.active) {
        left_alignment = life_point_icon.position.x;
        for(i = 0; i < life_points; i++) {
            life_point_icons[i] = game.add.sprite(
                left_alignment,
                life_point_icon.position.y,
                'life-point'
                ); //add tiling sprite to cover the whole game world
            life_point_icons[i].fixedToCamera = true;

            life_point_icons[i].scale.x = life_point_icon.scale;
            life_point_icons[i].scale.y = life_point_icon.scale;

            left_alignment += life_point_icon.spacing;
        };
    };

    toilet_paper_point_icons = [];
    var left_alignment = 0;
    //  CREATE TOILET PAPER POINT ICON UI
    if(toilet_paper_point_icon.active) {
        left_alignment = toilet_paper_point_icon.position.x;
        for(i = 0; i < 3; i++) {
            toilet_paper_point_icons[i] = game.add.sprite(
                left_alignment,
                toilet_paper_point_icon.position.y,
                'toilet-paper-point'
                ); //add tiling sprite to cover the whole game world
            toilet_paper_point_icons[i].fixedToCamera = true;
            toilet_paper_point_icons[i].alpha = 0;
            toilet_paper_point_icons[i].scale.x = toilet_paper_point_icon.scale;
            toilet_paper_point_icons[i].scale.y = toilet_paper_point_icon.scale;

            left_alignment += toilet_paper_point_icon.spacing;
        };
    };


    drunk_o_meter_icons = [];
    left_alignment = 0;
    drunk_points = Math.round(drunk_o_meter.value/100);

    //  CREATE DRUNK POINT ICON UI

    if(drunk_o_meter_icon.active) {

        if (drunk_o_meter_icon.background.active) {

            drunk_o_meter_background = game.add.sprite(
                drunk_o_meter_icon.background.position.x,
                drunk_o_meter_icon.background.position.y,
                'drunk-ui-background'
                );

            drunk_o_meter_background.scale.x = drunk_o_meter_icon.background.scale;
            drunk_o_meter_background.scale.y = drunk_o_meter_icon.background.scale;

            drunk_o_meter_background.fixedToCamera = true;

        };


        left_alignment = drunk_o_meter_icon.position.x;
        for(i = 0; i < 10; i++) {
            drunk_o_meter_icons[i] = game.add.sprite(
                left_alignment,
                drunk_o_meter_icon.position.y,
                'drunk-point'
                ); //add tiling sprite to cover the whole game world
            drunk_o_meter_icons[i].fixedToCamera = true;

            drunk_o_meter_icons[i].scale.x = drunk_o_meter_icon.scale;
            drunk_o_meter_icons[i].scale.y = drunk_o_meter_icon.scale;

            left_alignment += drunk_o_meter_icon.spacing;
        };

    };

    if(press_p_icon.active) {

        press_p_button_ui = game.add.sprite(
            press_p_icon.position.x,
            press_p_icon.position.y,
            'press-p-button'
        );

        press_p_button_ui.scale.x = drunk_o_meter_icon.background.scale;
        press_p_button_ui.scale.y = drunk_o_meter_icon.background.scale;
        press_p_button_ui.fixedToCamera = true;
        press_p_button_ui.alpha = 0;

    };

    /* if (drunk_o_meter_icon.active) {
        drunk_o_meter_icons.forEach(function(item, index) {
            item.alpha = 0;
        });

        for(i = 0; i < drunk_points; i++) {
            drunk_o_meter_icons[i].alpha = 1;
        };
    };
 */

    if(life_text_ui.active) {
        life_text = game.add.text(
            life_text_ui.position.x,
            life_text_ui.position.y,
            life_text_ui.text_preceding,
            life_text_ui.font
            );
        life_text.fixedToCamera = true;
    };


    if(score_text_ui.active) {
        score_text = game.add.text(
            score_text_ui.position.x,
            score_text_ui.position.y,
            score_text_ui.text_preceding,
            score_text_ui.font
            );
        score_text.fixedToCamera = true;
    };




    if(drunk_text_ui.active) {
        drunk_text = game.add.text(
            drunk_text_ui.position.x,
            drunk_text_ui.position.y,
            drunk_text_ui.text_preceding,
            drunk_text_ui.font
            );
            drunk_text.fixedToCamera = true;
    };



    if(timer_text_ui.active) {
        timer_text = game.add.text(
            timer_text_ui.position.x,
            timer_text_ui.position.y,
            timer_text_ui.text_preceding,
            timer_text_ui.font
            );
            timer_text.fixedToCamera = true;
    };
};



function updateUI() {

    if(life_text_ui.active) {
        life_text.setText(life_text_ui.text_preceding + life_points);
    };

    if(score_text_ui.active) {
        score_text.setText(score_text_ui.text_preceding + score);
    };

    if(drunk_text_ui.active) {
        drunk_text.setText(drunk_text_ui.text_preceding + Math.round(drunk_o_meter.value));
    };

    if(timer_text_ui.active) {
        timer_text.setText(timer_text_ui.text_preceding + Math.round(level_timer.value));
    };


}




//=======================================//
//  LEVEL COMPLETE
//=======================================//
function levelComplete() {
    if (game_ended == false) {
        end_state = "Game Complete";
        game_ended = true;


        if (level_exit.impactSound != null) {
            var end_sound = new Audio(level_exit.impactSound);
            end_sound.volume = 0.2;
            bg_sound.stop();
            end_sound.play();
        };

        player.animations.play('idle');

        end_count_down = end_level_time;
    }
}




//=======================================//
//  PLAYER DEAD
//=======================================//
function playerDead() {
    if (game_ended == false) {
        end_state = "Player Dead";
        game_ended = true;

        var lose_sound = new Audio('assets/loose.mp3');
        lose_sound.volume = 0.2;
        bg_sound.stop();
        lose_sound.play();

        player.animations.play('dead');

        end_count_down = end_level_time;
    }
}










//=======================================//
//  LIFE POINTS
//=======================================//
function PlayerHit($damage) {

    if (mask_on) {
        return;
    }

    var current_life_points = life_points;
    life_points -= $damage;

    if (life_points > max_life_points) {
        life_points = max_life_points;
    };


    if (life_point_icon.active) {
        life_point_icons.forEach(function(item, index) {
            item.alpha = 0;
        });

        for(i = 0; i < life_points; i++) {
            life_point_icons[i].alpha = 1;
        };
    };

    if ($damage < 0) {
        return;
    };

    if (life_points <= 0) {
        playerDead();
    } else {
        if (mask_on) {
            player.animations.play('hurt_mask');
        } else {
            player.animations.play('hurt');
        }

    };

    if (current_life_points !== life_points) {
        player.tint = 0xff0000;
        player.animations.play('hurt');
        setTimeout( function() {
            console.log('huhuhu');
            player.tint = 0xffffff;
        }, 500);
    }
}

//=======================================//
//  TOILET PAPER POINTS
//=======================================//
function PlayerToiletPaperCollect($tpScore) {

    if(toilet_paper_points < 3) {
        toilet_paper_points += $tpScore;

        if (toilet_paper_point_icon.active) {
            toilet_paper_point_icons.forEach(function(item, index) {
                item.alpha = 0;
            });
            for(i = 0; i < toilet_paper_points; i++) {
                toilet_paper_point_icons[i].alpha = 1;
            };
        };
    }

    if (toilet_paper_points == 3) {
        press_p_button_ui.alpha = 1;
    }
}


//=======================================//
//  DRUNK-O-METER
//=======================================//
function DrunkOMeterUpdate () {
    if (!drunk_o_meter.active) {
        return;
    };
    drunk_o_meter.value -= drunk_o_meter.sober_speed * deltaTime;

    CheckDrunkOMeter();
}


function CheckDrunkOMeter() {
    if (drunk_o_meter.value < 0)  {
        drunk_o_meter.value = 0;
    } else if (drunk_o_meter.value > 100)  {
        drunk_o_meter.value = 100;
    };

    if (drunk_o_meter.overlay_image != null) {
        drunk_o_meter_overlay.alpha = (drunk_o_meter.value/20);
    };


    drunk_points = Math.round(drunk_o_meter.value/10);

    if (drunk_o_meter_icon.active) {
        drunk_o_meter_icons.forEach(function(item, index) {
            item.alpha = 0;
        });

        for(i = 0; i < drunk_points; i++) {
            drunk_o_meter_icons[i].alpha = 1;
        };
    };

    if (drunk_points >= 6 ) {
        playerDead();
    }

}


//=======================================//
//  LEVEL TIMER
//=======================================//
function LevelTimerUpdate () {

    if (!level_timer.active) {
        return;
    };

    level_timer.value -= deltaTime;


    if (level_timer.value <= 0) {
        game_ended = true;
        level_timer.active = false;

        if (level_timer.pass_level) {
            levelComplete();
        } else {
            playerDead();
        };
    };

}





//=======================================//
//  FRAME UPDATE
//=======================================//
function update() {

    deltaTime = this.getDeltaTime();
    game_time += deltaTime;


    LevelTimerUpdate ();



    if (game_ended) {
        end_count_down -= deltaTime;

        if (end_count_down <= 0) {
            endGame(end_state);
        };

        return;
    };


    //  TIME RELEASE GAMEOBJECTS
    timeReleaseGameObjects(this);

    //  DRUNK O METER
    DrunkOMeterUpdate();

    //  UI
    updateUI();


    //  INPUT
    left = cursors.left.isDown;
    right = cursors.right.isDown;
    jump = cursors.up.isDown;
    power_press = powerKey.isDown;


    //  PLAYER CONTROL
    // define what should happen when a button is pressed

    if (left) {
        player.scale.x = -1;
        player.body.moveLeft(500);
        if (!jumping) {
            if(mask_on) {
                player.animations.play('walk_mask');
            } else {
                player.animations.play('walk');
            }
        };
    }
    else if (right) {
        player.scale.x = 1;
        player.body.moveRight(500);
        if (!jumping) {
            if(mask_on) {
                player.animations.play('walk_mask');
            } else {
                player.animations.play('walk');
            }
        };
    }
    else {
        if (!jumping) {
            if(mask_on) {
                player.animations.play('idle_mask');
            } else {
                player.animations.play('idle');
            }
        };
    };


    if (jump && !jumping){
        playerJump();
        if(mask_on) {
            player.animations.play('jump_mask');
        } else {
            player.animations.play('jump');
        }
    };


    if (jumping) {
        if (game.time.now > nextJump ){
            jumping = false;
        };
    };

    if (power_press) {
        if (toilet_paper_points >= 3) {
            toilet_paper_points = 0;
            PlayerToiletPaperCollect(0);
            press_p_button_ui.alpha = 0;
            power_sound = new Audio('assets/power.mp3');
            power_sound.play();

            mask_on = true;

            setTimeout( function() {
                mask_on = false;
            }, 10000);
        }
    }

    updateAllGameObjects(game);


};


//=======================================//
//  RENDER
//=======================================//
function render(){
    if (debug_active) {
        game.debug.text(
            'jump:' + jump +
            ' left:' + left +
            ' right:' + right +
            ' deltatime:' + deltaTime,

            10, 10);
    }

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
        jump_sound = new Audio('assets/jump.mp3');
        jump_sound.play();
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