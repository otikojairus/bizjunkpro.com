import { LOCAL_PAGES, PAGES, SeoPage, serviceGroup } from "./pages";

const GROUP_CONTENT = {
  "Junk & Waste Removal": {
    summary: "Scheduled or on-demand removal for bulky commercial junk, mixed non-hazardous waste and operational clearouts.",
    materials: ["Furniture and fixtures", "Cardboard and packaging", "Shelving and displays", "General commercial junk"],
    equipment: "box trucks, lift-gate vehicles and bins sized to the load",
    destination: "reuse, recycling and approved disposal facilities",
  },
  "Commercial Cleanouts": {
    summary: "Coordinated clearouts for offices, retail units, warehouses and managed properties—with timelines built around access and turnover.",
    materials: ["Desks and workstations", "Racking and shelving", "Office electronics", "Tenant and storage contents"],
    equipment: "uniformed loading crews, carts and floor-protection equipment",
    destination: "donation partners, electronics recyclers and approved transfer stations",
  },
  "Construction Debris": {
    summary: "Jobsite debris pickup and final cleanout support that keeps active construction and renovation sites moving.",
    materials: ["Drywall and lumber", "Metal and fixtures", "Flooring and cabinetry", "Non-hazardous demolition debris"],
    equipment: "loading crews, roll-off containers and site-appropriate hauling equipment",
    destination: "construction material recovery and licensed disposal facilities",
  },
  "Dumpster Rental": {
    summary: "Commercial roll-off and construction dumpster service with clear delivery, pickup and placement coordination.",
    materials: ["Construction debris", "Commercial cleanout waste", "Packaging and pallets", "Renovation materials"],
    equipment: "roll-off containers matched to volume, weight and available space",
    destination: "material recovery facilities and licensed disposal sites",
  },
  "Recycling & Recovery": {
    summary: "Source-separated pickup for metal, pallets, electronics and reusable business assets.",
    materials: ["Ferrous and non-ferrous metal", "Wood pallets", "Printers and electronics", "Reusable office assets"],
    equipment: "scheduled pickup vehicles and material-specific handling equipment",
    destination: "specialized recyclers, reuse channels and commodity recovery facilities",
  },
  "Regulated Waste": {
    summary: "Commercial waste coordination for materials that require identification, segregation and appropriately licensed handling.",
    materials: ["Identified regulated materials", "Business chemicals", "Batteries and lamps", "Material-specific waste streams"],
    equipment: "approved containers and qualified transport partners selected for the waste stream",
    destination: "authorized treatment, recycling or disposal facilities",
  },
} as const;

export function detailsFor(page: SeoPage) {
  return GROUP_CONTENT[serviceGroup(page) as keyof typeof GROUP_CONTENT];
}

export function introFor(page: SeoPage) {
  const details = detailsFor(page);
  if (page.kind === "Local") {
    return `${page.title} for offices, property teams, retailers, warehouses and contractors. BizJunkPro coordinates access, loading, hauling and documented diversion across ${page.area}, with service windows designed to minimize disruption to staff, tenants and active jobsites.`;
  }
  if (page.kind === "Urgent") {
    return `When waste blocks a turnover, delivery, inspection or active work area, timing matters. BizJunkPro arranges responsive commercial pickup with a clear arrival window, an appropriately sized crew and a disposal plan matched to the material.`;
  }
  return `${details.summary} Tell us what needs to go, where it is located and when the site must be clear. We build the crew, equipment and hauling plan around your operation.`;
}

export function processFor(page: SeoPage) {
  const details = detailsFor(page);
  return [
    { title: "Send the scope", text: "Share photos, material types, estimated volume, access details and the date the space needs to be clear." },
    { title: "Confirm the plan", text: `We match the work to ${details.equipment} and provide a clear service window and scope.` },
    { title: "Clear the site", text: "The crew protects travel paths, loads efficiently and keeps your contact updated if the scope changes." },
    { title: "Route the load", text: `Materials are directed to ${details.destination}, with documentation available for managed accounts.` },
  ];
}

export function faqsFor(page: SeoPage) {
  const local = page.kind === "Local" ? ` in ${page.area}` : "";
  const regulated = serviceGroup(page) === "Regulated Waste";
  return [
    {
      q: `Can you quote commercial removal from photos${local}?`,
      a: "Often, yes. Clear photos, material types, approximate volume, loading distance, stairs or elevator access, parking and deadline are usually enough to prepare an initial scope. Large or regulated projects may require a site review.",
    },
    {
      q: "Do you work outside regular business hours?",
      a: "After-hours and tightly scheduled work can be arranged based on local crew availability. This is useful for occupied offices, retail locations, loading docks and properties with limited service access.",
    },
    {
      q: regulated ? "Can every hazardous material go in the same load?" : "What items can your crews remove?",
      a: regulated
        ? "No. Regulated materials must be identified and segregated before transport. Acceptance depends on the exact material, condition, quantity and local rules. Never place unidentified hazardous materials in a general waste load."
        : `Common projects include ${detailsFor(page).materials.join(", ").toLowerCase()}. The crew confirms restricted materials before service so the load is routed correctly.`,
    },
    {
      q: "Can you support multiple locations or recurring pickups?",
      a: "Yes. Property managers, contractors and multi-site operators can coordinate recurring or project-based service through one contact, with location notes and service records kept consistent.",
    },
  ];
}

export function relatedPages(page: SeoPage) {
  const group = serviceGroup(page);
  const sameGroup = PAGES.filter((item) => item.slug !== page.slug && serviceGroup(item) === group && item.kind !== "Local");
  if (page.kind === "Local") {
    return [...sameGroup.slice(0, 3), ...LOCAL_PAGES.filter((item) => item.slug !== page.slug).slice(page.id % 12, page.id % 12 + 3)];
  }
  const start = page.id % Math.max(LOCAL_PAGES.length - 2, 1);
  return [...sameGroup.slice(0, 4), ...LOCAL_PAGES.slice(start, start + 2)];
}

export function metaDescription(page: SeoPage) {
  const location = page.kind === "Local" ? page.area : "across Canada";
  const base = `${page.keyword.replace(/\b\w/g, (letter) => letter.toUpperCase())} ${location}. Commercial crews, clear scheduling and responsible material routing.`;
  return `${base} Call 1-888-423-0677.`.slice(0, 160);
}
