const products = [
  {
    name: 'J BALVIN X JORDAN 1 RETRO OG HIGH TIE DYE',
    image: '/images/jordan1.jpg',
    description:
      "The reggaeton singer teamed up with Nike to create the J Balvin x Jordan 1 Retro OG High 'Tie Dye' in December 2020. The shoe's upper is built with textile, appearing in a vibrant mix of hues, with rough cut edges contributing to a DIY aesthetic.Black contrast emerges on the collar, laces, 'Wings' logo and quarter panel, while the lateral heel includes a series of removable Velcro badges.Underfoot, a pastel rubber cupsole supports the fit.",
    brand: 'Air Jordan',
    category: 'Air Jordan 1',
    price: 533,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'AIR JORDAN 1 RETRO HIGH OG',
    image: '/images/jordan1.1.jpg',
    description:
      "Featuring a look similar to Travis Scott's 2019 Air Jordan 1 collaboration, the Air Jordan 1 Retro High OG 'Dark Mocha' released in October 2020. The shoe's upper is built with leather, sporting a white base overlaid by black leather. The heel and collar incorporate Dark Mocha nubuck, while a nylon tongue and perforations on the toe box maintain the classic aesthetic. Air in the heel of the midsole provides cushioning.",
    brand: 'Air Jordan',
    category: 'Air Jordan 1',
    price: 300,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "AIR JORDAN 1 RETRO HIGH OG 'BLACK METALLIC GOLD'",
    image: '/images/jordan1.2.jpg',
    description:
      "The Air Jordan 1 Retro High OG 'Black Metallic Gold' brings an elevated construction to go with its elevated colorway. The shoe's upper is built with patent leather, finished in black and highlighted by metallic gold on the 'Wings' logo, Swoosh branding, collar and tongue tag. Perforations on the toe box provide breathability, while underfoot, more metallic gold marks the stitching around the Air midsole.",
    brand: 'Air Jordan',
    category: 'Air Jordan 1',
    price: 210.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: "AIR JORDAN 1 RETRO HIGH OG 'OBSIDIAN'",
    image: '/images/jordan1.3.jpg',
    description:
      "The Air Jordan 1 Retro High OG 'Obsidian' arrives with classic color blocking on a traditional all-leather build. A crisp white base with complementary overlays in University Blue and Midnight Navy combine as an homage to Michael Jordan’s UNC alma mater. Details include perforated detailing on the toe box, a Nike woven tag atop the padded nylon tongue, and the Jordan ‘Wings’ logo on the collar flap.",
    brand: 'Air Jordan',
    category: 'Air Jordan 1',
    price: 192.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    name: "AIR JORDAN 1 RETRO HIGH CO.JP 'MIDNIGHT NAVY' 2020",
    image: '/images/jordan1.4.jpg',
    description:
      "Originally released exclusively in Japan and limted to 3,000 pairs, the Air Jordan 1 Retro High co.JP 'Midnight Navy' 2020 brings back that look. The shoe's upper is built with a white leather base, accented by silver on the Swoosh branding and 'Wings' logo and overlaid by navy nubuck. Perforations on the toe box provide breathability, while underfoot, Air in the heel provides cushioning. A concentric outsole is included for traction.",
    brand: 'Air Jordan',
    category: 'Air Jordan 1',
    price: 202.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    name: "BLAZER MID '77 VINTAGE 'WHITE BLACK'",
    image: '/images/nike1.1.jpg',
    description:
      "The Blazer Mid '77 Vintage 'White Black' gives the nod to the extensive history of the basketball silhouette. The shoe's upper is built with white leather, complemented by an OG black Swoosh on the quarter panel. The tongue takes on a deconstructed built with vintage branding, while hairy suede emerges on the forefoot. An autoclave construction supports the fit underfoot.",
    brand: 'Nike',
    category: 'Blazer',
    price: 95.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
  {
    name: "BLAZER MID '77 VINTAGE 'CELESTINE BLUE'",
    image: '/images/nike1.2.jpg',
    description:
      "The Blazer Mid '77 Vintage 'White Black' gives the nod to the extensive history of the basketball silhouette. The shoe's upper is built with white leather, complemented by an OG black Swoosh on the quarter panel. The tongue takes on a deconstructed built with vintage branding, while hairy suede emerges on the forefoot. An autoclave construction supports the fit underfoot.",
    brand: 'Nike',
    category: 'Blazer',
    price: 92.99,
    countInStock: 6,
    rating: 4.7,
    numReviews: 22,
  },
  {
    name: "BLAZER MIDCHRISTMAS SWEATER'",
    image: '/images/nike1.3.jpg',
    description:
      "The Blazer Mid '77 Vintage 'White Black' gives the nod to the extensive history of the basketball silhouette. The shoe's upper is built with white leather, complemented by an OG black Swoosh on the quarter panel. The tongue takes on a deconstructed built with vintage branding, while hairy suede emerges on the forefoot. An autoclave construction supports the fit underfoot.",
    brand: 'Nike',
    category: 'Blazer',
    price: 120.99,
    countInStock: 7,
    rating: 4.1,
    numReviews: 15,
  },
  {
    name: "OFF-WHITE X BLAZER MID 'GRIM REAPERS'",
    image: '/images/nike1.4.jpg',
    description:
      'Virgil Abloh’s Halloween-themed sneaker pack is complete with the addition of the OFF-WHITE x Blazer Mid ‘Grim Reapers’ to the ‘All Hallow’s Eve’ colorway in orange. The black and grey upper stands out against contrast orange stitching in celebration of the October holiday, along with an oversized white Swoosh, blue zip tie, and OFF-WHITE lettering on the quarter panel of the shoe’s medial side.',
    brand: 'Nike',
    category: 'Blazer',
    price: 590.99,
    countInStock: 22,
    rating: 4.2,
    numReviews: 22,
  },
  {
    name: "OFF-WHITE X BLAZER MID 'ALL HALLOWS EVE'",
    image: '/images/nike1.5.jpg',
    description:
      'The OFF-WHITE x Blazer Mid ‘All Hallows Eve’ showcases a seasonally appropriate orange Swoosh across a Pale Vanilla upper. The yellowish-tan color extends to the exposed-foam tongue and rubber midsole, with the signature zip tie in blue adding a contrasting burst of color. Virgil Abloh’s signature lines of text crop up on the medial-side quarter panel.',
    brand: 'Nike',
    category: 'Blazer',
    price: 746.99,
    countInStock: 22,
    rating: 4.2,
    numReviews: 22,
  },
  {
    name: "YEEZY BOOST 350 V2 'BRED'",
    image: '/images/adidas1.1.jpg',
    description:
      "The Yeezy Boost 350 V2 'Bred' brings a classic colorway to its minimalist construction. The shoe's upper is built with Primeknit, finished in black and highlighted by the SPLY-350 branding on the side wall. More red marks the heel pull-loop, while rope laces secure the fit. Underfoot, a full-length Boost midsole wrapped in a black rubber cage provides cushioning. A rubber outsole with cutouts provides traction.",
    brand: 'Adidas',
    category: 'Yeezy',
    price: 338.99,
    countInStock: 25,
    rating: 3.7,
    numReviews: 24,
  },
  {
    name: "YEEZY 500 'UTILITY BLACK'",
    image: '/images/adidas1.2.jpg',
    description:
      "In July 2018, Kanye West and adidas released the Yeezy 500 ' Utility Black. ' The retro-inspired silhouette counterbalances a sleek, all-black design with its bulky form. What distinguishes this colorway from the standard triple-black finish is a unique use of tone – it's a semi-faded black that coats the combination of mesh and upper suede, as opposed to the pitch-black variety more common in the firmament of the sneaker.",
    brand: 'Adidas',
    category: 'Yeezy',
    price: 283.99,
    countInStock: 2,
    rating: 4.7,
    numReviews: 4,
  },
  {
    name: "YEEZY BOOST 350 V2 'ZEBRA'",
    image: '/images/adidas1.3.jpg',
    description:
      "The Yeezy Boost 350 V2 ' Zebra ' released on February 25, 2017, combining an upper white / core black Primeknit with a red SPLY 350 branding and a full-length translucent midsole boost. On November 16, 2018, another restock of the ' Zebra ' arrived, with more pairs hitting the marketplace and building on Kanye's commitment to make Yeezy more available to anyone who wished to acquire them.",
    brand: 'Adidas',
    category: 'Yeezy',
    price: 359.99,
    countInStock: 5,
    rating: 4.2,
    numReviews: 4,
  },
  {
    name: "YEEZY BOOST 350 V2 'CARBON'",
    image: '/images/adidas1.4.jpg',
    description:
      "The Yeezy Boost 350 V2 'Carbon' brings a neutral look to its classic construction. The shoe's upper is built with Primeknit, finished in a mix of black and grey woven into the design. A post-dyed monofilament stripe cuts through the side wall, while no-tie bungee laces support the fit. Underfoot, a rubber cage overlays the full-length Boost midsole, which provides cushioning.",
    brand: 'Adidas',
    category: 'Yeezy',
    price: 269.99,
    countInStock: 2,
    rating: 2.7,
    numReviews: 3,
  },
  {
    name: "YEEZY BOOST 350 V2 'CREAM WHITE / TRIPLE WHITE'",
    image: '/images/adidas1.5.jpg',
    description:
      "The Yeezy Boost 350 V2 'Bred' brings a classic colorway to its minimalist construction. The shoe's upper is built with Primeknit, finished in black and highlighted by the SPLY-350 branding on the side wall. More red marks the heel pull-loop, while rope laces secure the fit. Underfoot, a full-length Boost midsole wrapped in a black rubber cage provides cushioning. A rubber outsole with cutouts provides traction.",
    brand: 'Adidas',
    category: 'Yeezy',
    price: 330.99,
    countInStock: 15,
    rating: 4.7,
    numReviews: 21,
  },
]

export default products
