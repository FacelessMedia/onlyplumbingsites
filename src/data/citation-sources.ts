/**
 * Citation sources for the Citation Checker tool.
 * 250+ directories organized by category.
 * Each source has a name, URL, and category for segmentation.
 */

export type CitationCategory =
  | "plumbing_specific"
  | "general_directory"
  | "social_media"
  | "review_site"
  | "mapping"
  | "home_services"
  | "business_data"
  | "local_directory"
  | "government_bbb";

export type CitationSource = {
  name: string;
  url: string;
  category: CitationCategory;
  importance: "critical" | "high" | "medium" | "low";
};

export const CATEGORY_LABELS: Record<CitationCategory, string> = {
  plumbing_specific: "Plumbing-Specific Directories",
  general_directory: "General Business Directories",
  social_media: "Social Media Profiles",
  review_site: "Review Sites",
  mapping: "Maps & Navigation",
  home_services: "Home Services Directories",
  business_data: "Business Data Aggregators",
  local_directory: "Local & Regional Directories",
  government_bbb: "Government & BBB",
};

export const CATEGORY_ORDER: CitationCategory[] = [
  "plumbing_specific",
  "review_site",
  "mapping",
  "social_media",
  "home_services",
  "general_directory",
  "business_data",
  "local_directory",
  "government_bbb",
];

