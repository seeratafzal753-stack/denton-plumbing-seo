export const siteConfig = {
  // Core Business Identity (Lead Generation & Homeowner Referral Platform)
  name: "Denton Plumbing Pros",
  legalName: "Denton Plumbing Pros Referral Network",
  domain: "https://dentonplumbingpros.com",
  tagline: "Connecting Denton County Homeowners with Local Plumbing Professionals",
  isLeadGen: true,
  
  // Primary Contact Points
  phone: "(940) 310-4499",
  phoneRaw: "+19403104499",
  email: "dispatch@dentonplumbingpros.com",

  // Service Area Details (Service-Area Platform)
  city: "Denton",
  state: "TX",
  stateFull: "Texas",
  county: "Denton County",
  addressLocality: "Denton",
  addressRegion: "TX",
  addressCountry: "US",
  priceRange: "$$",

  // Service Area Coverage - Denton Proper ZIPs
  dentonZipCodes: [
    "76201", // Downtown, TWU, Central
    "76205", // Southridge, Teasley
    "76207", // Rayzor Ranch, University West
    "76208", // Loop 288, Cooper Creek
    "76209", // Idiots Hill, North Denton
    "76210", // South Denton / Corinth border
  ],

  // Combined Denton-Area & Neighboring ZIPs
  zipCodes: [
    "76201", "76205", "76207", "76208", "76209", "76210", "76226", "76249"
  ],

  // Surrounding Service Communities
  serviceAreas: [
    { name: "Corinth", zip: "76210" },
    { name: "Argyle", zip: "76226" },
    { name: "Krum", zip: "76249" },
    { name: "Lake Dallas", zip: "75065" },
    { name: "Little Elm", zip: "75068" },
    { name: "Sanger", zip: "76266" },
    { name: "Aubrey", zip: "76227" },
    { name: "Highland Village", zip: "75077" },
  ],

  // Denton Neighborhoods & Subdivisions
  neighborhoods: [
    "Downtown Denton Square",
    "Idiots Hill",
    "Southridge",
    "Rayzor Ranch",
    "Robson Ranch",
    "Cooper Creek",
    "Forrestridge",
    "Mack Park Area",
    "Oakmont",
    "Vintage Township",
    "North Lakes",
  ],

  // Authentic Value Points for Homeowners
  trustPoints: [
    "Connect with Local Independent Plumbers",
    "Fast Response for Denton County Homeowners",
    "Clear, Upfront Contractor Estimates",
    "100% Free Referral Service",
  ],
};
