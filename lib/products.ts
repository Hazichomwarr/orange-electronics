// lib/products.ts

export type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  brand?: string;
  desc: string;
  tag?: string;
  imagSrc?: string;
};

export const productCatalog: Product[] = [
  // ======================
  // PHONES
  // ======================

  {
    id: 1,
    name: "Samsung",
    price: "From $120",
    category: "phones",
    desc: "Affordable Samsung smartphones with reliable performance and long battery life.",
    tag: "Budget",
    imagSrc: "/categories/phones/samsungs.jpeg",
  },

  {
    id: 2,
    name: "iPhone",
    price: "From $180",
    category: "phones",
    desc: "Popular iPhones with smooth performance, premium design, and great cameras.",
    tag: "Popular",
    imagSrc: "/categories/phones/iphones.jpeg",
  },

  {
    id: 3,
    name: "Tablets",
    price: "From $150",
    category: "phones",
    desc: "Portable tablets perfect for entertainment, browsing, and everyday use.",
    tag: "Popular",
    imagSrc: "/categories/phones/tablets.jpeg",
  },

  // ======================
  // BLUETOOTH SPEAKERS
  // ======================

  {
    id: 4,
    name: "Gemini",
    price: "From $45",
    category: "bluetooth-speakers",
    desc: "Portable speakers with loud sound and party-ready performance.",
    tag: "Best Deal",
    imagSrc: "/categories/phones/gemini.jpeg",
  },

  {
    id: 5,
    name: "JBL Speaker",
    price: "From $65",
    category: "bluetooth-speakers",
    desc: "Premium JBL speakers with powerful bass and crystal-clear audio.",
    tag: "Popular",
    imagSrc: "/categories/phones/jbl-speaker.jpeg",
  },

  {
    id: 6,
    name: "Worry-Free",
    price: "$45",
    category: "bluetooth-speakers",
    desc: "Affordable wireless speakers built for everyday listening.",
    tag: "Budget",
    imagSrc: "/categories/phones/worry-free.jpeg",
  },

  {
    id: 7,
    name: "QFX",
    price: "$45",
    category: "bluetooth-speakers",
    desc: "Compact Bluetooth speakers with strong sound and LED party effects.",
    tag: "Best Deal",
    imagSrc: "/categories/phones/qfx.jpeg",
  },

  {
    id: 8,
    name: "Shure",
    price: "$45",
    category: "bluetooth-speakers",
    desc: "Professional-quality audio equipment trusted by performers and DJs.",
    tag: "Premium",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  // ======================
  // ACCESSORIES
  // ======================

  {
    id: 9,
    name: "Portable Chargers",
    price: "$15",
    category: "accessories",
    desc: "Fast portable charging solutions for phones, tablets, and devices.",
    tag: "Budget",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 10,
    name: "Bluetooth Watches",
    price: "$45",
    category: "accessories",
    desc: "Smart Bluetooth watches with fitness tracking and mobile connectivity.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 11,
    name: "Samsung Bluetooth Watches",
    price: "$45",
    category: "accessories",
    desc: "Samsung smartwatches with sleek design and advanced mobile features.",
    tag: "Premium",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 12,
    name: "JBL Microphone",
    price: "$45",
    category: "accessories",
    desc: "Clear and reliable microphones for music, events, and performances.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 13,
    name: "AirPods",
    price: "$95",
    category: "accessories",
    desc: "Wireless earbuds with immersive sound and seamless connectivity.",
    tag: "Premium",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 14,
    name: "TV Remotes",
    price: "$45",
    category: "accessories",
    desc: "Replacement TV remotes compatible with most major brands.",
    tag: "Best Deal",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  // ======================
  // TVS
  // ======================

  {
    id: 15,
    name: "Samsung TVs",
    price: "From $145",
    category: "tvs",
    desc: "Smart Samsung TVs with vivid picture quality and modern features.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 16,
    name: "LG TVs",
    price: "From $145",
    category: "tvs",
    desc: "Reliable LG televisions with sharp visuals and smooth streaming.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 17,
    name: "Hisense TVs",
    price: "From $145",
    category: "tvs",
    desc: "Affordable smart TVs with large displays and excellent value.",
    tag: "Budget",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  // ======================
  // LAPTOPS
  // ======================

  {
    id: 18,
    name: "HP PCs",
    price: "$245",
    category: "laptops",
    desc: "Reliable HP laptops for work, school, and daily productivity.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 19,
    name: "Dell",
    price: "$245",
    category: "laptops",
    desc: "Dell computers designed for performance, multitasking, and reliability.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 20,
    name: "Lenovo",
    price: "$145",
    category: "laptops",
    desc: "Lenovo laptops with durable design and efficient everyday performance.",
    tag: "Budget",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  // ======================
  // CAR AUDIO
  // ======================

  {
    id: 21,
    name: "Commandos",
    price: "$245",
    category: "car-audio",
    desc: "High-performance car audio systems built for loud and powerful sound.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 22,
    name: "B&C",
    price: "$245",
    category: "car-audio",
    desc: "Professional-grade speakers engineered for premium audio performance.",
    tag: "Premium",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 23,
    name: "Pioneer",
    price: "$245",
    category: "car-audio",
    desc: "Trusted Pioneer audio systems with deep bass and clear sound quality.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 24,
    name: "DS18",
    price: "$245",
    category: "car-audio",
    desc: "DS18 car audio equipment designed for extreme sound performance.",
    tag: "Premium",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 25,
    name: "XT Audio",
    price: "$245",
    category: "car-audio",
    desc: "Powerful car audio solutions for custom sound system builds.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 26,
    name: "TARAMPS",
    price: "$245",
    category: "car-audio",
    desc: "High-power amplifiers and audio equipment for serious sound enthusiasts.",
    tag: "Premium",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 27,
    name: "18 Sound",
    price: "$245",
    category: "car-audio",
    desc: "Premium loudspeakers built for powerful and professional audio setups.",
    tag: "Premium",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 28,
    name: "Kicker",
    price: "$245",
    category: "car-audio",
    desc: "Kicker speakers and subwoofers delivering rich bass and clean sound.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 29,
    name: "Massive Audio",
    price: "$245",
    category: "car-audio",
    desc: "Heavy-duty audio systems designed for loud and immersive performance.",
    tag: "Premium",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 30,
    name: "Clarion",
    price: "$245",
    category: "car-audio",
    desc: "Reliable car entertainment systems with modern audio features.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 31,
    name: "YR Audio",
    price: "$245",
    category: "car-audio",
    desc: "Affordable sound equipment for custom vehicle audio installations.",
    tag: "Budget",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  // ======================
  // CAR ALARMS
  // ======================

  {
    id: 32,
    name: "Compustar",
    price: "$245",
    category: "car-alarms",
    desc: "Advanced car security and remote-start systems for everyday protection.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 33,
    name: "Avatar",
    price: "$245",
    category: "car-alarms",
    desc: "Reliable vehicle alarm systems designed for added security and convenience.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  // ======================
  // GAMING
  // ======================

  {
    id: 34,
    name: "PS5",
    price: "$245",
    category: "gaming",
    desc: "Next-generation PlayStation gaming with stunning graphics and fast performance.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 35,
    name: "V52",
    price: "$245",
    category: "gaming",
    desc: "Gaming accessories and entertainment systems for immersive gameplay.",
    tag: "Best Deal",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 36,
    name: "Xbox",
    price: "$245",
    category: "gaming",
    desc: "Xbox consoles and gaming gear built for smooth online and offline gaming.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 37,
    name: "PS5 Remote Control",
    price: "$45",
    category: "gaming",
    desc: "Wireless PS5 controllers designed for responsive and immersive gameplay.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  {
    id: 38,
    name: "Xbox Remote Control",
    price: "$45",
    category: "gaming",
    desc: "Comfortable Xbox controllers with precision controls for competitive gaming.",
    tag: "Popular",
    imagSrc: "/categories/phones/samsung.jpeg",
  },

  // ======================
  // HEADPHONES
  // ======================

  {
    id: 39,
    name: "JBL Wireless Headphones",
    price: "$45",
    category: "headphones",
    desc: "Comfortable wireless headphones with strong bass and all-day listening.",
    tag: "Popular",
    imagSrc: "/categories/headphones/jbl-headphone.jpeg",
  },
  {
    id: 40,
    name: "Skullcandy Headphones",
    price: "$65",
    category: "headphones",
    desc: "Stylish over-ear headphones with powerful sound and deep bass response.",
    tag: "Popular",
    imagSrc: "/categories/headphones/skull-candy.jpeg",
  },
  {
    id: 41,
    name: "Apple AirPods",
    price: "$245",
    category: "headphones",
    desc: "Premium wireless earbuds with clear sound and seamless Apple connectivity.",
    tag: "Premium",
    imagSrc: "/categories/headphones/airpods.jpeg",
  },
  {
    id: 42,
    name: "Sony Bluetooth Headphones",
    price: "$95",
    category: "headphones",
    desc: "Reliable Sony headphones with balanced audio and comfortable fit.",
    tag: "Popular",
    imagSrc: "/categories/headphones/sony.jpeg",
  },
  {
    id: 43,
    name: "NONICA Wireless Earbuds",
    price: "$35",
    category: "headphones",
    desc: "Affordable Bluetooth earbuds perfect for music, calls, and daily use.",
    tag: "Budget",
    imagSrc: "/categories/headphones/nonica.jpeg",
  },
  {
    id: 44,
    name: "RCA Bluetooth Headphones",
    price: "$55",
    category: "headphones",
    desc: "Wireless RCA headphones with crisp sound and long battery life.",
    tag: "Budget",
    imagSrc: "/categories/headphones/rca.jpeg",
  },

  // ======================
  // DJ STUFF
  // ======================

  {
    id: 45,
    name: "Professional XLR Audio Cables",
    price: "$25",
    category: "dj-stuff",
    desc: "Durable DJ and studio audio cables designed for clean, reliable sound connections.",
    tag: "Popular",
    imagSrc: "/categories/dj/stuff1.jpeg",
  },
  {
    id: 46,
    name: "RCA & Audio Connector Cables",
    price: "$20",
    category: "dj-stuff",
    desc: "Essential DJ and speaker connection cables for mixers, amplifiers, and sound systems.",
    tag: "Popular",
    imagSrc: "/categories/dj/stuff2.jpeg",
  },
  {
    id: 47,
    name: "DJ Speaker System",
    price: "$320",
    category: "dj-stuff",
    desc: "High-powered DJ speakers with deep bass and loud, clear sound for events and parties.",
    tag: "Premium",
    imagSrc: "/categories/dj/stuff3.jpeg",
  },

  // ======================
  // EBIKES
  // ======================

  {
    id: 48,
    name: "Fat Tire Electric Bike",
    price: "$1299",
    category: "ebikes",
    desc: "Powerful electric bike with fat tires, LED lights, and long-range battery performance.",
    tag: "Popular",
    imagSrc: "/categories/ebikes/ebike1.jpeg",
  },
  {
    id: 49,
    name: "Compact City E-Bike",
    price: "$1099",
    category: "ebikes",
    desc: "Comfortable foldable-style electric bike built for city riding and everyday commuting.",
    tag: "Popular",
    imagSrc: "/categories/ebikes/ebike2.jpeg",
  },

  // ======================
  // SCOOTERS
  // ======================

  {
    id: 50,
    name: "Electric Kick Scooter",
    price: "$499",
    category: "scooters",
    desc: "Portable electric scooter with strong motor power and smooth urban riding.",
    tag: "Popular",
    imagSrc: "/categories/scooters/scooter1.jpeg",
  },
  {
    id: 51,
    name: "T-Pro Motor Scooter",
    price: "$1899",
    category: "scooters",
    desc: "Street-ready motor scooter designed for reliable transportation and comfortable riding.",
    tag: "Premium",
    imagSrc: "/categories/scooters/scooter2.jpeg",
  },
  {
    id: 52,
    name: "Sport Electric Scooter",
    price: "$1599",
    category: "scooters",
    desc: "Modern sporty scooter with aggressive styling, LED lighting, and smooth acceleration.",
    tag: "Premium",
    imagSrc: "/categories/scooters/scooter3.jpeg",
  },
];
