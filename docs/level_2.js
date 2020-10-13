//=======================================//
console.log("Loading => level_2.js");
//=======================================//

//=======================================//
//  WORLD
//=======================================//
var world_bounds = {
    height : 600,
    width : 4703
};

var gravity = 1200;



//=======================================//
//  GAMEOBJECT PLACEMENTS
//=======================================//
var level_gameobjects = [   //  GameObject Placement Array 
    {
        name : "Plaftorm",
        position : {
            x: 800,
            y: 475
        }
    },
    {
        name : "Plaftorm",
        position : {
            x: 950,
            y: 400
        }
    },
    {
        name : "Big Virus",
        position : {
            x: 150,
            y: 150
        }
    }, 
    {
        name : "Drink 1",
        position : {
            x: 750,
            y: 150
        }
    },

    {
        name : "Drink 1",
        position : {
            x: 1750,
            y: 250
        }
    },
    {
        name : "Drink 1",
        position : {
            x: 2550,
            y: 150
        }
    },
    {
        name : "Bottle Water",
        position : {
            x: 1250,
            y: 150
        }
    },
    {
        name : "Bottle Water",
        position : {
            x: 3050,
            y: 150
        }
    },
    {
        name : "Bottle Water",
        position : {
            x: 1950,
            y: 150
        }
    }
];



//=======================================//
//  GROUND
//=======================================//

var ground = {
        active : true,
        image : 'ed-assets/clear-ground-tile.png',
        alpha : 1,
        scale: 1,
        position : {
            x: 0,
            y: world_bounds.height-85, 
        },
        size : {
            x: world_bounds.width*2, 
            y: 30,
        }
};





//=======================================//
//  BACKGROUNDS
//=======================================//

var backgrounds = {
    layer_1 : {
        active : true,
        image : 'ed-assets/background-level-1.png',
        alpha : 1,
        scale: 1,
        position : {
            x: 0,
            y: 0
        },
        size : {
            x: 4703,
            y: 600
        }
    },
};


//=======================================//
//  FOREGROUND
//=======================================//

var foreground = {
    active : true,
    image : 'ed-assets/foreground-level-1.png',
    alpha : 1,
    scale: 1,
    position : {
        x: 0,
        y: 0
    },
    size : {
        x: 4703,
        y: 600
    }
};










//=======================================//
//  PLAYER START POSITION
//=======================================//
var player_start_position = {
    x: 550,
    y: world_bounds.height-150
}



//=======================================//
//  LEVEL EXIT
//=======================================//
var level_exit = {
    image : 'assets/door.png',
    alpha : 0,
    scale: 3,
    mass: 100,
    position : {
        x: 4450,
        y: world_bounds.height-200
    }
};






//=======================================//
console.log("Loaded => level_1.js");
//=======================================//