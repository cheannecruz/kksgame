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
            x: 1000,
            y: 450
        }
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 1200,
            y: 300
        }
    },

    {
        name: "Toilet Paper 1",
        position: {
            x: 1250,
            y: 150
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 1300,
            y: 450
        }
    },

    {
        name: "Toilet Paper 2",
        position: {
            x: 2000,
            y: 250
        }
    },

    {
        name: "Boxes",
        position: {
            x: 1500,
            y: 460
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 1950,
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
            x: 2000,
            y: 450
        }
    },

    {
        name: "Boxes",
        position: {
            x: 2500,
            y: 460
        }
    },

    {
        name: "Toilet Paper 3",
        position: {
            x: 2950,
            y: 450
        }
    },

    {
        name: "Cart 1",
        position: {
            x: 3000,
            y: 450
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 3050,
            y: 150
        }
    },

    {
        name: "Drink 2",
        position: {
            x: 3100,
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
            x: 3200,
            y: 300
        }
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 3220,
            y: 300
        },
    },
    {
        name: "Boxes",
        position: {
            x: 3500,
            y: 460
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 3550,
            y: 150
        }
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 3720,
            y: 300
        },
    },
    {
        name: "Holy Sanitizer",
        position: {
            x: 3720,
            y: 300
        },
    },
    {
        name: "Basket",
        position: {
            x: 4000,
            y: 470
        }
    },
    {
        name: "Drink 1",
        position: {
            x: 4000,
            y: 450
        }
    },

    {
        name: "Boxes",
        position: {
            x: 4500,
            y: 460
        }
    },
    {
        name: "Drink 2",
        position: {
            x: 4800,
            y: 450
        }
    },
    {
        name: "Drink 1",
        position: {
            x: 4900,
            y: 450
        }
    },
    {
        name: "Basket",
        position: {
            x: 5000,
            y: 470
        }
    },
    {
        name: "Level 1 Platform",
        position: {
            x: 5150,
            y: 310
        },
    },
    {
        name: "Burper Coke",
        position: {
            x: 5150,
            y: 310
        },
    },
    {
        name: "Drink 1",
        position: {
            x: 5300,
            y: 450
        }
    },
    {
        name: "Toilet Paper 5",
        position: {
            x: 5300,
            y: 450
        }
    },
    {
        name: "Drink 1",
        position: {
            x: 4900,
            y: 450
        }
    },
    {
        name: "Cart 1",
        position: {
            x: 5500,
            y: 470
        }
    },

    {
        name: "Boxes",
        position: {
            x: 5800,
            y: 450
        }
    },

    {
        name: "Toilet Paper 6",
        position: {
            x: 5800,
            y: 450
        }
    },

    {
        name: "Cart 2",
        position: {
            x: 6000,
            y: 450
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 6100,
            y: 450
        }
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 6200,
            y: 310
        },
    },

    {
        name: "Basket",
        position: {
            x: 6500,
            y: 470
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 6600,
            y: 450
        }
    },

    {
        name: "Drink 2",
        position: {
            x: 6800,
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
        name: "Boxes",
        position: {
            x: 7000,
            y: 470
        }
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 7200,
            y: 310
        },
    },

    {
        name: "Bottle Water",
        position: {
            x: 7200,
            y: 310
        },
    },

    {
        name: "Cart 1",
        position: {
            x: 8000,
            y: 450
        }
    },

    {
        name: "Drink 1",
        position: {
            x: 8200,
            y: 450
        }
    },

    {
        name: "Basket",
        position: {
            x: 8500,
            y: 450
        }
    },

    {
        name: "Boxes",
        position: {
            x: 9000,
            y: 450
        }
    },

    {
        name: "Cart 1",
        position: {
            x: 9500,
            y: 450
        }
    },

    {
        name: "Level 1 Platform",
        position: {
            x: 9700,
            y: 310
        },
    },

    {
        name: "Drink 1",
        position: {
            x: 10000,
            y: 450
        }
    },

    {
        name: "Drink 2",
        position: {
            x: 10200,
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