export type PageKind = "Service" | "Urgent" | "Local";

export type SeoPage = {
  id: number;
  title: string;
  slug: string;
  keyword: string;
  area: string;
  kind: PageKind;
};

type PageRow = [number, string, string, string, string];

const rows: PageRow[] = [
  [1, "Commercial Junk Removal Canada", "commercial-junk-removal", "commercial junk removal", "Canada"],
  [2, "Commercial Garbage Removal", "commercial-garbage-removal", "commercial garbage removal", "Canada"],
  [3, "Office Junk Removal", "office-junk-removal", "office junk removal", "Canada"],
  [4, "Office Cleanout Services", "office-cleanout", "office cleanout", "Canada"],
  [5, "Commercial Junk Removal Near Me", "commercial-junk-removal-near-me", "commercial junk removal near me", "Canada"],
  [6, "Commercial Waste Disposal", "commercial-waste-disposal", "commercial waste disposal", "Canada"],
  [7, "Commercial Waste Removal", "commercial-waste-removal", "commercial waste removal", "Canada"],
  [8, "Commercial Waste Management", "commercial-waste-management", "commercial waste management", "Canada"],
  [9, "Commercial Rubbish Removal", "commercial-rubbish-removal", "commercial rubbish removal", "Canada"],
  [10, "Commercial Hazardous Waste Disposal", "commercial-hazardous-waste-disposal", "commercial hazardous waste disposal", "Canada"],
  [11, "Construction Debris Removal", "construction-debris-removal", "construction debris removal", "Canada"],
  [12, "Construction Junk Removal", "construction-junk-removal", "construction junk removal", "Canada"],
  [13, "Construction Waste Removal", "construction-waste-removal", "construction waste removal", "Canada"],
  [14, "Post Construction Cleanup", "post-construction-cleanup", "post construction cleanup", "Canada"],
  [15, "Renovation Debris Removal", "renovation-debris-removal", "renovation debris removal", "Canada"],
  [16, "Same Day Commercial Junk Removal", "same-day-commercial-junk-removal", "same day junk removal", "Canada"],
  [17, "Emergency Junk Removal", "emergency-junk-removal", "emergency junk removal", "Canada"],
  [18, "Commercial Dumpster Rental", "commercial-dumpster-rental", "commercial dumpster rental", "Canada"],
  [19, "Roll Off Dumpster Rental", "roll-off-dumpster-rental", "roll off dumpster rental", "Canada"],
  [20, "Construction Dumpster Rental", "construction-dumpster-rental", "construction dumpster rental", "Canada"],
  [21, "Roll Off Dumpster Rental Near Me", "roll-off-dumpster-rental-near-me", "roll off dumpster rental near me", "Canada"],
  [22, "Scrap Metal Removal", "scrap-metal-removal", "scrap metal removal", "Canada"],
  [23, "Scrap Metal Pickup Near Me", "scrap-metal-pickup-near-me", "scrap metal pickup near me", "Canada"],
  [24, "Scrap Metal Pickup", "scrap-metal-pickup", "scrap metal pickup", "Canada"],
  [25, "Free Scrap Metal Pickup", "free-scrap-metal-pickup", "free scrap metal pickup", "Canada"],
  [26, "Office Furniture Removal", "office-furniture-removal", "office furniture removal", "Canada"],
  [27, "Desk and Workstation Removal", "desk-removal", "desk removal", "Canada"],
  [28, "Printer and Office Electronics Disposal", "printer-disposal", "printer disposal", "Canada"],
  [29, "Pallet Recycling", "pallet-recycling", "pallet recycling", "Canada"],
  [30, "Wood Pallet Recycling", "wood-pallet-recycling", "wood pallet recycling", "Canada"],
  [31, "Warehouse and Industrial Cleanout", "warehouse-cleanout", "warehouse cleanout", "Canada"],
  [32, "Property Management and Tenant Cleanout", "property-management-cleanout", "foreclosure cleanup", "Canada"],
  [33, "Retail Store Cleanout", "retail-store-cleanout", "retail store junk removal", "Canada"],
  [34, "Demolition Debris Removal", "demolition-debris-removal", "demolition debris removal", "Canada"],
  [35, "Commercial Junk Removal Vancouver, BC", "commercial-junk-removal-vancouver", "commercial junk removal vancouver", "Vancouver, BC"],
  [36, "Same Day Junk Removal Vancouver, BC", "same-day-junk-removal-vancouver", "same day junk removal vancouver", "Vancouver, BC"],
  [37, "Commercial Junk Removal Abbotsford, BC", "commercial-junk-removal-abbotsford", "commercial junk removal abbotsford", "Abbotsford, BC"],
  [38, "Commercial Waste Disposal Nanaimo, BC", "commercial-waste-disposal-nanaimo", "commercial waste disposal nanaimo", "Nanaimo, BC"],
  [39, "Commercial Waste Disposal Victoria, BC", "commercial-waste-disposal-victoria", "commercial waste disposal victoria", "Victoria, BC"],
  [40, "Commercial Waste Disposal Delta, BC", "commercial-waste-disposal-delta", "commercial waste disposal delta", "Delta, BC"],
  [41, "Commercial Junk Removal Chilliwack, BC", "commercial-junk-removal-chilliwack", "commercial junk removal chilliwack bc", "Chilliwack, BC"],
  [42, "Office Cleanout — Tri-Cities and North Shore, BC", "office-cleanout-tri-cities-north-shore", "office cleanout coquitlam", "Tri-Cities and North Shore, BC"],
  [43, "Office Cleanout — South Fraser Valley, BC", "office-cleanout-south-fraser-valley", "office cleanout surrey", "South Fraser Valley, BC"],
  [44, "Commercial Junk Removal Toronto, ON", "commercial-junk-removal-toronto", "commercial junk removal toronto", "Toronto, ON"],
  [45, "Construction Waste Removal Toronto, ON", "construction-waste-removal-toronto", "construction waste removal toronto", "Toronto, ON"],
  [46, "Commercial Dumpster Rental Toronto, ON", "commercial-dumpster-rental-toronto", "commercial dumpster rental toronto", "Toronto, North York and Etobicoke, ON"],
  [47, "Scrap Metal Removal Toronto, ON", "scrap-metal-removal-toronto", "scrap metal removal toronto", "Toronto, ON"],
  [48, "Scrap Metal Pickup Hamilton, ON", "scrap-metal-pickup-hamilton", "free scrap metal pickup hamilton", "Hamilton, ON"],
  [49, "Roll Off Dumpster Rental Hamilton, ON", "roll-off-dumpster-rental-hamilton", "40 yard roll off dumpster rental hamilton", "Hamilton, ON"],
  [50, "Commercial Junk Removal Durham Region, ON", "commercial-junk-removal-durham-region", "commercial junk removal ajax", "Ajax, Whitby and Pickering, ON"],
  [51, "Commercial Dumpster Rental Mississauga, ON", "commercial-dumpster-rental-mississauga", "commercial dumpster rental mississauga", "Mississauga, ON"],
  [52, "Scrap Metal Pickup Mississauga, ON", "scrap-metal-pickup-mississauga", "scrap metal pickup mississauga", "Mississauga, ON"],
  [53, "Commercial Dumpster Rental — North GTA, ON", "commercial-dumpster-rental-north-gta", "commercial dumpster rental markham", "Markham, Richmond Hill, Vaughan, Aurora and Thornhill, ON"],
  [54, "Commercial Dumpster Rental — West GTA, ON", "commercial-dumpster-rental-west-gta", "commercial dumpster rental brampton", "Brampton, Caledon and Bolton, ON"],
  [55, "Commercial Waste Disposal London, ON", "commercial-waste-disposal-london-on", "commercial waste disposal london", "London, ON"],
  [56, "Free Scrap Metal Pickup Barrie, ON", "free-scrap-metal-pickup-barrie", "free scrap metal pickup barrie", "Barrie, ON"],
  [57, "Same Day Junk Removal Waterloo Region, ON", "same-day-junk-removal-waterloo-region", "same day junk removal kitchener", "Kitchener, Waterloo and Cambridge, ON"],
  [58, "Commercial Hazardous Waste Disposal Ottawa, ON", "commercial-hazardous-waste-disposal-ottawa", "commercial hazardous waste disposal ottawa", "Ottawa, ON"],
  [59, "Commercial Dumpster Rental Ottawa and Suburbs, ON", "commercial-dumpster-rental-ottawa", "commercial dumpster rental ottawa", "Ottawa, Kanata, Nepean, Orleans and Barrhaven, ON"],
  [60, "Commercial Hazardous Waste Disposal Calgary, AB", "commercial-hazardous-waste-disposal-calgary", "commercial hazardous waste disposal calgary", "Calgary, AB"],
  [61, "Roll Off Dumpster Rental Calgary, AB", "roll-off-dumpster-rental-calgary", "roll-off dumpster rental calgary", "Calgary, AB"],
  [62, "Construction Debris Removal Edmonton, AB", "construction-debris-removal-edmonton", "construction debris removal edmonton", "Edmonton, AB"],
  [63, "Commercial Junk Removal Edmonton, AB", "commercial-junk-removal-edmonton", "commercial junk removal edmonton", "Edmonton, AB"],
  [64, "Commercial Junk Removal and Dumpster Rental Winnipeg, MB", "commercial-dumpster-rental-winnipeg", "construction waste dumpster rental winnipeg", "Winnipeg and Rural Manitoba, MB"],
];

