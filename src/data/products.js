const products = [
  {
    id: 1,
    name: "Magnetic Jelly Cleaner",
    slug: "magnetic-jelly-cleaner",
    price: 299,
    category: "clean-tidy",
    tag: "Trending",
    shortDescription: "Cleans any crevice. Oddly satisfying. Weirdly essential.",
    description: "This incredible cleaning gel gets into every nook and cranny of your car, keyboard, or any hard-to-reach space. Infused with special magnetic properties, it pulls dust and debris from the tiniest spaces. Just press, lift, and watch the magic happen. Plus, it smells like fresh citrus.",
    image: "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: [
      "Biodegradable and non-toxic formula",
      "Reusable up to 10 cleaning sessions",
      "Fresh citrus scent",
      "Works on any surface without damage"
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 128
  },
  {
    id: 2,
    name: "Fresh Air Cigarette",
    slug: "fresh-air-cigarette",
    price: 349,
    category: "just-plain-weird",
    tag: "New",
    shortDescription: "Inhale nature. A single puff of fresh forest air.",
    description: "No, it's not a real cigarette. This clever device lets you carry a literal breath of fresh air wherever you go. Each 'cigarette' contains a sealed dose of purified mountain or forest air, collected from pristine locations worldwide. Perfect for city dwellers or a quick sensory reset.",
    image: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: [
      "Available in Forest, Mountain, and Ocean varieties",
      "Each pack contains 5 sealed air sticks",
      "No chemicals, just pure filtered air",
      "Perfect stress-relief gift for urban dwellers"
    ],
    inStock: true,
    rating: 4.3,
    reviewCount: 56
  },
  {
    id: 3,
    name: "Foldable Cat Net Hammock",
    slug: "foldable-cat-net-hammock",
    price: 599,
    category: "home-hacks",
    tag: "Sale",
    shortDescription: "Turns your cat into royalty. Fits any window.",
    description: "Give your feline friend the window seat of their dreams with this ingenious hammock that attaches to any window with industrial-strength suction cups. The breathable mesh material keeps cats cool while sunbathing, and the entire unit folds down to pocket size when not in use.",
    image: "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: [
      "Supports cats up to 12kg",
      "Easy installation in seconds, no tools required",
      "Machine washable mesh material",
      "Premium suction cups with locking mechanism"
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 203
  },
  {
    id: 4,
    name: "Can Mold Pourer",
    slug: "can-mold-pourer",
    price: 249,
    category: "home-hacks",
    shortDescription: "Tired of sticky spills? Perfect pouring from any can.",
    description: "This silicone can attachment transforms any standard can into a perfect-pour vessel. It fits snugly over the edge, creating a drip-free spout that ensures even the thickest liquids (like condensed milk or paint) pour precisely where you want them to, without the mess.",
    image: "https://images.pexels.com/photos/4226894/pexels-photo-4226894.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/4226894/pexels-photo-4226894.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4226919/pexels-photo-4226919.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: [
      "Food-grade silicone, BPA-free",
      "Fits standard 7-10cm cans",
      "Dishwasher-safe",
      "Heat resistant up to 230°C"
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 87
  },
  {
    id: 5,
    name: "Desk Vacuum Snail",
    slug: "desk-vacuum-snail",
    price: 499,
    category: "tech-gadgets",
    tag: "Trending",
    shortDescription: "A tiny desk vacuum that's as cute as it is functional.",
    description: "Meet your new desktop companion! This adorable snail-shaped mini vacuum takes care of crumbs, dust, and debris with a simple switch. The rechargeable battery lasts up to 3 hours, and the transparent shell lets you see exactly when it needs emptying. Perfectly sized for keyboards, desk corners, and other small spaces.",
    image: "https://images.pexels.com/photos/3846022/pexels-photo-3846022.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/3846022/pexels-photo-3846022.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: [
      "USB-C rechargeable battery",
      "Whisper-quiet operation under 30dB",
      "Detachable dust compartment",
      "Includes fine-tip attachment for tight spaces"
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 119
  },
  {
    id: 6,
    name: "Self-Heating Smart Mug",
    slug: "self-heating-smart-mug",
    price: 1499,
    category: "tech-gadgets",
    shortDescription: "Keep your beverages at the perfect temperature for hours.",
    description: "Never sip cold coffee again. This sleek smart mug maintains your chosen temperature (between 50-65°C) for up to 3 hours on a single charge. Control it with the touch-sensitive display on the mug or via the companion app. It even learns your preferences over time, automatically warming to your favorite temperature.",
    image: "https://images.pexels.com/photos/3153208/pexels-photo-3153208.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/3153208/pexels-photo-3153208.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: [
      "350ml capacity with leak-proof lid",
      "Qi-compatible wireless charging coaster",
      "Machine washable inner vessel (electronics in base)",
      "Auto-sleep feature detects when mug is empty"
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 92
  },
  {
    id: 7,
    name: "Pocket Herb Garden",
    slug: "pocket-herb-garden",
    price: 399,
    category: "home-hacks",
    shortDescription: "Grow fresh herbs anywhere with this ultra-compact garden.",
    description: "Fresh herbs at your fingertips, no matter where you live. This ingenious self-contained growing system fits on any windowsill and uses passive hydroponics to grow herbs with minimal effort. The special soil mixture and reservoir system means you only need to add water once every 2-3 weeks.",
    image: "https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1030970/pexels-photo-1030970.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: [
      "Includes basil, mint, and cilantro seed pods",
      "Self-regulating water reservoir",
      "Biodegradable growing medium",
      "Compact size: just 20cm x 10cm x 12cm"
    ],
    inStock: true,
    rating: 4.4,
    reviewCount: 76
  },
  {
    id: 8,
    name: "Color-Changing Shower Head",
    slug: "color-changing-shower-head",
    price: 699,
    category: "home-hacks",
    tag: "New",
    shortDescription: "Transforms bathing with LED lights powered by water flow.",
    description: "Turn your daily shower into a spa-like experience with this LED shower head that changes color based on water temperature. The LEDs are powered entirely by water pressure—no batteries or wiring needed. Enjoy a blue glow for cool water, green for warm, and red when it's hot, adding both fun and practical safety information to your routine.",
    image: "https://images.pexels.com/photos/7820316/pexels-photo-7820316.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/7820316/pexels-photo-7820316.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5502227/pexels-photo-5502227.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: [
      "Universal fitting works with standard shower pipes",
      "30% water-saving design with pressure boost technology",
      "Self-cleaning nozzles prevent lime buildup",
      "No batteries or external power needed"
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 143
  }
]

export default products