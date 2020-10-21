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
        immunity: null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },

    //  Create GameObject
    {
        name : "Level 1 Platform",
        image : 'assets/level-1-platform.png',
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
        immunity: null,

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
        immunity: null,

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
        immunity: null,

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
        immunity: null,

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
        immunity: null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },


    //  Create GameObject
    {
        name : "Burper Coke",
        image : 'assets/burper-coke.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : 0,
        tp_score : 0,
        alcohol : 0,
        destroyOnImpact : true,
        impactSound : 'assets/burp.mp3',  // Use null if no sound
        immunity: null,

        static : false,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },

    {
        name : "Drink 1",
        image : 'assets/beer-one-sprite.png',
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
        immunity: null,

        static : false,    // lock movement off
        movement : {
            x : -10,
            y : 0
        },
    },

    {
        name : "Holy Sanitizer",
        image : 'assets/sanitizer-sprite.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : 0,
        tp_score : 0,
        alcohol : 0,
        destroyOnImpact : true,
        impactSound : 'assets/holy.mp3',  // Use null if no sound
        immunity: true,

        static : false,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },

    {
        name : "Drink 2",
        image : 'assets/beer-two-sprite.png',
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
        immunity: null,

        static : false,    // lock movement off
        movement : {
            x : -10,
            y : 0
        },
    },

    {
        name : "Wine",
        image : 'assets/wine.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : -10,
        tp_score : 0,
        alcohol : 20,
        destroyOnImpact : true,
        impactSound : 'assets/gibberish.mp3',  // Use null if no sound
        immunity: null,

        static : false,    // lock movement off
        movement : {
            x : -10,
            y : 0
        },
    },

    {
        name : "Rum",
        image : 'assets/rum.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : -10,
        tp_score : 0,
        alcohol : 25,
        destroyOnImpact : true,
        impactSound : 'assets/gibberish.mp3',  // Use null if no sound
        immunity: null,

        static : false,    // lock movement off
        movement : {
            x : -10,
            y : 0
        },
    },
    {
        name : "Orange Bottle",
        image : 'assets/orange-bottle.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : -10,
        tp_score : 0,
        alcohol : 30,
        destroyOnImpact : true,
        impactSound : 'assets/gibberish.mp3',  // Use null if no sound
        immunity: null,

        static : false,    // lock movement off
        movement : {
            x : -10,
            y : 0
        },
    },

    {
        name : "Martini",
        image : 'assets/martini.png',
        alpha : 1,
        scale: 1,
        mass: 1,
        fixedRotation : true,  // do not rotate on collision

        damage : 0,
        score : -10,
        tp_score : 0,
        alcohol : 25,
        destroyOnImpact : true,
        impactSound : 'assets/gibberish.mp3',  // Use null if no sound
        immunity: null,

        static : false,    // lock movement off
        movement : {
            x : -10,
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
        immunity: null,

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
        mass: 80,
        fixedRotation : false,  // do not rotate on collision

        damage : 1,
        score : 0,
        tp_score : 0,
        alcohol : 0,
        destroyOnImpact : false,
        impactSound : 'assets/oh.mp3',
        immunity: null,

        static : false,
        movement : {
            x : 150,
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
        immunity: null,

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
        immunity: null,

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
        immunity: null,

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
        immunity: null,

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
        immunity: null,

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
        immunity: null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },
    {
        name : "Box",
        image : 'assets/box.png',
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
        immunity: null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },
    {
        name : "Bin",
        image : 'assets/bin.png',
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
        immunity: null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },
    {
        name : "Bin2",
        image : 'assets/bin2.png',
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
        immunity: null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },
    {
        name : "Bins",
        image : 'assets/bins.png',
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
        immunity: null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },
    {
        name : "Bench",
        image : 'assets/bench.png',
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
        immunity: null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },
    {
        name : "Letter Box",
        image : 'assets/letter_box.png',
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
        immunity: null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },
    {
        name : "Letter Box1",
        image : 'assets/letter_box_1.png',
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
        immunity: null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },
    {
        name : "Letter Box2",
        image : 'assets/letter_box_2.png',
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
        immunity: null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },

    {
        name : "Plant",
        image : 'assets/plant.png',
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
        immunity: null,

        static : true,    // lock movement off
        movement : {
            x : 0,
            y : 0
        },
    },
];

for (i=0; i <= 6; i++) {
    gameobjects.push(
        {
            name : "Toilet Paper " + i,
            image : 'assets/tp-'+ i +'.png',
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
            immunity: null,

            static : false,
            movement : {
                x : 0,
                y : 0
            },
        },
    )
}


//=======================================//
console.log("Loaded => gameobjects.js");
//=======================================//