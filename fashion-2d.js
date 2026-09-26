/* =========================================================
   AI INVENTIONS - 2D FASHION LAYER SYSTEM

   Random clothing generator for the avatar.

   Current working styles:
   - Bohemian
   - Sexy

   Other styles are ready for clothing to be added later.
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

        /* DEFAULT TOP */

        top: {
            name: "Bohemian Top",
            image: "fashion-assets/bohemian-top.png"
        },

        /* RANDOM BOHEMIAN TOPS */

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

        /* DEFAULT BOTTOM */

        bottom: {
            name: "Bohemian Shorts",
            image: "fashion-assets/bohemian_shorts.png"
        },

        /* RANDOM BOHEMIAN BOTTOMS */

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

        /* SHOES */

        shoes: null,

        shoeOptions: [],

        /* ACCESSORIES */

        accessory: null,

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
        /* =====================================================
       CASUAL
    ===================================================== */

    casual: {

        label: "Casual",


        /* =================================================
           DEFAULT TOP
        ================================================= */

        top: {
            name: "Casual Shirt 1",
            image: "fashion-assets/Casual-shirt1.png"
        },


        /* =================================================
           RANDOM CASUAL TOPS
        ================================================= */

        topOptions: [

            {
                name: "Casual Shirt 1",
                image: "fashion-assets/Casual-shirt1.png"
            },

            {
                name: "Casual Shirt 2",
                image: "fashion-assets/Casual-shirt2.png"
            },

            {
                name: "Casual Shirt 3",
                image: "fashion-assets/Casual-shirt3.png"
            }

        ],


        /* =================================================
           DEFAULT BOTTOM
        ================================================= */

        bottom: {
            name: "Casual Shorts 1",
            image: "fashion-assets/Casual-shorts1.png"
        },


        /* =================================================
           RANDOM CASUAL BOTTOMS
        ================================================= */

        bottomOptions: [

            {
                name: "Casual Shorts 1",
                image: "fashion-assets/Casual-shorts1.png"
            },

            {
                name: "Casual Shorts 2",
                image: "fashion-assets/Casual-shorts2.png"
            },

            {
                name: "Casual Shorts 3",
                image: "fashion-assets/Casual-shorts3.png"
            },

            {
                name: "Casual Shorts 4",
                image: "fashion-assets/Casual-shorts4.png"
            },

            {
                name: "Casual Shorts 5",
                image: "fashion-assets/Casual-shorts5.png"
            },

            {
                name: "Casual Shorts 6",
                image: "fashion-assets/Casual-shorts6.png"
            },

            {
                name: "Casual Shorts 7",
                image: "fashion-assets/Casual-shorts7.png"
            }

        ],


        /* =================================================
           CASUAL SHOES
        ================================================= */

        shoes: null,

        shoeOptions: [],


        /* =================================================
           CASUAL ACCESSORIES
        ================================================= */

        accessory: null,

        accessoryOptions: []

    },
    /* =====================================================
   BUSINESS
===================================================== */

business: {

    label: "Business",


    /* =================================================
       DEFAULT TOP
    ================================================= */

    top: {
        name: "Business Shirt 2",
        image: "fashion-assets/business-shirt2.png"
    },


    /* =================================================
       RANDOM BUSINESS TOPS
    ================================================= */

    topOptions: [

        {
            name: "Business Shirt 2",
            image: "fashion-assets/business-shirt2.png"
        },

        {
            name: "Business Shirt 3",
            image: "fashion-assets/business-shirt3.png"
        },

        {
            name: "Business Shirt 4",
            image: "fashion-assets/business-shirt4.png"
        },

        {
            name: "Business Shirt 5",
            image: "fashion-assets/business-shirt5.png"
        },

        {
            name: "Business Shirt 6",
            image: "fashion-assets/business-shirt6.png"
        },

        {
            name: "Business Shirt 7",
            image: "fashion-assets/business-shirt7.png"
        },

        {
            name: "Business Shirt 8",
            image: "fashion-assets/business-shirt8.png"
        }

    ],


    /* =================================================
       DEFAULT BOTTOM
    ================================================= */

    bottom: {
        name: "Business Pant 1",
        image: "fashion-assets/Business-pant1.png"
    },


    /* =================================================
       RANDOM BUSINESS BOTTOMS
    ================================================= */

    bottomOptions: [

        {
            name: "Business Pant 1",
            image: "fashion-assets/Business-pant1.png"
        },

        {
            name: "Business Pant 2",
            image: "fashion-assets/Business-pant2.png"
        },

        {
            name: "Business Pant 3",
            image: "fashion-assets/Business-pant3.png"
        },

        {
            name: "Business Pant 4",
            image: "fashion-assets/Business-pant4.png"
        },

        {
            name: "Business Pant 5",
            image: "fashion-assets/Business-pant5.png"
        },

        {
            name: "Business Pant 6",
            image: "fashion-assets/Business-pant6.png"
        },

        {
            name: "Business Pant 7",
            image: "fashion-assets/Business-pant7.png"
        },

        {
            name: "Business Pant 8",
            image: "fashion-assets/Business-pant8.png"
        },

        {
            name: "Business Pant 9",
            image: "fashion-assets/Business-pant9.png"
        }

    ],


    /* =================================================
       BUSINESS SHOES
    ================================================= */

    shoes: null,

    shoeOptions: [],


    /* =================================================
       BUSINESS ACCESSORIES
    ================================================= */

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

        /* DEFAULT TOP */

        top: {
            name: "Sexy Top 5",
            image: "fashion-assets/Sexy-top5.png"
        },

        /* RANDOM SEXY TOPS */

        topOptions: [

            {
                name: "Sexy Top 5",
                image: "fashion-assets/Sexy-top5.png"
            },

            {
                name: "Sexy Top 6",
                image: "fashion-assets/Sexy-top6.png"
            },

            {
                name: "Sexy Top 7",
                image: "fashion-assets/Sexy-top7.png"
            },

            {
                name: "Sexy Top 8",
                image: "fashion-assets/Sexy-top8.png"
            },

            {
                name: "Sexy Top 9",
                image: "fashion-assets/Sexy-top9.png"
            }

        ],

        /* DEFAULT BOTTOM */

        bottom: {
            name: "Sexy Bottom 1",
            image: "fashion-assets/Sexy-bottoms1.png"
        },

        /* RANDOM SEXY BOTTOMS */

        bottomOptions: [

            {
                name: "Sexy Bottom 1",
                image: "fashion-assets/Sexy-bottoms1.png"
            },

            {
                name: "Sexy Bottom 2",
                image: "fashion-assets/Sexy-bottoms2.png"
            },

            {
                name: "Sexy Bottom 3",
                image: "fashion-assets/Sexy-bottoms3.png"
            },

            {
                name: "Sexy Bottom 4",
                image: "fashion-assets/Sexy-bottoms4.png"
            },

            {
                name: "Sexy Bottom 5",
                image: "fashion-assets/Sexy-bottoms5.png"
            },

            {
                name: "Sexy Bottom 6",
                image: "fashion-assets/Sexy-bottoms6.png"
            },

            {
                name: "Sexy Bottom 8",
                image: "fashion-assets/Sexy-bottoms8.png"
            }

        ],

        /* SHOES */

        shoes: null,

        shoeOptions: [],

        /* ACCESSORIES */

        accessory: null,

        accessoryOptions: []

    }

};


