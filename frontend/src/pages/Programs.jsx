import React from "react";
import { Utensils, Home, Truck, Heart, BookOpen, Shield } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { programs } from "../data/mock";

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
              <span className="text-orange-600 text-sm font-semibold">
                Our Programs
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              What We’re Building Through Nana Ki Rasoi
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Dignity-first initiatives designed to serve meals, strengthen
              communities, and respond to everyday needs with care.
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
                    <p className="text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
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
                How Our Work Creates Impact
              </h2>
              <p className="text-lg text-gray-600">
                A dignity-first approach that meets immediate needs while
                building care, belonging, and community support.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Immediate Food Support",
                  description:
                    "We provide warm, nutritious meals to people who need them most, ensuring that hunger is met with care, consistency, and dignity.",
                },
                {
                  step: "02",
                  title: "Community Building",
                  description:
                    "Our community kitchens are designed to be welcoming spaces where people can sit, eat, and feel seen, not stand in line for handouts.",
                },
                {
                  step: "03",
                  title: "Women-Led Livelihoods",
                  description:
                    "Nana Ki Rasoi aims to create meaningful livelihood opportunities for women through our kitchens and other community-based food initiatives.",
                },
                {
                  step: "04",
                  title: "Long-term Solutions",
                  description:
                    "Through education and partnerships, we work towards sustainable solutions that address the root causes of food insecurity.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Ways to Support Nana Ki Rasoi
              </h2>
              <p className="text-lg text-gray-600">
                Whether you volunteer, donate, or partner with us, your support
                helps turn care into action.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Volunteer",
                  description:
                    "Join us in serving meals, supporting community initiatives, and helping bring warmth and care to those who need it most.",
                  cta: "Sign Up",
                  link: "/contact",
                },
                {
                  title: "Donate",
                  description:
                    "Your contribution helps us build and sustain community kitchens, support meal initiatives, and respond to everyday needs with respect.",
                  cta: "Donate Now",
                  link: "/donate",
                },
                {
                  title: "Partner",
                  description:
                    "We welcome collaborations with businesses, institutions, and community groups who want to support our work through funding, resources, or shared initiatives.",
                  cta: "Learn More",
                  link: "/contact",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white"
                >
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
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
    </div>
  );
};

export default Programs;
