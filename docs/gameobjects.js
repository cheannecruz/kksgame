//=======================================//
console.log("Loading => gameobjects.js");
//=======================================//

//  Create GameObject Array
var gameobjects = [

    //  Create GameObject
    {
        name : "Plaftorm",
        image : 'assets/platform.png',
        alpha : 1,
        scale: 2,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : 0,
        alcohol : 0,
        destroyOnImpact : false,
        impactSound : null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },

    },


    //  Create GameObject
    {
        name : "Drink 1",
        image : 'assets/drink.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : -10,
        alcohol : 10,
        destroyOnImpact : true,
        impactSound : 'assets/hit.mp3',  // Use null if no sound

        static : false,    // lock movement off
        movement : {
            x : 20,
            y : 0
        },

    },

    //  Create GameObject
    {
        name : "Bottle Water",
        image : 'assets/bottle-water.png',
        alpha : 1,
        scale: 0.5,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : -1,
        score : 10,
        alcohol : -10,
        destroyOnImpact : true,
        impactSound : 'assets/hit.mp3',

        static : false,
        movement : {
            x : 10,
            y : 0
        },
    },



    //  Create GameObject
    {
        name : "Big Virus",
        image : 'assets/big-virus.png',
        alpha : 1,
        scale: 1,
        mass: 100,
        fixedRotation : false,  // do not rotate on collision

        damage : 1,
        score : 0,
        alcohol : 0,
        destroyOnImpact : false,
        impactSound : 'assets/hurt.mp3',

        static : false,
        movement : {
            x : 100,
            y : 0
        },
    },
];





//=======================================//
console.log("Loaded => gameobjects.js");
//=======================================//