//=======================================//
console.log("Loading => level_2.js");
//=======================================//

//=======================================//
//  WORLD
//=======================================//
var world_bounds = {
    height: 600,
    width: 12075
};

var level_timer = {
    active : false,
    pass_level : false,     //  If the player wins whent he time runs out then set this to TRUE
    value : 25              //  Number of seconds in the timer count down
};

var gravity = 1200;
var releseTimeOut = 10000;

//=======================================//
//  GAMEOBJECT PLACEMENTS
//=======================================//
var level_gameobjects = [ //  GameObject Placement Array
    {
        name: "Rock 1",
        position: {
            x: 1000,
            y: 450
        }
    },
    {
        name: "Rock 1",
        position: {
            x: 3000,
            y: 450
        }
    },
    {
        name: "Castle",
        position: {
            x: 2000,
            y: 450
        }
    },
    {
        name: "Castle",
        position: {
            x: 3500,
            y: 450
        }
    },
    {
        name: "Treasure",
        position: {
            x: 1500,
            y: 460
        }
    },
    {
        name: "Treasure",
        position: {
            x: 2500,
            y: 460
        }
    },
    {
        name: "Rock 2",
        position: {
            x: 4000,
            y: 470
        }
    },
    {
        name: "Rock 2",
        position: {
            x: 4500,
            y: 460
        }
    },
    {
        name: "Castle",
        position: {
            x: 5000,
            y: 470
        }
    },
    {
        name: "Big Virus",
        position: {
            x: 150,
            y: 150
        }
    },
    {
        name: "Drink 1",
        position: {
            x: 900,
            y: 150
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 1750,
            y: 250
        }
    },
    {
        name: "Drink 1",
        position: {
            x: 2950,
            y: 450
        }
    },
    {
        name: "Bottle Water",
        position: {
            x: 1250,
            y: 150
        }
    },
    {
        name: "Bottle Water",
        position: {
            x: 3050,
            y: 150
        }
    },
    {
        name: "Bottle Water",
        position: {
            x: 1950,
            y: 150
        }
    }
];

//=======================================//
//  GROUND
//=======================================//

var ground = {
    active: true,
    image: 'assets/clear-ground-tile.png',
    alpha: 1,
    scale: 1,
    position: {
        x: 0,
        y: world_bounds.height - 85,
    },
    size: {
        x: world_bounds.width * 2,
        y: 30,
    }
};

//=======================================//
//  BACKGROUNDS
//=======================================//

var backgrounds = {
    layer_1: {
        active: true,
        image: 'assets/beach_background.png',
        alpha: 1,
        scale: 1,
        position: {
            x: 0,
            y: 0
        },
        size: {
            x: 9660,
            y: 600
        }
    },
};

var background_end = {
    layer_1: {
        active: true,
        image: 'assets/beach-bg-end.png',
        alpha: 1,
        scale: 1,
        position: {
            x: 9660,
            y: 0
        },
        size: {
            x: 1326,
            y: 600
        }
    },
};

//=======================================//
//  FOREGROUND
//=======================================//

var foreground = {
    active: false,
    image: 'assets/foreground-level-1.png',
    alpha: 1,
    scale: 1,
    position: {
        x: 9660,
        y: 0
    },
    size: {
        x: 1326,
        y: 600
    }
};

//=======================================//
//  PLAYER START POSITION
//=======================================//
var player_start_position = {
    x: 550,
    y: world_bounds.height - 150
}

//=======================================//
//  LEVEL EXIT
//=======================================//
var level_exit = {
    active: true,
    image: 'assets/door.png',
    alpha: 0,
    scale: 3,
    mass: 100,
    impactSound : 'assets/win.mp3',
    position: {
        x: 11900,
        y: world_bounds.height - 200
    }
};

//=======================================//
//  TIME RELEASE OBJECTS
//=======================================//
var timerelease_gameobjects = [];

for (i=0; i <= 100; i++) {
    timerelease_gameobjects.push(
        {
            name : "Small Virus",
            time : Math.floor((Math.random()*100) + 1),       //  When To First release object
            repeat: 0,      //  How long to wait to repeat the release | set to 0 to not repeat release
            position : {
                x: Math.floor(Math.random() * (12000 - 100 + 1) + 100),
                y: 0
            },
            released : false
        },
    )
}

//=======================================//
//  END GAME ACTIONS
//=======================================//
function endGame($end_state) {
    if ($end_state == "Game Complete") {
        window.location.href = "win_2.html";
    } else if ($end_state == "Player Lost") {
        window.location.href = "lost_2.html";
    } else if ($end_state == "Player Dead") {
        window.location.href = "lost_2.html";
    };
}

//=======================================//
console.log("Loaded => level_2.js");
//=======================================//