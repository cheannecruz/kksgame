//=======================================//
console.log("Loading => level_1.js");
//=======================================//

//=======================================//
//  LEVEL TIMER
//=======================================//

var level_timer = {
    active : false,
    pass_level : false,     //  If the player wins whent he time runs out then set this to TRUE
    value : 25              //  Number of seconds in the timer count down
};

//=======================================//
//  WORLD
//=======================================//
var world_bounds = {
    height: 600,
    width: 10986
};

var gravity = 1200;

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
        name: "Cart 1",
        position: {
            x: 1050,
            y: 450
        }
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 1250,
            y: 350
        }
    },

    {
        name: "Toilet Paper 1",
        position: {
            x: 1250,
            y: 300
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 1400,
            y: 450
        }
    },

    {
        name: "Boxes",
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
        name: "Cart 2",
        position: {
            x: 2200,
            y: 450
        }
    },

    {
        name: "Boxes",
        position: {
            x: 2450,
            y: 460
        }
    },

    {
        name: "Toilet Paper 3",
        position: {
            x: 2600,
            y: 450
        }
    },

    {
        name: "Cart 1",
        position: {
            x: 2850,
            y: 450
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 3000,
            y: 150
        }
    },

    {
        name: "Drink 2",
        position: {
            x: 3250,
            y: 300
        },
        movement : {
            x : 0,
            y : 0
        },
    },

    {
        name: "Bottle Water",
        position: {
            x: 3500,
            y: 300
        }
    },

    {
        name: "Boxes",
        position: {
            x: 3300,
            y: 460
        },
    },
    {
        name: "Basket",
        position: {
            x: 3650,
            y: 460
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 4000,
            y: 150
        }
    },

    {
        name: "Boxes",
        position: {
            x: 3950,
            y: 460
        },
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 4150,
            y: 350
        },
    },
    {
        name: "Holy Sanitizer",
        position: {
            x: 4150,
            y: 300
        },
    },
    {
        name: "Basket",
        position: {
            x: 4450,
            y: 470
        }
    },
    {
        name: "Drink 1",
        position: {
            x: 4650,
            y: 450
        }
    },

    {
        name: "Boxes",
        position: {
            x: 4750,
            y: 460
        }
    },
    {
        name: "Drink 2",
        position: {
            x: 4950,
            y: 450
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
        name: "Basket",
        position: {
            x: 5300,
            y: 470
        }
    },
    {
        name: "Level 1 Platform",
        position: {
            x: 5900,
            y: 400
        },
    },
    {
        name: "Burper Coke",
        position: {
            x: 5900,
            y: 310
        },
    },
    {
        name: "Drink 1",
        position: {
            x: 6150,
            y: 450
        }
    },
    {
        name: "Toilet Paper 5",
        position: {
            x: 6300,
            y: 450
        }
    },

    {
        name: "Cart 1",
        position: {
            x: 6500,
            y: 470
        }
    },
    {
        name: "Cart 2",
        position: {
            x: 7450,
            y: 450
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 7300,
            y: 450
        }
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 7550,
            y: 350
        },
    },

    {
        name: "Basket",
        position: {
            x: 7800,
            y: 470
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 7950,
            y: 450
        }
    },

    {
        name: "Drink 2",
        position: {
            x: 8200,
            y: 450
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 8450,
            y: 450
        }
    },

    {
        name: "Boxes",
        position: {
            x: 8700,
            y: 470
        }
    },
    {
        name: "Bottle Water",
        position: {
            x: 8950,
            y: 310
        },
    },

    {
        name: "Cart 1",
        position: {
            x: 9200,
            y: 450
        }
    },

    {
        name: "Drink 2",
        position: {
            x: 8350,
            y: 450
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 9000,
            y: 450
        }
    },

    {
        name: "Toilet Paper 1",
        position: {
            x: 9400,
            y: 450
        }
    },

    {
        name: "Drink 2",
        position: {
            x: 9550,
            y: 450
        }
    },

];

//=======================================//
//  TIME RELEASE OBJECTS
//=======================================//
var timerelease_gameobjects = [];

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
        image: 'assets/background-level-1.png',
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
        image: 'assets/background-end-level-1.png',
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
    active: true,
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
        x: 10600,
        y: world_bounds.height - 200
    }
};


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
console.log("Loaded => level_1.js");
//=======================================//