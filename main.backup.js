 // ===============================
// Joseph Keirs — Portfolio
// Pinterest-style masonry, expand-in-place
// - Mobile: 2 columns; expanded spans full width (2 columns)
// - Mobile search: icon expands into pill, autofocus on expand
// - Search clears on category click + brand click
// - Vimeo: thumbnail -> embed on expand (now supports MP4 loop thumbs too)
// - YouTube: collapsed uses MP4 loop thumb (if .mp4), expanded uses YouTube embed
// - Masonry sizing reads CSS row/gap (prevents overlap/striping)
// ===============================


// --- BRAND MARKS (optional PNG/SVG wordmarks) ---
// Put files in: /public/brand/  (e.g. /public/brand/jk-mark-1.png)
// Then list them here. One will be picked at random per page load.
const BRAND_MARKS = [
  "/brand/jk-mark-1.png",
  "/brand/jk-mark-2.png",
  "/brand/jk-mark-3.png",
 "/brand/jk-mark-4.png",
 "/brand/jk-mark-5.png",
"/brand/jk-mark-6.png",
"/brand/jk-mark-7.png",
"/brand/jk-mark-8.png",
"/brand/jk-mark-9.png",
"/brand/jk-mark-10.png",
"/brand/jk-mark-11.png",
"/brand/jk-mark-12.png",
"/brand/jk-mark-13.png",
"/brand/jk-mark-14.png",
"/brand/jk-mark-15.png",
"/brand/jk-mark-16.png",
"/brand/jk-mark-17.png",
];

const PICKED_BRAND_MARK = BRAND_MARKS.length
  ? BRAND_MARKS[Math.floor(Math.random() * BRAND_MARKS.length)]
  : null;
// -----------------------------------------------

const CATEGORIES = ["All", "Advertising", "Directing", "Music Videos", "Copywriting"];

const VIDEO_SAMPLES = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
];

function mkImg(id, title, client, cats, picsumId, w, h) {
  return {
    id,
    title,
    client,
    cats,
    type: "image",
    thumb: `https://picsum.photos/id/${picsumId}/${w}/${h}`,
    src: `https://picsum.photos/id/${picsumId}/${w * 2}/${h * 2}`,
  };
}

function mkVid(id, title, client, cats, mp4Url) {
  return {
    id,
    title,
    client,
    cats,
    type: "video",
    thumb: mp4Url,
    src: mp4Url,
  };
}

