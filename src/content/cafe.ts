/**
 * The Café at Stone Creek — copied from reference/content.md (/cafe-catering, /menu,
 * /catering, /rentals, Café Menu 2025 PDF, Catering Menu PDFs).
 */

export type MenuItem = { name: string; price: string; note?: string };
export type MenuSection = { title: string; note?: string; items: MenuItem[] };

export const menuHighlights: MenuSection[] = [
  {
    title: "Breakfast",
    items: [
      { name: "2 Egg Breakfast", price: "$9" },
      { name: "Avocado Toast", note: "With two poached eggs", price: "$11" },
      { name: "Protein Pancakes", price: "$12" },
      { name: "Breakfast Sandwich", price: "$9" },
      { name: "Shrimp and Grits", note: "New Orleans–style BBQ sauce", price: "$16" },
      { name: "Egg & Cheese Omelet", price: "$12" },
      { name: "Parfait Bowl", price: "$9" },
    ],
  },
  {
    title: "Smalls & Shareables",
    items: [
      { name: "Hummus", price: "$11" },
      { name: "Southwest Quesadilla", price: "$11" },
      { name: "Smoked Salmon Dip", price: "$14" },
      { name: "Roasted Cauliflower", price: "$13" },
    ],
  },
  {
    title: "House-Made Salads",
    note: "Add salmon $10 · fried chicken tenders $6 · grilled chicken $6",
    items: [
      { name: "Caesar", price: "$11" },
      { name: "Cobb", price: "$16" },
      { name: "Greek", price: "$14" },
      { name: "House", price: "$12" },
    ],
  },
  {
    title: "Burgers & Sandwiches",
    note: "Served with fries",
    items: [
      { name: "Angus Beef Burger (8 oz)", price: "$14" },
      { name: "Turkey Burger", price: "$14" },
      { name: "Grilled Chicken Sandwich", price: "$14" },
      { name: "Club", price: "$14" },
      { name: "Turkey Swiss Panini", price: "$13" },
      { name: "Gyro Panini", price: "$13" },
    ],
  },
  {
    title: "Wraps",
    items: [
      { name: "Chicken Caesar", price: "$13" },
      { name: "Pesto Chicken", price: "$13" },
      { name: "Turkey Swiss", price: "$13" },
    ],
  },
  {
    title: "The Perfect Plate",
    note: "Create a healthy meal with your choice of protein and two sides",
    items: [
      { name: "Salmon", price: "$19" },
      { name: "Turkey Patty", price: "$15" },
      { name: "Angus Beef Patty", price: "$15" },
      { name: "Grilled Chicken Breast", price: "$15" },
      { name: "Shrimp", price: "$16" },
    ],
  },
  {
    title: "Pebble Picks",
    note: "For kids, served with fries",
    items: [
      { name: "Jr. Cheese Quesadilla", price: "$7" },
      { name: "Jr. Chicken Quesadilla", price: "$10" },
      { name: "Grilled or Fried Chicken Tenders", price: "$9" },
      { name: "Cheese Pizza", price: "$8" },
      { name: "Jr. Burger", price: "$9" },
      { name: "Mini Corn Dogs", price: "$8" },
      { name: "Mac & Cheese", price: "$8" },
    ],
  },
];

export const smoothies = {
  eatFit: ["Banana Nut Blast", "Chocolate Thin Mint", "Strawberry Breeze", "Mocha Java Jolt", "Low Carb Berry Blast", "Green & Lean"],
  more: ["Peanut Butter Cup", "Body Builder", "Detox", "R To R (plant-based)"],
  kids: ["Chocolate & Vanilla Frosty (Eat Fit Approved)", "Cookie Monster"],
};

export const cateringHighlights = [
  { name: "Mrs. Brenda’s Seafood Gumbo", price: "$26 / quart", note: "A best seller" },
  { name: "Breakfast Wraps & Sandwiches", price: "$22 / $36" },
  { name: "Fresh Fruit Tray", price: "$30 / $55" },
  { name: "Club Bites", price: "$38 / $62" },
  { name: "Panini Platter", price: "$39 / $56" },
  { name: "Spinach Salad", price: "$40 / $75" },
  { name: "Spicy Shrimp Pasta", price: "$50 / $75" },
  { name: "Creole Potato Salad", price: "$12 / quart" },
  { name: "Assorted Cookies", price: "$20 / dozen" },
];

export const cateringContact = {
  name: "Diamonte’ Venson",
  title: "Food & Beverage Director",
  phone: { display: "985.801.7105", tel: "+19858017105" },
  email: "DiamonteV@Stonecreekclubandspa.com",
};

export const venues = [
  { name: "Event Lawn", detail: "Our biggest venue, for 50–500 guests — weddings, receptions, corporate parties and fundraisers." },
  { name: "Tower Bar", detail: "Outdoors, with big-screen TVs and views of the pools and tennis courts." },
  { name: "Conference Room", detail: "Seats 12 conference-style." },
  { name: "Focus Suite", detail: "Seats up to 5 — Zoom meetings, interviews and studying." },
];

export const rentalsContact = { name: "Claudia Guidry", email: "ClaudiaG@StoneCreekClubandSpa.com" };