/* =========================================================
   CURRENTLY SELECTED STYLE
========================================================= */

let selectedStyle = "bohemian";


/* =========================================================
   REMEMBER PREVIOUS RANDOM SELECTIONS
========================================================= */

const lastSelections = {};


/* =========================================================
   STYLE BUTTONS
========================================================= */

const styleButtons =
    document.querySelectorAll(".style-buttons button");


/* =========================================================
   GENERATE BUTTON
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

   Avoids choosing the same item twice in a row.
========================================================= */

function getRandomItem(style, type, items) {

    if (!items || items.length === 0) {
        return null;
    }

    if (items.length === 1) {
        return items[0];
    }

    const selectionKey =
        `${style}-${type}`;

    const previousIndex =
        lastSelections[selectionKey];

    let randomIndex;

    do {

        randomIndex =
            Math.floor(
                Math.random() * items.length
            );

    } while (
        randomIndex === previousIndex
    );

    lastSelections[selectionKey] =
        randomIndex;

    return items[randomIndex];

}


/* =========================================================
   BUILD RANDOM LOOK
========================================================= */

function buildRandomLook(style) {

    const baseLook =
        fashionLooks[style];

    if (!baseLook) {
        return null;
    }

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


    /* RANDOM TOP */

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


    /* RANDOM BOTTOM */

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


    /* RANDOM SHOES */

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


    /* RANDOM ACCESSORY */

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


    /* HIDE EMPTY LAYER */

    if (
        !item ||
        !item.image
    ) {

        image.hidden = true;

        image.removeAttribute("src");

        image.alt = "";

        return;

    }


    /* LOAD CLOTHING IMAGE */

    image.src =
        item.image;

    image.alt =
        item.name || type;

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
   SHOW RANDOM LOOK
========================================================= */

function showLook(style) {

    const look =
        buildRandomLook(style);

    if (!look) {
        return;
    }


    /* BOTTOM */

    setLayer(
        "bottom",
        look.bottom
    );


    /* TOP */

    setLayer(
        "top",
        look.top
    );


    /* SHOES */

    setLayer(
        "shoes",
        look.shoes
    );


    /* ACCESSORY */

    setLayer(
        "accessory",
        look.accessory
    );


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

                const style =
                    button.dataset.style;


                /* INVALID STYLE */

                if (
                    !style ||
                    !fashionLooks[style]
                ) {

                    return;

                }


                /* SAVE CURRENT STYLE */

                selectedStyle =
                    style;


                /* REMOVE OLD SELECTED CLASS */

                styleButtons.forEach(
                    (btn) => {

                        btn.classList.remove(
                            "selected"
                        );

                    }
                );


                /* SELECT CURRENT BUTTON */

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

            if (!selectedStyle) {
                return;
            }

            showLook(
                selectedStyle
            );

        }
    );

}


/* =========================================================
   INITIAL PAGE LOAD

   Starts with a random Bohemian outfit.
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const defaultButton =
            document.querySelector(
                '.style-buttons button[data-style="bohemian"]'
            );


        if (defaultButton) {

            defaultButton.classList.add(
                "selected"
            );

        }


        showLook(
            selectedStyle
        );

    }
);
