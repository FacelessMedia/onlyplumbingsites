/**
 * Citation sources for the Citation Checker tool.
 * Curated list of directories that actually matter for plumbing businesses.
 * Each source has search URL patterns and claim/signup URLs for deep linking.
 *
 * Removed: United Association (union-only), ZocDoc (medical), ProfileCanada,
 * dozens of dead/irrelevant micro-directories, and duplicates.
 */

export type CitationCategory =
  | "critical"
  | "review_site"
  | "mapping"
  | "social_media"
  | "home_services"
  | "general_directory"
  | "data_aggregator"
  | "plumbing_specific";

export type CitationSource = {
  name: string;
  url: string;
  category: CitationCategory;
  importance: "critical" | "high" | "medium" | "low";
  /** URL pattern to search for a business. Use {name}, {city}, {state}, {phone} placeholders. */
  searchUrl: string;
  /** URL to claim or sign up for a new listing. */
  claimUrl: string;
  /** Notes about this directory (eligibility, cost, etc.) */
  note?: string;
};

export const CATEGORY_LABELS: Record<CitationCategory, string> = {
  critical: "Critical — Fix These First",
  review_site: "Review Sites",
  mapping: "Maps & Navigation",
  social_media: "Social Media Profiles",
  home_services: "Home Services Directories",
  general_directory: "General Business Directories",
  data_aggregator: "Data Aggregators",
  plumbing_specific: "Plumbing & Trade Directories",
};

export const CATEGORY_ORDER: CitationCategory[] = [
  "critical",
  "review_site",
  "mapping",
  "social_media",
  "home_services",
  "plumbing_specific",
  "general_directory",
  "data_aggregator",
];