const PROJECTS = [
  {
    id: "barclays-land-of-football",
    title: "The Land of Football",
    client: "Barclays",
    cats: ["Advertising"],
    type: "vimeo",
    thumb: "/projects/barclays-land-of-football/thumb.mp4",
    vimeoId: "1157427053",
    note: "Hero campaign celebrating Barclays' widespread role in UK football.",
  },

  {
    id: "adidas-run-free",
    title: "Run free from it all",
    client: "Adidas",
    cats: ["Advertising"],
    type: "youtube",
    thumb: "/projects/adidas-run-free/thumb.mp4", // ✅ your loop file
    youtubeId: "MYxSCzHKKgs",
    note: "Film. YouTube embed on expand.",
  },

  {
    id: "adidas-run-free-social",
    title: "Run free from social media",
    client: "Adidas",
    cats: ["Advertising"],
    type: "video",
    thumb: "/projects/adidas-run-free-social/thumb.mp4",
    src: "/projects/adidas-run-free-social/full.mp4",
    note: "George Gilbert runs free from social media.",
  },

  {
    id: "carphone-warehouse-scrimpers",
    title: "Scrimpers unite",
    client: "Carphone Warehouse",
    cats: ["Advertising"],
    type: "vimeo",
    thumbs: [
"/projects/carphone-warehouse-scrimpers/thumb1.mp4",
"/projects/carphone-warehouse-scrimpers/thumb3.mp4",
"/projects/carphone-warehouse-scrimpers/thumb5.mp4",
"/projects/carphone-warehouse-scrimpers/thumb6.mp4",
"/projects/carphone-warehouse-scrimpers/thumb7.mp4",
],
    vimeoId: "1158109398",
    note: "Launching a live tariff checker by celebrating cheapskates. With vocals from the one and only Adam Buxton.",
  },

  {
    id: "unicef-end-polio",
    title: "End @pol10",
    client: "Unicef x End Polio",
    cats: ["Advertising", "Copywriting"],
    type: "vimeo",
    thumbs: 
[
"/projects/unicef-end-polio/thumb2.mp4",
"/projects/unicef-end-polio/thumb3.mp4",
],
    vimeoId: "1160199415",
    note: "By turning polio into an opponent rather than a statistic, the campaign pulled Gen Z into a fight they didn’t realise was still being played.",
  },

  {
    id: "stella-journey",
    title: "Le Voyage",
    client: "Stella Artois",
    cats: ["Advertising"],
    type: "vimeo",
    thumb: "/projects/stella-journey/thumb.mp4",
    vimeoId: "1158109372",
    note: "Filming The Boulevard de la Croisette (... on Santa Monica Boulevard).",
  },

  {
    id: "nike-never-stop",
    title: "Never Stop",
    client: "Nike",
    cats: ["Advertising", "Directing"],
    type: "vimeo",
    thumb: "/projects/nike-never-stop/thumb1.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157401320",
    note: "Filming overnight with the second largest man I've ever stood next to (See Samsung ad for tallest).",
  },

  {
    id: "shelter-homeless-romantics-rab",
    title: 'Homeless Romantics • "Rab"',
    client: "Shelter",
    cats: ["Directing"],
    type: "youtube",
    thumb: "/projects/shelter-homeless-romantics-rab/thumb.mp4",
    youtubeId: "-yAYjuHPulg",
    note: "Valentine's Day series of films exploring love on the streets of London.",
  },

  {
    id: "barclays-football-opens-doors",
    title: "Football Opens Doors",
    client: "Barclays",
    cats: ["Advertising"],
    type: "youtube",
    thumb: "/projects/barclays-football-opens-doors/thumb.mp4",
    youtubeId: "4OfK2_9cxLQ",
    note: "Launching the Barclays Community Football Fund.",
  },

{
  id: "coca-cola-premier-league",
  title: "Premier League Sponsorship",
  client: "Coca Cola",
  cats: ["Copywriting", "Advertising"],
  type: "video",
  thumb: "/projects/coca-cola-premier-league/thumb.mp4",
  src: "/projects/coca-cola-premier-league/thumb.mp4",
  note: "Sponsorship renewal campaign with limited edition cans.",
},

  {
    id: "samsung-ssd-heroes",
    title: "Heroes don't wait",
    client: "Samsung SSD",
    cats: ["Advertising", "Directing"],
    type: "vimeo",
    thumb: "/projects/samsung-ssd-heroes/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157607469",
    note: "Ginormous performance from our actor here.",
  },

{
  id: "barclays-free-tennis-people",
  title: "Tennis is now for everyone • Free Park Sessions",
  client: "Barclays",
  cats: ["Copywriting", "Advertising"],
  type: "image",
  thumb: "/projects/barclays-free-tennis-people/thumb.gif",
  src: "/projects/barclays-free-tennis-people/still.png",
  note: "The LTA.",
},


  {
    id: "blaenavon-prague-99",
    title: "Prague '99",
    client: "Blaenavon",
    cats: ["Music Videos", "Directing"],
    type: "vimeo",
    thumbs: ["/projects/blaenavon-prague-99/thumb.mp4", "/projects/blaenavon-prague-99/thumb8.mp4"],
    vimeoId: "1157917110",
    note: "",
  },

  {
    id: "shelter-homeless-romantics-simon",
    title: 'Homeless Romantics • "Simon"',
    client: "Shelter",
    cats: ["Directing"],
    type: "youtube",
    thumb: "/projects/shelter-homeless-romantics-simon/thumb.mp4",
    youtubeId: "YH1spDCJas4",
    note: "Valentine's Day series of films exploring love on the streets of London.",
  },

  {
    id: "farrow-and-ball-colour-consultancy-agree",
    title: 'Colour Consultancy • "Agree on Mizzle"',
    client: "Farrow & Ball",
    cats: ["Advertising"],
    type: "youtube",
    thumb: "/projects/farrow-and-ball-colour-consultancy-agree/thumb.mp4",
    youtubeId: "HFzbmPyG1Uc",
    note: "Launching Colour Consultancy for Farrow & Ball.",
  },

  {
    id: "odeon-limitless-lady-victoria",
    title: "Lady Victoria",
    client: "ODEON",
    cats: ["Advertising", "Directing"],
    type: "vimeo",
    thumb: "/projects/odeon-limitless-lady-victoria/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157408058",
    note: "Launching ODEON limitless.",
  },

  {
    id: "samsung-ssd-social",
    title: "The best memories",
    client: "Samsung",
    cats: ["Advertising", "Copywriting"],
    type: "video",
    thumb: "/projects/samsung-ssd-social/thumb.mp4",
    src: "/projects/samsung-ssd-social/thumb.mp4",
    note: "The best memory devices from Samsung say hello to socials.",
  },

{
  id: "dometic-welcome-back",
  title: "Welcome Back",
  client: "Dometic",
  cats: ["Copywriting", "Advertising"],
  type: "image",
  thumb: "/projects/dometic-welcome-back/thumb1.mp4",
  src: "/projects/dometic-welcome-back/dometic.jpg",
  note: "Outdoor equipment brand inviting humans back where we all came from, the great outdoors.",
},

{
  id: "zag-beer-eyeballs",
  title: "The soft drink disguised as a beer",
  client: "ZAG",
  cats: ["Copywriting", "Advertising"],
  type: "image",
  thumb: "/projects/zag-beer-eyeballs/still.jpeg",
  src: "/projects/zag-beer-eyeballs/still.jpeg",
  note: "Outdoor equipment brand inviting humans back where we all came from, the great outdoors.",
},

  {
    id: "odeon-limitless-sexy-pete",
    title: "Sexy Pete",
    client: "ODEON",
    cats: ["Advertising", "Directing"],
    type: "vimeo",
    thumb: "/projects/odeon-limitless-sexy-pete/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157401351",
    note: "Launching ODEON limitless.",
  },

  {
    id: "samsung-retro",
    title: "Retro isn't always cool",
    client: "Samsung",
    cats: ["Advertising"],
    type: "vimeo",
    thumb: "/projects/samsung-retro/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157607529",
    note: "Nostalgia this, nostalgia that but some things belong in the past.",
  },

 {
    id: "everything-everything-night-of-the-long-knives",
    title: "Night of the long knives",
    client: "Everything Everything",
    cats: ["Music Videos"],
    type: "vimeo",
    thumbs: [
      "/projects/everything-everything-night-of-the-long-knives/thumb.mp4",
    ],
    vimeoId: "1158244773",
    note: "",
  },


  {
    id: "asos-top-model",
    title: "America's Next Top Model Sponsorship",
    client: "ASOS",
    cats: ["Advertising"],
    type: "vimeo",
    thumb: "/projects/asos-top-model/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157607329",
    note: "Catty characters star in idents for ASOS x America's Next Top Model.",
  },

  {
    id: "samsung-welcome",
    title: "Welcome to Solid State",
    client: "Samsung SSD",
    cats: ["Advertising", "Directing"],
    type: "vimeo",
    thumb: "/projects/samsung-welcome/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157607681",
    note: "Showing the benefits of a Solid State Drive in the fictional tourist town of Solid State.",
  },

  {
    id: "carphone-warehouse-scrimpers-christmas",
    title: "Christmas Scrimpers",
    client: "Carphone Warehouse",
    cats: ["Advertising"],
    type: "vimeo",
  thumbs: ["/projects/carphone-warehouse-scrimpers-christmas/thumb.mp4", "/projects/carphone-warehouse-scrimpers-christmas/thumb2.mp4"],
    vimeoId: "1157937858",
    note: "",
  },

  {
    id: "deliveroo-summer-in-the-bag-dooh",
    title: "Summer in the bag • Delivering to parks now too",
    client: "Deliveroo",
    cats: ["Advertising", "Directing", "Copywriting"],
    type: "video",
    thumb: "/projects/deliveroo-summer-in-the-bag-dooh/thumb.mp4",
    src: "/projects/deliveroo-summer-in-the-bag-dooh/thumb.mp4",
    note: "Campaign to announce the summer of increased deliveries.",
  },

  {
    id: "farrow-and-ball-colour-consultancy-delivery",
    title: 'Colour Consultancy • "Can I take a photo?"',
    client: "Farrow & Ball",
    cats: ["Advertising"],
    type: "youtube",
    thumb: "/projects/farrow-and-ball-colour-consultancy-delivery/thumb.mp4",
    youtubeId: "l6fe3FKg-98",
    note: "Launching Colour Consultancy for Farrow & Ball.",
  },

  {
    id: "shelter-homeless-romantics-omer",
    title: 'Homeless Romantics • "Omer"',
    client: "Shelter",
    cats: ["Directing"],
    type: "youtube",
    thumb: "/projects/shelter-homeless-romantics-omer/thumb.mp4",
    youtubeId: "dduYUlh37qE",
    note: "Valentine's Day series of films exploring love on the streets of London.",
  },

  {
    id: "deliveroo-food-that-works",
    title: "Food that works for you",
    client: "Deliveroo for business",
    cats: ["Advertising", "Directing"],
    type: "vimeo",
    thumb: "/projects/deliveroo-food-that-works/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157607404",
    note: "Corporate food delivery but cute-sized.",
  },

  {
    id: "farrow-and-ball-colour-consultancy-decisions",
    title: 'Colour Consultancy • "Decisions decisions"',
    client: "Farrow & Ball",
    cats: ["Advertising"],
    type: "youtube",
    thumb: "/projects/farrow-and-ball-colour-consultancy-decisions/thumb.mp4",
    youtubeId: "x372FHjF15w",
    note: "Launching Colour Consultancy for Farrow & Ball.",
  },

  {
    id: "absolut-born-to-mix-fashion",
    title: "Born to mix",
    client: "Absolut",
    cats: ["Advertising"],
    type: "vimeo",
    thumbs: 
[
"/projects/absolut-born-to-mix-fashion/thumb.mp4",
"/projects/absolut-born-to-mix-fashion/thumb2.mp4",
],
    vimeoId: "1157415405",
    note: "Born to mix campaign for Absolut Vodka starring Tayce.",
  },

  {
    id: "barclays-mascots",
    title: "Top decision makers meet • Sponsorship renewal",
    client: "Barclays",
    cats: ["Advertising"],
    type: "vimeo",
    thumb: "/projects/barclays-mascots/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157429052",
    note: "PR hype for sponsorship renewal.",
  },

  {
    id: "motherhood-because-of-you",
    title: "Because of you",
    client: "Motherhood",
    cats: ["Directing", "Music Videos"],
    type: "vimeo",
    thumb: "/projects/motherhood-because-of-you/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157607777",
    note: "Good grief.",
  },

  {
    id: "linkedin-out-loud",
    title: "LinkedIn Out Loud",
    client: "Personal",
    cats: ["Directing"],
    type: "vimeo",
    thumb: "/projects/linkedin-out-loud/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157607893",
    note: "Have you read your LinkedIn out loud? I might have.",
  },

  {
    id: "shelter-homeless-romantics-nicole-and-tommy",
    title: 'Homeless Romantics • "Nicole & Tommy"',
    client: "Shelter",
    cats: ["Directing"],
    type: "youtube",
    thumb: "/projects/shelter-homeless-romantics-nicole-and-tommy/thumb.mp4",
    youtubeId: "BwMNYnvy-tM",
    note: "Valentine's Day series of films exploring love on the streets of Oxford.",
  },

  {
    id: "disco-biscuits-funeral",
    title: "FUNeral",
    client: "Disco Biscuits",
    cats: ["Advertising", "Directing"],
    type: "vimeo",
    thumb: "/projects/disco-biscuits-funeral/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157401180",
    note: "Launching Disco Biscuits.",
  },

  {
    id: "lancome-hypnose",
    title: "Hypnôse Eau de Parfum",
    client: "Lancôme",
    cats: ["Advertising", "Directing"],
    type: "vimeo",
    thumb: "/projects/lancome-hypnose/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157415471",
    note: "Dazzling lights and original soundtrack for Lancôme's Hypnôse eau de parfum spray.",
  },

  {
    id: "barclays-the-chance",
    title: "It all starts with a chance",
    client: "Barclays",
    cats: ["Advertising"],
    type: "vimeo",
    thumb: "/projects/barclays-the-chance/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157415553",
    note: "Celebrating Barclays Girls' Football School Partnership.",
  },

  {
    id: "toothless-sisyphus",
    title: "Sisyphus",
    client: "Toothless",
    cats: ["Directing", "Music Videos"],
    type: "vimeo",
    thumbs: [
      "/projects/toothless-sisyphus/thumb.mp4",
      "/projects/toothless-sisyphus/thumb2.mp4",
      "/projects/toothless-sisyphus/thumb3.mp4",
      "/projects/toothless-sisyphus/thumb4.mp4",
      "/projects/toothless-sisyphus/thumb5.mp4",
    ],
    vimeoId: "1157933480",
vimeoHash: "230188d62a",
    note: "GIFs gone wild - Sisyphus' torture, retold.",
  },

{
  id: "zag-beer",
  title: "The soft drink disguised as a beer",
  client: "ZAG",
  cats: ["Copywriting", "Advertising"],
  type: "image",
  thumb: "/projects/zag-beer/thumb.mp4",
  src: "/projects/zag-beer/still2.jpeg",
  note: "Reframing non-alcoholic drinking as social camouflage, not self-improvement.",
},

{
  id: "carphone-warehouse-penny",
  title: "Praise the penny-pincher (static)",
  client: "Carphone Warehouse",
  cats: ["Copywriting", "Advertising"],
  type: "image",
  thumb: "/projects/carphone-warehouse-penny/still2.jpg",
  src: "/projects/carphone-warehouse-penny/still2.jpg",
  note: "Scrimpers campaign asset launching a new price-saving positioning.",
},

{
  id: "zag-beer-stealth",
  title: "The soft drink disguised as a beer",
  client: "ZAG",
  cats: ["Copywriting", "Advertising"],
  type: "image",
  thumb: "/projects/zag-beer-stealth/thumb.mp4",
  src: "/projects/zag-beer-stealth/still.jpeg",
  note: "Reframing non-alcoholic drinking as social camouflage, not self-improvement.",
},

  {
    id: "prospa-burns-no-more",
    title: "Burns No More",
    client: "Prospa",
    cats: ["Music Videos"],
    type: "vimeo",
    thumbs: [
      "/projects/prospa-burns-no-more/thumb.mp4",
    ],
    vimeoId: "1158245001",
    note: "",
  },

  {
    id: "linkedin-do-you-follow",
    title: "Do you follow?",
    client: "LinkedIn",
    cats: ["Directing", "Advertising", "Copywriting"],
    type: "vimeo",
    thumbs: [
      "/projects/linkedin-do-you-follow/thumb.mp4",
      "/projects/linkedin-do-you-follow/thumb1.mp4",
    ],
    vimeoId: "1158430521",
    note: ".",
  },

  {
    id: "samsung-tribes",
    title: "Tribes",
    client: "Samsung",
    cats: ["Advertising"],
    type: "vimeo",
    thumbs: [
"/projects/samsung-tribes/thumb1.mp4",
"/projects/samsung-tribes/thumb2.mp4",
],
    vimeoId: "1158238957",
    note: "",
  },

  {
    id: "samsung-defiance",
    title: "Defy barriers",
    client: "Samsung",
    cats: ["Advertising"],
    type: "vimeo",
    thumbs: [
"/projects/samsung-defiance/thumb.mp4",
"/projects/samsung-defiance/thumb2.mp4",
],
    vimeoId: "1158238915",
    note: "",
  },

{
  id: "virgin-money-billionaire",
  title: "Bank better",
  client: "Virgin Money",
  cats: ["Copywriting", "Advertising"],
  type: "image",
  thumb: "/projects/virgin-money-billionaire/thumb.mp4",
  src: "/projects/virgin-money-billionaire/thumb.jpg",
  note: "Reframing non-alcoholic drinking as social camouflage, not self-improvement.",
},

  {
    id: "samsung-leap-day",
    title: "Do what you can't",
    client: "Samsung",
    cats: ["Advertising", "Directing", "Copywriting"],
    type: "vimeo",
    thumb: "/projects/samsung-leap-day/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157414618",
    note: "Leap year is an opportunity to #DoWhatYouCant any other year.",
  },

  {
    id: "micralite-float",
    title: "The best engineering should go unnoticed",
    client: "Micralite",
    cats: ["Directing"],
    type: "vimeo",
    thumb: "/projects/micralite-float/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157401254",
    note: "Launching Micralite.",
  },

  {
    id: "deliveroo-summer-in-the-bag-social",
    title: "Summer in the bag • Delivering to parks",
    client: "Deliveroo",
    cats: ["Advertising", "Directing", "Copywriting"],
    type: "video",
    thumb: "/projects/deliveroo-summer-in-the-bag-social/thumb.mp4",
    src: "/projects/deliveroo-summer-in-the-bag-social/thumb.mp4",
    note: "Social films announcing park delivery.",
  },

  {
    id: "samsung-ssd-motivational",
    title: "Powerful memories",
    client: "Samsung",
    cats: ["Advertising", "Copywriting"],
    type: "video",
    thumb: "/projects/samsung-ssd-motivational/thumb.mp4",
    src: "/projects/samsung-ssd-motivational/thumb.mp4",
    note: "Motivating conversations about memory on social.",
  },

{
  id: "coca-cola-premier-league-comeback",
  title: "Our Official Comeback • Premier League",
  client: "Coca Cola",
  cats: ["Advertising", "Copywriting"],
  type: "image",
  thumb: "/projects/coca-cola-premier-league-comeback/cola.jpeg",
  src: "/projects/coca-cola-premier-league-comeback/cola.jpeg",
  note: "Campaign content marking Coca Cola as returning partner to the Premier League.",
},

{
  id: "barclays-free-tennis-split1",
  title: "Advantage all (static)",
  client: "Barclays",
  cats: ["Copywriting", "Advertising"],
  type: "image",
  thumb: "/projects/barclays-free-tennis-split1/Barclays.jpg",
  src: "/projects/barclays-free-tennis-split1/Barclays.jpg",
  note: "",
},

{
  id: "barclays-football-opens-doors-confidence",
  title: "Football opens doors • Community Football Fund",
  client: "Barclays",
  cats: ["Copywriting", "Advertising"],
  type: "image",
  thumb: "/projects/barclays-football-opens-doors-confidence/still.jpg",
  src: "/projects/barclays-football-opens-doors-confidence/still.jpg",
  note: "Scrimpers campaign asset launching a new price-saving positioning.",
},

  {
    id: "penny-lane-who-do-you-think-you-are",
    title: "Who do you think you are?",
    client: "Penny Lane",
    cats: ["Directing", "Music Videos"],
    type: "vimeo",
 thumbs: [
"/projects/penny-lane-who-do-you-think-you-are/thumb1.mp4",
"/projects/penny-lane-who-do-you-think-you-are/thumb2.mp4",
"/projects/penny-lane-who-do-you-think-you-are/thumb3.mp4",
"/projects/penny-lane-who-do-you-think-you-are/thumb4.mp4",
    ],
    vimeoId: "1157927047",
    note: "",
  },

  {
    id: "old-el-paso-super-bowl",
    title: "For a super bowl",
    client: "Old El Paso",
    cats: ["Advertising"],
    type: "vimeo",
    thumb: "/projects/old-el-paso-super-bowl/thumb.mp4",
    vimeoId: "1157427149",
    note: "Social content for Old El Paso x NFL.",
  },

  {
    id: "toothless-terra",
    title: "Terra",
    client: "Toothless",
    cats: ["Directing", "Music Videos"],
    type: "vimeo",
 thumbs: [
"/projects/toothless-terra/thumb.mp4",
"/projects/toothless-terra/thumb4.mp4",
    ],
    vimeoId: "1157926469",
    note: "",
  },

{
  id: "barclays-free-tennis-freed",
  title: "Tennis, freed.",
  client: "Barclays",
  cats: ["Advertising", "Copywriting"],
  type: "image",
  thumb: "/projects/barclays-free-tennis-freed/freed.png",
  src: "/projects/barclays-free-tennis-freed/freed.png",
  note: "Launching Free Park Tennis to serve more people across the UK.",
},

  {
    id: "linkedin-bring-your-parents-2015",
    title: "Bring your parents to work day",
    client: "LinkedIn",
    cats: ["Directing", "Advertising"],
    type: "vimeo",
 thumbs: [
"/projects/linkedin-bring-your-parents-2015/thumb.mp4",
    ],
    vimeoId: "1157936699",
    note: "",
  },

  {
    id: "i-d-party-colours",
    title: "Party Colours • General Election",
    client: "i-D Magazine",
    cats: ["Advertising", "Directing", "Copywriting"],
    type: "vimeo",
    thumb: "/projects/i-d-party-colours/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157427169",
    note: "*Back when torqouise was purple.",
  },

  {
    id: "toothless-sirens",
    title: "Sirens",
    client: "Toothless",
    cats: ["Directing", "Music Videos"],
    type: "vimeo",
 thumbs: [
"/projects/toothless-sirens/thumb1.mp4",
"/projects/toothless-sirens/thumb2.mp4",
"/projects/toothless-sirens/thumb3.mp4",
"/projects/toothless-sirens/thumb4.mp4",
    ],
    vimeoId: "1157927595",
    note: "",
  },

  {
    id: "smart-things-home-mug",
    title: "Your home in your hands ",
    client: "Samsung SmartThings",
    cats: ["Directing", "Advertising", "Copywriting"],
    type: "video",
    thumb: "/projects/smart-things-home-mug/thumb.mp4",
    src: "/projects/smart-things-home-mug/thumb.mp4",
    note: "",
  },

  {
    id: "lexus-no-competition",
    title: "No Co₂mpetition",
    client: "Lexus",
    cats: ["Advertising", "Copywriting"],
    type: "image",
    thumb: "/projects/lexus-no-competition/thumb.jpg",
    src: "/projects/lexus-no-competition/thumb.jpg",
    note: "",
  },

  {
    id: "smart-things-lamp",
    title: "Your home in your hands • GIF",
    client: "Samsung SmartThings",
    cats: ["Advertising", "Copywriting"],
    type: "image",
    thumb: "/projects/smart-things-lamp/SmartThings-hand.jpg",
    src: "/projects/smart-things-lamp/SmartThings-hand.jpg",
    note: "",
  },

  {
    id: "hammerson-gift-voucher",
    title: "If they don't know, how will you? • Gift voucher",
    client: "Hammerson",
    cats: ["Directing"],
    type: "vimeo",
 thumbs: [
"/projects/hammerson-gift-voucher/thumb.mp4",
    ],
    vimeoId: "1157937190",
    note: "",
  },

{
  id: "barclays-land-of-football-collage",
  title: "The Land of Football",
  client: "Barclays",
  cats: ["Copywriting", "Advertising"],
  type: "image",
  thumb: "/projects/barclays-land-of-football-collage/portrait.jpg",
  src: "/projects/barclays-land-of-football-collage/landscape.jpg",
  note: "Showcasing Barclays' role in UK football, from grassroots to grandstands.",
},

  {
    id: "linkedin-bring-your-parents-2016",
    title: "Bring your parents to work day",
    client: "LinkedIn",
    cats: ["Directing", "Advertising"],
    type: "vimeo",
 thumbs: [
"/projects/linkedin-bring-your-parents-2016/thumb.mp4",
    ],
    vimeoId: "1157936206",
    note: "",
  },

{
  id: "argos-colour-match-toaster",
  title: "For colours that love eachother",
  client: "Argos Colour Match",
  cats: ["Copywriting", "Advertising"],
  type: "image",
  thumb: "/projects/argos-colour-match-toaster/colourmatch.jpg",
  src: "/projects/argos-colour-match-toaster/colourmatch.jpg",
  note: "",
},

  {
    id: "sam-fender-aye",
    title: "Aye",
    client: "Sam Fender",
    cats: ["Directing", "Music Videos"],
    type: "vimeo",
 thumbs: [
"/projects/sam-fender-aye/thumb1.mp4",
"/projects/sam-fender-aye/thumb2.mp4",
"/projects/sam-fender-aye/thumb3.mp4",
    ],
    vimeoId: "1159283813",
    note: "",
  },

  {
    id: "british-gas-roof-open",
    title: "Are you leaving your roof open?",
    client: "British Gas",
    cats: ["Advertising", "Copywriting"],
    type: "image",
    thumb: "/projects/british-gas-roof-open/thumb.jpg",
    src: "/projects/british-gas-roof-open/thumb.jpg",
    note: "",
  },

  {
    id: "old-el-paso-tortilla-apron",
    title: "The Tortillapron Prize",
    client: "Old El Paso",
    cats: ["Advertising"],
    type: "vimeo",
    thumb: "/projects/old-el-paso-tortilla-apron/thumb.mp4",
    vimeoId: "1157426898",
    note: "Messy cook? Win an apron made of tortilla from Old El Paso x NFL.",
  },

{
  id: "barclays-free-tennis-split1",
  title: "Advantage all (static)",
  client: "Barclays",
  cats: ["Advertising"],
  type: "image",
  thumb: "/projects/barclays-free-tennis-split1/thumb.png",
  src: "/projects/barclays-free-tennis-split1/thumb.png",
  note: "Campaign to launch the LTA partnership offering free park tennis across the UK.",
},

{
  id: "hellmanns-ketchup-tomatoes",
  title: "Tomatoes Ketchup",
  client: "Hellmann's",
  cats: ["Copywriting", "Advertising"],
  type: "image",
  thumb: "/projects/hellmanns-ketchup-tomatoes/still.png",
  src: "/projects/hellmanns-ketchup-tomatoes/still.png",
  note: "",
},

  {
    id: "trophy-wife-wolf",
    title: "Wolf",
    client: "Trophy  Wife",
    cats: ["Directing", "Music Videos"],
    type: "vimeo",
 thumbs: [
"/projects/trophy-wife-wolf/thumb.mp4",
"/projects/trophy-wife-wolf/thumb2.mp4",
    ],
    vimeoId: "1157934109",
    note: "",
  },

  {
    id: "caught-short",
    title: "If you don't give people toilets, the city becomes one",
    client: "British Toilet Association",
    cats: ["Directing", "Advertising"],
    type: "vimeo",
 thumbs: [
"/projects/caught-short/thumb1.mp4",
"/projects/caught-short/thumb2.mp4",
    ],
    vimeoId: "1157934560",
    note: "If there isn't anywhere left to go, people will go anywhere. Bring back public toilets.",
  },

  {
    id: "songhoy-blues-yersi-yadda",
    title: "Yersi Yadda",
    client: "Songhoy Blues",
    cats: ["Music Videos", "Directing"],
    type: "vimeo",
 thumbs: [
"/projects/songhoy-blues-yersi-yadda/thumb1.mp4",
"/projects/songhoy-blues-yersi-yadda/thumb2.mp4",
"/projects/songhoy-blues-yersi-yadda/thumb3.mp4",
"/projects/songhoy-blues-yersi-yadda/thumb4.mp4",
"/projects/songhoy-blues-yersi-yadda/thumb5.mp4",
    ],
    vimeoId: "1158108985",
    note: "",
  },

{
  id: "zag-hardest-soft",
  title: "The soft drink disguised as a beer",
  client: "ZAG",
  cats: ["Copywriting", "Advertising"],
  type: "image",
  thumb: "/projects/zag-hardest-soft/thumb.mp4",
  src: "/projects/zag-hardest-soft/still.jpeg",
  note: "Reframing non-alcoholic drinking as social camouflage, not self-improvement.",
},

  {
    id: "cadburys-danger-zone",
    title: "Danger Zone • Team GB sponsorship",
    client: "Cadbury",
    cats: ["Music Videos", "Advertising"],
    type: "vimeo",
 thumbs: [
"/projects/cadburys-danger-zone/thumb.mp4",
"/projects/cadburys-danger-zone/thumb2.mp4",
    ],
    vimeoId: "1157933833",
    note: ".",
  },

{
  id: "big-yellow-cats",
  title: "I just need some space right now",
  client: "Big Yellow Storage Company",
  cats: ["Copywriting", "Advertising"],
  type: "image",
  thumb: "/projects/big-yellow-cats/still.png",
  src: "/projects/big-yellow-cats/still.png",
  note: "",
},


  {
    id: "verse-vicer-lets-try-tonight",
    title: "Let's try tonight",
    client: "Verse Vicer",
    cats: ["Directing", "Music Videos"],
    type: "vimeo",
    thumbs: [
      "/projects/verse-vicer-lets-try-tonight/thumb.mp4",
    ],
    vimeoId: "1158109338",
    note: "Teaser film.",
  },

  {
    id: "voxi-eyelashes",
    title: "Eyelashetc. • GIF",
    client: "VOXI",
    cats: ["Directing"],
    type: "video",
    thumb: "/projects/voxi-eyelashes/thumb.mp4",
    src: "/projects/voxi-eyelashes/thumb.mp4",
    note: "",
  },

  {
    id: "cadbury-simply-the-best",
    title: "Simply The Best • Team GB sponsorship",
    client: "Cadbury",
    cats: ["Music Videos", "Advertising"],
    type: "vimeo",
 thumbs: [
"/projects/cadbury-simply-the-best/thumb.mp4",
"/projects/cadbury-simply-the-best/thumb1.mp4",
"/projects/cadbury-simply-the-best/thumb2.mp4",
    ],
    vimeoId: "1158109507",
    note: ".",
  },

  {
    id: "voxi-ice-cream",
    title: "Ice cream • GIF",
    client: "VOXI",
    cats: ["Directing"],
    type: "video",
    thumb: "/projects/voxi-ice-cream/thumb1.mp4",
    src: "/projects/voxi-ice-cream/thumb.mp4",
    note: "",
  },

 {
    id: "voxi-emoticon",
    title: "Emoticon Projections • GIF",
    client: "VOXI",
    cats: ["Directing"],
    type: "video",
    thumb: "/projects/voxi-emoticon/thumb1.mp4",
    src: "/projects/voxi-emoticon/thumb1.mp4",
    note: "",
  },

 {
    id: "voxi-necklace",
    title: "2D printed jewellery • GIF",
    client: "VOXI",
    cats: ["Directing"],
    type: "video",
    thumb: "/projects/voxi-necklace/thumb1.mp4",
    src: "/projects/voxi-necklace/thumb1.mp4",
    note: "",
  },

  {
    id: "cadbury-keep-singing-campaign",
    title: "Campaign summary • Team GB sponsorship",
    client: "Cadbury",
    cats: ["Music Videos", "Advertising"],
    type: "vimeo",
 thumbs: [
"/projects/cadbury-keep-singing-campaign/thumb.mp4",
    ],
    vimeoId: "1157935064",
    note: ".",
  },

  {
    id: "cadbury-joyville-made",
    title: "Chocolate Customisation Website",
    client: "Cadbury",
    cats: ["Directing", "Copywriting"],
    type: "vimeo",
    thumbs: [
      "/projects/cadbury-joyville-made/thumb.mp4",
"/projects/cadbury-joyville-made/thumb2.mp4",
    ],
    vimeoId: "1158430570",
    note: ".",
  },

  {
    id: "british-gas-sponsorship",
    title: "Sponsors of Property on 4",
    client: "British Gas x Channel 4",
    cats: ["Advertising"],
    type: "vimeo",
 thumbs: [
"/projects/british-gas-sponsorship/thumb.mp4",
    ],
    vimeoId: "1158127783",
    note: "",
  },

  {
    id: "beefeater-spirit-of-london",
    title: "The Spirit of London",
    client: "Beefeater London Dry Gin",
    cats: ["Advertising", "Copywriting"],
    type: "vimeo",
 thumbs: [
"/projects/beefeater-spirit-of-london/thumb.mp4",
"/projects/beefeater-spirit-of-london/thumb1.mp4",
    ],
    vimeoId: "1158128514",
    note: "",
  },

  {
    id: "ted-baker-window",
    title: "Spring Window",
    client: "Ted Baker",
    cats: ["Copywriting"],
    type: "image",
    thumb: "/projects/ted-baker-window/still.jpeg",
    src: "/projects/ted-baker-window/still.jpeg",
    note: "Copywriting and art-direction for the spring window.",
  },

  {
    id: "hailo-monster",
    title: "Monster mini cab",
    client: "HAILO",
    cats: ["Stunts"],
    type: "image",
    thumb: "/projects/hailo-monster/thumb.jpeg",
    src: "/projects/hailo-monster/thumb.jpeg",
    note: "",
  },

  {
    id: "what-election-short",
    title: "What election?",
    client: "Go Vote!",
    cats: ["Directing"],
    type: "vimeo",
 thumbs: [
"/projects/what-election-short/thumb.mp4",
"/projects/what-election-short/thumb1.mp4",
"/projects/what-election-short/thumb3.mp4",
    ],
    vimeoId: "1157935861",
    note: ".",
  },

 {
    id: "hailo-monster",
    title: "1000 mini cabs on your phone",
    client: "HAILO",
    cats: ["Stunts"],
    type: "image",
    thumb: "/projects/hailo-mini/hailo-mini.jpg",
    src: "/projects/hailo-mini/hailo-mini.jpg",
    note: "",
  },

  {
    id: "barclays-wimbledon-tiafoe",
    title: "Together we create possibilities • Wimbledon partnership",
    client: "Barclays",
    cats: ["Advertising"],
    type: "vimeo",
    thumbs: [
"/projects/barclays-wimbledon-tiafoe/thumb1.mp4",
"/projects/barclays-wimbledon-tiafoe/thumb3.mp4",
],
    vimeoId: "1159239744",
    note: "",
  },

 {
    id: "voxi-bear",
    title: "Teddy bare • GIF",
    client: "VOXI",
    cats: ["Directing"],
    type: "video",
    thumb: "/projects/voxi-bear/thumb.mp4",
    src: "/projects/voxi-bear/thumb.mp4",
    note: "",
  },

  {
    id: "shelter-homeless-romantics-manoel",
    title: 'Homeless Romantics • "Manoel"',
    client: "Shelter",
    cats: ["Directing"],
    type: "youtube",
    thumb: "/projects/shelter-homeless-romantics-manoel/thumb.mp4",
    youtubeId: "7Y5nsNnElj4",
    note: "Valentine's Day series of films exploring love on the streets of London.",
  },

  {
    id: "nokia-180",
    title: "180° Freeze • Experiential",
    client: "Nokia",
    cats: ["Advertising"],
    type: "vimeo",
 thumbs: [
"/projects/nokia-180/thumb.mp4",
"/projects/nokia-180/thumb2.mp4",
    ],
    vimeoId: "1158431718",
    note: "",
  },

 {
    id: "voxi-cold-therapy",
    title: "Cold therapy • GIF",
    client: "VOXI",
    cats: ["Directing"],
    type: "video",
    thumb: "/projects/voxi-cold-therapy/thumb.mp4",
    src: "/projects/voxi-cold-therapy/thumb.mp4",
    note: "",
  },

 {
    id: "carphone-warehouse-toddlers",
    title: "Toddler tablet test",
    client: "Carphone Warehouse",
    cats: ["Advertising",],
    type: "vimeo",
    thumb: "/projects/carphone-warehouse-toddlers/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1158609157",
    note: "",
  },

  {
    id: "cadbury-bts",
    title: "Olympic Sponsors • BTS content",
    client: "Cadbury",
    cats: ["Music Videos", "Advertising"],
    type: "vimeo",
 thumbs: [
"/projects/cadbury-bts/thumb.mp4",
    ],
    vimeoId: "1158430697",
    note: "Great working with a young Taika Waititi.",
  },

  {
    id: "cadbury-wispa-gold",
    title: "Wispa Gold • Team GB sponsorship",
    client: "Cadbury",
    cats: ["Music Videos", "Advertising"],
    type: "vimeo",
 thumbs: [
"/projects/cadbury-wispa-gold/thumb.mp4",
    ],
    vimeoId: "1157937520",
    note: ".",
  },

  {
    id: "british-gas-chilly",
    title: "Nobody wants to wake up to a chilly home",
    client: "British Gas",
    cats: ["Advertising"],
    type: "vimeo",
 thumbs: [
"/projects/british-gas-chilly/thumb.mp4",
"/projects/british-gas-chilly/thumb2.mp4",
    ],
    vimeoId: "1158432667",
    note: "",
  },

 {
    id: "voxi-trout-pout",
    title: "Trout pout • GIF",
    client: "VOXI",
    cats: ["Directing"],
    type: "video",
    thumb: "/projects/voxi-trout-pout/thumb1.mp4",
    src: "/projects/voxi-trout-pout/thumb.mp4",
    note: "",
  },

 {
    id: "voxi-veils",
    title: "Cross • GIF",
    client: "VOXI",
    cats: ["Directing"],
    type: "video",
    thumb: "/projects/voxi-veils/thumb.mp4",
    src: "/projects/voxi-veils/thumb.mp4",
    note: "",
  },

  {
    id: "trophy-wife-quiet",
    title: "The Quiet Earth",
    client: "Trophy Wife",
    cats: ["Directing", "Music Videos"],
    type: "vimeo",
    thumb: "/projects/trophy-wife-quiet/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157607604",
    note: "",
  },

  {
    id: "trophy-wife-microlite",
    title: "Microlite",
    client: "Trophy  Wife",
    cats: ["Directing", "Music Videos"],
    type: "vimeo",
 thumbs: [
"/projects/trophy-wife-microlite/thumb.mp4",
"/projects/trophy-wife-microlite/thumb2.mp4",
    ],
    vimeoId: "1157935469",
    note: "",
  },

{
  id: "illustrated-ape-photography",
  title: "Photography Edition • Magazine art-direction",
  client: "The Illustrated Ape",
  cats: [],
  type: "image",
  thumb: "/projects/illustrated-ape-photography/cover.jpg",
  src: "/projects/illustrated-ape-photography/cover.jpg",
  note: "Art-directed 26th issue of The Illustrated Ape.",
},

  {
    id: "carphone-warehouse-scrimpers-rap",
    title: "Scrimpers unite • Adam Buxton Remix",
    client: "Carphone Warehouse",
    cats: ["Advertising"],
    type: "vimeo",
    thumbs: [
"/projects/carphone-warehouse-scrimpers-rap/thumb.mp4",
"/projects/carphone-warehouse-scrimpers-rap/thumb1.mp4",
],
    vimeoId: "1158840340",
    note: "Extended edit of campaign film with new lyrics.",
  },

  {
    id: "saviours",
    title: "Saviours",
    client: "Music video",
    cats: ["Directing", "Music Videos"],
    type: "vimeo",
    thumb: "/projects/saviours/thumb.mp4", // ✅ your loop file (now supported)
    vimeoId: "1157608089",
    note: "",
  },
];

