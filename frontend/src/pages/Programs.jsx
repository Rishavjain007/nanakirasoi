import React from 'react';
import { Utensils, Home, Truck, Heart, BookOpen, Shield } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { programs } from '../data/mock';

const Programs = () => {
  const iconMap = {
    utensils: Utensils,
    home: Home,
    truck: Truck,
    heart: Heart,
    book: BookOpen,
    shield: Shield,
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">Our Programs</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming Lives Through Action
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Comprehensive programs designed to fight hunger and build stronger communities
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = iconMap[program.icon] || Heart;
              return (
                <Card
                  key={program.id}
                  className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group bg-white"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-200">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{program.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How Our Programs Create Impact
              </h2>
              <p className="text-lg text-gray-600">
                A systematic approach to eliminate hunger and build self-reliance
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Immediate Relief',
                  description:
                    'We provide hot, nutritious meals to those facing immediate hunger, ensuring no one goes to bed with an empty stomach.',
                },
                {
                  step: '02',
                  title: 'Community Building',
                  description:
                    'Our community kitchens bring people together, fostering dignity, social connections, and mutual support among beneficiaries.',
                },
                {
                  step: '03',
                  title: 'Skill Development',
                  description:
                    'We offer training in cooking, nutrition, and food handling, creating employment opportunities and empowering communities.',
                },
                {
                  step: '04',
                  title: 'Long-term Solutions',
                  description:
                    'Through education and partnerships, we work towards sustainable solutions that address the root causes of food insecurity.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Programs by the Numbers
            </h2>
            <p className="text-lg text-orange-100">
              Measurable impact across all our initiatives
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: '2,000+', label: 'Daily Meals' },
              { value: '25+', label: 'Distribution Centers' },
              { value: '150+', label: 'Trained Volunteers' },
              { value: '50K+', label: 'Total Meals Served' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-orange-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Get Involved in Our Programs
              </h2>
              <p className="text-lg text-gray-600">
                There are many ways you can contribute to our mission
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Volunteer',
                  description: 'Join our team and help us serve meals, organize events, or provide professional skills.',
                  cta: 'Sign Up',
                  link: '/contact',
                },
                {
                  title: 'Donate',
                  description: 'Your financial contribution helps us expand our programs and reach more people in need.',
                  cta: 'Donate Now',
                  link: '/donate',
                },
                {
                  title: 'Partner',
                  description: 'Corporate partnerships and CSR collaborations help us create sustainable impact.',
                  cta: 'Learn More',
                  link: '/contact',
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white"
                >
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <a
                      href={item.link}
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {item.cta}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Together, We Can End Hunger
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              Every contribution brings us one step closer to a world where no one sleeps hungry
            </p>
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" fill="currentColor" />
              Support Our Mission
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;