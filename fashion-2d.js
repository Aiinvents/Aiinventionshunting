/* =========================================================
   AI INVENTIONS - 2D FASHION LAYER SYSTEM

   Random clothing generator for the avatar.

   Current Bohemian setup:
   - Random Tops
   - Random Bottoms
   - Random Accessories
   - Shoes ready to add later
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


        /* =================================================
           DEFAULT TOP
        ================================================= */

        top: {
            name: "Bohemian Top",
            image: "fashion-assets/bohemian-top.png"
        },


        /* =================================================
           RANDOM BOHEMIAN TOPS
        ================================================= */

        topOptions: [

            {
                name: "Bohemian Top Original",
                image: "fashion-assets/bohemian-top.png"
            },

            {
                name: "Bohemian Top 1",
                image: "fashion-assets/bohemian-top1.png"
            },

            {
                name: "Bohemian Top 2",
                image: "fashion-assets/bohemian-top2.png"
            },

            {
                name: "Bohemian Top 3",
                image: "fashion-assets/bohemian-top3.png"
            },

            {
                name: "Bohemian Top 4",
                image: "fashion-assets/bohemian-top4.png"
            },

            {
                name: "Bohemian Top 5",
                image: "fashion-assets/bohemian-top5.png"
            },

            {
                name: "Bohemian Top 6",
                image: "fashion-assets/bohemian-top6.png"
            },

            {
                name: "Bohemian Top 7",
                image: "fashion-assets/bohemian-top7.png"
            },

            {
                name: "Bohemian Top 8",
                image: "fashion-assets/bohemian-top8.png"
            },

            {
                name: "Bohemian Top 9",
                image: "fashion-assets/bohemian-top9.png"
            },

            {
                name: "Bohemian Top 10",
                image: "fashion-assets/bohemian-top10.png"
            }

        ],


        /* =================================================
           DEFAULT BOTTOM
        ================================================= */

        bottom: {
            name: "Bohemian Shorts",
            image: "fashion-assets/bohemian_shorts.png"
        },


        /* =================================================
           RANDOM BOHEMIAN BOTTOMS
        ================================================= */

        bottomOptions: [

            {
                name: "Bohemian Shorts",
                image: "fashion-assets/bohemian_shorts.png"
            },

            {
                name: "Bohemian Bottom 1",
                image: "fashion-assets/boho-pants1.png"
            },

            {
                name: "Bohemian Bottom 2",
                image: "fashion-assets/boho-pants2.png"
            },

            {
                name: "Bohemian Bottom 3",
                image: "fashion-assets/boho-pants3.png"
            },

            {
                name: "Bohemian Bottom 4",
                image: "fashion-assets/boho-pants4.png"
            },

            {
                name: "Bohemian Bottom 5",
                image: "fashion-assets/boho-pants5.png"
            },

            {
                name: "Bohemian Bottom 6",
                image: "fashion-assets/boho-pants6.png"
            },

            {
                name: "Bohemian Bottom 7",
                image: "fashion-assets/boho-pants7.png"
            },

            {
                name: "Bohemian Bottom 8",
                image: "fashion-assets/boho-pants8.png"
            },

            {
                name: "Bohemian Bottom 9",
                image: "fashion-assets/boho-pants9.png"
            }

        ],


        /* =================================================
           BOHEMIAN SHOES

           Leave empty until shoe PNGs are uploaded.
        ================================================= */

        shoes: null,

        shoeOptions: [],


        /* =================================================
           DEFAULT ACCESSORY
        ================================================= */

        accessory: null,


        /* =================================================
           RANDOM BOHEMIAN ACCESSORIES

           IMPORTANT:
           These spellings match the filenames shown
           in your GitHub screenshot.
        ================================================= */

        accessoryOptions: [

            {
                name: "Bohemian Accessory 1",
                image: "fashion-assets/Boho-accessories.png"
            },

            {
                name: "Bohemian Accessory 2",
                image: "fashion-assets/boho-accessories1.png"
            },

            {
                name: "Bohemian Accessory 3",
                image: "fashion-assets/boho-accesories2.png"
            },

            {
                name: "Bohemian Accessory 4",
                image: "fashion-assets/boho-accessories3.png"
            },

            {
                name: "Bohemian Accessory 5",
                image: "fashion-assets/boho-accesories4.png"
            },

            {
                name: "Bohemian Accessory 6",
                image: "fashion-assets/boho-accesories5.png"
            }

        ]

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
   CURRENT SELECTED FASHION STYLE
========================================================= */

let selectedStyle = "bohemian";


/* =========================================================
   REMEMBER PREVIOUS RANDOM SELECTIONS

   Prevents the same piece from being selected
   twice in a row whenever possible.
========================================================= */