let state = {
  query: "",
  activeCat: "All",
  expandedId: null,
  infoOpen: false,
  mobileSearchOpen: false,
};

function escapeHtml(str = "") {
  return String(str).replace(/[&<>"\']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[m]));
}

function isMobile() {
  return window.matchMedia && window.matchMedia("(max-width: 780px)").matches;
}

function matchesFilters(p) {
  const q = state.query.trim().toLowerCase();
  const catOk = state.activeCat === "All" || (p.cats || []).includes(state.activeCat);
  if (!catOk) return false;
  if (!q) return true;

  const hay = `${p.title} ${p.client} ${(p.cats || []).join(" ")}`.toLowerCase();
  return hay.includes(q);
}

function getProjectById(id) {
  return PROJECTS.find((p) => p.id === id) || null;
}

function mediaHtmlFor(p, isExpanded) {
  const mediaHeight = isExpanded ? 520 : 0;

  const thumbSrc = resolveThumb(p);
  const thumbIsMp4 = typeof thumbSrc === "string" && thumbSrc.toLowerCase().endsWith(".mp4");

  if (p.type === "vimeo") {
    // Vimeo thumbs can be either an image or an MP4 loop
    // Vimeo embeds: support optional hashed URLs via p.vimeoHash
    const vimeoSrc = `https://player.vimeo.com/video/${p.vimeoId}${
      p.vimeoHash ? `?h=${p.vimeoHash}&` : `?`
    }title=0&byline=0&portrait=0`;

    return isExpanded
      ? `
        <div class="embedCover" style="--embedH:${mediaHeight}px">
          <iframe
            src="${vimeoSrc}"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      `
      : (thumbIsMp4
          ? `<video class="thumb loopVid" src="${thumbSrc}" autoplay muted loop playsinline preload="metadata"></video>`
          : `<img class="thumb" src="${thumbSrc}" alt="${escapeHtml(p.title)}" loading="lazy" />`);
  }

  if (p.type === "youtube") {
    return isExpanded
      ? `
        <div class="embedCover" style="--embedH:${mediaHeight}px">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${p.youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      `
      : (thumbIsMp4
        ? `<video class="thumb loopVid" src="${thumbSrc}" autoplay muted loop playsinline preload="metadata"></video>`
        : `<img class="thumb" src="${thumbSrc}" alt="${escapeHtml(p.title)}" loading="lazy" />`);
  }

  if (p.type === "video") {
    // Keep your existing behaviour: loop thumb video in the tile
    return `<video class="thumb" src="${thumbSrc}" autoplay muted loop playsinline></video>`;
  }

  if (p.type === "image") {
    // Collapsed: show thumb (MP4 loop or still)
    // Expanded: show src (still) if provided, otherwise fall back to thumb
    if (isExpanded && p.src) {
      return `<img class="thumb" src="${p.src}" alt="${escapeHtml(p.title)}" loading="lazy" />`;
    }
    return (thumbIsMp4
      ? `<video class="thumb loopVid" src="${thumbSrc}" autoplay muted loop playsinline preload="metadata"></video>`
      : `<img class="thumb" src="${thumbSrc}" alt="${escapeHtml(p.title)}" loading="lazy" />`);
  }

  return "";
}

function updateCardDom(p, isExpanded) {
  const card = document.getElementById(`card-${p.id}`);
  if (!card) return;

  card.classList.toggle("expanded", !!isExpanded);

  const mediaWrap = card.querySelector(".mediaWrap");
  if (mediaWrap) {
    // Swap ONLY this card's media instead of rerendering the entire grid (prevents black flash + reload)
    mediaWrap.innerHTML = mediaHtmlFor(p, !!isExpanded);
  }

  const existingOverlay = card.querySelector(".detailsOverlay");
  if (isExpanded) {
    const overlayHtml = overlayDetailsHtml(p);
    if (existingOverlay) existingOverlay.outerHTML = overlayHtml;
    else card.insertAdjacentHTML("beforeend", overlayHtml);
  } else {
    if (existingOverlay) existingOverlay.remove();
  }
}

function scrollExpandedIntoView(card) {
  if (!card) return;

  const topbar = document.querySelector(".topbar");
  const topbarH = topbar ? topbar.getBoundingClientRect().height : 0;

  // Keep the expanded card comfortably below the sticky topbar
  const safeTop = topbarH + 12;
  const safeBottom = 12;

  const r = card.getBoundingClientRect();
  const needsUp = r.top < safeTop;
  const needsDown = r.bottom > (window.innerHeight - safeBottom);

  if (!needsUp && !needsDown) return;

  // Prefer minimal scroll rather than centering (centering can overshoot and feel jumpy)
  const delta = needsUp ? (r.top - safeTop) : (r.bottom - (window.innerHeight - safeBottom));
  window.scrollBy({ top: delta, behavior: "smooth" });
}

function toggleExpanded(id) {
  const prevId = state.expandedId;
  const nextId = prevId === id ? null : id;

  state.expandedId = nextId;

  // If the grid isn't present (e.g. first load), fall back to a full render.
  const grid = document.getElementById("grid");
  if (!grid) {
    render();
    return;
  }

  // Collapse previous card (DOM-only, no full rerender)
  if (prevId) {
    const pPrev = getProjectById(prevId);
    if (pPrev) updateCardDom(pPrev, false);
  }

  // Expand next card (DOM-only, no full rerender)
  if (nextId) {
    const pNext = getProjectById(nextId);
    if (pNext) updateCardDom(pNext, true);
  }

  // Re-layout after swapping media, and ensure the expanded card stays in view
  requestAnimationFrame(() => {
    attachLoadListeners();
    layoutMasonry();

    const target = nextId ? document.getElementById(`card-${nextId}`) : null;
    scrollExpandedIntoView(target);

    // One extra pass after media/iframes begin loading to prevent "opened out of frame"
    setTimeout(() => {
      layoutMasonry();
      scrollExpandedIntoView(target);
    }, 220);
  });
}

function closeExpanded() {
  if (!state.expandedId) return;

  const prevId = state.expandedId;
  state.expandedId = null;

  const pPrev = getProjectById(prevId);
  if (pPrev) updateCardDom(pPrev, false);

  requestAnimationFrame(() => {
    attachLoadListeners();
    layoutMasonry();

    const target = document.getElementById(`card-${prevId}`);
    // Keep the collapsed tile in view too (feels consistent)
    scrollExpandedIntoView(target);
  });
}

function openInfo() {
  state.infoOpen = true;
  render();
}

function closeInfo() {
  state.infoOpen = false;
  render();
}

function clearSearchState() {
  state.query = "";
  state.mobileSearchOpen = false;
}

function resetHome() {
  state.activeCat = "All";
  clearSearchState();
  state.expandedId = null;
  state.infoOpen = false;
  render();
}

window.toggleExpanded = toggleExpanded;
window.closeExpanded = closeExpanded;
window.openInfo = openInfo;
window.closeInfo = closeInfo;
window.resetHome = resetHome;

// ------- Mobile search DOM helpers (no rerender needed) -------
function openMobileSearchAndFocus() {
  const wrap = document.getElementById("searchWrap");
  const input = document.getElementById("searchInput");
  if (!wrap || !input) return;

  wrap.classList.add("open");
  state.mobileSearchOpen = true;

  try {
    input.focus({ preventScroll: true });
  } catch {
    input.focus();
  }
  const end = input.value.length;
  input.setSelectionRange(end, end);
}

function closeMobileSearch() {
  const wrap = document.getElementById("searchWrap");
  if (!wrap) return;
  wrap.classList.remove("open");
  state.mobileSearchOpen = false;
}

// ------- Random thumbnail support (opt-in) -------
// If a project defines `thumbs: [...]`, pick ONE at random per page-load,
// then keep it stable across re-renders (so masonry doesn't flicker).
const __thumbPickById = Object.create(null);

function resolveThumb(p) {
  const arr = Array.isArray(p.thumbs) ? p.thumbs.filter(Boolean) : null;
  if (arr && arr.length) {
    const key = p.id || p.title || String(arr);
    if (!(key in __thumbPickById)) {
      __thumbPickById[key] = arr[Math.floor(Math.random() * arr.length)];
    }
    return __thumbPickById[key];
  }
  return p.thumb;
}
// ------------------------------------------------

// ------------------------------------------------------------

function render(options = {}) {
  const { keepSearchFocus = false, searchCaret = null } = options;

  const filtered = PROJECTS.filter(matchesFilters);
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <div class="topbar">
      <div class="topbar-inner">
        <button class="brandName brandBtn" type="button" id="brandBtn">${
                  PICKED_BRAND_MARK
                    ? '<img src="' + PICKED_BRAND_MARK + '" alt="Joseph Keirs" class="brandLogo" draggable="false" />'
                    : 'JOSEPH KEIRS'
                }</button>

        <div class="rightControls">
          <div class="searchPill ${state.mobileSearchOpen ? "open" : ""}" id="searchWrap">
            <button class="searchIconBtn" id="searchIconBtn" type="button" aria-label="Search">
              <span class="searchIcon" aria-hidden="true">🔎</span>
            </button>
            <input id="searchInput" placeholder="Search…" value="${escapeHtml(state.query)}" />
          </div>

          <button class="infoBtn" id="infoBtn" type="button">Info</button>
        </div>

        <div class="filters" id="filters">
          ${CATEGORIES.map(c => `
            <button class="filterBtn ${c === state.activeCat ? "active" : ""}" data-cat="${escapeHtml(c)}" type="button">
              ${escapeHtml(c)}
            </button>
          `).join("")}
        </div>
      </div>
    </div>

    <div class="container">
      <div class="masonryGrid" id="grid">
        ${filtered.map(tileHtml).join("")}
      </div>
    </div>

    ${aboutDrawerHtml()}
  `;

  const brandBtn = document.getElementById("brandBtn");
  if (brandBtn) {
    brandBtn.onclick = () => resetHome();
  }

  const infoBtn = document.getElementById("infoBtn");
  if (infoBtn) infoBtn.onclick = () => openInfo();

  const filters = document.getElementById("filters");
  if (filters) {
    filters.onclick = (e) => {
      const btn = e.target.closest("button[data-cat]");
      if (!btn) return;
      state.activeCat = btn.dataset.cat;
      clearSearchState();
      state.expandedId = null;
      render();
    };
  }

  const searchIconBtn = document.getElementById("searchIconBtn");
  if (searchIconBtn) {
    searchIconBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMobile()) openMobileSearchAndFocus();
      else {
        const input = document.getElementById("searchInput");
        if (input) input.focus();
      }
    };
  }

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.oninput = (e) => {
      const caret = e.target.selectionStart;
      state.query = e.target.value;
      state.expandedId = null;
      if (isMobile()) state.mobileSearchOpen = true;
      render({ keepSearchFocus: true, searchCaret: caret });
    };

    if (keepSearchFocus) {
      requestAnimationFrame(() => {
        const el = document.getElementById("searchInput");
        if (!el) return;
        el.focus();
        if (typeof searchCaret === "number") el.setSelectionRange(searchCaret, searchCaret);
        else {
          const end = el.value.length;
          el.setSelectionRange(end, end);
        }
      });
    }
  }

  window.onclick = (e) => {
    if (!isMobile()) return;
    const wrap = document.getElementById("searchWrap");
    if (!wrap) return;
    if (!wrap.contains(e.target)) closeMobileSearch();
  };

  window.onkeydown = (e) => {
    if (e.key === "Escape") {
      if (state.infoOpen) closeInfo();
      else if (state.expandedId) closeExpanded();
      else if (isMobile()) closeMobileSearch();
    }
  };

  requestAnimationFrame(() => {
    attachLoadListeners();
    layoutMasonry();
  });
}

function tileHtml(p) {
  const isExpanded = state.expandedId === p.id;
  const mediaHeight = isExpanded ? 520 : 0;

  const thumbSrc = resolveThumb(p);

  const thumbIsMp4 = typeof thumbSrc === "string" && thumbSrc.toLowerCase().endsWith(".mp4");

  let media = "";

  if (p.type === "vimeo") {
    // ✅ Vimeo thumbs can be either an image or an MP4 loop
    // ✅ Vimeo embeds: support optional hashed URLs via p.vimeoHash
    const vimeoSrc = `https://player.vimeo.com/video/${p.vimeoId}${
      p.vimeoHash ? `?h=${p.vimeoHash}&` : `?`
    }title=0&byline=0&portrait=0`;

    media = isExpanded
      ? `
        <div class="embedCover" style="--embedH:${mediaHeight}px">
          <iframe
            src="${vimeoSrc}"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      `
      : (thumbIsMp4
          ? `<video class="thumb loopVid" src="${thumbSrc}" autoplay muted loop playsinline preload="metadata"></video>`
          : `<img class="thumb" src="${thumbSrc}" alt="${escapeHtml(p.title)}" loading="lazy" />`);
  } else if (p.type === "youtube") {
    media = isExpanded
      ? `
        <div class="embedCover" style="--embedH:${mediaHeight}px">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${p.youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      `
      : (thumbIsMp4
        ? `<video class="thumb loopVid" src="${thumbSrc}" autoplay muted loop playsinline preload="metadata"></video>`
        : `<img class="thumb" src="${thumbSrc}" alt="${escapeHtml(p.title)}" loading="lazy" />`);
  } else if (p.type === "video") {
    media = `<video class="thumb" src="${thumbSrc}" autoplay muted loop playsinline></video>`;
} else if (p.type === "image") {
  // ✅ Collapsed: show thumb (MP4 loop or still)
  // ✅ Expanded: show src (still) if provided, otherwise fall back to thumb
  if (isExpanded && p.src) {
    media = `<img class="thumb" src="${p.src}" alt="${escapeHtml(p.title)}" loading="lazy" />`;
  } else {
    media = (thumbIsMp4
      ? `<video class="thumb loopVid" src="${thumbSrc}" autoplay muted loop playsinline preload="metadata"></video>`
      : `<img class="thumb" src="${thumbSrc}" alt="${escapeHtml(p.title)}" loading="lazy" />`);
  }
}



  return `
    <div class="card ${isExpanded ? "expanded" : ""}" id="card-${p.id}" onclick="toggleExpanded('${p.id}')">
      <div class="mediaWrap">${media}</div>

      <div class="meta">
        <div class="name">${escapeHtml(p.title)}</div>
        <div class="small">${escapeHtml(p.client)}</div>
      </div>

      ${isExpanded ? overlayDetailsHtml(p) : ""}
    </div>
  `;
}

function overlayDetailsHtml(p) {
  const tags = (p.cats || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("");
  const note = p.note ? `<div class="note">${escapeHtml(p.note)}</div>` : "";

  return `
    <div class="detailsOverlay" onclick="event.stopPropagation()">
      <div class="detailsLeft">
        ${note}
        <div class="tags">${tags}</div>
      </div>
      <button class="closeFab" onclick="closeExpanded()" aria-label="Close" type="button">✕</button>
    </div>
  `;
}

function aboutDrawerHtml() {
  if (!state.infoOpen) return "";
  return `
    <div class="drawerBackdrop" onclick="closeInfo()">
      <div class="drawer" onclick="event.stopPropagation()">
        <div class="drawerTop">
          <h2>Info</h2>
          <button class="closeFab" onclick="closeInfo()" aria-label="Close" type="button">✕</button>
        </div>
        <p>Senior Creative. London.</p>
        <p>
          <a href="mailto:jkeirs@gmail.com">Email</a><br/>
          <a href="https://www.linkedin.com/in/keirs" target="_blank" rel="noreferrer">LinkedIn</a><br/>
        </p>
      </div>
    </div>
  `;
}

function layoutMasonry() {
  const grid = document.getElementById("grid");
  if (!grid) return;

  const styles = window.getComputedStyle(grid);
  const row = parseFloat(styles.getPropertyValue("grid-auto-rows")) || 8;
  const gapStr = styles.getPropertyValue("row-gap") || styles.getPropertyValue("gap") || "0";
  const gap = parseFloat(gapStr) || 0;

  grid.querySelectorAll(".card").forEach(card => {
    card.style.gridRowEnd = "";
    const h = card.getBoundingClientRect().height;
    const span = Math.max(1, Math.ceil((h + gap) / (row + gap)));
    card.style.gridRowEnd = `span ${span}`;
  });
}

function attachLoadListeners() {
  const grid = document.getElementById("grid");
  if (!grid) return;

  grid.querySelectorAll("img,video").forEach(el => {
    if (el.dataset.bound) return;
    el.dataset.bound = "1";
    el.addEventListener("load", layoutMasonry, { once: true });
    el.addEventListener("loadedmetadata", layoutMasonry, { once: true });
    el.addEventListener("error", () => layoutMasonry(), { once: true });
  });

  grid.querySelectorAll("iframe").forEach(el => {
    if (el.dataset.bound) return;
    el.dataset.bound = "1";
    el.addEventListener("load", () => {
      requestAnimationFrame(layoutMasonry);
      setTimeout(layoutMasonry, 180);
      setTimeout(layoutMasonry, 420);
    }, { once: true });
  });

  setTimeout(layoutMasonry, 120);
  setTimeout(layoutMasonry, 300);
  setTimeout(layoutMasonry, 700);
}

let resizeTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    layoutMasonry();
    setTimeout(layoutMasonry, 180);
    setTimeout(layoutMasonry, 420);
  }, 120);
});

render();
