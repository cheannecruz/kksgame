//=======================================//
console.log("Loading => level_2.js");
//=======================================//

bigVirus = gameobjects.findIndex((obj => obj.name == "Big Virus"));

gameobjects[bigVirus].movement.x = 150;

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
        name: "Drink 1",
        position: {
            x: 1000,
            y: 150
        },
        movement : {
            x : 0,
            y : 0
        },
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 1250,
            y: 400
        },
    },

    {
        name: "Toilet Paper 1",
        position: {
            x: 1250,
            y: 400
        }
    },

    {
        name: "Bottle Water",
        position: {
            x: 1500,
            y: 150
        }
    },

    {
        name: "Treasure",
        position: {
            x: 1800,
            y: 460
        }
    },

    {
        name: "Martini",
        position: {
            x: 2050,
            y: 150
        },
    },

    {
        name: "Toilet Paper 2",
        position: {
            x: 2350,
            y: 400
        }
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 2350,
            y: 400
        },
    },
    {
        name: "Bottle Water",
        position: {
            x: 2600,
            y: 150
        }
    },
    {
        name: "Castle",
        position: {
            x: 2850,
            y: 450
        }
    },

    {
        name: "Drink 2",
        position: {
            x: 3100,
            y: 450
        },
        movement : {
            x : 0,
            y : 0
        },
    },
    {
        name: "Rock 1",
        position: {
            x: 3350,
            y: 450
        }
    },

    {
        name: "Wine",
        position: {
            x: 3650,
            y: 300
        }
    },

    {
        name: "Castle",
        position: {
            x: 3850,
            y: 470
        }
    },
    {
        name: "Orange Bottle",
        position: {
            x: 4100,
            y: 300
        },
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 4250,
            y: 400
        },
    },
    {
        name: "Toilet Paper 2",
        position: {
            x: 4250,
            y: 400
        }
    },

    {
        name: "Bottle Water",
        position: {
            x: 4450,
            y: 460
        }
    },

    {
        name: "Castle",
        position: {
            x: 4700,
            y: 460
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 4950,
            y: 300
        },
    },


    {
        name: "Rock 1",
        position: {
            x: 5200,
            y: 470
        }
    },
    {
        name: "Drink 2",
        position: {
            x: 5600,
            y: 300
        },
        movement : {
            x : 0,
            y : 0
        },
    },
    {
        name: "Treasure",
        position: {
            x: 5900,
            y: 470
        }
    },
    {
        name: "Wine",
        position: {
            x: 6150,
            y: 450
        }
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 6400,
            y: 400
        },
    },

    {
        name: "Toilet Paper 6",
        position: {
            x: 6400,
            y: 400
        }
    },

    {
        name: "Rock 2",
        position: {
            x: 6700,
            y: 470
        }
    },

    {
        name: "Castle",
        position: {
            x: 7100,
            y: 450
        }
    },
    {
        name: "Drink 2",
        position: {
            x: 7350,
            y: 450
        }
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 7600,
            y: 400
        },
    },
    {
        name: "Holy Sanitizer",
        position: {
            x: 7600,
            y: 400
        },
    },

    {
        name: "Orange Bottle",
        position: {
            x: 7900,
            y: 450
        }
    },

    {
        name: "Rock 1",
        position: {
            x: 8150,
            y: 450
        },
    },

    {
        name: "Drink 1",
        position: {
            x: 8450,
            y: 450
        }
    },

    {
        name: "Castle",
        position: {
            x: 8700,
            y: 450
        }
    },

    {
        name: "Drink 2",
        position: {
            x: 8950,
            y: 450
        }
    },

    {
        name: "Rock 2",
        position: {
            x: 9200,
            y: 450
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 9450,
            y: 450
        }
    },

    {
        name: "Treasure",
        position: {
            x: 9700,
            y: 450
        }
    },

    {
        name: "Rum",
        position: {
            x: 9950,
            y: 450
        }
    },

    {
        name: "Rock 1",
        position: {
            x: 10200,
            y: 450
        }
    },

    {
        name: "Martini",
        position: {
            x: 10550,
            y: 150
        },
    },

    {
        name: "Castle",
        position: {
            x: 10800,
            y: 450
        }
    },

    {
        name: "Big Virus",
        position: {
            x: 150,
            y: 150
        }
    },

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
            x: 2415,
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