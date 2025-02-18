import React from 'react';
import { FaUsers, FaRegLightbulb, FaRegStar } from 'react-icons/fa';

export default function About() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      bio: 'Visionary leader with 15+ years in space tourism.',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      bio: 'Expert in space hospitality management.',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Chief Experience Officer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
      bio: 'Pioneering space travel experiences.',
    },
  ];

  const values = [
    {
      icon: <FaUsers className="h-8 w-8" />,
      title: 'Community',
      description: 'Building a global community of space enthusiasts.',
    },
    {
      icon: <FaRegLightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Pushing the boundaries of space hospitality.',
    },
    {
      icon: <FaRegStar className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Delivering exceptional experiences beyond Earth.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-200">
              Pioneering the future of space tourism and hospitality since 2020
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At AstroStops, we're dedicated to making space travel accessible
              while providing unparalleled comfort and luxury. Our mission is to
              pioneer sustainable space tourism and create unforgettable
              experiences that inspire the next generation of space explorers.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-500 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-500 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-400">Successful Launches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-gray-400">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-gray-400">Space Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}