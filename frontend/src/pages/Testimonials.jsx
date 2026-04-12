import React from "react";
import { Heart, Quote } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { testimonials } from "../data/mock";

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-orange-600" fill="currentColor" />
              <span className="text-orange-600 text-sm font-semibold">
                Testimonials
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Voices from Our Community
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Reflections from the people who support, shape, and share in our
              journey.
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
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-orange-600 font-medium">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              Be Part of the Work Behind These Stories
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              Your support helps us serve meals, strengthen communities, and
              continue showing up with care where it matters most.
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
