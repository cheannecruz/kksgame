//=======================================//
console.log("Loading => level_1.js");
//=======================================//

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
        name: "Cart 1",
        position: {
            x: 1000,
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
        name: "Cart 2",
        position: {
            x: 2000,
            y: 450
        }
    },
    {
        name: "Cart 2",
        position: {
            x: 3500,
            y: 450
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
        name: "Boxes",
        position: {
            x: 2500,
            y: 460
        }
    },
    {
        name: "Basket",
        position: {
            x: 4000,
            y: 470
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
        name: "Basket",
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
    image: 'assets/Assets-63.png',
    alpha: 1,
    scale: 1,
    position: {
        x: 150,
        y: 0
    },
    size: {
        x: 800,
        y: 400
    }
};


var foreground = {
    active: true,
    image: 'assets/Assets-64.png',
    alpha: 1,
    scale: 1,
    position: {
        x: 350,
        y: 0
    },
    size: {
        x: 800,
        y: 400
    }
};

var foreground = {
    active: true,
    image: 'assets/Assets-65.png',
    alpha: 1,
    scale: 1,
    position: {
        x: 450,
        y: 0
    },
    size: {
        x: 800,
        y: 400
    }
};

var foreground = {
    active: true,
    image: 'assets/Assets-66.png',
    alpha: 1,
    scale: 1,
    position: {
        x: 550,
        y: 0
    },
    size: {
        x: 800,
        y: 400
    }
};

var foreground = {
    active: true,
    image: 'assets/Assets-67.png',
    alpha: 1,
    scale: 1,
    position: {
        x: 650,
        y: 0
    },
    size: {
        x: 800,
        y: 400
    }
};

var foreground = {
    active: true,
    image: 'assets/Assets-68.png',
    alpha: 1,
    scale: 1,
    position: {
        x: 750,
        y: 0
    },
    size: {
        x: 800,
        y: 400
    }
};

var foreground = {
    active: true,
    image: 'assets/Assets-69.png',
    alpha: 1,
    scale: 1,
    position: {
        x: 850,
        y: 0
    },
    size: {
        x: 800,
        y: 400
    }
};

var foreground = {
    active: true,
    image: 'assets/Assets-71.png',
    alpha: 1,
    scale: 1,
    position: {
        x: 950,
        y: 0
    },
    size: {
        x: 800,
        y: 400
    }
};

var foreground = {
    active: true,
    image: 'assets/Assets-72.png',
    alpha: 1,
    scale: 1,
    position: {
        x: 1050,
        y: 0
    },
    size: {
        x: 800,
        y: 400
    }
};

var foreground = {
    active: true,
    image: 'assets/Assets-73.png',
    alpha: 1,
    scale: 1,
    position: {
        x: 1150,
        y: 0
    },
    size: {
        x: 800,
        y: 400
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
var level_exit_background = {
    image: 'assets/door.png',
    alpha: 0,
    scale: 3,
    mass: 100,
    position: {
        x: 10600,
        y: world_bounds.height - 200
    }
};

var level_exit = {
    image: 'assets/door.png',
    alpha: 0,
    scale: 3,
    mass: 100,
    position: {
        x: 10600,
        y: world_bounds.height - 200
    }
};






//=======================================//
console.log("Loaded => level_1.js");
//=======================================//