/**
 * Shared site facts. Every value is copied from reference/content.md —
 * add nothing here that isn't there. Missing facts stay "[TBD]".
 */

export const site = {
  name: "Stone Creek Club & Spa",
  tagline: "Your Everyday Getaway",
  positioning: "The Northshore Sports Resort",
  address: {
    street: "1201 Ochsner Blvd",
    city: "Covington",
    state: "LA",
    zip: "70433",
  },
  email: "info@stonecreekclubandspa.com",
  phones: {
    main: { label: "Main", display: "985.801.7100", tel: "+19858017100" },
    membership: { label: "Membership", display: "985.801.7117", tel: "+19858017117" },
    childcare: { label: "Childcare", display: "985.801.7132", tel: "+19858017132" },
    spa: { label: "The Spa", display: "985.801.7120", tel: "+19858017120" },
    cafe: { label: "Café to-go", display: "985.801.7135", tel: "+19858017135" },
  },
  memberLoginUrl: "https://stonecreek.clubautomation.com/",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.4434628295303!2d-90.1424528!3d30.451874999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86275cba57bc2def%3A0xa9b8a06b62f4b785!2sStone%20Creek%20Club%20and%20Spa!5e0!3m2!1sen!2sus!4v1735686951690!5m2!1sen!2sus",
  virtualTourVideoId: "ONwzG9uqJNU",
  opened: 2009,
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Membership", href: "/membership" },
  { label: "Fitness", href: "/fitness" },
  { label: "Tennis", href: "/tennis" },
  { label: "Spa", href: "/spa" },
  { label: "Kids", href: "/kids" },
  { label: "Café", href: "/cafe" },
];

export const secondaryNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const social = [
  { label: "Facebook", href: "https://www.facebook.com/stonecreekclubspa/" },
  { label: "Instagram", href: "https://www.instagram.com/stonecreekclubandspa/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/stone-creek-club-and-spa/" },
];

export const awardsLine =
  "Stone Creek Club & Spa is a proud member of The Health & Fitness Association & iSpa. Winner of “The Northshore’s Best” Health Club, Tennis Courts & Pilates (Sophisticated Woman Magazine). Winner of The Edge Readers’ Poll — Best Spa, Tennis Courts & Personal Trainer.";

export type HoursRow = { days: string; hours: string };
export type HoursSchedule = { id: string; venue: string; rows: HoursRow[]; condensed: string };

