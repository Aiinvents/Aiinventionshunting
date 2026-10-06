// AI Inventions — 2D Fashion Layer System

function createStyle(
  label,
  topOptions = [],
  bottomOptions = [],
  shoeOptions = [],
  accessoryOptions = []
) {
  return {
    label,
    top: topOptions[0] ?? null,
    topOptions,
    bottom: bottomOptions[0] ?? null,
    bottomOptions,
    shoes: shoeOptions[0] ?? null,
    shoeOptions,
    accessory: accessoryOptions[0] ?? null,
    accessoryOptions
  };
}

const fashionLooks = {
  bohemian: createStyle(
    "Bohemian",

    [
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

    [
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

    [],

    [
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
  ),

  casual: createStyle(
    "Casual",

    [
      {
        name: "Casual Shirt 1",
        image: "fashion-assets/Casual-shirt1.png",
        link: "https://onelink.shein.com/55/63z632xcenve?ismg_ol=JHRzohTtVEc_01_KOC-C"
      },
      {
        name: "Casual Shirt 2",
        image: "fashion-assets/Casual-shirt2.png",
        link: "https://onelink.shein.com/55/63z67auq1hdv?ismg_ol=HeytqgPsXNu_01_KOC-C"
      },
      {
        name: "Casual Shirt 3",
        image: "fashion-assets/Casual-shirt3.png",
        link: "https://onelink.shein.com/55/647nklexahi9?ismg_ol=8Qcb5fLlDOt_01_KOC-C"
      },
      {
        name: "Casual Shirt 4",
        image: "fashion-assets/Casual-shirt4.png",
        link: "https://onelink.shein.com/55/647np18fexj6?ismg_ol=E9u5yM4En5a_01_KOC-C"
      },
      {
        name: "Casual Shirt 5",
        image: "fashion-assets/Casual-shirt5.png",
        link: "https://onelink.shein.com/55/647nuwcqjlzm?ismg_ol=6DjfZph1uA8_01_KOC-C"
      },
      {
        name: "Casual Shirt 6",
        image: "fashion-assets/Casual-shirt6.png",
        link: "https://onelink.shein.com/55/647o2apwo7ja?ismg_ol=FsargVONafy_01_KOC-C"
      },
      {
        name: "Casual Shirt 7",
        image: "fashion-assets/Casual-shirt7.png",
        link: "https://onelink.shein.com/55/647opbew22bi?ismg_ol=AvUgxSQiVqf_01_KOC-C"
      },
      {
        name: "Casual Shirt 8",
        image: "fashion-assets/Casual-shirt8.png",
        link: "https://onelink.shein.com/55/647oywparo0q?ismg_ol=ABcKWZjW6ec_01_KOC-C"
      }
    ],

    [
      {
        name: "Casual Shorts 1",
        image: "fashion-assets/Casual-shorts1.png",
        link: "https://onelink.shein.com/55/647p2ixc4h8w?ismg_ol=9zJg6FBwxqb_01_KOC-C"
      },
      {
        name: "Casual Shorts 2",
        image: "fashion-assets/Casual-shorts2.png",
        link: "https://onelink.shein.com/55/647p5rc5ttnk?ismg_ol=8fdAPA7lKZ6_01_KOC-C"
      },
      {
        name: "Casual Shorts 3",
        image: "fashion-assets/Casual-shorts3.png",
        link: "https://onelink.shein.com/55/647p8ttw3hoq?ismg_ol=C5FnlOJXK41_01_KOC-C"
      },
      {
        name: "Casual Shorts 4",
        image: "fashion-assets/Casual-shorts4.png",
        link: "https://onelink.shein.com/55/647pemz62pn6?ismg_ol=KC0QY25uo8e_01_KOC-C"
      },
      {
        name: "Casual Shorts 5",
        image: "fashion-assets/Casual-shorts5.png",
        link: "https://onelink.shein.com/55/647pj2so5r20?ismg_ol=GazdN22sXt2_01_KOC-C"
      },
      {
        name: "Casual Shorts 6",
        image: "fashion-assets/Casual-shorts6.png",
        link: "https://onelink.shein.com/55/647pwu1ffith?ismg_ol=FQfUjJDGXzO_01_KOC-C"
      },
      {
        name: "Casual Shorts 7",
        image: "fashion-assets/Casual-shorts7.png",
        link: "https://onelink.shein.com/55/647q2fakx4b3?ismg_ol=80PcJakQNsO_01_KOC-C"
      },
      {
        name: "Casual Shorts 8",
        image: "fashion-assets/Casual-shorts8.png",
        link: "https://onelink.shein.com/55/647q4u3xutzn?ismg_ol=IBpq4Cwm79j_01_KOC-C"
      },
      {
        name: "Casual Shorts 9",
        image: "fashion-assets/Casual-shorts9.png",
        link: "https://onelink.shein.com/55/647q7gtfbkm9?ismg_ol=LWcQ4MeS4yA_01_KOC-C"
      },
      {
        name: "Casual Shorts 10",
        image: "fashion-assets/Casual-shorts10.png",
        link: "https://onelink.shein.com/55/647qa5hxsuua?ismg_ol=EKrQ1k4R8mU_01_KOC-C"
      },
      {
        name: "Casual Shorts 11",
        image: "fashion-assets/Casual-shorts11.png",
        link: "https://onelink.shein.com/55/647qebgaf4vy?ismg_ol=2n4CGneoFJe_01_KOC-C"
      }
          
    ],
    

    [],

    []
  ),

  business: createStyle(
    "Business",

    [
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

    [
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

    [],

    []
  ),

  athletic: createStyle(
    "Athletic",
    [],
    [],
    [],
    []
  ),

    barbie: createStyle(
    "Barbie",

    [
      {
        name: "Barbie Top 1",
        image: "fashion-assets/Barbie-top1.png",
        link: "https://onelink.shein.com/55/63p6p9flwttv?ismg_ol=5DbZ209XL1O_01_KOC-C"
      },
      {
        name: "Barbie Top 2",
        image: "fashion-assets/Barbie-top2.png",
        link: "https://onelink.shein.com/55/63p6w80j7sqe?ismg_ol=E84BQYkTstn_01_KOC-C"
      },
      {
        name: "Barbie Top 3",
        image: "fashion-assets/Barbie-top3.png",
        link: "https://onelink.shein.com/55/63p6xjd9x44y?ismg_ol=8I01KznHu2b_01_KOC-C"
      },
      {
        name: "Barbie Top 4",
        image: "fashion-assets/Barbie-top4.png",
        link: "https://onelink.shein.com/55/63p6zgfcwfu4?ismg_ol=AlK0ujlBa62_01_KOC-C"
      },
      {
        name: "Barbie Top 5",
        image: "fashion-assets/Barbie-top5.png",
        link: "https://onelink.shein.com/55/63p72kw4c9q7?ismg_ol=LufRjwdXqYH_01_KOC-C"
      },
      {
        name: "Barbie Top 6",
        image: "fashion-assets/Barbie-top6.png",
        link: "https://onelink.shein.com/55/63p74jx8e8t6?ismg_ol=GiT6JhJKPj0_01_KOC-C"
      },
      {
        name: "Barbie Top 7",
        image: "fashion-assets/Barbie-top7.png",
        link: "https://onelink.shein.com/55/63p76554nu4r?ismg_ol=FuQSckMQntZ_01_KOC-C"
      },
      {
        name: "Barbie Top 8",
        image: "fashion-assets/Barbie-top8.png",
        link: "https://onelink.shein.com/55/63p78a3bz621?ismg_ol=4Imnov0CGYo_01_KOC-C"
      },
      {
        name: "Barbie Top 9",
        image: "fashion-assets/Barbie-top9.png",
        link: "https://onelink.shein.com/55/63p7amxnwc1x?ismg_ol=EZPadzg0KQD_01_KOC-C"
      },
      {
        name: "Barbie Top 10",
        image: "fashion-assets/Barbie-top10.png",
        link: "https://onelink.shein.com/55/63p7euv1igbc?ismg_ol=8lGeSKG8Nsn_01_KOC-C"
      },
      {
        name: "Barbie Top 11",
        image: "fashion-assets/Barbie-top11.png",
        link: "https://onelink.shein.com/55/63p7v6u923qm?ismg_ol=Es0ipyCJt5a_01_KOC-C"
      }
    ],

    [
      {
        name: "Barbie Bottom 1",
        image: "fashion-assets/Barbie-bottoms1.png",
        link: "https://onelink.shein.com/55/63sabvnqjzia?ismg_ol=BjWYWTPj4j2_01_KOC-C"
      },
      {
        name: "Barbie Bottom 2",
        image: "fashion-assets/Barbie-bottoms2.png",
        link: "https://onelink.shein.com/55/63saew6fsen1?ismg_ol=GFrEMPWdUmZ_01_KOC-C"
      },
      {
        name: "Barbie Bottom 3",
        image: "fashion-assets/Barbie-bottoms3.png",
        link: "https://onelink.shein.com/55/63sagv7js9vv?ismg_ol=5lTV0ipOFoz_01_KOC-C"
      },
      {
        name: "Barbie Bottom 4",
        image: "fashion-assets/Barbie-bottoms4.png",
        link: "https://onelink.shein.com/55/63sasz9dqia3?ismg_ol=5P92603DuYI_01_KOC-C"
      },
      {
        name: "Barbie Bottom 5",
        image: "fashion-assets/Barbie-bottoms5.png",
        link: "https://onelink.shein.com/55/63savi0sxqgw?ismg_ol=LVeoMHeAmBu_01_KOC-C"
      },
      {
        name: "Barbie Bottom 6",
        image: "fashion-assets/Barbie-bottoms6.png",
        link: "https://onelink.shein.com/55/63sax19o15xj?ismg_ol=5yG2VX619fg_01_KOC-C"
      },
      {
        name: "Barbie Bottom 7",
        image: "fashion-assets/Barbie-bottoms7.png",
        link: "https://onelink.shein.com/55/63say6pbebeh?ismg_ol=1BIh59M2MwA_01_KOC-C"
      },
      {
        name: "Barbie Bottom 8",
        image: "fashion-assets/Barbie-bottoms8.png",
        link: "https://onelink.shein.com/55/63saztw8rypu?ismg_ol=Ir9WtP0b3ax_01_KOC-C"
      },
      {
        name: "Barbie Bottom 9",
        image: "fashion-assets/Barbie-bottoms9.png",
        link: "https://onelink.shein.com/55/63sb43snk8rj?ismg_ol=B5w92EyU464_01_KOC-C"
      },
      {
        name: "Barbie Bottom 10",
        image: "fashion-assets/Barbie-bottoms10.png",
        link: "https://onelink.shein.com/55/63sb5sym3cis?ismg_ol=C0u4d1q0xgX_01_KOC-C"
      },
      {
        name: "Barbie Bottom 11",
        image: "fashion-assets/Barbie-bottoms11.png",
        link: "https://onelink.shein.com/55/63sb72cbpb7l?ismg_ol=I4sGE4l9w9M_01_KOC-C"
      }
    ],

    [],

    []
  ),

  punk: createStyle(
    "Punk",
    [],
    [],
    [],
    []
  ),

  gothic: createStyle(
    "Gothic",

    [
      {
        name: "Gothic Shirt 1",
        image: "fashion-assets/Gothic-shirt1.png",
        link: "https://onelink.shein.com/54/63hh4dijjyg1?ismg_ol=0skQFJ9Padm_01_KOC-C"
      },
      {
        name: "Gothic Shirt 2",
        image: "fashion-assets/Gothic-shirt2.png",
        link: "https://onelink.shein.com/54/63hh9owjhzdj?ismg_ol=GI9O6KAUGpB_01_KOC-C"
      },
      {
        name: "Gothic Shirt 3",
        image: "fashion-assets/Gothic-shirt3.png",
        link: "https://onelink.shein.com/54/63hhc5oxluu2?ismg_ol=GEjzb410nit_01_KOC-C"
      },
      {
        name: "Gothic Shirt 4",
        image: "fashion-assets/Gothic-shirt4.png",
        link: "https://onelink.shein.com/54/63hhe6p2rvuy?ismg_ol=5GfvK8dyHYH_01_KOC-C"
      },
      {
        name: "Gothic Shirt 5",
        image: "fashion-assets/Gothic-shirt5.png",
        link: "https://onelink.shein.com/54/63hhgpghz42u?ismg_ol=2MiI39qW9qC_01_KOC-C"
      },
      {
        name: "Gothic Shirt 6",
        image: "fashion-assets/Gothic-shirt6.png",
        link: "https://onelink.shein.com/54/63hhl1bxvg3m?ismg_ol=H0vS53u1ZAu_01_KOC-C"
      },
      {
        name: "Gothic Shirt 7",
        image: "fashion-assets/Gothic-shirt7.png",
        link: "https://onelink.shein.com/54/63hhro2oi33q?ismg_ol=AOolOV5cXcf_01_KOC-C"
      },
      {
        name: "Gothic Shirt 8",
        image: "fashion-assets/Gothic-shirt8.png",
        link: "https://onelink.shein.com/54/63hhw7u8un1a?ismg_ol=6381yq3EBwz_01_KOC-C"
      },
      {
        name: "Gothic Shirt 9",
        image: "fashion-assets/Gothic-shirt9.png",
        link: "https://onelink.shein.com/54/63hhzea1b0gm?ismg_ol=GRwUIOwZK1T_01_KOC-C"
      }
    ],

    [
      {
        name: "Gothic Pants 1",
        image: "fashion-assets/Gothic-pants1.png",
        link: "https://onelink.shein.com/54/63hfvnhbnvvh?ismg_ol=GYoIMmlbO2j_01_KOC-C"
      },
      {
        name: "Gothic Pants 2",
        image: "fashion-assets/Gothic-pants2.png",
        link: "https://onelink.shein.com/54/63hg28918ktv?ismg_ol=9pmZ9NgbkJH_01_KOC-C"
      },
      {
        name: "Gothic Pants 3",
        image: "fashion-assets/Gothic-pants3.png",
        link: "https://onelink.shein.com/54/63hg6vynt8oe?ismg_ol=4MRuaBPZjms_01_KOC-C"
      },
      {
        name: "Gothic Pants 4",
        image: "fashion-assets/Gothic-pants4.png",
        link: "https://onelink.shein.com/54/63hgmk9i0xlp?ismg_ol=4CUvIueBiDD_01_KOC-C"
      },
      {
        name: "Gothic Pants 5",
        image: "fashion-assets/Gothic-pants5.png",
        link: "https://onelink.shein.com/54/63hgcbapwkdw?ismg_ol=4jjXLOshe7f_01_KOC-C"
      },
      {
        name: "Gothic Pants 6",
        image: "fashion-assets/Gothic-pants6.png",
        link: "https://onelink.shein.com/54/63hgs5ingf9q?ismg_ol=Cc3SxQLeBmz_01_KOC-C"
      },
      {
        name: "Gothic Pants 7",
        image: "fashion-assets/Gothic-pants7.png",
        link: "https://onelink.shein.com/54/63hgvfwi7pt1?ismg_ol=DXNqSMOdpTw_01_KOC-C"
      },
      {
        name: "Gothic Pants 8",
        image: "fashion-assets/Gothic-pants8.png",
        link: "https://onelink.shein.com/54/63hgy2lzlnd8?ismg_ol=KSWuUTDoZ9M_01_KOC-C"
      },
      {
        name: "Gothic Pants 9",
        image: "fashion-assets/Gothic-pants9.png",
        link: "https://onelink.shein.com/54/63hh0z6mnd52?ismg_ol=B99wHVHFNVz_01_KOC-C"
      }
    ],

    [],

    [
      {
        name: "Gothic Accessory 1",
        image: "fashion-assets/Gothic-accesories.png"
      },
      {
        name: "Gothic Accessory 2",
        image: "fashion-assets/Gothic-accesories2.png"
      },
      {
        name: "Gothic Accessory 3",
        image: "fashion-assets/Gothic-accesories3.png"
      },
      {
        name: "Gothic Accessory 5",
        image: "fashion-assets/Gothic-assecories5.png"
      },
      {
        name: "Gothic Accessory 6",
        image: "fashion-assets/Gothic-assecories6.png"
      },
      {
        name: "Gothic Accessory 7",
        image: "fashion-assets/Gothic-assecories7.png"
      },
      {
        name: "Gothic Accessory 8",
        image: "fashion-assets/Gothic-assecories8.png"
      },
      {
        name: "Gothic Accessory 9",
        image: "fashion-assets/Gothic-accesories9.png"
      }
    ]
  ),

  hippy: createStyle(
    "Hippy",
    [],
    [],
    [],
    []
  ),

  sexy: createStyle(
    "Sexy",

    [
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

    [
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

    [],

    []
  )
};

let selectedStyle = "bohemian";

const lastSelections = {};

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

const shopButtons = {
  top: document.getElementById("shop-top"),
  bottom: document.getElementById("shop-bottom")
};

function getRandomItem(style, type, items) {
  if (!items || items.length === 0) {
    return null;
  }

  if (items.length === 1) {
    return items[0];
  }

  const key = `${style}-${type}`;

  let index;

  do {
    index = Math.floor(Math.random() * items.length);
  } while (index === lastSelections[key]);

  lastSelections[key] = index;

  return items[index];
}

function buildRandomLook(style) {
  const base = fashionLooks[style];

  if (!base) {
    return null;
  }

  return {
    label: base.label,

    top:
      getRandomItem(
        style,
        "top",
        base.topOptions
      ) ?? base.top,

    bottom:
      getRandomItem(
        style,
        "bottom",
        base.bottomOptions
      ) ?? base.bottom,

    shoes:
      getRandomItem(
        style,
        "shoes",
        base.shoeOptions
      ) ?? base.shoes,

    accessory:
      getRandomItem(
        style,
        "accessory",
        base.accessoryOptions
      ) ?? base.accessory
  };
}

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
  image.alt = item.name || type;
  image.hidden = false;
}

function setText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
}

function updateText(look) {
  setText(
    "selected-style",
    `${look.label} outfit selected.`
  );

  setText(
    "outfit-top",
    look.top?.name ?? "Coming soon"
  );

  setText(
    "outfit-bottom",
    look.bottom?.name ?? "Coming soon"
  );

  setText(
    "outfit-shoes",
    look.shoes?.name ?? "Coming soon"
  );

  setText(
    "outfit-accessory",
    look.accessory?.name ?? "Coming soon"
  );
}

function updateShopButton(button, item) {
  if (!button) {
    return;
  }

  if (item?.link) {
    button.href = item.link;
    button.hidden = false;
  } else {
    button.removeAttribute("href");
    button.hidden = true;
  }
}

function updateShopButtons(look) {
  updateShopButton(
    shopButtons.top,
    look.top
  );

  updateShopButton(
    shopButtons.bottom,
    look.bottom
  );
}

function showLook(style) {
  const look = buildRandomLook(style);

  if (!look) {
    return;
  }

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

  updateText(look);

  updateShopButtons(look);
}

styleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const style = button.dataset.style;

    if (!style || !fashionLooks[style]) {
      return;
    }

    selectedStyle = style;

    styleButtons.forEach((item) => {
      item.classList.remove("selected");
    });

    button.classList.add("selected");
  });
});

generateButton?.addEventListener(
  "click",
  () => {
    showLook(selectedStyle);
  }
);

document.addEventListener(
  "DOMContentLoaded",
  () => {
    document
      .querySelector(
        `.style-buttons button[data-style="${selectedStyle}"]`
      )
      ?.classList.add("selected");

    showLook(selectedStyle);
  }
);
