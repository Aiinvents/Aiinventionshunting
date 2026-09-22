/* =========================================================
   AI INVENTIONS - 2D FASHION LAYER SYSTEM

   Random outfit system.

   Every clothing PNG should use the same canvas size
   and alignment so it fits the avatar correctly.
========================================================= */


/* =========================================================
   FASHION LOOKS
========================================================= */

const fashionLooks = {

    /* =====================================================
       BOHEMIAN
    ===================================================== */

    bohemian: {

        label: "Bohemian",

        /*
         * The original top stays here as the default.
         * The topOptions array below is what gets randomized.
         */
        top: {
            name: "Teal Bohemian Halter Top",
            image: "fashion-assets/bohemian-top.png"
        },

        /*
         * ALL BOHEMIAN TOPS
         *
         * Every time Generate Outfit is pressed while
         * Bohemian is selected, one of these is chosen.
         */
        topOptions: [

            {
                name: "Bohemian Top 1",
                image: "fashion-assets/bohemian-top.png"
            },

            {
                name: "Bohemian Top 2",
                image: "fashion-assets/bohemian-top1.png"
            },

            {
                name: "Bohemian Top 3",
                image: "fashion-assets/bohemian-top2.png"
            },

            {
                name: "Bohemian Top 4",
                image: "fashion-assets/bohemian-top3.png"
            },

            {
                name: "Bohemian Top 5",
                image: "fashion-assets/bohemian-top4.png"
            },

            {
                name: "Bohemian Top 6",
                image: "fashion-assets/bohemian-top5.png"
            },

            {
                name: "Bohemian Top 7",
                image: "fashion-assets/bohemian-top6.png"
            },

            {
                name: "Bohemian Top 8",
                image: "fashion-assets/bohemian-top7.png"
            },

            {
                name: "Bohemian Top 9",
                image: "fashion-assets/bohemian-top8.png"
            },

            {
                name: "Bohemian Top 10",
                image: "fashion-assets/bohemian-top9.png"
            },

            {
                name: "Bohemian Top 11",
                image: "fashion-assets/bohemian-top10.png"
            }

        ],

        /*
         * CURRENT BOHEMIAN BOTTOM
         */
        bottom: {
            name: "Brown Lace-Up Shorts",
            image: "fashion-assets/bohemian_shorts.png"
        },

        /*
         * We can add random bottoms here later.
         */
        bottomOptions: [],

        shoes: null,

        /*
         * Random shoes will go here later.
         */
        shoeOptions: [],

        accessory: null,

        /*
         * Random accessories will go here later.
         */
        accessoryOptions: []

    },


    /* =====================================================
       CASUAL
    ===================================================== */

    casual: {

        label: "Casual",

        top: null,
        topOptions: [],

        bottom: null,
        bottomOptions: [],

        shoes: null,
        shoeOptions: [],

        accessory: null,
        accessoryOptions: []

    },


    /* =====================================================
       BUSINESS
    ===================================================== */

    business: {

        label: "Business",

        top: null,
        topOptions: [],

        bottom: null,
        bottomOptions: [],

        shoes: null,
        shoeOptions: [],

        accessory: null,
        accessoryOptions: []

    },


    /* =====================================================
       ATHLETIC
    ===================================================== */

    athletic: {

        label: "Athletic",

        top: null,
        topOptions: [],

        bottom: null,
        bottomOptions: [],

        shoes: null,
        shoeOptions: [],

        accessory: null,
        accessoryOptions: []

    },


    /* =====================================================
       BARBIE
    ===================================================== */

    barbie: {

        label: "Barbie",

        top: null,
        topOptions: [],

        bottom: null,
        bottomOptions: [],

        shoes: null,
        shoeOptions: [],

        accessory: null,
        accessoryOptions: []

    },


    /* =====================================================
       PUNK
    ===================================================== */

    punk: {

        label: "Punk",

        top: null,
        topOptions: [],

        bottom: null,
        bottomOptions: [],

        shoes: null,
        shoeOptions: [],

        accessory: null,
        accessoryOptions: []

    },


    /* =====================================================
       GOTHIC
    ===================================================== */

    gothic: {

        label: "Gothic",

        top: null,
        topOptions: [],

        bottom: null,
        bottomOptions: [],

        shoes: null,
        shoeOptions: [],

        accessory: null,
        accessoryOptions: []

    },


    /* =====================================================
       HIPPY
    ===================================================== */

    hippy: {

        label: "Hippy",

        top: null,
        topOptions: [],

        bottom: null,
        bottomOptions: [],

        shoes: null,
        shoeOptions: [],

        accessory: null,
        accessoryOptions: []

    },


    /* =====================================================
       SEXY
    ===================================================== */

    sexy: {

        label: "Sexy",

        top: null,
        topOptions: [],

        bottom: null,
        bottomOptions: [],

        shoes: null,
        shoeOptions: [],

        accessory: null,
        accessoryOptions: []

    }

};