export const PAGES: SeoPage[] = rows.map(([id, title, slug, keyword, area]) => ({
  id,
  title,
  slug: `/${slug}`,
  keyword,
  area,
  kind: id > 34 ? "Local" : id === 16 || id === 17 ? "Urgent" : "Service",
}));

export const SITE_NAME = "BizJunkPro";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://bizjunkpro.com"
).replace(/\/+$/, "");
export const PHONE_DISPLAY = "1-888-423-0677";
export const PHONE_E164 = "+18884230677";

export const NATIONAL_PAGES = PAGES.filter((page) => page.kind !== "Local");
export const LOCAL_PAGES = PAGES.filter((page) => page.kind === "Local");
export const URGENT_PAGES = PAGES.filter((page) => page.kind === "Urgent");

export function pageBySlug(slug: string) {
  return PAGES.find((page) => page.slug === `/${slug.replace(/^\/|\/$/g, "")}`);
}

export function serviceGroup(page: SeoPage) {
  const slug = page.slug;
  if (slug.includes("dumpster")) return "Dumpster Rental";
  if (slug.includes("scrap") || slug.includes("pallet") || slug.includes("printer")) return "Recycling & Recovery";
  if (slug.includes("construction") || slug.includes("renovation") || slug.includes("demolition") || slug.includes("post-construction")) return "Construction Debris";
  if (slug.includes("hazardous")) return "Regulated Waste";
  if (slug.includes("office") || slug.includes("desk") || slug.includes("warehouse") || slug.includes("retail") || slug.includes("property-management")) return "Commercial Cleanouts";
  return "Junk & Waste Removal";
}

export const FEATURED_PAGES = [
  "/commercial-junk-removal",
  "/office-cleanout",
  "/construction-debris-removal",
  "/commercial-dumpster-rental",
  "/scrap-metal-removal",
  "/warehouse-cleanout",
].map((slug) => PAGES.find((page) => page.slug === slug) as SeoPage);
