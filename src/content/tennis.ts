/**
 * Tennis & pickleball facts — copied from reference/content.md (site /tennis,
 * /adult-tennis, /jr-tennis, /pickleball, /meet-our-pros + Member Guide PDF).
 */
import type { Stat } from "./site";

export const courtStats: Stat[] = [
  { value: "9", label: "Clay Hydro-Courts", detail: "Beautiful clay courts" },
  { value: "5", label: "Hard Courts", detail: "World-class hard-surface competitive courts" },
  {
    value: "4",
    label: "Pickleball Courts",
    detail: "Plus a lighted practice court with hitting wall that also serves as a pickleball court",
  },
  { value: "12,000", label: "Watts per Court", detail: "On 30-ft light poles — all 19 courts are brilliantly lit" },
];

export const juniorPrograms = [
  {
    name: "Elite Tournament Program",
    description:
      "For Junior players pursuing a USTA state, sectional, national or college ranking. It includes stroke production, physical & educational development, strategy & tactics and match play. Players choose how often they attend.",
  },
  {
    name: "Select Junior",
    description:
      "The Junior Intermediate Program is for mid-level juniors, typically with 1–3 years of playing experience. Its focus is on stroke production & point play. Players choose how often they attend.",
  },
  {
    name: "Beginner & Advanced Beginner (Ages 4–12)",
    description:
      "The Quickstart Program is designed to teach tennis to the youngest players and to begin skill development. It includes instruction on physical development, stroke introduction and gameplay situations.",
  },
];

export const pickleballOpenPlay = [
  { day: "Mondays", time: "6:30 – 8:30 PM" },
  { day: "Tuesdays", time: "8:00 – 11:00 AM" },
  { day: "Fridays", time: "8:00 – 11:00 AM" },
];

export type Pro = { name: string; title: string; email: string; photo: string; bio: string };

export const pros: Pro[] = [
  {
    name: "Brett Schwartz",
    title: "Director of Tennis",
    email: "BrettS@stonecreekclubandspa.com",
    photo: "/images/staff/brett-schwartz.jpg",
    bio: "Current USTA Southern Delegate and former USTA Southern President and CEO. Brett coached at LSU, Tulane and UL Lafayette, is a USPTA Master Professional, has coached 22 players who went on to play college tennis, and was inducted into the Louisiana Tennis Hall of Fame.",
  },
  {
    name: "Patrick Lewis",
    title: "Tennis Professional",
    email: "PatrickL@stonecreekclubandspa.com",
    photo: "/images/staff/patrick-lewis.jpg",
    bio: "With Stone Creek for 10 years, Patrick played Division and Club Tennis in Germany and competed on the satellite tour. He works with players of all skill levels, from beginners to advanced, and coaches juniors at all levels.",
  },
  {
    name: "Nadia Hitzman",
    title: "Tennis Professional",
    email: "NadiaH@stonecreekclubandspa.com",
    photo: "/images/staff/nadia-hitzman.jpg",
    bio: "Nadia trained at the John Newcombe Tennis Academy and competed at Southeastern Louisiana University before coaching at Avila Golf and Country Club in Tampa. Now back home, she teaches beginners and experienced players alike.",
  },
  {
    name: "Mark Dominguez",
    title: "Tennis Professional",
    email: "MarkD@stonecreekclubandspa.com",
    photo: "/images/staff/mark-dominguez.jpg",
    bio: "A USPTA-certified professional since 1998 with more than 25 years of teaching and leadership experience. Mark played No. 1 singles at the University of New Orleans on scholarship and spent 26 years as a Director of Tennis.",
  },
];

/** "2026 Adult Tennis Schedule" from /adult-tennis, plus the upcoming pickleball event from /pickleball. */
export const tennisEvents2026 = [
  { date: "Jan 31 – Feb 1", name: "Tennis Club Championships" },
  { date: "Feb 15", name: "Mixed Doubles Tennis Challenge Ladder Starts" },
  { date: "Mar 7", name: "Hogwatch Pickle & Pork Tournament" },
  { date: "Apr 17 – 19", name: "The Mauti" },
  { date: "May 8", name: "Margarita Mixer — Tennis & Pickleball" },
  { date: "Jun 11 – 12", name: "Member/Guest Pickleball Tournament" },
  { date: "Jul 17 – 19", name: "USTA Adult Summer Grand Slam" },
  { date: "Aug 10 – 13", name: "Ladies Tennis Bootcamp" },
  { date: "Aug 14", name: "Back to School Tennis Mixer" },
  { date: "Oct 9", name: "Fall Tennis Mixer" },
  { date: "Oct 22", name: "Pickled Pink Pickleball Tournament" },
  { date: "Nov 6", name: "Friendsgiving Tennis Mixer" },
  { date: "Nov 15", name: "Singles Tennis Challenge Ladder Starts" },
  { date: "Dec 5", name: "Jingle Bell Classic Tennis Tournament" },
];

export const courtAwards = [
  { title: "Voted Best Tennis Courts", source: "Edge of the Lake Magazine" },
  { title: "Voted Best Tennis Courts", source: "Sophisticated Woman Magazine" },
];

export const courtReservationUrl = "https://stonecreek.clubautomation.com/tennis";
export const usaYouthProgressionUrl = "https://www.usta.com/en/home/play/youth-tennis.html";
