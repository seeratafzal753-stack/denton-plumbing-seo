export const siteConfig = {
  name: "Denton Plumbing Pros",
  shortName: "Denton Plumbers",
  tagline: "24/7 Fast Local Plumbing & Emergency Drain Services in Denton, TX",
  domain: "https://dentonplumbingpros.com",
  phone: "(940) 310-4499", // High-intent call-tracking placeholder
  phoneRaw: "+19403104499",
  email: "dispatch@dentonplumbingpros.com",
  priceRange: "$$",
  
  // Primary Geo & Entity Data
  primaryCity: "Denton",
  state: "TX",
  stateFull: "Texas",
  postalCode: "76201",
  addressLocality: "Denton",
  addressRegion: "TX",
  addressCountry: "US",
  
  geo: {
    latitude: 33.2148,
    longitude: -97.1331,
  },
  
  // All Denton ZIP codes for hyper-local signals & schema
  zipCodes: [
    "76201",
    "76205",
    "76207",
    "76208",
    "76209",
    "76210",
    "76226",
    "76249"
  ],

  // Key Neighborhoods in Denton
  neighborhoods: [
    "Downtown Denton Square",
    "Idiots Hill",
    "Southridge",
    "Rayzor Ranch",
    "North Lakes",
    "Forrestridge",
    "Timber Links",
    "Cooper Creek",
    "Oakmont",
    "Robson Ranch",
    "Denia",
    "Cross Timbers"
  ],

  // Surrounding Tier-2 Service Areas in Denton County
  serviceAreas: [
    { name: "Corinth", slug: "corinth-tx", zip: "76210", distance: "6 miles south" },
    { name: "Argyle", slug: "argyle-tx", zip: "76226", distance: "8 miles south" },
    { name: "Lake Dallas", slug: "lake-dallas-tx", zip: "76249", distance: "9 miles southeast" },
    { name: "Little Elm", slug: "little-elm-tx", zip: "75068", distance: "14 miles east" },
    { name: "Sanger", slug: "sanger-tx", zip: "76266", distance: "11 miles north" },
    { name: "Aubrey", slug: "aubrey-tx", zip: "76227", distance: "12 miles northeast" },
    { name: "Highland Village", slug: "highland-village-tx", zip: "75077", distance: "13 miles south" }
  ],

  // Value props & trust badges
  guarantees: [
    "Same-Day Rapid Dispatch",
    "Licensed & Insured Master Plumbers",
    "100% Upfront Transparent Pricing",
    "Zero Extra Fees on Nights & Weekends",
    "North Texas Clay Soil & Slab Leak Experts"
  ],

  hours: "Open 24 Hours / 7 Days a Week",
};
