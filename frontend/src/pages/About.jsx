import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { aboutData } from '../data/mock';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">About Nanakirasoi</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Serving Humanity with Compassion
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Every meal we serve carries the warmth of compassion and the promise of a better tomorrow
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutData.image}
                alt="Our mission in action"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {aboutData.mission}
              </p>

              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutData.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-orange-100">
              Every statistic represents lives touched and hope restored
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, index) => (
              <Card
                key={index}
                className="border-none bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-orange-100 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">Our Values</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our values guide every action we take and every meal we serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {aboutData.values.map((value, index) => (
              <Card
                key={index}
                className="border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-gradient-to-br from-white to-orange-50/20"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {value.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{value}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-orange-50 to-orange-100/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Nanakirasoi was born from a simple observation: while food waste is abundant in
                some parts of our society, countless people struggle to get even one meal a day.
                We started with just five volunteers and one community kitchen, serving 50 meals
                a day.
              </p>
              <p>
                What began as a small initiative has grown into a movement. Today, we operate
                25+ distribution centers, serve over 2,000 meals daily, and have touched the
                lives of thousands of families. But our journey is far from over.
              </p>
              <p>
                Every meal we serve is prepared with the same care and love that you would for
                your own family. We believe in serving with dignity – our beneficiaries are not
                recipients of charity, but members of our extended family who are going through
                difficult times.
              </p>
              <p className="font-semibold text-gray-900">
                Our dream is simple yet ambitious: a world where no one goes to bed hungry, where
                access to nutritious food is a reality for all, not a privilege for some.
              </p>
            </div>
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
              Join Us in Our Mission
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              Whether through donations, volunteering, or spreading awareness, you can be part
              of this journey towards a hunger-free world.
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

export default About;