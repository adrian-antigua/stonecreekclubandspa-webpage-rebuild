/**
 * Kids & family facts — copied from reference/content.md (site /kids-programs, /pno,
 * /birthday-parties, /youth-fitness + Member Guide PDF).
 */

export const childcareDirector = {
  name: "April Aucoin",
  title: "Childcare Director",
  email: "AprilA@StoneCreekClubandSpa.com",
  phone: { display: "985.801.7132", tel: "+19858017132" },
};

export const pebbleCreekReservations = { display: "985.801.7130", tel: "+19858017130" };

export const pebbleCreekFeatures = [
  "Shaded playground with misting fans",
  "iWall interactive fitness-gaming system",
  "Arts & crafts",
  "Movie area",
  "Dedicated infant & pre-tot area",
];

export const pebbleCreekFees = {
  guest: [
    { label: "Up to 24 minutes", value: "$10" },
    { label: "25–59 minutes (per child)", value: "$15" },
    { label: "1 hour (per child)", value: "$18" },
  ],
  extended: [
    { label: "10–29 minutes", value: "$7" },
    { label: "30–59 minutes", value: "$10" },
    { label: "60 minutes", value: "$14" },
  ],
};

export const parentsNightOut = {
  time: "6:00 – 9:00 PM",
  price: "$35 first child · $25 each additional child",
  dates: [
    { date: "Oct 23", name: "Dino-Mite Night!", detail: "Bounce house, fossil digging, macaroni skeletons and a dino egg hunt" },
    { date: "Nov 20", name: "Friendsgiving", detail: undefined },
  ],
};

export const birthdayIncludes = [
  "2 party attendants",
  "3 large pizzas",
  "2 pitchers of drink",
  "Balloons, napkins, plates & cups",
  "90 minutes of playtime + 30 minutes for food and cake",
];

export const birthdayPackages = [
  { name: "Pebble Creek Party", ages: "Ages 2–5", when: "Friday, Saturday & Sunday evenings", price: "$475", extra: "$15" },
  {
    name: "Creekside Pool Party",
    ages: "Ages 5+",
    when: "Saturday & Sunday evenings, early April – late September",
    note: "Adds 2 lifeguards",
    price: "$550",
    extra: "$17",
  },
  { name: "Go Green", ages: undefined, when: "Friday, Saturday & Sunday evenings", note: "On the event lawn — bounce house rental and lawn games", price: "$475", extra: "$15" },
  { name: "Team Parties", ages: undefined, when: "Friday, Saturday & Sunday evenings", price: "$475", extra: "$15" },
];

export const youthAccess = [
  {
    ages: "14–17",
    body: "May enter the club unescorted and use all facilities, except the cardio deck, strength floor and basketball court during adult-only hours. Group fitness and balcony fitness any time.",
  },
  {
    ages: "11–13",
    body: "Checked in and supervised by an adult. No group fitness. Strength and cardio floors only during Family Workout Times, after completing YEP (Youth Exercise Program) certification.",
  },
  {
    ages: "10 & under",
    body: "Checked in and supervised. Tennis, pickleball, the café and the pools with direct supervision — never the strength floor, cardio deck or group fitness.",
  },
];

export const familyWorkoutTimes = "Thursday 7 PM–close · Friday 2 PM–close · Saturday & Sunday 1 PM–close";

export const swimLessonsUrl = "https://teamsafewater.com/events/stone-creek-swim-lessons";
