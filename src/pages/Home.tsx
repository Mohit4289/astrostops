import { Link } from 'react-router-dom';
import {
  FaMountain,
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
} from 'react-icons/fa';

import { LuTent } from 'react-icons/lu';
import { FcGoogle } from 'react-icons/fc';

export default function Home() {
  const reviews = [
    {
      name: 'Sarah Thompson',
      location: 'Mountain Valley Camp',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      rating: 5,
      text: 'An incredible experience! The stargazing was phenomenal, and the facilities were top-notch. Will definitely return!',
    },
    {
      name: 'Michael Chen',
      location: 'Desert Night Sky',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      rating: 5,
      text: "The desert location offered the clearest night sky I've ever seen. The guided astronomy tour was incredibly informative.",
    },
    {
      name: 'Emma Rodriguez',
      location: 'Forest Haven',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
      rating: 5,
      text: 'Perfect blend of comfort and nature. The telescope facilities were excellent, and the staff was very knowledgeable.',
    },
  ];

  const popularLocations = [
    {
      title: 'Home Stay',
      image:
        'https://cf.bstatic.com/xdata/images/hotel/max1280x900/574149164.jpg?k=85c4215975cdaa314a30dfbbbfc498da8f4a7bd4aebd24dc4417eb45790d0b31&o=&hp=1',
      rating: 4.9,
      price: '₹729',
    },
    {
      title: 'Bedroom',
      image:
        'https://cf.bstatic.com/xdata/images/hotel/max1280x900/365573852.jpg?k=b0c52f1618bde9abc552a64554da93621f5731c8b9de0059135948c9bbc7aea2&o=&hp=1',
      rating: 4.8,
      price: '₹749',
    },
    {
      title: 'Tent',
      image:
        'https://cf.bstatic.com/xdata/images/hotel/max1280x900/365573852.jpg?k=b0c52f1618bde9abc552a64554da93621f5731c8b9de0059135948c9bbc7aea2&o=&hp=1',
      rating: 4.7,
      price: '₹719',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Night Sky Exploration',
      type: 'Stargazing',
      date: 'April 15, 2025',
      time: '9:00 PM - 11:30 PM',
      location: 'Mountain Valley Camp',
      image:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80',
      description:
        'Join our expert astronomers for a guided tour of the night sky. Observe planets, star clusters, and distant galaxies through our professional telescopes.',
      icon: <FaStar className="h-6 w-6" />,
    },
    {
      title: 'Solar Prominence Watch',
      type: 'Solar Observation',
      date: 'April 16, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'Desert Night Sky',
      image:
        'https://images.unsplash.com/photo-1532408840957-031d8034aeef?auto=format&fit=crop&q=80',
      description:
        'Safely observe the Sun through our specialized solar telescopes. Learn about solar flares, prominences, and sunspots.',
      icon: <FaSun className="h-6 w-6" />,
    },
    {
      title: 'Launch Day: Water Rockets',
      type: 'Rocketry',
      date: 'April 17, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Forest Haven',
      image:
        'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80',
      description:
        'Design, build, and launch your own water rocket! Perfect for families and aspiring scientists. All materials provided.',
      icon: <FaRocket className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Search Panel */}
      <header className="relative h-[70vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-photo/joyful-family-picnic-around-burning-coal-generated-by-ai_188544-40746.jpg?t=st=1739598463~exp=1739602063~hmac=c265a4e7cb73739e5450cd675d83eb46b81e5aca4a07819b1dd8fc2cafb89065&w=1380")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-center">
          <div className="max-w-2xl text-center text-white mb-3">
            <h1 className="text-2xl md:text-5xl font-bold mb-6">
              Find Your Perfect Stargazing Spot
            </h1>
            <p className="text-lg md:text-xl mb-2">
              Explore Celestial Wonders at Our Top Camping Spots
            </p>
            <p className="text-lg font-bold md:text-xl text-blue-500">
              <FcGoogle className="inline-block h-6 w-6" />
              Top Rated Properties
            </p>
          </div>
        </div>
      </header>

      {/* Search Panel - Half on image, half outside */}
      <div className="relative -mt-24 mb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <FaMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="pl-10 w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check In
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Guests
                </label>
                <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>1-2 Guests</option>
                  <option>3-4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold text-lg">
              Search Locations
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-6 gap-12">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaSearch className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Guided Hikes</h3>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuTent className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cozy Stays</h3>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaFire className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Bonfire Nights</h3>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaSuitcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Workation</h3>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMountain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Mountain</h3>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaStar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Stargazing</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-20">
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

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
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
                  <button className="mt-6 w-full bg-gray-50 bg-blue-500 hover:bg-blue-600 text-black hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors">
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
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="h-5 w-5 text-blue-500 fill-current"
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