/* =========================================================
   AI INVENTIONS - 2D FASHION LAYER SYSTEM
   Every PNG must use the SAME canvas size and alignment.
========================================================= */

const fashionLooks = {
    bohemian: {
        label: "Bohemian",
        top: {
            name: "Teal Bohemian Halter Top",
            image: "fashion-assets/bohemian-top.png"
        },
        bottom: {
            name: "Brown Lace-Up Shorts",
            image: "fashion-assets/bohemian-shorts.png"
        },
        shoes: null,
        accessory: null
    },

    casual: {
        label: "Casual",
        top: null,
        bottom: null,
        shoes: null,
        accessory: null
    },

    business: {
        label: "Business",
        top: null,
        bottom: null,
        shoes: null,
        accessory: null
    },

    athletic: {
        label: "Athletic",
        top: null,
        bottom: null,
        shoes: null,
        accessory: null
    },

    barbie: {
        label: "Barbie",
        top: null,
        bottom: null,
        shoes: null,
        accessory: null
    },

    punk: {
        label: "Punk",
        top: null,
        bottom: null,
        shoes: null,
        accessory: null
    },

    gothic: {
        label: "Gothic",
        top: null,
        bottom: null,
        shoes: null,
        accessory: null
    },

    hippy: {
        label: "Hippy",
        top: null,
        bottom: null,
        shoes: null,
        accessory: null
    },

    sexy: {
        label: "Sexy",
        top: null,
        bottom: null,
        shoes: null,
        accessory: null
    }
};

let selectedStyle = "bohemian";

const styleButtons =
    document.querySelectorAll(".style-buttons button");

const generateButton =
    document.getElementById("generate-outfit");

const layers = {
    top: document.getElementById("fashion-top"),
    bottom: document.getElementById("fashion-bottom"),
    shoes: document.getElementById("fashion-shoes"),
    accessory: document.getElementById("fashion-accessory")
};

function setLayer(type, item) {

    const image = layers[type];

    if (!image) {
        return;
    }

    if (!item || !item.image) {
        image.hidden = true;
        image.removeAttribute("src");
        image.alt = "";
        return;
    }

    image.src = item.image;
    image.alt = item.name;
    image.hidden = false;
}

function updateText(look) {

    const selected =
        document.getElementById("selected-style");

    const top =
        document.getElementById("outfit-top");

    const bottom =
        document.getElementById("outfit-bottom");

    const shoes =
        document.getElementById("outfit-shoes");

    const accessory =
        document.getElementById("outfit-accessory");

    if (selected) {
        selected.textContent =
            `${look.label} outfit selected.`;
    }

    if (top) {
        top.textContent =
            look.top?.name || "Coming soon";
    }

    if (bottom) {
        bottom.textContent =
            look.bottom?.name || "Coming soon";
    }

    if (shoes) {
        shoes.textContent =
            look.shoes?.name || "Coming soon";
    }

    if (accessory) {
        accessory.textContent =
            look.accessory?.name || "Coming soon";
    }
}

function showLook(style) {

    const look = fashionLooks[style];

    if (!look) {
        return;
    }

    setLayer("bottom", look.bottom);
    setLayer("top", look.top);
    setLayer("shoes", look.shoes);
    setLayer("accessory", look.accessory);

    updateText(look);
}

styleButtons.forEach((button) => {

    button.addEventListener("click", () => {

        selectedStyle = button.dataset.style;

        styleButtons.forEach((btn) => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        showLook(selectedStyle);
    });
});

if (generateButton) {

    generateButton.addEventListener(
        "click",
        () => showLook(selectedStyle)
    );
}

const bohemianButton =
    document.querySelector(
        '[data-style="bohemian"]'
    );

if (bohemianButton) {
    bohemianButton.classList.add("selected");
}

showLook("bohemian");
