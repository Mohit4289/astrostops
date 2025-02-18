import { FaUsers, FaCalendar, FaMapPin } from 'react-icons/fa';
import { BsFillCloudMoonFill } from 'react-icons/bs';

export default function Properties() {
  const properties = [
    {
      title: 'Mountain Valley Camp',
      location: 'Colorado Rockies',
      image:
        'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&q=80',
      rating: 4.9,
      price: '$129',
      description:
        'Experience the clearest night skies from our mountain-top location.',
      features: ['Dark Sky Certified', 'Guided Tours', 'Telescope Access'],
    },
    {
      title: 'Desert Night Sky',
      location: 'Arizona Desert',
      image:
        'https://images.unsplash.com/photo-1537477947841-92be5e22fc51?auto=format&fit=crop&q=80',
      rating: 4.8,
      price: '$149',
      description: 'Unmatched stargazing in the heart of the desert.',
      features: [
        'Zero Light Pollution',
        'Astronomy Workshops',
        'Luxury Camping',
      ],
    },
    {
      title: 'Forest Haven',
      location: 'Pacific Northwest',
      image:
        'https://images.unsplash.com/photo-1517823382935-51bfcb0ec6bc?auto=format&fit=crop&q=80',
      rating: 4.7,
      price: '$119',
      description: 'A perfect blend of forest tranquility and stellar views.',
      features: ['Private Viewing Decks', 'Night Photography', 'Nature Trails'],
    },
    {
      title: 'Lakeside Observatory',
      location: 'Minnesota Lakes',
      image:
        'https://images.unsplash.com/photo-1496545672447-f699b503d270?auto=format&fit=crop&q=80',
      rating: 4.9,
      price: '$159',
      description: 'Stargaze by the serene lakeside with premium facilities.',
      features: ['Observatory Access', 'Lake Activities', 'Aurora Viewing'],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Search Section */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">
              Find Your Perfect Stargazing Spot
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <FaMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Where to?"
                      className="pl-10 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check In
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Guests
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>1-2 Guests</option>
                    <option>3-4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Search Locations
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${property.image})` }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold">{property.title}</h3>
                    <span className="text-2xl font-bold text-blue-500">
                      {property.price}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaMapPin className="h-4 w-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{property.description}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      <BsFillCloudMoonFill className="h-5 w-5 text-blue-500 fill-current" />
                      <span className="ml-1">{property.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <FaUsers className="h-4 w-4 mr-1" />
                      <span>2-4 people</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendar className="h-4 w-4 mr-1" />
                      <span>1-3 nights</span>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature, fIndex) => (
                        <span
                          key={fIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
