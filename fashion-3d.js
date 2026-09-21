import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { fashionProducts } from "./fashion-products.js";


/* =========================================================
   SCENE
========================================================= */

const container =
    document.getElementById("fashion-3d-viewer");

if (!container) {
    throw new Error("3D fashion viewer container not found.");
}


const scene = new THREE.Scene();


/* =========================================================
   CAMERA
========================================================= */

const camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth / container.clientHeight,
    0.1,
    10000
);

camera.position.set(0, 0, 5);


/* =========================================================
   RENDERER
========================================================= */

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.setSize(
    container.clientWidth,
    container.clientHeight
);

renderer.outputColorSpace =
    THREE.SRGBColorSpace;

container.appendChild(renderer.domElement);


/* =========================================================
   LIGHTING
========================================================= */

const hemisphereLight =
    new THREE.HemisphereLight(
        0xffffff,
        0x777777,
        2.5
    );

scene.add(hemisphereLight);


const keyLight =
    new THREE.DirectionalLight(
        0xffffff,
        3
    );

keyLight.position.set(3, 5, 5);

scene.add(keyLight);


const fillLight =
    new THREE.DirectionalLight(
        0xffffff,
        1.5
    );

fillLight.position.set(-4, 2, 3);

scene.add(fillLight);


/* =========================================================
   MASTER FASHION GROUP

   Woman + clothes all live inside this group.
========================================================= */

const fashionGroup =
    new THREE.Group();

scene.add(fashionGroup);


/* =========================================================
   CONTROLS
========================================================= */

const controls =
    new OrbitControls(
        camera,
        renderer.domElement
    );

controls.enableDamping = true;

controls.dampingFactor = 0.06;

controls.enablePan = false;

controls.autoRotate = true;

controls.autoRotateSpeed = 1.3;


/* =========================================================
   LOADER
========================================================= */

const loader =
    new GLTFLoader();


let woman = null;
let shirt = null;


/* =========================================================
   WOMAN
========================================================= */

loader.load(

    "./woman_site_v2.glb",

    function (gltf) {

        woman = gltf.scene;

        fashionGroup.add(woman);

        fitCameraToModel(woman);

    },

    undefined,

    function (error) {

        console.error(
            "Woman failed to load:",
            error
        );

    }

);


/* =========================================================
   SHIRT

   This is intentionally independent from the woman.
========================================================= */

loader.load(

    "./bohemian_top_v1.glb",

    function (gltf) {

        shirt = gltf.scene;


        /*
         * Our current shirt was created at a very
         * different scale from the woman.
         *
         * This is the first rough alignment.
         * We'll fine-tune these numbers after seeing it.
         */

        shirt.scale.set(
            1,
            1,
            1
        );


        shirt.position.set(
            0,
            0,
            0
        );


        fashionGroup.add(shirt);
       shirt.visible = false;

    },
   

    undefined,

    function (error) {

        console.error(
            "Shirt failed to load:",
            error
        );

    }

);


/* =========================================================
   SHIRT TOGGLE
========================================================= */

const shirtButton =
    document.getElementById("toggle-shirt");


if (shirtButton) {

    shirtButton.addEventListener(
        "click",
        function () {

            if (!shirt) {
                return;
            }

            shirt.visible =
                !shirt.visible;

        }
    );

}


/* =========================================================
   CAMERA FITTING
========================================================= */

function fitCameraToModel(object) {

    const box =
        new THREE.Box3()
            .setFromObject(object);

    const size =
        box.getSize(
            new THREE.Vector3()
        );

    const center =
        box.getCenter(
            new THREE.Vector3()
        );


    const maxDimension =
        Math.max(
            size.x,
            size.y,
            size.z
        );


    const distance =
        maxDimension * 1.7;


    camera.position.set(
        center.x,
        center.y,
        center.z + distance
    );


    camera.near =
        distance / 100;

    camera.far =
        distance * 100;

    camera.updateProjectionMatrix();


    controls.target.copy(center);

    controls.update();

}


/* =========================================================
   RESPONSIVE VIEWER
========================================================= */

function resizeViewer() {

    const width =
        container.clientWidth;

    const height =
        container.clientHeight;


    camera.aspect =
        width / height;

    camera.updateProjectionMatrix();


    renderer.setSize(
        width,
        height
    );

}


window.addEventListener(
    "resize",
    resizeViewer
);


/* =========================================================
   ANIMATION LOOP
========================================================= */

function animate() {

    requestAnimationFrame(animate);

    controls.update();

    renderer.render(
        scene,
        camera
    );

}

animate();
/* =========================================================
   FASHION STYLE CONTROLS
========================================================= */

let selectedStyle = "casual";

const fashionStyleButtons =
    document.querySelectorAll(".style-buttons button");


fashionStyleButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Get selected category
        selectedStyle = button.dataset.style;

        // Remove highlight from all buttons
        fashionStyleButtons.forEach((btn) => {
            btn.classList.remove("selected");
        });

        // Highlight selected button
        button.classList.add("selected");

        console.log(
            "Selected fashion style:",
            selectedStyle
        );

    });

});
/* =========================================================
   GENERATE 3D OUTFIT
========================================================= */

const outfitGeneratorButton =
    document.getElementById("generate-outfit");


if (outfitGeneratorButton) {

    outfitGeneratorButton.addEventListener("click", () => {

        const productsForStyle =
            fashionProducts.filter(
                product =>
                    product.style === selectedStyle &&
                    product.model
            );


        if (productsForStyle.length === 0) {

            console.log(
                "No 3D garments available yet for:",
                selectedStyle
            );

            return;
        }


        const randomProduct =
            productsForStyle[
                Math.floor(
                    Math.random() *
                    productsForStyle.length
                )
            ];


        console.log(
            "Loading 3D product:",
            randomProduct.name
        );


        /*
         * For our first test, shirt.glb is
         * already loaded into the scene.
         */

        if (
            randomProduct.model === "shirt.glb" &&
            shirt
        ) {

            shirt.visible = true;

        }

    });

}