/* =========================================================
   CURRENTLY SELECTED STYLE
========================================================= */

let selectedStyle = "bohemian";


/* =========================================================
   REMEMBER LAST RANDOM ITEMS

   This keeps the same shirt from appearing twice
   in a row whenever possible.
========================================================= */

const lastSelections = {};


/* =========================================================
   STYLE BUTTONS
========================================================= */

const styleButtons =
    document.querySelectorAll(".style-buttons button");


/* =========================================================
   GENERATE OUTFIT BUTTON
========================================================= */

const generateButton =
    document.getElementById("generate-outfit");


/* =========================================================
   CLOTHING IMAGE LAYERS
========================================================= */

const layers = {

    top:
        document.getElementById("fashion-top"),

    bottom:
        document.getElementById("fashion-bottom"),

    shoes:
        document.getElementById("fashion-shoes"),

    accessory:
        document.getElementById("fashion-accessory")

};


/* =========================================================
   RANDOM ITEM FUNCTION

   Picks a random piece of clothing.

   It also tries to prevent the same piece from appearing
   two times in a row.
========================================================= */

function getRandomItem(style, type, items) {

    if (!items || items.length === 0) {
        return null;
    }


    /*
     * If there is only one item,
     * just return it.
     */

    if (items.length === 1) {
        return items[0];
    }


    const selectionKey =
        `${style}-${type}`;


    const previousIndex =
        lastSelections[selectionKey];


    let randomIndex;


    /*
     * Keep picking until we get something
     * different from the previous item.
     */

    do {

        randomIndex =
            Math.floor(
                Math.random() * items.length
            );

    } while (
        randomIndex === previousIndex
    );


    /*
     * Remember what was picked.
     */

    lastSelections[selectionKey] =
        randomIndex;


    return items[randomIndex];

}


/* =========================================================
   BUILD RANDOM LOOK

   This is what will eventually randomize ALL clothing.

   Right now Bohemian tops are populated.

   Later we simply add:
   - bottoms
   - shoes
   - accessories
   - other fashion styles

   The randomizer itself will NOT need to be rewritten.
========================================================= */

