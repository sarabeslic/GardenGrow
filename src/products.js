const PRODUCTS = [
  {
    id: 1,
    name: "Allium",
    pic: "/pics/Allium.jpg",
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
    pic: "/pics/Alyssum.jpg",
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
    pic: "/pics/Anemone.jpg",
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
    pic: "/pics/Astilbe.jpg",
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
    pic: "/pics/BachelorButton.jpg",
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
    pic: "/pics/BeeBalm.jpg",
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
    pic: "/pics/Blanketflower.jpg",
    text: "Blanket flower, or Gaillardia, is a bright and cheerful flower native to North and South America. Its daisy-like blooms in shades of red and yellow add a burst of color to gardens. Blanket flowers are drought-tolerant and attract pollinators like bees and butterflies. They thrive in full sun and well-drained soil, making them ideal for hot, dry climates. Blanket flowers bloom from late spring to fall, providing continuous color in garden beds and borders. They are low-maintenance plants that require minimal care, making them perfect for busy gardeners.",
    season: "summer",
    water: "few days",
    light: "full sun",
    colour: "multiple",
    favourite: false,
    price: 5.50
  },
  {
    id: 8,
    name: "Blue Orchid",
    pic: "/pics/BlueOrchid.jpg",
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
    pic: "/pics/BluecrownPassionflower.jpg",
    text: "Bluecrown passion flower, or Passiflora caerulea, is a vigorous vine native to South America. Its intricate blue and white flowers are reminiscent of a tropical paradise. Passion flowers are known for their unique structure and symbolic meaning, often representing religious aspects in Christian iconography.",
    season: "summer",
    water: "daily",
    light: "full sun",
    colour: "multiple",
    favourite: false,
    price: 8.00
  },
  {
    id: 10,
    name: "Bougainvillea",
    pic: "/pics/Bougainvillea.jpg",
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
    pic: "/pics/Camellia.jpg",
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
    pic: "/pics/Coneflower.jpg",
    text: "Coneflowers, also known as Echinacea, are North American native plants loved for their daisy-like flowers with prominent, raised centers. These hardy perennials attract butterflies and bees with their nectar-rich blooms and are drought-tolerant once established. Coneflowers thrive in full sun and can tolerate a variety of soil conditions.",
    season: "summer",
    water: "few days",
    light: "full sun",
    colour: "multiple",
    favourite: false,
    price: 7.50
  },
  {
    id: 13,
    name: "Cosmos",
    pic: "/pics/Cosmos.jpg",
    text: "Cosmos flowers are dainty annuals originating from Mexico. They are known for their delicate, ferny foliage and colorful, daisy-like flowers that bloom abundantly throughout the summer and fall. Cosmos are easy to grow, preferring full sun and well-drained soil. They attract pollinators like butterflies and bees to the garden.",
    season: "summer",
    water: "few days",
    light: "full sun",
    colour: "multiple",
    favourite: false,
    price: 6.00
  },
  {
    id: 14,
    name: "Dahlia",
    pic: "/pics/Dahlia.jpg",
    text: "Dahlias are prized for their showy blooms in a wide range of colors, shapes, and sizes. These tuberous perennials originate from Mexico and Central America and are popular for adding late-summer color to gardens. Dahlias prefer full sun and well-drained soil, and they benefit from regular watering during dry periods.",
    season: "summer",
    water: "few days",
    light: "full sun",
    colour: "pink",
    favourite: false,
    price: 8.50
  },
  {
    id: 15,
    name: "Dracula Simia Orchid",
    pic: "/pics/DraculaSimiaOrchid.jpg",
    text: "Dracula simia, also known as the monkey face orchid, is a rare and fascinating orchid species native to the cloud forests of Ecuador and Peru. Its flowers bear an uncanny resemblance to the face of a monkey, complete with 'ears' and 'nose.' Dracula simia orchids thrive in cool, humid conditions with filtered light. They are best suited for experienced orchid growers.",
    season: "fall",
    water: "weekly",
    light: "partial shade",
    colour: "white",
    favourite: false,
    price: 12.00
  },
  {
    id: 16,
    name: "Foxglove",
    pic: "/pics/Foxglove.jpg",
    text: "Foxgloves, or Digitalis, are tall biennial or perennial plants native to Europe, Asia, and North Africa. They are known for their towering spires of tubular flowers that attract bees and hummingbirds. Foxgloves prefer partial shade and moist, well-drained soil. While they are beautiful, all parts of the plant are toxic if ingested.",
    season: "spring",
    water: "weekly",
    light: "partial shade",
    colour: "multiple",
    favourite: false,
    price: 8.00
  },
  {
    id: 17,
    name: "Honeysuckle",
    pic: "/pics/HoneySuckle.jpg",
    text: "Honeysuckle, or Lonicera, is a fragrant and fast-growing vine native to the Northern Hemisphere. Its sweetly scented flowers attract bees, butterflies, and hummingbirds. Honeysuckle vines prefer full sun to partial shade and moist, well-drained soil. They are excellent for covering fences, trellises, and arbors.",
    season: "summer",
    water: "few days",
    light: "full sun",
    colour: "multiple",
    favourite: false,
    price: 10.00
  },
  {
    id: 18,
    name: "Hydrangea",
    pic: "/pics/Hydrangea.jpg",
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
    pic: "/pics/JadeVine.jpg",
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
    pic: "/pics/Larkspur.jpg",
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
    pic: "/pics/Marigold.jpg",
    text: "Marigolds, or Tagetes, are cheerful annuals native to the Americas. They are prized for their vibrant, daisy-like flowers in shades of yellow, orange, and red. Marigolds are easy to grow, preferring full sun and well-drained soil. They are often used as companion plants to repel pests in vegetable gardens.",
    season: "summer",
    water: "few days",
    light: "full sun",
    colour: "orange",
    favourite: false,
    price: 5.00
  },
  {
    id: 22,
    name: "Pansy",
    pic: "/pics/Pansy.jpg",
    text: "Pansies are charming cool-season annuals known for their cheerful 'faces' and vibrant colors. They come in a wide range of shades, including purple, yellow, orange, and white. Pansies prefer cool temperatures and partial shade, although they can tolerate full sun in cooler climates. They are perfect for adding color to fall, winter, and early spring gardens.",
    season: "spring",
    water: "few days",
    light: "partial shade",
    colour: "multiple",
    favourite: false,
    price: 6.50
  },
  {
    id: 23,
    name: "Poppy",
    pic: "/pics/Poppy.jpg",
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
    pic: "/pics/Rhododendron.jpg",
    text: "Rhododendrons are popular evergreen shrubs known for their stunning clusters of large, showy flowers. They come in a variety of colors, including shades of pink, purple, red, white, and yellow. Rhododendrons prefer partial shade and acidic, well-drained soil enriched with organic matter. They bloom in spring, adding a splash of color to gardens.",
    season: "spring",
    water: "few days",
    light: "partial shade",
    colour: "pink",
    favourite: false,
    price: 13.00
  },
  {
    id: 25,
    name: "Roselily",
    pic: "/pics/Roselily.jpg",
    text: "Roselily is a hybrid variety of lily known for its large, double blooms and delightful fragrance. This exquisite flower combines the elegance of roses with the charm of lilies, creating a stunning addition to any garden. Roselilies are prized for their long-lasting flowers and make excellent cut flowers for floral arrangements. With proper care, these beauties can bloom abundantly from late spring to early summer, filling the air with their sweet perfume.",
    season: "spring",
    water: "weekly",
    light: "partial shade",
    colour: "pink",
    favourite: false,
    price: 8.00
  },
  {
    id: 26,
    name: "SilverLaceVine",
    pic: "/pics/SilverLaceVine.jpg",
    text: "Silver Lace Vine, also known as Polygonum aubertii, is a fast-growing deciduous vine prized for its delicate foliage and abundant clusters of fragrant flowers. This vigorous vine produces cascades of small, white flowers that attract butterflies and bees. Silver Lace Vine is versatile and can be trained to climb trellises, fences, or arbors, adding vertical interest to gardens. With its graceful appearance and rapid growth rate, it's a popular choice for creating lush green screens or covering unsightly structures.",
    season: "summer, fall",
    water: "few days",
    light: "partial shade",
    colour: "white",
    favourite: false,
    price: 7.50
  },
  {
    id: 27,
    name: "Snapdragon",
    pic: "/pics/SnapDragon.jpg",
    text: "Snapdragon, or Antirrhinum majus, is a classic garden flower prized for its vibrant spikes of blooms and spicy fragrance. Available in a rainbow of colors, including pink, red, orange, yellow, and white, snapdragons add vertical interest to beds, borders, and containers. These versatile annuals attract pollinators like bees and butterflies and are excellent for cutting, making them a favorite choice for floral arrangements. Snapdragons thrive in cool weather and bloom prolifically from late spring to early summer.",
    season: "summer",
    water: "daily",
    light: "full sun",
    colour: "yellow",
    favourite: false,
    price: 6.50
  },
  {
    id: 28,
    name: "Snowdrops",
    pic: "/pics/Snowdrops.jpg",
    text: "Snowdrops, or Galanthus, are charming bulbous plants cherished for their delicate, nodding white flowers that signal the arrival of spring. These early bloomers emerge from the snow-covered ground, symbolizing hope and renewal. Snowdrops are easy to grow and naturalize readily, forming beautiful drifts in woodland gardens, under trees, or along pathways. Their dainty blossoms attract early pollinators like bees and provide much-needed nectar after the winter months.",
    season: "spring",
    water: "weekly",
    light: "partial shade",
    colour: "white",
    favourite: false,
    price: 5.50
  },
  {
    id: 29,
    name: "TulipGolden",
    pic: "/pics/TulipGolden.jpg",
    text: "Tulip Golden, or Tulipa, is a cheerful spring-blooming bulb known for its bright golden-yellow flowers and elegant form. These perennial bulbs are a staple of spring gardens, adding vibrant color to beds, borders, and containers. Tulip Golden thrives in well-drained soil and full sun, and its showy blooms make a stunning focal point in any landscape. Whether planted en masse or mixed with other spring-flowering bulbs, Tulip Golden never fails to bring joy to the garden.",
    season: "spring",
    water: "weekly",
    light: "full sun",
    colour: "yellow",
    favourite: false,
    price: 9.00
  },
  {
    id: 30,
    name: "VenusFlytrap",
    pic: "/pics/VenusFlytrap.jpg",
    text: "Venus Flytrap, or Dionaea muscipula, is a fascinating carnivorous plant native to subtropical wetlands on the East Coast of the United States. Known for its unique trapping mechanism, the Venus Flytrap captures and digests insects for nutrients. This extraordinary plant has hinged leaves lined with sensitive trigger hairs that snap shut when stimulated by prey. Venus Flytraps require high humidity, bright light, and nutrient-poor soil to thrive, making them intriguing additions to terrariums or bog gardens.",
    season: "year-round",
    water: "weekly",
    light: "full sun",
    colour: "red",
    favourite: false,
    price: 10.00
  },
  {
    id: 31,
    name: "Vinca",
    pic: "/pics/Vinca.jpg",
    text: "Vinca, or Catharanthus roseus, is a versatile annual known for its glossy green foliage and colorful flowers. This low-maintenance plant blooms profusely throughout the summer, covering the ground with a carpet of vibrant blooms in shades of pink, purple, red, or white. Vinca is heat and drought tolerant, making it perfect for hot, sunny locations where other plants struggle to thrive. Whether used as a ground cover, border plant, or container filler, Vinca adds beauty and charm to any garden.",
    season: "summer",
    water: "weekly",
    light: "full sun",
    colour: "pink",
    favourite: false,
    price: 4.50
  }
];












export default PRODUCTS;
// Explanation of scales used:
// For water: daily, few days, weekly
// For light: full sun, partial shade, shade
// For season: spring, summer, fall
