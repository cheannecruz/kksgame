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
        tp_score : 0,
        alcohol : 0,
        destroyOnImpact : false,
        impactSound : null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },

    {
        name : "Cart 1",
        image : 'assets/market-cart-1.png',
        alpha : 1,
        scale: 0.7,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : 0,
        tp_score : 0,
        alcohol : 0,
        destroyOnImpact : false,
        impactSound : null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },


    {
        name : "Cart 2",
        image : 'assets/market-cart-2.png',
        alpha : 1,
        scale: 0.7,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : 0,
        tp_score : 0,
        alcohol : 0,
        destroyOnImpact : false,
        impactSound : null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },

    {
        name : "Boxes",
        image : 'assets/market-box.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : 0,
        tp_score : 0,
        alcohol : 0,
        destroyOnImpact : false,
        impactSound : null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },

    {
        name : "Basket",
        image : 'assets/market-basket.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : 0,
        tp_score : 0,
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
        tp_score : 0,
        alcohol : 10,
        destroyOnImpact : true,
        impactSound : 'assets/gibberish.mp3',  // Use null if no sound

        static : false,    // lock movement off
        movement : {
            x : -50,
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
        tp_score : 0,
        alcohol : -10,
        destroyOnImpact : true,
        impactSound : 'assets/water.mp3',

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
        tp_score : 0,
        alcohol : 0,
        destroyOnImpact : false,
        impactSound : 'assets/oh.mp3',

        static : false,
        movement : {
            x : 100,
            y : 0
        },
    },

    {
        name : "Small Virus",
        image : 'assets/small-virus.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : false,  // do not rotate on collision

        damage : 1,
        score : 0,
        tp_score : 0,
        alcohol : 0,
        destroyOnImpact : true,
        impactSound : 'assets/oh.mp3',

        static : false,
        movement : {
            x : 0,
            y : 0
        },
    },
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
        tp_score : 0,
        alcohol : 0,
        destroyOnImpact : false,
        impactSound : null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },
    //  Create GameObject for level 2
    {
        name : "Rock 1",
        image : 'assets/beach-asset-1.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : 0,
        tp_score : 0,
        alcohol : 0,
        destroyOnImpact : false,
        impactSound : null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },

    {
        name : "Castle",
        image : 'assets/beach-asset-2.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : 0,
        tp_score : 0,
        alcohol : 0,
        destroyOnImpact : false,
        impactSound : null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },

    {
        name : "Treasure",
        image : 'assets/beach-asset-3.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : 0,
        tp_score : 0,
        alcohol : 0,
        destroyOnImpact : false,
        impactSound : null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },
    {
        name : "Rock 2",
        image : 'assets/beach-asset-4.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : 0,
        tp_score : 0,
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
        name : "Toilet Paper 6",
        image : 'assets/tp-6.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score: 0,
        tp_score : 1,
        alcohol : 0,
        destroyOnImpact : true,
        impactSound : 'assets/fart.mp3',

        static : false,
        movement : {
            x : 0,
            y : 0
        },
    },
];


//=======================================//
console.log("Loaded => gameobjects.js");
//=======================================//