function buildRandomLook(style) {

    const baseLook =
        fashionLooks[style];


    if (!baseLook) {
        return null;
    }


    /*
     * Start with the normal/default pieces.
     */

    const randomLook = {

        label: baseLook.label,

        top: baseLook.top,

        bottom: baseLook.bottom,

        shoes: baseLook.shoes,

        accessory: baseLook.accessory

    };


    /* =====================================================
       RANDOM TOP
    ===================================================== */

    if (
        baseLook.topOptions &&
        baseLook.topOptions.length > 0
    ) {

        randomLook.top =
            getRandomItem(
                style,
                "top",
                baseLook.topOptions
            );

    }


    /* =====================================================
       RANDOM BOTTOM
    ===================================================== */

    if (
        baseLook.bottomOptions &&
        baseLook.bottomOptions.length > 0
    ) {

        randomLook.bottom =
            getRandomItem(
                style,
                "bottom",
                baseLook.bottomOptions
            );

    }


    /* =====================================================
       RANDOM SHOES
    ===================================================== */

    if (
        baseLook.shoeOptions &&
        baseLook.shoeOptions.length > 0
    ) {

        randomLook.shoes =
            getRandomItem(
                style,
                "shoes",
                baseLook.shoeOptions
            );

    }


    /* =====================================================
       RANDOM ACCESSORY
    ===================================================== */

    if (
        baseLook.accessoryOptions &&
        baseLook.accessoryOptions.length > 0
    ) {

        randomLook.accessory =
            getRandomItem(
                style,
                "accessory",
                baseLook.accessoryOptions
            );

    }


    return randomLook;

}


/* =========================================================
   SET CLOTHING IMAGE LAYER
========================================================= */

function setLayer(type, item) {

    const image =
        layers[type];


    if (!image) {
        return;
    }


    /*
     * If there is no clothing item,
     * hide that layer.
     */

    if (
        !item ||
        !item.image
    ) {

        image.hidden = true;

        image.removeAttribute("src");

        image.alt = "";

        return;

    }


    /*
     * Load clothing PNG.
     */

    image.src =
        item.image;


    image.alt =
        item.name;


    image.hidden =
        false;

}


/* =========================================================
   UPDATE OUTFIT TEXT
========================================================= */

function updateText(look) {

    const selected =
        document.getElementById(
            "selected-style"
        );


    const top =
        document.getElementById(
            "outfit-top"
        );


    const bottom =
        document.getElementById(
            "outfit-bottom"
        );


    const shoes =
        document.getElementById(
            "outfit-shoes"
        );


    const accessory =
        document.getElementById(
            "outfit-accessory"
        );


    if (selected) {

        selected.textContent =
            `${look.label} outfit selected.`;

    }


    if (top) {

        top.textContent =
            look.top?.name ||
            "Coming soon";

    }


    if (bottom) {

        bottom.textContent =
            look.bottom?.name ||
            "Coming soon";

    }


    if (shoes) {

        shoes.textContent =
            look.shoes?.name ||
            "Coming soon";

    }


    if (accessory) {

        accessory.textContent =
            look.accessory?.name ||
            "Coming soon";

    }

}


/* =========================================================
   SHOW RANDOM OUTFIT
========================================================= */

function showLook(style) {

    /*
     * Build a fresh randomized outfit
     * every time Generate Outfit is pressed.
     */

    const look =
        buildRandomLook(style);


    if (!look) {
        return;
    }


    /*
     * Load all four clothing layers.
     */

    setLayer(
        "bottom",
        look.bottom
    );


    setLayer(
        "top",
        look.top
    );


    setLayer(
        "shoes",
        look.shoes
    );


    setLayer(
        "accessory",
        look.accessory
    );


    /*
     * Update outfit description.
     */

    updateText(look);

}


/* =========================================================
   STYLE BUTTON EVENTS
========================================================= */

styleButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                /*
                 * Remember which fashion style
                 * the user selected.
                 */

                selectedStyle =
                    button.dataset.style;


                /*
                 * Remove selected styling
                 * from every button.
                 */

                styleButtons.forEach(
                    (btn) => {

                        btn.classList.remove(
                            "selected"
                        );

                    }
                );


                /*
                 * Highlight selected button.
                 */

                button.classList.add(
                    "selected"
                );

            }
        );

    }
);


/* =========================================================
   GENERATE OUTFIT
========================================================= */

if (generateButton) {

    generateButton.addEventListener(
        "click",
        () => {

            if (!selectedStyle) {
                return;
            }


            /*
             * Generate a NEW random outfit.
             */

            showLook(
                selectedStyle
            );

        }
    );

}