const lastSelections = {};


/* =========================================================
   FIND STYLE BUTTONS
========================================================= */

const styleButtons =
    document.querySelectorAll(".style-buttons button");


/* =========================================================
   FIND GENERATE OUTFIT BUTTON
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
========================================================= */

function getRandomItem(style, type, items) {

    /*
     * Nothing available.
     */

    if (!items || items.length === 0) {
        return null;
    }


    /*
     * Only one piece available.
     */

    if (items.length === 1) {
        return items[0];
    }


    /*
     * Unique key for each clothing type.
     */

    const selectionKey =
        `${style}-${type}`;


    const previousIndex =
        lastSelections[selectionKey];


    let randomIndex;


    /*
     * Keep choosing until the new item is
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
     * Remember selection.
     */

    lastSelections[selectionKey] =
        randomIndex;


    return items[randomIndex];

}


/* =========================================================
   BUILD RANDOM OUTFIT
========================================================= */

function buildRandomLook(style) {

    const baseLook =
        fashionLooks[style];


    /*
     * Stop if style does not exist.
     */

    if (!baseLook) {
        return null;
    }


    /*
     * Begin with default clothing.
     */

    const randomLook = {

        label:
            baseLook.label,

        top:
            baseLook.top,

        bottom:
            baseLook.bottom,

        shoes:
            baseLook.shoes,

        accessory:
            baseLook.accessory

    };


    /* =====================================================
       RANDOMIZE TOP
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
       RANDOMIZE BOTTOM
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
       RANDOMIZE SHOES
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
       RANDOMIZE ACCESSORY
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
   SET IMAGE LAYER
========================================================= */

function setLayer(type, item) {

    const image =
        layers[type];


    /*
     * Layer doesn't exist in HTML.
     */

    if (!image) {
        return;
    }


    /*
     * No item available.
     * Hide the layer.
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
     * Set clothing PNG.
     */

    image.src =
        item.image;


    image.alt =
        item.name || type;


    /*
     * Display layer.
     */

    image.hidden =
        false;

}


/* =========================================================
   UPDATE OUTFIT INFORMATION
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


    /*
     * Selected style text.
     */

    if (selected) {

        selected.textContent =
            `${look.label} outfit selected.`;

    }


    /*
     * Top text.
     */

    if (top) {

        top.textContent =
            look.top?.name ||
            "Coming soon";

    }


    /*
     * Bottom text.
     */

    if (bottom) {

        bottom.textContent =
            look.bottom?.name ||
            "Coming soon";

    }


    /*
     * Shoes text.
     */

    if (shoes) {

        shoes.textContent =
            look.shoes?.name ||
            "Coming soon";

    }


    /*
     * Accessory text.
     */

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
     * Generate randomized outfit.
     */

    const look =
        buildRandomLook(style);


    if (!look) {
        return;
    }


    /*
     * IMPORTANT LAYER ORDER
     *
     * Bottom first.
     * Top over bottom.
     * Shoes.
     * Accessories last so jewelry/belts/etc.
     * appear above the clothing.
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
     * Update text.
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
                 * Get style from:
                 *
                 * data-style="bohemian"
                 */

                const style =
                    button.dataset.style;


                /*
                 * Ignore invalid button.
                 */

                if (
                    !style ||
                    !fashionLooks[style]
                ) {

                    return;

                }


                /*
                 * Save selected style.
                 */

                selectedStyle =
                    style;


                /*
                 * Remove selected class
                 * from every style button.
                 */

                styleButtons.forEach(
                    (btn) => {

                        btn.classList.remove(
                            "selected"
                        );

                    }
                );


                /*
                 * Highlight current button.
                 */

                button.classList.add(
                    "selected"
                );

            }
        );

    }
);


/* =========================================================
   GENERATE OUTFIT BUTTON
========================================================= */

if (generateButton) {

    generateButton.addEventListener(
        "click",
        () => {

            /*
             * Make sure a style exists.
             */

            if (!selectedStyle) {
                return;
            }


            /*
             * Generate completely new random outfit.
             */

            showLook(
                selectedStyle
            );

        }
    );

}


/* =========================================================
   OPTIONAL FIRST OUTFIT

   This creates a random Bohemian outfit automatically
   when the page first loads.

   If you DON'T want clothing to appear until the user
   presses Generate Outfit, delete ONLY this section.
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
         * Select the Bohemian button visually
         * if one exists.
         */

        const defaultButton =
            document.querySelector(
                '.style-buttons button[data-style="bohemian"]'
            );


        if (defaultButton) {

            defaultButton.classList.add(
                "selected"
            );

        }


        /*
         * Show first random Bohemian outfit.
         */

        showLook(
            selectedStyle
        );

    }
);
