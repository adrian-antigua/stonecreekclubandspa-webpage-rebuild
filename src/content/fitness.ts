/**
 * Fitness facts — copied from reference/content.md (site /fitness, /group-fitness,
 * /fitness_pilates, /fst, /personal_training + PT, Pilates and FST brochure PDFs).
 */

export const floors = [
  {
    level: "First Floor",
    title: "Strength",
    items: ["Free weights", "Hammer Strength", "Matrix", "TechnoGym selectorized", "Cable systems", "Functional training space"],
  },
  {
    level: "Second Floor",
    title: "Cardio",
    items: ["Woodway", "FreeMotion", "Precor", "Matrix", "Jacob’s Ladder"],
  },
];

export const studios = ["Mind Body Studio", "Spin Studio", "Pilates Reformer Studio", "Cardio/Strength Studio"];

export const classFormats = [
  "Aqua Fitness",
  "Barre Burn",
  "Bells & Bands",
  "BodyCombat™",
  "BodyBalance™",
  "BodyPump™",
  "Boxing Remix",
  "Cardio Sculpt",
  "BUILT",
  "HIIT 45",
  "Interval Boot Camp",
  "Mindful Motion",
  "UPLIFT",
  "Peak Performance",
  "Pilates Mat",
  "Pilates Sculpt",
  "Shape & Sculpt",
  "Stages Cycling",
  "Step & Sculpt",
  "Strength & Stretch",
  "Strictly Strength",
  "Swim Fit",
  "The Barre Workout",
  "Total Body Burn",
];

export const heatedClasses = [
  "Warm BodyBalance",
  "Warm Body Bells & Bands",
  "Warm Flow Yoga",
  "Gentle Yoga",
  "Hot Flow Yoga",
  "Hot Pilates Sculpt",
  "Warm & Hot Total Body Fusion",
];

export type Rate = { label: string; member: string; nonMember?: string };

export const reformerClasses: Rate[] = [
  { label: "Intro to Reformer (private, 30 min)", member: "$30" },
  { label: "Classical Reformer (group)", member: "$30" },
  { label: "Fitcore (group)", member: "$25" },
  { label: "Athletic Fitcore (group)", member: "$25" },
  { label: "Circuit Reformer (group)", member: "$25" },
];

export const pilatesRates: Rate[] = [
  { label: "Private", member: "$68", nonMember: "$88" },
  { label: "Semi-private (each)", member: "$40", nonMember: "$52" },
  { label: "Group of 3–4 (each)", member: "$30", nonMember: "$38" },
  { label: "FITCORE (per class)", member: "$25", nonMember: "$32" },
];

export const fstRates: Rate[] = [
  { label: "30 min", member: "$68", nonMember: "$82" },
  { label: "60 min", member: "$112", nonMember: "$134" },
  { label: "90 min", member: "$154", nonMember: "$184" },
  { label: "30 min with cupping", member: "$78", nonMember: "$94" },
  { label: "60 min with cupping", member: "$142", nonMember: "$164" },
  { label: "90 min with cupping", member: "$184", nonMember: "$220" },
];

export const trainingRates = [
  { level: "Level 1", sixty: "$65", thirty: "$52" },
  { level: "Level 2", sixty: "$70", thirty: "$52" },
  { level: "Level 3", sixty: "$85+", thirty: "$57+" },
];

export const trainingPillars = ["Professional", "Innovative", "Results-Oriented", "Fun"];

export type Trainer = { name: string; credentials: string; focus: string };

export const trainers: Trainer[] = [
  { name: "Alex Ziegler", credentials: "Level 2 CPT · NASM-CPT, PES, CES · B.S. Biology", focus: "Strength & Conditioning, Functional Movement, Active Aging" },
  { name: "Catherine Lofton", credentials: "Level 2 CPT · MS, ATC, NASM-CPT, FMS-1 · Certified Athletic Trainer", focus: "Strength & Conditioning, Functional Movement, Pre/Post Partum Wellness, Active Aging" },
  { name: "Elise Stolzle", credentials: "CPT · NASM-CPT, Group Fitness Specialist · B.A. Journalism", focus: "Strength & Conditioning, Functional Movement, Metabolic Conditioning" },
  { name: "Jay LaFrance", credentials: "Level 2 CPT · NASM-CPT, Corrective Exercise Specialist, NASM Stretching & Flexibility Coach", focus: "Strength Training, Active Aging, Functional Movement" },
  { name: "Jonathan Hernandez", credentials: "Level 3 CPT · NASM-CES, FMS, ACSM-EP · Fascial Stretch Therapist Level 3", focus: "Mobility & Stretching, Strength & Conditioning, Functional Movement, Active Aging" },
  { name: "Mallory Masson", credentials: "Level 3 CPT · NASM-CES, FMS, ACSM-EP · B.S. Kinesiology · FST Level 3 · Rock Tape Specialist", focus: "Strength, Injury Prevention & Recovery, Functional Movement, Active Aging" },
  { name: "Orquavian “Q” Randolph", credentials: "Level 3 CPT · NASM-CPT, FMS", focus: "Strength & Conditioning, Functional Movement, Speed & Agility, Sports Performance" },
  { name: "Robyn Ferguson", credentials: "Level 2 CPT · NASM-CPT, FMS, FITCORE Certified · FST Level 2 · TRX", focus: "Strength, Mobility & Stretching, Active Aging" },
  { name: "Tristan Martin", credentials: "Level 3 CPT · NASM-CPT · B.S. Education", focus: "Functional Movement, Strength & Conditioning, Mobility, Endurance" },
  { name: "Tyler Green", credentials: "Level 1 CPT · NASM-CPT, FMS · FST Level 1 · Firefighter", focus: "Strength Training, Active Aging" },
];

export const fitnessDirector = { name: "Elise Stolzle", title: "Fitness Director", email: "EliseS@StoneCreekClubandSpa.com" };
export const pilatesCoordinator = { name: "Maureen", title: "Pilates Coordinator", email: "MaureenJ@StoneCreekClubandSpa.com" };

export const adultOnlyHours = "Monday–Friday 11:00 AM–1:00 PM · Monday–Thursday 5:30–7:00 PM";
