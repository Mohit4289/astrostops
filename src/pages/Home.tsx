import { Link } from "react-router-dom";
import {
  FaSuitcase,
  FaFire,
  FaStar,
  FaUsers,
  FaCalendarAlt,
  FaMapPin,
  FaSun,
  FaRocket,
  FaSearch,
  FaClock,
  FaChevronRight,
  FaMapMarker,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { IoTelescope } from "react-icons/io5";
import { GiCampingTent } from "react-icons/gi";
import { GiMountainRoad } from "react-icons/gi";
import { WiSunset } from "react-icons/wi";
import { RiStarSFill } from "react-icons/ri";
import { LuTent } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { BsMoonStarsFill } from "react-icons/bs";
import { FiClock, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
export default function Home() {
  const reviews = [
    {
      name: "Sarah Thompson",
      location: "Mountain Valley Camp",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      rating: 5,
      text: "An incredible experience! The stargazing was phenomenal, and the facilities were top-notch. Will definitely return!",
    },
    {
      name: "Michael Chen",
      location: "Desert Night Sky",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      rating: 5,
      text: "The desert location offered the clearest night sky I've ever seen. The guided astronomy tour was incredibly informative.",
    },
    {
      name: "Emma Rodriguez",
      location: "Forest Haven",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
      rating: 5,
      text: "Perfect blend of comfort and nature. The telescope facilities were excellent, and the staff was very knowledgeable.",
    },
  ];

  const blogPosts = [
    {
      title: "Best Stargazing Spots in North America",
      excerpt:
        "Discover the top locations for viewing celestial wonders across the continent, from desert skies to mountain peaks.",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80",
      author: "Emma Wilson",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Destinations",
    },
    {
      title: "Essential Gear for Night Sky Photography",
      excerpt:
        "A comprehensive guide to the equipment and techniques needed to capture stunning astrophotography.",
      image:
        "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80",
      author: "Michael Chen",
      date: "March 12, 2025",
      readTime: "8 min read",
      category: "Photography",
    },
    {
      title: "Understanding the Phases of the Moon",
      excerpt:
        "Learn how lunar phases affect your stargazing experience and plan your trips accordingly.",
      image:
        "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&q=80",
      author: "Sarah Thompson",
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "Education",
    },
  ];

  const popularLocations = [
    {
      title: "Home Stay",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/574149164.jpg?k=85c4215975cdaa314a30dfbbbfc498da8f4a7bd4aebd24dc4417eb45790d0b31&o=&hp=1",
      rating: 4.9,
      price: "₹729",
    },
    {
      title: "Bedroom",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/365573852.jpg?k=b0c52f1618bde9abc552a64554da93621f5731c8b9de0059135948c9bbc7aea2&o=&hp=1",
      rating: 4.8,
      price: "₹749",
    },
    {
      title: "Tent",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/365573852.jpg?k=b0c52f1618bde9abc552a64554da93621f5731c8b9de0059135948c9bbc7aea2&o=&hp=1",
      rating: 4.7,
      price: "₹719",
    },
  ];

  const upcomingEvents = [
    {
      title: "Night Sky Exploration",
      type: "Stargazing",
      date: "April 15, 2025",
      time: "9:00 PM - 11:30 PM",
      location: "Mountain Valley Camp",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80",
      description:
        "Join our expert astronomers for a guided tour of the night sky. Observe planets, star clusters, and distant galaxies through our professional telescopes.",
      icon: <FaStar className="h-6 w-6" />,
    },
    {
      title: "Solar Prominence Watch",
      type: "Solar Observation",
      date: "April 16, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Desert Night Sky",
      image:
        "https://images.unsplash.com/photo-1532408840957-031d8034aeef?auto=format&fit=crop&q=80",
      description:
        "Safely observe the Sun through our specialized solar telescopes. Learn about solar flares, prominences, and sunspots.",
      icon: <FaSun className="h-6 w-6" />,
    },
    {
      title: "Launch Day: Water Rockets",
      type: "Rocketry",
      date: "April 17, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Forest Haven",
      image:
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80",
      description:
        "Design, build, and launch your own water rocket! Perfect for families and aspiring scientists. All materials provided.",
      icon: <FaRocket className="h-6 w-6" />,
    },
  ];

  const events = [
    {
      id: "1",
      date: "14 Dec",
      title: "Moon & Jupiter Conjunction",
      time: "14 December, 2025 | 5:30 PM",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6bUu7h5tOIrg79n-sUkKzwHaFM%26pid%3DApi&f=1&ipt=5e711cbb27ed8c18d17ea65989d58ab381a30a2bd30d38bba1b02768b9c5a8cb&ipo=images",
      description:
        "A spectacular celestial event where the Moon and Jupiter appear extremely close to each other in the night sky, creating a stunning visual alignment.",
      icon: <MdKeyboardDoubleArrowRight className="h-6 w-6" />,
    },
    {
      id: "2",
      date: "25 Mar",
      title: "Total Lunar Eclipse",
      time: "25 March, 2026 | 8:45 PM",
      img: "https://nineplanets.org/wp-content/uploads/2020/11/0415Eclipse_Hallas.jpg",
      description:
        "During this total lunar eclipse, the Earth's shadow will completely cover the Moon, giving it a mesmerizing reddish hue, often referred to as the 'Blood Moon'.",
      icon: <MdKeyboardDoubleArrowLeft className="h-6 w-6" />,
    },
    {
      id: "3",
      date: "12 Aug",
      title: "Perseid Meteor Shower",
      time: "12 August, 2026 | 11:30 PM",
      img: "https://www.thescottishsun.co.uk/wp-content/uploads/sites/2/2017/06/nintchdbpict000257759230.jpg",
      description:
        "One of the most stunning meteor showers of the year, where up to 100 meteors per hour streak across the sky, best viewed in dark locations.",
      icon: <MdKeyboardDoubleArrowRight className="h-6 w-6" />,
    },
    {
      id: "4",
      date: "8 Nov",
      title: "Partial Solar Eclipse",
      time: "8 November, 2026 | 3:15 PM",
      img: "https://cdn.mos.cms.futurecdn.net/p4ySLuSmbdKDpU732mRaP9-1200-80.jpg",
      description:
        "A partial solar eclipse where the Moon will cover part of the Sun, creating a fascinating crescent-shaped Sun visible from certain locations.",
      icon: <MdKeyboardDoubleArrowLeft className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Search Panel */}
      <header className="relative h-[75vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center animate-fadeIn"
          style={{
            backgroundImage:
              'url("https://www.familyvacationcritic.com/wp-content/uploads/sites/19/2019/04/CampingAtNight-anatoliy_gleb-ShutterstockHERO.jpg")',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />

          {/* Twinkling Stars */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-twinkle delay-200"></div>
            <div className="absolute bottom-10 left-1/3 w-1 h-1 bg-white rounded-full animate-twinkle delay-400"></div>
            <div className="absolute bottom-16 right-1/4 w-1 h-1 bg-white rounded-full animate-twinkle delay-600"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-lg tracking-wide animate-fadeZoom">
            Find Your Perfect Stargazing Spot
          </h1>
          <p className="text-lg md:text-xl mb-4 opacity-90 animate-fadeUp">
            Explore Celestial Wonders at Our Top Camping Spots
          </p>
          <p className="text-xl font-semibold italic opacity-90 animate-fadeUp delay-500">
            "Sleep under the stars, wake up to a dream." ✨
          </p>
          {/* Star Rating */}
          <p className="text-lg font-bold md:text-2xl flex flex-col items-center justify-center gap-4 animate-fadeUp delay-700">
            <div className="flex items-center gap-2">
              <FcGoogle className="h-10 w-10" />
              <div className="flex flex-col items-start">
                <h1 className="text-lg font-bold">Review</h1>
                <div className="flex items-center gap-1">
                  <RiStarSFill className="h-5 w-5 text-yellow-400 animate-pulse" />
                  <RiStarSFill className="h-5 w-5 text-yellow-400 animate-pulse delay-150" />
                  <RiStarSFill className="h-5 w-5 text-yellow-400 animate-pulse delay-300" />
                  <RiStarSFill className="h-5 w-5 text-yellow-400 animate-pulse delay-450" />
                  <RiStarSFill className="h-5 w-5 text-yellow-400 animate-pulse delay-600" />
                </div>
              </div>
            </div>
            <span>Top Rated Properties In Nainital</span>
          </p>
        </div>
      </header>

      {/* Search Panel - Half on image, half outside */}
      <div className="relative -mt-32 ">
        <div className="container mx-auto px-10">
          <div className="max-w-4xl mx-auto bg-black-500/30 backdrop-blur-md shadow-2xl rounded-3xl p-4 border border-white/20">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Location Input */}
              <div>
                <label className="block text-lg font-semibold text-white mb-2">
                  Location
                </label>
                <div className="relative">
                  <FaMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="pl-12 w-full text-black border border-gray-300 rounded-xl p-3 bg-white backdrop-blur-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>

              {/* Check-In Date */}
              <div>
                <label className="block text-lg font-semibold text-white mb-2">
                  Check In
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-xl p-3 bg-white backdrop-blur-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              {/* Guests Selection */}
              <div>
                <label className="block text-lg font-semibold text-white mb-2">
                  Guests
                </label>
                <select className="w-full border border-gray-300 rounded-xl p-3 bg-white backdrop-blur-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition">
                  <option>1-2 Guests</option>
                  <option>3-4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-xl shadow-lg hover:scale-90 transition-transform font-semibold text-lg">
              One Click Away
              <BsMoonStarsFill className="inline-block h-6 w-6 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-10 bg-gray-50 -mt-5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-6 gap-12">
            <div className="text-center">
              <div className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaSearch className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg  mb-4">Guided Hikes</h3>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuTent className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg  mb-4">Cozy Stays</h3>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaFire className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg  mb-4">Bonfire Nights</h3>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaSuitcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg  mb-4">Workation</h3>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                <GiMountainRoad className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg  mb-4">Mountain View</h3>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto ">
                <IoTelescope className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg  mb-4">Stargazing & Astronomy</h3>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto ">
                <GiCampingTent className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg  mb-4">Camping</h3>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto">
                <GiMeal className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg mb-4">Meal</h3>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center mx-auto">
                <WiSunset className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg mb-4">Sunset Point</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-10 -mt-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 text-center mb-12 mx-auto">
            Join us for exciting astronomical events and activities. Perfect for
            families, enthusiasts, and curious minds of all ages.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                    {event.icon}
                    {event.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="h-4 w-4 text-blue-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="h-4 w-4 text-blue-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarker className="h-4 w-4 text-blue-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full  bg-blue-500 hover:bg-blue-400 text-black hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center text-blue-500 hover:text-blue-600 font-semibold"
            >
              View All Events
              <FaChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-16 -mt-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Destinations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {popularLocations.map((location, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${location.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {location.title}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <FaStar className="h-5 w-5 text-blue-500 fill-current" />
                      <span className="text-gray-600">{location.rating}</span>
                    </div>
                    <span className="text-xl font-bold">{location.price}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-500 text-sm">
                    <div className="flex items-center space-x-1">
                      <FaUsers className="h-4 w-4" />
                      <span>2-4 people</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaRegCalendarAlt className="h-4 w-4" />
                      <span>1-3 nights</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* quotes */}
      <div className="p-10 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto w-[80%] rounded-lg mb-10 shadow-lg">
        <h1 className="mb-5 text-center text-3xl font-bold text-white tracking-wide drop-shadow-md">
          Astral Insights ✨
        </h1>
        <h1 className="text-white font-extrabold text-5xl text-center mb-5 leading-tight drop-shadow-lg">
          “Look at the stars. See their beauty. And in that beauty, see
          yourself.”
        </h1>
        <p className="text-white text-2xl text-center italic opacity-90">
          — Draya Mooney
        </p>
      </div>

      {/* Events */}
      <div className="w-full min-h-screen text-white flex flex-col items-center py-20 px-4">
        {/* Title */}
        <motion.h1
          className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Upcoming Astronomical Events
        </motion.h1>

        {/* Timeline Container */}
        <div className="relative w-full max-w-4xl">
          {/* Timeline Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-blue-500"></div>

          {/* Timeline Events */}
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center w-full my-10 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {/* Event Dot with Rocket */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500  text-white text-4xl rounded-full shadow-lg">
                {event.icon}
              </div>

              {/* Zig-Zag Layout */}
              <div
                className={`w-1/2 flex ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <div className="w-full bg-black backdrop-blur-lg  mr-10 ml-10 rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-40 object-cover rounded-lg "
                  />

                  <p className="text-gray-500 mt-2 text-sm p-4 text-white">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Event Details */}
              <div className="w-1/2 px-6">
                <h2 className="text-3xl font-semibold text-gray-500">
                  {event.title}
                </h2>
                <h2 className="text-2xl text-gray-500 font-semibold">
                  {event.date}
                </h2>

                {/* Book Now Button */}
                <button className="mt-4 py-2 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Section */}
      <div className="container mx-auto px-6  mb-2">
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

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Guests Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                </div>
                <div className="flex items-center text-blue-500 gap-2 mb-4">
                  <FcGoogle className="h-5 w-5" />
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready for Your Stargazing Adventure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable experience under the stars. Book your
            spot today and create memories that will last a lifetime.
          </p>
          <Link
            to="/signup"
            className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition text-lg inline-block"
          >
            Book Your Stay Now
          </Link>
        </div>
      </section>
    </div>
  );
}
