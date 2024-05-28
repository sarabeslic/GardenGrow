const PRODUCTS = [
  {
    id: 1,
    name: "Allium",
    pic: "src/pics/Allium.jpg",
    text: "Allium, commonly known as ornamental onions, are a diverse genus of flowering plants that add a unique flair to gardens. With over 700 species, Alliums come in various shapes, sizes, and colors, ranging from small, delicate blossoms to large, showy globes. These hardy perennials thrive in full sun and well-drained soil, making them ideal for rock gardens, borders, and containers. Their spherical flower heads, composed of numerous tiny flowers, create eye-catching displays from late spring to early summer. Not only are Alliums loved by gardeners for their aesthetic appeal, but they also attract pollinators like bees and butterflies, contributing to biodiversity.",
    season: "spring",
    water: "daily",
    light: "full sun",
    colour: "purple",
    favourite: false,
    price: 5.00
  },
  {
    id: 2,
    name: "Alyssum",
    pic: "src/pics/Alyssum.jpg",
    text: "Alyssum, also known as sweet alyssum, is a low-growing flower often used as a ground cover or in containers. It produces clusters of small, fragrant flowers in shades of white, pink, or purple. Alyssum blooms profusely from spring to fall, attracting butterflies and other pollinators. This easy-to-grow plant thrives in full sun and well-drained soil, making it a popular choice for borders, rock gardens, and hanging baskets.",
    season: "spring",
    water: "weekly",
    light: "full sun",
    colour: "white",
    favourite: false,
    price: 4.00
  },
  {
    id: 3,
    name: "Anemone",
    pic: "src/pics/Anemone.jpg",
    text: "Anemone, also known as windflower, is a diverse genus with various species, including many colorful cultivars. These delicate flowers bloom in spring and fall, offering a wide range of colors such as pink, purple, red, and white. Anemones prefer partial shade and moist, well-drained soil. They are perfect for adding a splash of color to woodland gardens, borders, and containers. Anemones are also cherished for their long vase life, making them popular choices for flower arrangements.",
    season: "spring, fall",
    water: "daily",
    light: "partial shade",
    colour: "purple",
    favourite: false,
    price: 6.50
  },
  {
    id: 4,
    name: "Astilbe",
    pic: "src/pics/Astilbe.jpg",
    text: "Astilbe is a genus of perennial flowering plants, loved for their feathery plumes of flowers. These elegant plants bloom in shades of pink, red, purple, and white from late spring to early summer. Astilbes thrive in moist, well-drained soil and prefer partial shade, making them excellent choices for shady borders and woodland gardens. Their airy blooms add texture and color to garden beds, and they also make beautiful cut flowers. Astilbes are low-maintenance perennials that attract butterflies and hummingbirds.",
    season: "summer",
    water: "daily",
    light: "partial shade",
    colour: "pink",
    favourite: false,
    price: 7.50
  },
  {
    id: 5,
    name: "Bachelor Button",
    pic: "src/pics/BachelorButton.jpg",
    text: "Bachelor's button, also known as cornflower, is a charming wildflower with blue, pink, or white blooms. These easy-to-grow annuals thrive in full sun and well-drained soil, making them perfect for sunny borders and wildflower meadows. Bachelor buttons attract bees and butterflies, adding movement and life to the garden. They have a long flowering period from late spring to early summer, and their dainty flowers are excellent for cutting and drying. Bachelor buttons self-seed readily, ensuring their presence in the garden year after year.",
    season: "summer",
    water: "daily",
    light: "full sun",
    colour: "blue",
    favourite: false,
    price: 3.50
  },
  {
    id: 6,
    name: "Bee Balm",
    pic: "src/pics/BeeBalm.jpg",
    text: "Bee balm, also known as Monarda, is a colorful and fragrant flower native to North America. It attracts bees, butterflies, and hummingbirds with its vibrant blooms. Bee balm is known for its aromatic leaves, often used in teas and potpourri. This hardy perennial thrives in full sun and well-drained soil, blooming from summer to fall. Its tubular flowers come in shades of red, pink, and purple, adding a pop of color to garden beds and borders. Bee balm is also valued for its medicinal properties and is used in herbal remedies for its antibacterial and antifungal properties.",
    season: "summer",
    water: "few days",
    light: "full sun",
    colour: "pink",
    favourite: false,
    price: 6.00
  },
  {
    id: 7,
    name: "Blanket Flower",
    pic: "src/pics/BlanketFlower.jpg",
    text: "Blanket flower, or Gaillardia, is a bright and cheerful flower native to North and South America. Its daisy-like blooms in shades of red and yellow add a burst of color to gardens. Blanket flowers are drought-tolerant and attract pollinators like bees and butterflies. They thrive in full sun and well-drained soil, making them ideal for hot, dry climates. Blanket flowers bloom from late spring to fall, providing continuous color in garden beds and borders. They are low-maintenance plants that require minimal care, making them perfect for busy gardeners.",
    season: "summer",
    water: "few days",
    light: "full sun",
    colour: "yellow, orange",
    favourite: false,
    price: 5.50
  },
  {
    id: 8,
    name: "Blue Orchid",
    pic: "src/pics/BlueOrchid.jpg",
    text: "Blue orchids, a rarity in the orchid world, are known for their stunning blue flowers. While natural blue orchids are extremely rare, most blue orchids are achieved through dyeing or genetic modification. Despite their unnatural origin, blue orchids are admired for their unique beauty and are often used in floral arrangements.",
    season: "year-round",
    water: "weekly",
    light: "partial shade",
    colour: "blue",
    favourite: false,
    price: 12.00
  },
  {
    id: 9,
    name: "Bluecrown Passion Flower",
    pic: "src/pics/BluecrownPassionFlower.jpg",
    text: "Bluecrown passion flower, or Passiflora caerulea, is a vigorous vine native to South America. Its intricate blue and white flowers are reminiscent of a tropical paradise. Passion flowers are known for their unique structure and symbolic meaning, often representing religious aspects in Christian iconography.",
    season: "summer",
    water: "daily",
    light: "full sun",
    colour: "blue, white",
    favourite: false,
    price: 8.00
  },
  {
    id: 10,
    name: "Bougainvillea",
    pic: "src/pics/Bougainvillea.jpg",
    text: "Bougainvillea is a vibrant and colorful flowering plant native to South America. Its brilliant bracts surround small, inconspicuous flowers, creating a stunning display of color. Bougainvillea is prized for its ability to thrive in hot, dry climates and is often used in tropical and Mediterranean gardens.",
    season: "summer",
    water: "weekly",
    light: "full sun",
    colour: "pink",
    favourite: false,
    price: 9.00
  },
  {
   
    id: 11,
    name: "Camellia",
    pic: "src/pics/Camellia.jpg",
    text: "Camellias are beautiful flowering shrubs native to eastern and southern Asia. Known for their glossy evergreen leaves and stunning blooms, camellias come in a variety of colors and forms. They prefer partial shade and regular watering to keep the soil consistently moist. Camellias typically bloom in late winter to early spring, adding color to the garden when most plants are dormant.",
    season: "spring",
    water: "few days",
    light: "partial shade",
    colour: "pink",
    favourite: false,
    price: 10.00
  },
  
  {
    id: 12,
    name: "Coneflower",
    pic: "src/pics/Coneflower.jpg",
    text: "Coneflowers, also known as Echinacea, are North American native plants loved for their daisy-like flowers with prominent, raised centers. These hardy perennials attract butterflies and bees with their nectar-rich blooms and are drought-tolerant once established. Coneflowers thrive in full sun and can tolerate a variety of soil conditions.",
    season: "summer",
    water: "few days",
    light: "full sun",
    colour: "pink, white",
    favourite: false,
    price: 7.50
  },
  {
    id: 13,
    name: "Cosmos",
    pic: "src/pics/Cosmos.jpg",
    text: "Cosmos flowers are dainty annuals originating from Mexico. They are known for their delicate, ferny foliage and colorful, daisy-like flowers that bloom abundantly throughout the summer and fall. Cosmos are easy to grow, preferring full sun and well-drained soil. They attract pollinators like butterflies and bees to the garden.",
    season: "summer",
    water: "few days",
    light: "full sun",
    colour: "white, pink",
    favourite: false,
    price: 6.00
  },
  {
    id: 14,
    name: "Dahlia",
    pic: "src/pics/Dahlia.jpg",
    text: "Dahlias are prized for their showy blooms in a wide range of colors, shapes, and sizes. These tuberous perennials originate from Mexico and Central America and are popular for adding late-summer color to gardens. Dahlias prefer full sun and well-drained soil, and they benefit from regular watering during dry periods.",
    season: "summer",
    water: "few days",
    light: "full sun",
    colour: "white, pink",
    favourite: false,
    price: 8.50
  },
  {
    id: 15,
    name: "Dracula Simia Orchid",
    pic: "src/pics/DraculaSimiaOrchid.jpg",
    text: "Dracula simia, also known as the monkey face orchid, is a rare and fascinating orchid species native to the cloud forests of Ecuador and Peru. Its flowers bear an uncanny resemblance to the face of a monkey, complete with 'ears' and 'nose.' Dracula simia orchids thrive in cool, humid conditions with filtered light. They are best suited for experienced orchid growers.",
    season: "fall",
    water: "weekly",
    light: "partial shade",
    colour: "orange",
    favourite: false,
    price: 12.00
  },
  {
    id: 16,
    name: "Foxglove",
    pic: "src/pics/Foxglove.jpg",
    text: "Foxgloves, or Digitalis, are tall biennial or perennial plants native to Europe, Asia, and North Africa. They are known for their towering spires of tubular flowers that attract bees and hummingbirds. Foxgloves prefer partial shade and moist, well-drained soil. While they are beautiful, all parts of the plant are toxic if ingested.",
    season: "spring",
    water: "weekly",
    light: "partial shade",
    colour: "pink, purple, white",
    favourite: false,
    price: 8.00
  },
  {
    id: 17,
    name: "Honeysuckle",
    pic: "src/pics/Honeysuckle.jpg",
    text: "Honeysuckle, or Lonicera, is a fragrant and fast-growing vine native to the Northern Hemisphere. Its sweetly scented flowers attract bees, butterflies, and hummingbirds. Honeysuckle vines prefer full sun to partial shade and moist, well-drained soil. They are excellent for covering fences, trellises, and arbors.",
    season: "summer",
    water: "few days",
    light: "full sun, partial shade",
    colour: "pink, white, yellow",
    favourite: false,
    price: 10.00
  },
  {
    id: 18,
    name: "Hydrangea",
    pic: "src/pics/Hydrangea.jpg",
    text: "Hydrangeas are beloved flowering shrubs native to Asia and the Americas. Known for their large, showy flower heads, hydrangeas come in various colors depending on soil pH. They prefer partial shade and consistently moist, well-drained soil. Hydrangeas bloom from spring to fall, adding charm and elegance to gardens.",
    season: "spring",
    water: "few days",
    light: "partial shade",
    colour: "blue",
    favourite: false,
    price: 11.00
  },
  {
    id: 19,
    name: "Jade Vine",
    pic: "src/pics/JadeVine.jpg",
    text: "Jade vine, also known as Strongylodon macrobotrys, is a rare and exotic vine native to the Philippines. It is prized for its stunning clusters of turquoise to teal-colored flowers that resemble jade gemstones. Jade vines require a warm, humid climate and filtered sunlight. They are best suited for tropical or greenhouse environments.",
    season: "spring",
    water: "weekly",
    light: "partial shade",
    colour: "turquoise",
    favourite: false,
    price: 15.00
  },
  {
    id: 20,
    name: "Larkspur",
    pic: "src/pics/Larkspur.jpg",
    text: "Larkspurs, or Delphiniums, are tall and elegant perennials native to Europe and Asia. They are prized for their tall spikes of spurred flowers in shades of blue, purple, pink, and white. Larkspurs prefer full sun and rich, well-drained soil. They are excellent for cutting and make charming additions to cottage-style gardens.",
    season: "spring",
    water: "few days",
    light: "full sun",
    colour: "purple",
    favourite: false,
    price: 9.50
  },
  {
    id: 21,
    name: "Marigold",
    pic: "src/pics/Marigold.jpg",
    text: "Marigolds, or Tagetes, are cheerful annuals native to the Americas. They are prized for their vibrant, daisy-like flowers in shades of yellow, orange, and red. Marigolds are easy to grow, preferring full sun and well-drained soil. They are often used as companion plants to repel pests in vegetable gardens.",
    season: "summer",
    water: "few days",
    light: "full sun",
    colour: "orange, red",
    favourite: false,
    price: 5.00
  },
  {
    id: 22,
    name: "Pansy",
    pic: "src/pics/Pansy.jpg",
    text: "Pansies are charming cool-season annuals known for their cheerful 'faces' and vibrant colors. They come in a wide range of shades, including purple, yellow, orange, and white. Pansies prefer cool temperatures and partial shade, although they can tolerate full sun in cooler climates. They are perfect for adding color to fall, winter, and early spring gardens.",
    season: "spring",
    water: "few days",
    light: "partial shade",
    colour: "purple, yellow",
    favourite: false,
    price: 6.50
  },
  {
    id: 23,
    name: "Poppy",
    pic: "src/pics/Poppy.jpg",
    text: "Poppies are iconic wildflowers known for their delicate, papery blooms and vibrant colors. They come in various species, including the classic red poppy (Papaver rhoeas) and the Oriental poppy (Papaver orientale) with large, showy flowers. Poppies prefer full sun and well-drained soil. They are often sown directly in the garden for spring or early summer blooms.",
    season: "spring",
    water: "few days",
    light: "full sun",
    colour: "red",
    favourite: false,
    price: 7.00
  },
  {
    id: 24,
    name: "Rhododendron",
    pic: "src/pics/Rhododendron.jpg",
    text: "Rhododendrons are popular evergreen shrubs known for their stunning clusters of large, showy flowers. They come in a variety of colors, including shades of pink, purple, red, white, and yellow. Rhododendrons prefer partial shade and acidic, well-drained soil enriched with organic matter. They bloom in spring, adding a splash of color to gardens.",
    season: "spring",
    water: "few days",
    light: "partial shade",
    colour: "pink",
    favourite: false,
    price: 13.00
  }
];


export default PRODUCTS;
// Explanation of scales used:
// For water: daily, few days, weekly
// For light: full sun, partial shade, shade
// For season: spring, summer, fall
