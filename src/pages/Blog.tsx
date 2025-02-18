import { AiOutlineUser } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs';
import { FiClock, FiChevronRight } from 'react-icons/fi';

export default function Blog() {
  const blogPosts = [
    {
      title: 'Best Stargazing Spots in North America',
      excerpt:
        'Discover the top locations for viewing celestial wonders across the continent, from desert skies to mountain peaks.',
      image:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80',
      author: 'Emma Wilson',
      date: 'March 15, 2025',
      readTime: '5 min read',
      category: 'Destinations',
    },
    {
      title: 'Essential Gear for Night Sky Photography',
      excerpt:
        'A comprehensive guide to the equipment and techniques needed to capture stunning astrophotography.',
      image:
        'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80',
      author: 'Michael Chen',
      date: 'March 12, 2025',
      readTime: '8 min read',
      category: 'Photography',
    },
    {
      title: 'Understanding the Phases of the Moon',
      excerpt:
        'Learn how lunar phases affect your stargazing experience and plan your trips accordingly.',
      image:
        'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&q=80',
      author: 'Sarah Thompson',
      date: 'March 10, 2025',
      readTime: '6 min read',
      category: 'Education',
    },
  ];

  const featuredPost = {
    title: 'The Ultimate Guide to Camping Under the Stars',
    excerpt:
      'From selecting the perfect spot to setting up your camp, this comprehensive guide covers everything you need to know for an unforgettable stargazing camping experience.',
    image:
      'https://img.freepik.com/free-photo/starry-sky-night-with-landscape-mountains_23-2151614848.jpg?t=st=1739765080~exp=1739768680~hmac=2a54419efba5530684f3d715f96e344d64d796c67ba9795222e5451f72c258dd&w=1800',
    author: 'David Miller',
    date: 'March 18, 2025',
    readTime: '12 min read',
    category: 'Guides',
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Featured Post */}
      <div className="relative h-[60vh] mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${featuredPost.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
        </div>
        <div className="relative h-full container mx-auto px-6 flex items-end pb-20">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-4 py-1 bg-blue-500 rounded-full text-sm font-semibold mb-4">
              {featuredPost.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {featuredPost.title}
            </h1>
            <p className="text-lg text-gray-200 mb-6">{featuredPost.excerpt}</p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <AiOutlineUser className="h-5 w-5" />
                <span>{featuredPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <BsCalendar className="h-5 w-5" />
                <span>{featuredPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiClock className="h-5 w-5" />
                <span>{featuredPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Posts */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <AiOutlineUser className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FiClock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="text-blue-500 hover:text-blue-600 flex items-center">
                    Read More
                    <FiChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest stargazing tips,
              camping guides, and celestial events.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
