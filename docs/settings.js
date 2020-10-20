//=======================================//
console.log("Loading => settings.js");
//=======================================//

var debug_active = false;   //  Show Input Debug

//=======================================//
//  PLAYER
//=======================================//
var jumpRate = 950;
var jumpVelocity = 600;
var life_points = 3;
var toilet_paper_points = 0;

var player_size = {
    height : 160,
    width : 100
};

var player_mass = 4;

//=======================================//
//  GREEN BEER
//=======================================//



var player_size_green_beer = {
    height : 50,
    width : 50
};



//  Player Animations
var player_spritesheet = 'assets/karen-spritesheet-3.png';
var drink_spritesheet = 'assests/drink_spritesheet.png';

var idle_animation = {
    frames  : [0],
    fps     : 1,
    loop    : true
};

var idle_mask_animation = {
    frames  : [9],
    fps     : 1,
    loop    : true
};

var walk_animation = {
    frames  : [1,2,3],
    fps     : 10,
    loop    : true
};

var walk_mask_animation = {
    frames  : [10,11,12],
    fps     : 10,
    loop    : true
};

var jump_animation = {
    frames  : [4,5,6,7,8],
    fps     : 5,
    loop    : false
};

var jump_mask_animation = {
    frames  : [13,14,15,16,17],
    fps     : 5,
    loop    : false
};


var hurt_animation = {
    frames  : [8],
    fps     : 1,
    loop    : false
};

var hurt_mask_animation = {
    frames  : [17],
    fps     : 1,
    loop    : false
};

var dead_animation = {
    frames  : [6,7,8],
    fps     : 7,
    loop    : false
};

var drink_one_animation = {
    frames  : [0,1,2,3],
    fps     : 7,
    loop    : true
};

var holy_animation = {
    frames  : [0,1,2,3,4],
    fps     : 7,
    loop    : true
};




//=======================================//
//  DRUNK-O-METER
//=======================================//
var drunk_o_meter = {
    active : true,              // false = disabled
    value : 0,                 //  Starting Value
    min : 0,
    max : 100,
    sober_speed : 1,
    overlay_image: 'assets/drunk-overlay.png'          //  null if no overlay wanted | 'ed-assets/drunk-overlay.png'
};

//=======================================//
//  CAMERA
//=======================================//
var camera_speed = 0.1;  //  The smaller the value, the smooth the camera (and the longer it takes to catch up)

//=======================================//
//  UI ICONS
//=======================================//


//  Drunk-o-meter Bar
var drunk_o_meter_icon = {
    active : true,              // false = disabled
    position : {                //  Starting Placement Position
        x: 325,
        y: 47
    },
    scale: 1,
    spacing: 35,                //  Distance between each drunk meter point
    image: 'assets/star.png',

    background : {
        active : true,              // false = disabled
        image: 'assets/meter.png',
        position : {
            x: 270,
            y: 10
        },
        scale: 1,
    }
};



var life_point_icon = {
    active : true,              // false = disabled
    position : {                //  Starting Placement Position
        x: 10,
        y: 30
    },
    scale: 1,
    spacing: 40,                //  Distance between each life point
    image: 'assets/karen-head.png'
};


//  Press P
var press_p_icon = {
    active : true,              // false = disabled
    position : {                //  Starting Placement Position
        x: 730,
        y: 10
    },
    scale: 1,
    spacing: 0,                //  Distance between each drunk meter point
    image: 'assets/press-p.png',
};

var toilet_paper_point_icon_x = {
    active : true,              // false = disabled
    position : {                //  Starting Placement Position
        x: 600,
        y: 30
    },
    scale: 1,
    spacing: 40,                //  Distance between each life point
    image: 'assets/tp-icon-x.png'
};



//=======================================//
//  UI FONT
//=======================================//
var googleFonts = ['Revalia', 'Hind', 'Sansita Swashed'];  //    Add GoogleFont Name here  -   https://fonts.google.com/

var font = {
    font: "15px Sansita Swashed",       //    Add GoogleFont Name Here
    fill: "#ff0044",
    align: "left"
};



var life_text_ui = {
    active: false,
    text_preceding: "Life: ",      //      eg. "Score: "
    font: {
        font: "25px Hind",       //    Add GoogleFont Name Here
        fill: "#ac3973",            //  Hex Colour
        align: "right"
    },
    position : {
        x: 700,
        y: 120
    }
};


var score_text_ui = {
    active: false,
    text_preceding: "",      //      eg. "Score: "
    font: {
        font: "25px Hind",       //    Add GoogleFont Name Here
        fill: "#cc0099",
        align: "center"
    },
    position : {
        x: 650,
        y: 10
    }
};


var tp_score_text_ui = {
    active: true,
    text_preceding: "",      //      eg. "Score: "
    font: {
        font: "36px Hind",       //    Add GoogleFont Name Here
        fill: "#cc0099",
        align: "center"
    },
    position : {
        x: 670,
        y: 30
    }
};

var drunk_text_ui = {
    active: false,
    text_preceding: "Drunk: ",      //      eg. "Score: "
    font: {
        font: "20px Revalia",       //    Add GoogleFont Name Here
        fill: "#ff0044",
        align: "left"
    },
    position : {
        x: 20,
        y: 90
    }
};


var timer_text_ui = {
    active: false,
    text_preceding: "Time: ",      //      eg. "Score: "
    font: {
        font: "20px Revalia",       //    Add GoogleFont Name Here
        fill: "#ff0044",
        align: "left"
    },
    position : {
        x: 20,
        y: 200
    }
};

//=======================================//
console.log("Loaded => settings.js");
//=======================================//