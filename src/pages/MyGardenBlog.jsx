const posts = [
  {
    id: 1,
    title: 'GARDENING FOR BEGINNERS',
    href: '#',
    description:
      `Gardening is a wonderful hobby that connects you with nature and brings beauty and freshness to your surroundings. Whether you have a spacious backyard or just a small balcony, you can create your own green oasis. Here 
      are some basic tips to get you started:1. Start Small: Begin with a small area or a few pots. This allows you to focus your efforts and learn as you go without feeling overwhelmed.
      
      1. Choose the Right Spot: Select a spot that gets plenty of sunlight (at least 6 hours per day) and has good drainage. If you're gardening indoors, choose a sunny windowsill or consider investing in grow lights.`,
    date: 'Mar 18, 2024',
    datetime: '2020-03-16'
  },
  {
      id: 2,
      title: 'KEEP YOUR FLOWERS HAPPY',
      href: '#',
      description:
      `Gardening brings joy and beauty to our outdoor spaces, and keeping our flowers healthy ensures they thrive and bloom abundantly. Here are some essential tips to keep your garden flowers in top condition:

      1. Choose the Right Plants: Select flowers that are well-suited to your garden's growing conditions. Consider factors like sunlight, soil type, and climate when choosing your plants.
      
      2. Provide Adequate Water: Proper watering is crucial for healthy flowers. Water your plants deeply and evenly, ensuring the soil is moist but not waterlogged. Water in the morning to reduce the risk of fungal diseases and allow foliage to dry before nightfall.`,
      date: 'Mar 25, 2024',
      datetime: '2020-03-16'
  }
  ]


  function MyGardenBlog() {
      return (
        <div className="py-8 snap-x">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between snap">
              <div className="flex flex-col gap-x-4 text-xs mt-6">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
              </div>
    
              <div className="group relative flex-1">
                <h3 className="my-3 text-lg font-semibold leading-6 text-gray-900">
                  <span>
                    <a href={post.href} className="text-black">{post.title}</a>
                  </span>
                </h3>
    
                <p className="line-clamp-3 text-sm leading-6 px-3 my-6 text-gray-600">
                  {/* Make description clickable */}
                  <a href={post.href}>{post.description}</a>
                </p>
    
                <button className="bg-amber-400 py-2 px-3 w-46 z-10 shadow-md hover:bg-amber-600 transition duration-300 ease-in-out font-semi">
                  READ MORE
                </button>
              </div>
            </article>
          ))}
        </div>
      );
    }
    
    export default MyGardenBlog;
    
    