export const hours: HoursSchedule[] = [
  {
    id: "club",
    venue: "The Club",
    rows: [
      { days: "Monday – Thursday", hours: "4:45 AM – 9:00 PM" },
      { days: "Friday", hours: "4:45 AM – 8:00 PM" },
      { days: "Saturday", hours: "7:00 AM – 6:00 PM" },
      { days: "Sunday", hours: "8:00 AM – 6:00 PM" },
    ],
    condensed: "Mon–Thu 4:45a–9p · Fri 4:45a–8p · Sat 7a–6p · Sun 8a–6p",
  },
  {
    id: "spa",
    venue: "The Spa",
    rows: [
      { days: "Monday & Tuesday", hours: "9:00 AM – 6:00 PM" },
      { days: "Wednesday & Thursday", hours: "9:00 AM – 7:00 PM" },
      { days: "Friday", hours: "9:00 AM – 5:00 PM" },
      { days: "Saturday", hours: "9:00 AM – 4:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
    condensed: "Mon–Tue 9a–6p · Wed–Thu 9a–7p · Fri 9a–5p · Sat 9a–4p · Sun closed",
  },
  {
    id: "pebble-creek",
    venue: "Pebble Creek",
    rows: [
      { days: "Monday – Thursday", hours: "8:00 AM – 8:00 PM" },
      { days: "Friday", hours: "8:00 AM – 6:00 PM" },
      { days: "Saturday", hours: "8:00 AM – 3:00 PM" },
      { days: "Sunday", hours: "9:00 AM – 2:00 PM" },
    ],
    condensed: "Mon–Thu 8a–8p · Fri 8a–6p · Sat 8a–3p · Sun 9a–2p",
  },
  {
    id: "cafe",
    venue: "The Café",
    rows: [
      { days: "Monday – Thursday", hours: "6:00 AM – 8:00 PM" },
      { days: "Friday", hours: "6:00 AM – 7:30 PM" },
      { days: "Saturday", hours: "Counter 7:00 AM – 5:00 PM · Kitchen 7:30 AM – 5:00 PM" },
      { days: "Sunday", hours: "Counter 8:00 AM – 5:00 PM · Kitchen 8:30 AM – 5:00 PM" },
    ],
    condensed: "Mon–Thu 6a–8p · Fri 6a–7:30p · Sat 7a–5p · Sun 8a–5p",
  },
];

export type Stat = { value: string; label: string; detail: string; labelFirst?: boolean };

export const stats: Stat[] = [
  {
    value: "19",
    label: "Courts",
    detail: "14 tennis courts (9 clay Hydro-Courts, 5 hard) + 4 pickleball + 1 lighted practice court",
  },
  {
    value: "25",
    label: "Meters",
    detail: "6-lane heated saltwater lap pool, plus a resort-style pool with zero-entry beach and spray features",
  },
  {
    value: "75+",
    label: "Classes",
    detail: "Complimentary group fitness every week across 4 studios",
  },
  {
    value: "2009",
    label: "Since",
    labelFirst: true,
    detail: "Privately owned, in Covington on the Northshore",
  },
];

export const testimonials = {
  carla: {
    quote:
      "I can't call it a gym, because that would be an understatement… From the moment you walk in, you know you're somewhere special.",
    attribution: "Carla W., via Yelp",
  },
  spaReviews: [
    {
      quote:
        "The Spa at Stone Creek is wonderful. I had one of the best massages I've ever had.",
      attribution: "Bridgette O., Google Review",
    },
    {
      quote:
        "I had a great experience at Stone Creek Spa. The atmosphere is very relaxing, and the staff is very nice and professional.",
      attribution: "Cindy S., Google Review",
    },
  ],
};

/** Interest options from the live "Request More Information" form. */
export const visitInterests = ["Tennis & Pickleball", "Childcare"];

/** Options from the live form's "How'd You Hear About Us?" field. */
export const referralSources = ["Facebook", "Instagram", "Direct Mail", "Friend or Family", "Google"];

export type Amenity = {
  label: string;
  title: string;
  image: { src: string; alt: string };
  href?: string;
};

/** Amenity rail. Titles are facts from content.md; labels are UI categories. */
export const amenities: Amenity[] = [
  { label: "Tennis & Pickleball", title: "19 Lit Courts", href: "/tennis", image: { src: "/images/tennis-hard-courts-aerial.jpg", alt: "Blue and green hard courts lined with Stone Creek windscreens and tall pines" } },
  { label: "Aquatics", title: "25-Meter Saltwater Lap Pool", image: { src: "/images/lap-pool-swimmer.jpg", alt: "A swimmer doing laps in the six-lane saltwater lap pool" } },
  { label: "Aquatics", title: "Resort Style Pool", href: "/kids", image: { src: "/images/resort-pool-splash-zone.jpg", alt: "Resort pool splash zone with spray features under blue umbrellas and tall pines" } },
  { label: "Fitness", title: "75+ Weekly Classes", href: "/fitness", image: { src: "/images/group-fitness-studio-class.jpg", alt: "A group fitness class lifting weighted balls overhead in a sunlit studio" } },
  { label: "Fitness", title: "Pilates Reformer Studio", href: "/fitness", image: { src: "/images/pilates-reformer-studio.jpg", alt: "Three women working out on Pilates reformers by tall windows" } },
  { label: "Wellness", title: "The Spa at Stone Creek", href: "/spa", image: { src: "/images/spa-relaxation-lounge.jpg", alt: "Guests in robes resting on loungers in the spa relaxation lounge" } },
  { label: "Recovery", title: "Adult Locker Rooms", image: { src: "/images/womens-locker-room-vanity.jpg", alt: "Women's locker room vanity with mirrors and upholstered stools" } },
  { label: "Family", title: "Pebble Creek Childcare", href: "/kids", image: { src: "/images/pebble-creek-movie-area.jpg", alt: "Colorful kid-sized seating in the Pebble Creek movie area" } },
  { label: "Dining", title: "The Café at Stone Creek", href: "/cafe", image: { src: "/images/cafe-dining-room.jpg", alt: "The café dining room with orange chairs and pendant lights" } },
];

export type Membership = { name: string; rate: string; covers: string; enrollment: string };

/** Rates from /membership-rates (plus tax). */
export const memberships: Membership[] = [
  {
    name: "Individual",
    rate: "$165",
    covers: "One adult 18 or older, with full access to all facilities, programs, and services of the club.",
    enrollment: "$600",
  },
  {
    name: "Couple",
    rate: "$272",
    covers: "One adult 18 or older and another individual from the same household (adult or child).",
    enrollment: "$800",
  },
  {
    name: "Family",
    rate: "$339",
    covers:
      "Up to two adults over 18 in the same household, and all dependents under 21 (under 24 if a full-time student).",
    enrollment: "$1,150",
  },
];

export const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Stone+Creek+Club+and+Spa%2C+1201+Ochsner+Blvd%2C+Covington%2C+LA+70433";
