//=======================================//
console.log("Loading => level_3.js");
//=======================================//

bigVirus = gameobjects.findIndex((obj => obj.name == "Big Virus"));

gameobjects[bigVirus].movement.x = 200;

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
        name: "Big Virus",
        position: {
            x: 150,
            y: 150
        }
    },
    {
        name: "Box",
        position: {
            x: 1000,
            y: 450
        }
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 1300,
            y: 300
        }
    },

    {
        name: "Toilet Paper 1",
        position: {
            x: 1300,
            y: 300
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 1550,
            y: 450
        }
    },

    {
        name: "Bin",
        position: {
            x: 1800,
            y: 460
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 2050,
            y: 150
        },
        movement : {
            x : 0,
            y : 0
        },
    },

    {
        name: "Letter Box2",
        position: {
            x: 2200,
            y: 450
        }
    },

    {
        name: "Bins",
        position: {
            x: 2600,
            y: 460
        }
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 2950,
            y: 350
        }
    },
    {
        name: "Toilet Paper 3",
        position: {
            x: 2950,
            y: 350
        }
    },

    {
        name: "Letter Box1",
        position: {
            x: 3200,
            y: 450
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 3450,
            y: 150
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 3650,
            y: 300
        },
        movement : {
            x : 0,
            y : 0
        },
    },

    {
        name: "Plant",
        position: {
            x: 3650,
            y: 450
        }
    },

    {
        name: "Bottle Water",
        position: {
            x: 3850,
            y: 300
        }
    },

    {
        name: "Bin2",
        position: {
            x: 4100,
            y: 460
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 4350,
            y: 150
        }
    },

    {
        name: "Box",
        position: {
            x: 4300,
            y: 460
        }
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 4500,
            y: 300
        },
    },
    {
        name: "Toilet Paper 2",
        position: {
            x: 4500,
            y: 300
        },
    },
    {
        name: "Letter Box",
        position: {
            x: 4900,
            y: 470
        }
    },
    {
        name: "Drink 1",
        position: {
            x: 5150,
            y: 450
        }
    },

    {
        name: "Box",
        position: {
            x: 5400,
            y: 460
        }
    },
    {
        name: "Drink 1",
        position: {
            x: 5650,
            y: 450
        }
    },
    {
        name: "Drink 1",
        position: {
            x: 5850,
            y: 450
        }
    },
    {
        name: "Letter Box2",
        position: {
            x: 5750,
            y: 460
        }
    },
    {
        name: "Bin",
        position: {
            x: 6100,
            y: 470
        }
    },
    {
        name: "Level 1 Platform",
        position: {
            x: 6400,
            y: 300
        },
    },
    {
        name: "Holy Sanitizer",
        position: {
            x: 6400,
            y: 300
        },
    },
    {
        name: "Drink 1",
        position: {
            x: 6650,
            y: 450
        }
    },
    {
        name: "Drink 1",
        position: {
            x: 6900,
            y: 450
        }
    },
    {
        name: "Letter Box1",
        position: {
            x: 6900,
            y: 470
        }
    },
    {
        name: "Burper Coke",
        position: {
            x: 7450,
            y: 310
        },
    },
    {
        name: "Bench",
        position: {
            x: 7450,
            y: 450
        }
    },

    {
        name: "Letter Box",
        position: {
            x: 7750,
            y: 450
        }
    },
    {
        name: "Level 1 Platform",
        position: {
            x: 8050,
            y: 350
        }
    },

    {
        name: "Toilet Paper 6",
        position: {
            x: 8050,
            y: 350
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 8300,
            y: 450
        }
    },
    {
        name: "Box",
        position: {
            x: 8550,
            y: 470
        }
    },

    {
        name: "Bottle Water",
        position: {
            x: 8800,
            y: 450
        }
    },

    {
        name: "Bins",
        position: {
            x: 9050,
            y: 450
        }
    },
    {
        name: "Burper Coke",
        position: {
            x: 9050,
            y: 310
        },
    },
    {
        name: "Drink 1",
        position: {
            x: 9300,
            y: 450
        }
    },


    {
        name: "Bin2",
        position: {
            x: 9550,
            y: 450
        },
    },

    {
        name: "Letter Box2",
        position: {
            x: 9850,
            y: 450
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 10100,
            y: 450
        }
    },

    {
        name: "Burper Coke",
        position: {
            x: 10350,
            y: 310
        },
    },

    {
        name: "Bench",
        position: {
            x: 10350,
            y: 450
        }
    },

    {
        name: "Bin",
        position: {
            x: 10650,
            y: 450
        },
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
        image: 'assets/city-background-Loop.png',
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
        image: 'assets/city-background-End.png',
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

for (i=0; i <= 200; i++) {
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
        window.location.href = "end.html";
    } else if ($end_state == "Player Lost") {
        window.location.href = "lost_3.html";
    } else if ($end_state == "Player Dead") {
        window.location.href = "lost_3.html";
    };
}



//=======================================//
console.log("Loaded => level_3.js");
//=======================================//