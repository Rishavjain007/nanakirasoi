import React from 'react';
import { Heart, Quote } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-orange-600" fill="currentColor" />
              <span className="text-orange-600 text-sm font-semibold">Testimonials</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Voices of Hope & Gratitude
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Stories from the hearts of those we serve and those who serve with us
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50/20 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <Quote className="w-6 h-6 text-orange-600" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Heart
                        key={i}
                        className="w-4 h-4 text-orange-500"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-orange-100">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-orange-600 font-medium">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Every Story Matters
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              These testimonials represent thousands of lives touched by the compassion of our
              donors and the dedication of our volunteers. Each meal served is a story of hope,
              dignity, and community.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: '98%',
                  label: 'Satisfaction Rate',
                  description: 'Beneficiaries satisfied with our services',
                },
                {
                  number: '1,200+',
                  label: 'Families Helped',
                  description: 'Regular beneficiaries across all centers',
                },
                {
                  number: '150+',
                  label: 'Active Volunteers',
                  description: 'Dedicated individuals serving daily',
                },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-2xl bg-white">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-orange-600" fill="currentColor" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Share Your Experience
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Have you been touched by our work or volunteered with us? We'd love to hear
                  your story and share it with our community.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Share Your Story
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Be Part of These Stories
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              Your support creates more success stories. Join us in our mission to feed hope and
              change lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Donate Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Volunteer With Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;