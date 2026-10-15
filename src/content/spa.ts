/**
 * The Spa at Stone Creek — copied from reference/content.md (site /spa + Spa Menu PDF "11.25").
 * Durations and descriptions appear only where the menu states them.
 */

export type SpaService = {
  name: string;
  /** One line from the menu, when it has one. */
  note?: string;
  /** Each option is a duration/price pair; duration is omitted when the menu doesn't state one. */
  options: { duration?: string; price: string }[];
};

export type SpaCategory = {
  id: string;
  title: string;
  intro?: string;
  services: SpaService[];
};

export const spaMenu: SpaCategory[] = [
  {
    id: "massages",
    title: "Massages",
    services: [
      { name: "Stone Creek Signature", options: [{ duration: "60 min", price: "$120" }, { duration: "90 min", price: "$165" }] },
      {
        name: "Deep Tissue",
        note: "Cupping, myofascial, sports and stretching techniques",
        options: [{ duration: "60 min", price: "$130" }, { duration: "90 min", price: "$175" }],
      },
      { name: "Warm Embrace Hot Stone", options: [{ duration: "60 min", price: "$135" }] },
      {
        name: "Delicate Balance Prenatal",
        note: "After the first trimester",
        options: [{ duration: "60 min", price: "$135" }, { duration: "90 min", price: "$180" }],
      },
      { name: "Bond in Bliss Couples", note: "With champagne", options: [{ duration: "60 min", price: "$260+" }] },
      { name: "Express Reset", note: "Feet, hands, or neck & shoulders", options: [{ duration: "45 min", price: "$100" }] },
    ],
  },
  {
    id: "facials",
    title: "Facials",
    intro: "Every facial includes a neck and shoulder massage.",
    services: [
      { name: "Stone Creek Signature", options: [{ price: "$105" }] },
      { name: "Oncology Friendly", options: [{ price: "$130" }] },
      { name: "Radiant Peel", note: "Stop retinol use 3 days prior", options: [{ price: "$130" }] },
      { name: "Diamond Dermabrasion", options: [{ price: "$130" }] },
      { name: "Dermaplaning", options: [{ price: "$135" }] },
      { name: "Face Lift", note: "Jelly mask and warm hand exfoliation", options: [{ duration: "75 min", price: "$135" }] },
      { name: "Osmosis Revitapen", note: "No-needle nano treatment", options: [{ price: "$195" }] },
      { name: "Hydroglow", note: "Hydro-dermabrasion with oxygen infusion", options: [{ price: "$235" }] },
    ],
  },
  {
    id: "facial-treatments",
    title: "Facial Treatments",
    services: [
      { name: "Dermaplaning", options: [{ duration: "30 min", price: "$85" }] },
      { name: "Diamond Dermabrasion", options: [{ duration: "30 min", price: "$80" }] },
      { name: "Brow Tinting", options: [{ duration: "30 min", price: "$34" }] },
      { name: "Lash Tinting", options: [{ duration: "30 min", price: "$40" }] },
      { name: "Lash Lifting", options: [{ duration: "30 min", price: "$60" }] },
    ],
  },
  {
    id: "body",
    title: "Body",
    services: [
      { name: "Ultimate Renewal Wrap", note: "Seaweed gel", options: [{ duration: "60 min", price: "$135" }] },
      { name: "Pure Hydration Ritual", note: "Featuring the Vichy shower", options: [{ price: "$145" }] },
    ],
  },
  {
    id: "nails",
    title: "Nails",
    services: [
      { name: "Northshore Manicure", options: [{ price: "$45" }] },
      { name: "Northshore Pedicure", options: [{ price: "$60" }] },
      { name: "Stone Creek Manicure", note: "Scrub, wrap and paraffin", options: [{ price: "$60" }] },
      { name: "Stone Creek Pedicure", note: "Mask, steamed towel and paraffin", options: [{ price: "$80" }] },
      { name: "Gel Manicure", options: [{ price: "$60" }] },
    ],
  },
  {
    id: "hair-removal",
    title: "Hair Removal",
    intro: "Face, arm and leg waxing are also offered — call The Spa for pricing.",
    services: [
      { name: "Brow Wax", options: [{ price: "$25" }] },
      { name: "Bikini Wax", options: [{ price: "$45" }] },
    ],
  },
];

export const spaPackages = [
  {
    name: "Signature Creekside Retreat",
    price: "$480",
    includes: ["Signature Massage", "Facial", "Manicure", "Pedicure"],
    image: {
      src: "/images/spa-guests-robes-champagne.jpg",
      alt: "Two guests in Stone Creek robes toasting with champagne in the spa",
    },
  },
  {
    name: "Creekside Renewal Ritual",
    price: "$470",
    includes: ["Facelift Facial", "Pure Hydration Ritual", "Stone Creek Pedicure"],
    image: {
      src: "/images/spa-whirlpool-robe.jpg",
      alt: "A smiling guest in a Spa at Stone Creek robe holding a smoothie beside the whirlpool",
    },
  },
];

export const spaAmenities = [
  {
    name: "Cold Plunge",
    detail: "In both the men’s and women’s adult locker rooms.",
    image: null,
    placeholder: "A guest stepping into the tiled cold plunge pool in the adult locker room",
  },
  {
    name: "Wet Sauna",
    detail: "Eucalyptus-infused.",
    image: null,
    placeholder: "Steam rising in the eucalyptus-infused wet sauna",
  },
  {
    name: "Whirlpool",
    detail: "Temperature-regulated.",
    image: {
      src: "/images/locker-room-whirlpool.jpg",
      alt: "Two members relaxing in the tiled whirlpool of the adult locker room",
    },
    placeholder: null,
  },
] as const;

/** Google reviews quoted on /spa (verbatim, including the site's ellipses). */
export const spaReviews = [
  {
    quote:
      "Today was my second massage at Stone Creek, Mrs Elaine was top tier, very kind friendly and welcoming… spa area very clean with relaxing music… Feeling relaxed, rejuvenated, and stress free.",
    attribution: "Emilie C., Google Review",
  },
  {
    quote:
      "I had a great experience at Stone Creek Spa. The atmosphere is very relaxing, and the staff is very nice and professional. My massage was so relaxing!",
    attribution: "Cindy S., Google Review",
  },
  {
    quote:
      "The Spa at Stone Creek is wonderful. I had one of the best massages I've ever had. Highly recommend booking a massage with Ryan…",
    attribution: "Bridgette O., Google Review",
  },
];

export const spaInstagram = { handle: "@thespaatstonecreek", href: "https://www.instagram.com/thespaatstonecreek/" };