export const citationSources: CitationSource[] = [
  // ═══════════════════════════════════════════
  // CRITICAL — These directly impact rankings
  // ═══════════════════════════════════════════
  {
    name: "Google Business Profile",
    url: "google.com/business",
    category: "critical",
    importance: "critical",
    searchUrl: "https://www.google.com/maps/search/{name}+{city}+{state}",
    claimUrl: "https://business.google.com/create",
    note: "THE most important listing. Controls your Map Pack ranking.",
  },
  {
    name: "Yelp",
    url: "yelp.com",
    category: "critical",
    importance: "critical",
    searchUrl: "https://www.yelp.com/search?find_desc={name}&find_loc={city}+{state}",
    claimUrl: "https://biz.yelp.com/signup/new",
    note: "2nd most used review site. Apple Maps pulls data from Yelp.",
  },
  {
    name: "Facebook Business Page",
    url: "facebook.com",
    category: "critical",
    importance: "critical",
    searchUrl: "https://www.facebook.com/search/pages/?q={name}+{city}+{state}",
    claimUrl: "https://www.facebook.com/pages/create",
    note: "3rd largest review platform. Also used for social proof.",
  },
  {
    name: "Apple Maps (via Apple Business Connect)",
    url: "maps.apple.com",
    category: "critical",
    importance: "critical",
    searchUrl: "https://maps.apple.com/?q={name}+{city}+{state}",
    claimUrl: "https://businessconnect.apple.com",
    note: "Default maps on all iPhones. Pulls from Yelp if unclaimed.",
  },
  {
    name: "Bing Places",
    url: "bingplaces.com",
    category: "critical",
    importance: "critical",
    searchUrl: "https://www.bing.com/maps?q={name}+{city}+{state}",
    claimUrl: "https://www.bingplaces.com",
    note: "Powers Bing, Cortana, and many voice search results.",
  },

  // ═══════════════════════════════════════════
  // REVIEW SITES
  // ═══════════════════════════════════════════
  {
    name: "Better Business Bureau (BBB)",
    url: "bbb.org",
    category: "review_site",
    importance: "high",
    searchUrl: "https://www.bbb.org/search?find_text={name}&find_loc={city}+{state}",
    claimUrl: "https://www.bbb.org/get-accredited",
    note: "Strong trust signal. Accreditation costs ~$400-500/yr but listing is free.",
  },
  {
    name: "Trustpilot",
    url: "trustpilot.com",
    category: "review_site",
    importance: "medium",
    searchUrl: "https://www.trustpilot.com/search?query={name}",
    claimUrl: "https://business.trustpilot.com/signup",
  },
  {
    name: "Google Customer Reviews",
    url: "google.com",
    category: "review_site",
    importance: "high",
    searchUrl: "https://www.google.com/search?q={name}+{city}+{state}+reviews",
    claimUrl: "https://business.google.com",
    note: "Your reviews on GBP. Respond to every review within 24 hours.",
  },

  // ═══════════════════════════════════════════
  // MAPS & NAVIGATION
  // ═══════════════════════════════════════════
  {
    name: "MapQuest",
    url: "mapquest.com",
    category: "mapping",
    importance: "medium",
    searchUrl: "https://www.mapquest.com/search/{name}+{city}+{state}",
    claimUrl: "https://www.mapquest.com/add-a-business",
  },
  {
    name: "Waze",
    url: "waze.com",
    category: "mapping",
    importance: "medium",
    searchUrl: "https://www.waze.com/live-map",
    claimUrl: "https://biz.waze.com",
    note: "Owned by Google. Managed via Waze for Brands.",
  },

  // ═══════════════════════════════════════════
  // SOCIAL MEDIA
  // ═══════════════════════════════════════════
  {
    name: "Instagram Business",
    url: "instagram.com",
    category: "social_media",
    importance: "high",
    searchUrl: "https://www.instagram.com/explore/search/keyword/?q={name}",
    claimUrl: "https://www.instagram.com/accounts/emailsignup/",
    note: "Before/after photos perform extremely well for plumbers.",
  },
  {
    name: "LinkedIn Company Page",
    url: "linkedin.com",
    category: "social_media",
    importance: "medium",
    searchUrl: "https://www.linkedin.com/search/results/companies/?keywords={name}",
    claimUrl: "https://www.linkedin.com/company/setup/new/",
    note: "Good for commercial plumbing leads and B2B credibility.",
  },
  {
    name: "YouTube Channel",
    url: "youtube.com",
    category: "social_media",
    importance: "high",
    searchUrl: "https://www.youtube.com/results?search_query={name}+{city}+plumber",
    claimUrl: "https://www.youtube.com/account",
    note: "Video content ranks well. Before/after, tips, and explainers.",
  },
  {
    name: "Nextdoor Business",
    url: "nextdoor.com",
    category: "social_media",
    importance: "high",
    searchUrl: "https://nextdoor.com/find-business/{name}/",
    claimUrl: "https://nextdoor.com/create-business-page/",
    note: "Neighborhood-level trust. Recommendations are powerful.",
  },
  {
    name: "TikTok Business",
    url: "tiktok.com",
    category: "social_media",
    importance: "low",
    searchUrl: "https://www.tiktok.com/search?q={name}+plumber",
    claimUrl: "https://www.tiktok.com/signup",
    note: "Growing platform. Short plumbing tip videos can go viral.",
  },
  {
    name: "X (Twitter)",
    url: "x.com",
    category: "social_media",
    importance: "low",
    searchUrl: "https://x.com/search?q={name}+plumber",
    claimUrl: "https://x.com/i/flow/signup",
  },

  // ═══════════════════════════════════════════
  // HOME SERVICES DIRECTORIES
  // ═══════════════════════════════════════════
  {
    name: "Angi (Angie's List)",
    url: "angi.com",
    category: "home_services",
    importance: "high",
    searchUrl: "https://www.angi.com/companylist/{city}/{state}/plumbing.htm",
    claimUrl: "https://www.angi.com/pro/registration",
    note: "Major home services marketplace. Free to list, paid for leads.",
  },
  {
    name: "HomeAdvisor",
    url: "homeadvisor.com",
    category: "home_services",
    importance: "high",
    searchUrl: "https://www.homeadvisor.com/rated.{city}.{state}.Plumbing.html",
    claimUrl: "https://pro.homeadvisor.com/registration/",
    note: "Now merged with Angi. Still has its own listings.",
  },
  {
    name: "Thumbtack",
    url: "thumbtack.com",
    category: "home_services",
    importance: "high",
    searchUrl: "https://www.thumbtack.com/search/{name}+plumber+{city}+{state}",
    claimUrl: "https://www.thumbtack.com/pro/signup",
    note: "Lead-gen platform. You pay per lead, but listing is free.",
  },
  {
    name: "Houzz",
    url: "houzz.com",
    category: "home_services",
    importance: "medium",
    searchUrl: "https://www.houzz.com/professionals/plumber/{city}-{state}",
    claimUrl: "https://www.houzz.com/professionals/signup",
    note: "Good for remodel/renovation plumbing. Free pro listing.",
  },
  {
    name: "Porch",
    url: "porch.com",
    category: "home_services",
    importance: "medium",
    searchUrl: "https://porch.com/search/{city}-{state}/plumber",
    claimUrl: "https://porch.com/pro/registration",
  },
  {
    name: "BuildZoom",
    url: "buildzoom.com",
    category: "home_services",
    importance: "medium",
    searchUrl: "https://www.buildzoom.com/search?q={name}&loc={city}+{state}",
    claimUrl: "https://www.buildzoom.com/contractor/claim",
    note: "Pulls from state licensing data. Verify your license info is correct.",
  },
  {
    name: "Bark",
    url: "bark.com",
    category: "home_services",
    importance: "low",
    searchUrl: "https://www.bark.com/en/us/plumber/{city}/",
    claimUrl: "https://www.bark.com/en/us/pro-signup/",
  },
  {
    name: "Networx",
    url: "networx.com",
    category: "home_services",
    importance: "low",
    searchUrl: "https://www.networx.com/plumbing-contractors/{city}-{state}",
    claimUrl: "https://www.networx.com/contractor-signup",
  },
  {
    name: "CraftJack",
    url: "craftjack.com",
    category: "home_services",
    importance: "low",
    searchUrl: "https://www.craftjack.com",
    claimUrl: "https://www.craftjack.com/contractor-signup",
    note: "Lead-gen service. Pay per lead.",
  },

  // ═══════════════════════════════════════════
  // PLUMBING & TRADE DIRECTORIES
  // ═══════════════════════════════════════════
  {
    name: "ThePlumbingDirectory.com",
    url: "theplumbingdirectory.com",
    category: "plumbing_specific",
    importance: "high",
    searchUrl: "https://theplumbingdirectory.com/?s={name}",
    claimUrl: "https://theplumbingdirectory.com/add-listing/",
    note: "Plumbing-specific directory. High relevance for plumbing SEO.",
  },
  {
    name: "PHCC (Plumbing-Heating-Cooling Contractors Association)",
    url: "phccweb.org",
    category: "plumbing_specific",
    importance: "medium",
    searchUrl: "https://www.phccweb.org/find-a-contractor/",
    claimUrl: "https://www.phccweb.org/join/",
    note: "Industry association. Membership required (~$500+/yr). Strong trust signal.",
  },
  {
    name: "Plumber Magazine Directory",
    url: "plumbermag.com",
    category: "plumbing_specific",
    importance: "low",
    searchUrl: "https://www.plumbermag.com/directory",
    claimUrl: "https://www.plumbermag.com/directory/add-listing",
    note: "Trade publication directory. Free listing.",
  },
  {
    name: "IAPMO (Intl. Assoc. of Plumbing & Mechanical Officials)",
    url: "iapmo.org",
    category: "plumbing_specific",
    importance: "low",
    searchUrl: "https://www.iapmo.org",
    claimUrl: "https://www.iapmo.org/membership",
    note: "Standards body. Membership available for plumbing contractors.",
  },

  // ═══════════════════════════════════════════
  // GENERAL BUSINESS DIRECTORIES
  // ═══════════════════════════════════════════
  {
    name: "Yellow Pages (YP.com)",
    url: "yellowpages.com",
    category: "general_directory",
    importance: "high",
    searchUrl: "https://www.yellowpages.com/search?search_terms={name}&geo_location_terms={city}+{state}",
    claimUrl: "https://adsolutions.yp.com/free-listing",
  },
  {
    name: "Superpages",
    url: "superpages.com",
    category: "general_directory",
    importance: "medium",
    searchUrl: "https://www.superpages.com/search?q={name}&loc={city}+{state}",
    claimUrl: "https://www.superpages.com/add-a-business",
  },
  {
    name: "Manta",
    url: "manta.com",
    category: "general_directory",
    importance: "medium",
    searchUrl: "https://www.manta.com/search?search_source=nav&search={name}&search_location={city}+{state}",
    claimUrl: "https://www.manta.com/claim",
  },
  {
    name: "Chamber of Commerce Directory",
    url: "chamberofcommerce.com",
    category: "general_directory",
    importance: "high",
    searchUrl: "https://www.chamberofcommerce.com/search?q={name}&l={city}+{state}",
    claimUrl: "https://www.chamberofcommerce.com/add-your-business",
    note: "Free online directory. Joining your local chamber is separate.",
  },
  {
    name: "Hotfrog",
    url: "hotfrog.com",
    category: "general_directory",
    importance: "low",
    searchUrl: "https://www.hotfrog.com/search/{city}/{state}/{name}",
    claimUrl: "https://www.hotfrog.com/add-your-business",
  },
  {
    name: "EZLocal",
    url: "ezlocal.com",
    category: "general_directory",
    importance: "low",
    searchUrl: "https://ezlocal.com/search?q={name}&loc={city}+{state}",
    claimUrl: "https://ezlocal.com/add-listing",
  },
  {
    name: "ShowMeLocal",
    url: "showmelocal.com",
    category: "general_directory",
    importance: "low",
    searchUrl: "https://www.showmelocal.com/search?q={name}&l={city}+{state}",
    claimUrl: "https://www.showmelocal.com/add-business",
  },
  {
    name: "TopRatedLocal",
    url: "topratedlocal.com",
    category: "general_directory",
    importance: "medium",
    searchUrl: "https://www.topratedlocal.com/search?q={name}&l={city}+{state}",
    claimUrl: "https://www.topratedlocal.com/sign-up",
    note: "Aggregates reviews from multiple sites. Good trust signal.",
  },
  {
    name: "Expertise.com",
    url: "expertise.com",
    category: "general_directory",
    importance: "medium",
    searchUrl: "https://www.expertise.com/plumbing/{city}",
    claimUrl: "https://www.expertise.com",
    note: "Curated 'Best of' lists. Listing is earned, not claimed.",
  },
  {
    name: "ThreeBestRated",
    url: "threebestrated.com",
    category: "general_directory",
    importance: "medium",
    searchUrl: "https://threebestrated.com/plumbers-in-{city}-{state}",
    claimUrl: "https://threebestrated.com/submit",
    note: "Hand-picked top 3 in each city. Strong trust signal if selected.",
  },
  {
    name: "Glassdoor",
    url: "glassdoor.com",
    category: "general_directory",
    importance: "low",
    searchUrl: "https://www.glassdoor.com/Search/results.htm?keyword={name}",
    claimUrl: "https://www.glassdoor.com/employers/claim-your-free-employer-account/",
    note: "Employee reviews. Matters if you're hiring plumbers.",
  },
  {
    name: "Alignable",
    url: "alignable.com",
    category: "general_directory",
    importance: "low",
    searchUrl: "https://www.alignable.com/search?q={name}&loc={city}+{state}",
    claimUrl: "https://www.alignable.com/signup",
    note: "B2B networking. Good for referral partnerships.",
  },

  // ═══════════════════════════════════════════
  // DATA AGGREGATORS — These feed hundreds of directories
  // ═══════════════════════════════════════════
  {
    name: "Data Axle (InfoGroup)",
    url: "dataaxle.com",
    category: "data_aggregator",
    importance: "critical",
    searchUrl: "https://www.dataaxle.com",
    claimUrl: "https://www.dataaxle.com/business-listings/",
    note: "Major data aggregator. Feeds Yellow Pages, Superpages, CitySearch, and 100+ directories. Submit here first.",
  },
  {
    name: "Localeze (Neustar)",
    url: "neustarlocaleze.biz",
    category: "data_aggregator",
    importance: "critical",
    searchUrl: "https://www.neustarlocaleze.biz/directory",
    claimUrl: "https://www.neustarlocaleze.biz/directory/claim",
    note: "Major aggregator. Feeds Bing, Apple Maps, Yahoo, and 100+ directories.",
  },
  {
    name: "Foursquare / Factual",
    url: "foursquare.com",
    category: "data_aggregator",
    importance: "high",
    searchUrl: "https://foursquare.com/explore?q={name}&near={city}+{state}",
    claimUrl: "https://foursquare.com/manage",
    note: "Feeds Uber, Snapchat, Samsung, and many apps. Claim your listing.",
  },
  {
    name: "Acxiom",
    url: "acxiom.com",
    category: "data_aggregator",
    importance: "high",
    searchUrl: "https://www.acxiom.com",
    claimUrl: "https://www.acxiom.com/about-us/contact/",
    note: "Major data broker. Contact to verify your business data.",
  },
  {
    name: "Yext PowerListings",
    url: "yext.com",
    category: "data_aggregator",
    importance: "medium",
    searchUrl: "https://www.yext.com/s/{name}/scan",
    claimUrl: "https://www.yext.com",
    note: "Paid service ($500+/yr) that pushes your NAP to 100+ directories. Optional but effective.",
  },
];