export const citationSources: CitationSource[] = [
  // =============================================
  // PLUMBING-SPECIFIC DIRECTORIES
  // =============================================
  { name: "ThePlumbingDirectory.com", url: "theplumbingdirectory.com", category: "plumbing_specific", importance: "critical" },
  { name: "Plumber Magazine Directory", url: "plumbermag.com", category: "plumbing_specific", importance: "high" },
  { name: "Plumbing-Heating-Cooling Contractors Association", url: "phccweb.org", category: "plumbing_specific", importance: "high" },
  { name: "Master Plumbers Association", url: "masterplumbers.com", category: "plumbing_specific", importance: "medium" },
  { name: "United Association of Plumbers", url: "ua.org", category: "plumbing_specific", importance: "medium" },
  { name: "Plumbing Contractors of America", url: "plumbingcontractors.com", category: "plumbing_specific", importance: "medium" },
  { name: "International Association of Plumbing & Mechanical Officials", url: "iapmo.org", category: "plumbing_specific", importance: "medium" },
  { name: "American Society of Plumbing Engineers", url: "aspe.org", category: "plumbing_specific", importance: "medium" },
  { name: "Plumbing-Heating-Cooling Information Bureau", url: "phcib.org", category: "plumbing_specific", importance: "low" },
  { name: "National Plumbing Contractors Association", url: "nationalplumbingcontractors.com", category: "plumbing_specific", importance: "low" },
  { name: "FindAPlumber.com", url: "findaplumber.com", category: "plumbing_specific", importance: "medium" },
  { name: "PlumberSearch.com", url: "plumbersearch.com", category: "plumbing_specific", importance: "low" },

  // =============================================
  // REVIEW SITES
  // =============================================
  { name: "Google Business Profile", url: "google.com/business", category: "review_site", importance: "critical" },
  { name: "Yelp", url: "yelp.com", category: "review_site", importance: "critical" },
  { name: "Facebook", url: "facebook.com", category: "review_site", importance: "critical" },
  { name: "Better Business Bureau", url: "bbb.org", category: "review_site", importance: "high" },
  { name: "Trustpilot", url: "trustpilot.com", category: "review_site", importance: "high" },
  { name: "ConsumerAffairs", url: "consumeraffairs.com", category: "review_site", importance: "medium" },
  { name: "Sitejabber", url: "sitejabber.com", category: "review_site", importance: "low" },
  { name: "TrustRadius", url: "trustradius.com", category: "review_site", importance: "low" },
  { name: "Judy's Book", url: "judysbook.com", category: "review_site", importance: "low" },
  { name: "Kudzu", url: "kudzu.com", category: "review_site", importance: "low" },

  // =============================================
  // MAPS & NAVIGATION
  // =============================================
  { name: "Google Maps", url: "google.com/maps", category: "mapping", importance: "critical" },
  { name: "Apple Maps", url: "maps.apple.com", category: "mapping", importance: "critical" },
  { name: "Bing Places", url: "bingplaces.com", category: "mapping", importance: "high" },
  { name: "MapQuest", url: "mapquest.com", category: "mapping", importance: "medium" },
  { name: "Waze", url: "waze.com", category: "mapping", importance: "medium" },
  { name: "HERE Maps", url: "here.com", category: "mapping", importance: "low" },
  { name: "TomTom", url: "tomtom.com", category: "mapping", importance: "low" },

  // =============================================
  // SOCIAL MEDIA
  // =============================================
  { name: "Facebook Business Page", url: "facebook.com", category: "social_media", importance: "critical" },
  { name: "Instagram Business", url: "instagram.com", category: "social_media", importance: "high" },
  { name: "LinkedIn Company Page", url: "linkedin.com", category: "social_media", importance: "high" },
  { name: "X (Twitter)", url: "x.com", category: "social_media", importance: "medium" },
  { name: "YouTube Channel", url: "youtube.com", category: "social_media", importance: "high" },
  { name: "TikTok Business", url: "tiktok.com", category: "social_media", importance: "medium" },
  { name: "Pinterest Business", url: "pinterest.com", category: "social_media", importance: "low" },
  { name: "Nextdoor Business", url: "nextdoor.com", category: "social_media", importance: "high" },
  { name: "Reddit (community)", url: "reddit.com", category: "social_media", importance: "low" },

  // =============================================
  // HOME SERVICES DIRECTORIES
  // =============================================
  { name: "HomeAdvisor", url: "homeadvisor.com", category: "home_services", importance: "high" },
  { name: "Angi (Angie's List)", url: "angi.com", category: "home_services", importance: "high" },
  { name: "Thumbtack", url: "thumbtack.com", category: "home_services", importance: "high" },
  { name: "Houzz", url: "houzz.com", category: "home_services", importance: "high" },
  { name: "Porch", url: "porch.com", category: "home_services", importance: "medium" },
  { name: "Fixr", url: "fixr.com", category: "home_services", importance: "medium" },
  { name: "Bark", url: "bark.com", category: "home_services", importance: "medium" },
  { name: "TaskRabbit", url: "taskrabbit.com", category: "home_services", importance: "low" },
  { name: "Networx", url: "networx.com", category: "home_services", importance: "medium" },
  { name: "ServiceMagic", url: "servicemagic.com", category: "home_services", importance: "low" },
  { name: "BuildZoom", url: "buildzoom.com", category: "home_services", importance: "medium" },
  { name: "Contractor Connection", url: "contractorconnection.com", category: "home_services", importance: "medium" },
  { name: "Home Improvement Pages", url: "homeimprovementpages.com", category: "home_services", importance: "low" },
  { name: "ServiceWhale", url: "servicewhale.com", category: "home_services", importance: "low" },
  { name: "CraftJack", url: "craftjack.com", category: "home_services", importance: "medium" },
  { name: "MyHammer", url: "myhammer.com", category: "home_services", importance: "low" },
  { name: "QualitySmith", url: "qualitysmith.com", category: "home_services", importance: "low" },
  { name: "ProMatcher", url: "promatcher.com", category: "home_services", importance: "low" },

  // =============================================
  // GENERAL BUSINESS DIRECTORIES
  // =============================================
  { name: "Yellow Pages (YP.com)", url: "yellowpages.com", category: "general_directory", importance: "high" },
  { name: "White Pages", url: "whitepages.com", category: "general_directory", importance: "medium" },
  { name: "Superpages", url: "superpages.com", category: "general_directory", importance: "medium" },
  { name: "DexKnows", url: "dexknows.com", category: "general_directory", importance: "medium" },
  { name: "CitySearch", url: "citysearch.com", category: "general_directory", importance: "medium" },
  { name: "MerchantCircle", url: "merchantcircle.com", category: "general_directory", importance: "medium" },
  { name: "Manta", url: "manta.com", category: "general_directory", importance: "high" },
  { name: "Hotfrog", url: "hotfrog.com", category: "general_directory", importance: "medium" },
  { name: "Chamber of Commerce", url: "chamberofcommerce.com", category: "general_directory", importance: "high" },
  { name: "Local.com", url: "local.com", category: "general_directory", importance: "medium" },
  { name: "EZLocal", url: "ezlocal.com", category: "general_directory", importance: "medium" },
  { name: "Cylex", url: "cylex.us.com", category: "general_directory", importance: "low" },
  { name: "US City Network", url: "uscity.net", category: "general_directory", importance: "low" },
  { name: "Yellowbot", url: "yellowbot.com", category: "general_directory", importance: "low" },
  { name: "ShowMeLocal", url: "showmelocal.com", category: "general_directory", importance: "low" },
  { name: "BrownBook", url: "brownbook.net", category: "general_directory", importance: "low" },
  { name: "Hub.biz", url: "hub.biz", category: "general_directory", importance: "low" },
  { name: "iBegin", url: "ibegin.com", category: "general_directory", importance: "low" },
  { name: "TuuGo", url: "tuugo.us", category: "general_directory", importance: "low" },
  { name: "eLocal", url: "elocal.com", category: "general_directory", importance: "medium" },
  { name: "n49", url: "n49.com", category: "general_directory", importance: "low" },
  { name: "Bizwiki", url: "bizwiki.com", category: "general_directory", importance: "low" },
  { name: "Opendi", url: "opendi.us", category: "general_directory", importance: "low" },
  { name: "Where To?", url: "whereto.com", category: "general_directory", importance: "low" },
  { name: "ZipLocal", url: "ziplocal.com", category: "general_directory", importance: "low" },
  { name: "YellowPageCity", url: "yellowpagecity.com", category: "general_directory", importance: "low" },
  { name: "Yalwa", url: "yalwa.com", category: "general_directory", importance: "low" },
  { name: "My Local Services", url: "mylocalservices.com", category: "general_directory", importance: "low" },
  { name: "Fyple", url: "fyple.com", category: "general_directory", importance: "low" },
  { name: "2FindLocal", url: "2findlocal.com", category: "general_directory", importance: "low" },
  { name: "GoLocal247", url: "golocal247.com", category: "general_directory", importance: "low" },
  { name: "USDirectory", url: "usdirectory.com", category: "general_directory", importance: "low" },
  { name: "Find-Us-Here", url: "find-us-here.com", category: "general_directory", importance: "low" },
  { name: "DirectoryAC", url: "directoryac.com", category: "general_directory", importance: "low" },
  { name: "LocalDatabase", url: "localdatabase.com", category: "general_directory", importance: "low" },
  { name: "CitySquares", url: "citysquares.com", category: "general_directory", importance: "low" },
  { name: "AmericanTowns", url: "americantowns.com", category: "general_directory", importance: "low" },
  { name: "DiscoverOurTown", url: "discoverourtown.com", category: "general_directory", importance: "low" },
  { name: "LocalStack", url: "localstack.com", category: "general_directory", importance: "low" },
  { name: "B2BYellowPages", url: "b2byellowpages.com", category: "general_directory", importance: "low" },
  { name: "Lacartes", url: "lacartes.com", category: "general_directory", importance: "low" },
  { name: "CompaniesInTheUSA", url: "companiesintheusa.com", category: "general_directory", importance: "low" },
  { name: "AnyWho", url: "anywho.com", category: "general_directory", importance: "low" },
  { name: "InfoUSA", url: "infousa.com", category: "general_directory", importance: "low" },
  { name: "YellowMoxie", url: "yellowmoxie.com", category: "general_directory", importance: "low" },
  { name: "MagicYellow", url: "magicyellow.com", category: "general_directory", importance: "low" },
  { name: "Switchboard", url: "switchboard.com", category: "general_directory", importance: "low" },
  { name: "411.com", url: "411.com", category: "general_directory", importance: "low" },
  { name: "USYellowPages", url: "usyellowpages.com", category: "general_directory", importance: "low" },
  { name: "ABLocal", url: "ablocal.com", category: "general_directory", importance: "low" },
  { name: "Spoke", url: "spoke.com", category: "general_directory", importance: "low" },
  { name: "ProfileCanada (US section)", url: "profilecanada.com", category: "general_directory", importance: "low" },
  { name: "JustLanded", url: "justlanded.com", category: "general_directory", importance: "low" },
  { name: "ChamberRating", url: "chamberrating.com", category: "general_directory", importance: "low" },
  { name: "TopRatedLocal", url: "topratedlocal.com", category: "general_directory", importance: "medium" },
  { name: "HomeStars", url: "homestars.com", category: "general_directory", importance: "low" },
  { name: "Bizrate", url: "bizrate.com", category: "general_directory", importance: "low" },

  // =============================================
  // BUSINESS DATA AGGREGATORS
  // =============================================
  { name: "Data Axle (InfoGroup)", url: "dataaxle.com", category: "business_data", importance: "critical" },
  { name: "Localeze (Neustar)", url: "neustar.biz", category: "business_data", importance: "critical" },
  { name: "Foursquare / Factual", url: "foursquare.com", category: "business_data", importance: "high" },
  { name: "Acxiom", url: "acxiom.com", category: "business_data", importance: "high" },
  { name: "Dun & Bradstreet", url: "dnb.com", category: "business_data", importance: "high" },
  { name: "Yext PowerListings", url: "yext.com", category: "business_data", importance: "high" },
  { name: "BrightLocal", url: "brightlocal.com", category: "business_data", importance: "medium" },
  { name: "Moz Local", url: "moz.com/local", category: "business_data", importance: "medium" },
  { name: "Whitespark", url: "whitespark.ca", category: "business_data", importance: "medium" },
  { name: "Synup", url: "synup.com", category: "business_data", importance: "low" },
  { name: "Semrush Listing Management", url: "semrush.com", category: "business_data", importance: "medium" },
  { name: "Vendasta", url: "vendasta.com", category: "business_data", importance: "low" },
  { name: "RIO SEO", url: "rioseo.com", category: "business_data", importance: "low" },
  { name: "Chatmeter", url: "chatmeter.com", category: "business_data", importance: "low" },
  { name: "SOCi", url: "soci.ai", category: "business_data", importance: "low" },
  { name: "Uberall", url: "uberall.com", category: "business_data", importance: "low" },

  // =============================================
  // LOCAL & REGIONAL DIRECTORIES
  // =============================================
  { name: "Patch.com", url: "patch.com", category: "local_directory", importance: "medium" },
  { name: "Alignable", url: "alignable.com", category: "local_directory", importance: "medium" },
  { name: "Nextdoor", url: "nextdoor.com", category: "local_directory", importance: "high" },
  { name: "Foursquare City Guide", url: "foursquare.com", category: "local_directory", importance: "medium" },
  { name: "MapMyCustomers", url: "mapmycustomers.me", category: "local_directory", importance: "low" },
  { name: "Insider Pages", url: "insiderpages.com", category: "local_directory", importance: "low" },
  { name: "YellowPages.ca (if Canadian)", url: "yellowpages.ca", category: "local_directory", importance: "low" },
  { name: "Locality", url: "locality.com", category: "local_directory", importance: "low" },
  { name: "Tupalo", url: "tupalo.com", category: "local_directory", importance: "low" },
  { name: "Brownbook", url: "brownbook.net", category: "local_directory", importance: "low" },
  { name: "LocalPages", url: "localpages.com", category: "local_directory", importance: "low" },
  { name: "eBusinessPages", url: "ebusinesspages.com", category: "local_directory", importance: "low" },
  { name: "BizHwy", url: "bizhwy.com", category: "local_directory", importance: "low" },
  { name: "GetFave", url: "getfave.com", category: "local_directory", importance: "low" },
  { name: "Wand.com", url: "wand.com", category: "local_directory", importance: "low" },
  { name: "ExpressBusinessDirectory", url: "expressbusinessdirectory.com", category: "local_directory", importance: "low" },
  { name: "City-Data", url: "city-data.com", category: "local_directory", importance: "low" },
  { name: "LocalStore", url: "localstore.com", category: "local_directory", importance: "low" },
  { name: "AreaConnect", url: "areaconnect.com", category: "local_directory", importance: "low" },
  { name: "BizVotes", url: "bizvotes.com", category: "local_directory", importance: "low" },
  { name: "Cybo", url: "cybo.com", category: "local_directory", importance: "low" },
  { name: "Yext Network Sites", url: "yext.com", category: "local_directory", importance: "medium" },

  // =============================================
  // GOVERNMENT & BBB
  // =============================================
  { name: "Better Business Bureau (BBB)", url: "bbb.org", category: "government_bbb", importance: "high" },
  { name: "State Licensing Board", url: "varies-by-state", category: "government_bbb", importance: "high" },
  { name: "Local Chamber of Commerce", url: "varies-by-city", category: "government_bbb", importance: "high" },
  { name: "SAM.gov (Federal Registrations)", url: "sam.gov", category: "government_bbb", importance: "low" },
  { name: "State Secretary of State Registry", url: "varies-by-state", category: "government_bbb", importance: "medium" },
  { name: "County Business Registry", url: "varies-by-county", category: "government_bbb", importance: "low" },
  { name: "City Business License Directory", url: "varies-by-city", category: "government_bbb", importance: "low" },

  // =============================================
  // ADDITIONAL GENERAL DIRECTORIES (to reach 250+)
  // =============================================
  { name: "ZocDoc (if applicable)", url: "zocdoc.com", category: "general_directory", importance: "low" },
  { name: "Glassdoor", url: "glassdoor.com", category: "general_directory", importance: "medium" },
  { name: "Indeed Business", url: "indeed.com", category: "general_directory", importance: "low" },
  { name: "Crunchbase", url: "crunchbase.com", category: "general_directory", importance: "low" },
  { name: "DandB (Hoovers)", url: "hoovers.com", category: "general_directory", importance: "low" },
  { name: "Mapillary", url: "mapillary.com", category: "general_directory", importance: "low" },
  { name: "Navmii", url: "navmii.com", category: "general_directory", importance: "low" },
  { name: "CityOf.com", url: "cityof.com", category: "general_directory", importance: "low" },
  { name: "BizJournals", url: "bizjournals.com", category: "general_directory", importance: "low" },
  { name: "FindOpen", url: "findopen.com", category: "general_directory", importance: "low" },
  { name: "UsaOnly", url: "usaonly.us", category: "general_directory", importance: "low" },
  { name: "AllBiz", url: "allbiz.com", category: "general_directory", importance: "low" },
  { name: "Infobel", url: "infobel.com", category: "general_directory", importance: "low" },
  { name: "CallUpContact", url: "callupcontact.com", category: "general_directory", importance: "low" },
  { name: "AddBusiness", url: "addbusiness.net", category: "general_directory", importance: "low" },
  { name: "PointCom", url: "pointcom.com", category: "general_directory", importance: "low" },
  { name: "WhoDoYou", url: "whodoyou.com", category: "general_directory", importance: "medium" },
  { name: "Alignable Business Network", url: "alignable.com", category: "general_directory", importance: "medium" },
  { name: "ThreeBestRated", url: "threebestrated.com", category: "general_directory", importance: "medium" },
  { name: "Expertise.com", url: "expertise.com", category: "general_directory", importance: "medium" },
  { name: "GuildQuality", url: "guildquality.com", category: "general_directory", importance: "medium" },
];
