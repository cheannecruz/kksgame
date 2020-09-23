//=======================================//
console.log("Loading => settings.js");
//=======================================//



//=======================================//
//  PLAYER
//=======================================//
var jumpRate = 950;
var jumpVelocity = 600;
var life_points = 3;

var player_size = {
    height : 151,
    width : 100
};

var player_mass = 4;



//  Player Animations
var player_spritesheet = 'ed-assets/karen-spritesheet.png';

var idle_animation = {
    frames  : [0],
    fps     : 1,
    loop    : true
};

var walk_animation = {
    frames  : [1,2,3],
    fps     : 10,
    loop    : true
};

var jump_animation = {
    frames  : [4,5,6,7,8,9,10],
    fps     : 7,
    loop    : false
};


var hurt_animation = {
    frames  : [7],
    fps     : 1,
    loop    : false
};

var dead_animation = {
    frames  : [8,9,10,11],
    fps     : 7,
    loop    : false
};




//=======================================//
//  DRUNK-O-METER
//=======================================//
var drunk_o_meter = {
    value : 50,
    min : 0,
    max : 100,
    sober_speed : 2,    
};




//=======================================//
//  CAMERA
//=======================================//
var camera_speed = 0.1;  //  The smaller the value, the smooth the camera (and the longer it takes to catch up)


//=======================================//
//  UI
//=======================================//
var font = {
    font: "15px Arial",
    fill: "#ff0044",
    align: "left"
};



//=======================================//
console.log("Loaded => settings.js");
//=======================================//