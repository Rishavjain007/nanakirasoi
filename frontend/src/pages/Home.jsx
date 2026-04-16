import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Utensils, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { heroData, aboutData, testimonials } from "../data/mock";

const Home = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroData.image}
            alt="Nana Ki Rasoi volunteers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400/30">
              <Heart className="w-4 h-4 text-orange-400" fill="currentColor" />
              <span className="text-orange-100 text-sm font-medium">
                Making a Difference, One Meal at a Time
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-in slide-in-from-left duration-700">
              {heroData.title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed animate-in slide-in-from-left duration-700 delay-100">
              {heroData.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left duration-700 delay-200">
              <Link to="/donate">
                <Button
                  size="lg"
                  className="flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  <Heart className="w-5 h-5 mr-2" fill="currentColor" />
                  {heroData.cta.primary}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg transition-all duration-300 backdrop-blur-sm"
                >
                  {heroData.cta.secondary}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" ref={statsRef}>
            {aboutData.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-orange-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-orange-600" />
                <span className="text-orange-600 text-sm font-semibold">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                More Than a Meal. A Place to Belong.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {aboutData.mission}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <span className="font-semibold text-gray-900">Our Vision:</span>{" "}
                {aboutData.vision}
              </p>
              <Link to="/about">
                <Button className="flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative fade-in-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutData.image}
                  alt="Our mission"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">150+</div>
                    <div className="text-sm text-gray-600">
                      Active Volunteers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-orange-50 to-orange-100/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
              <Utensils className="w-4 h-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                What We Do
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Nana Ki Rasoi Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are building a dignity-first model of hunger relief rooted in
              warm meals, welcoming spaces, and community care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Utensils,
                title: "Community Kitchens",
                description:
                  "We are building welcoming community kitchens where anyone can access a warm, nutritious meal in a space that feels respectful and safe.",
              },
              {
                icon: TrendingUp,
                title: "Dignity-First Meals",
                description:
                  "Our approach is rooted in dignity, not charity — creating spaces where people can sit, eat, and feel cared for, without judgment or exclusion.",
              },
              {
                icon: Users,
                title: "Community Support",
                description:
                  "Beyond meals, we respond to everyday needs through women-led livelihoods and small support initiatives such as clothing, hygiene, and educational essentials.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="fade-in-up border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What People Are Saying About Nana Ki Rasoi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reflections from people who believe in our mission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="fade-in-up border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-orange-50/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Heart
                        key={i}
                        className="w-4 h-4 text-orange-500"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 fade-in-up">
            <Link to="/testimonials">
              <Button
                variant="outline"
                className="flex items-center border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-6 py-6 text-base transition-all duration-300"
              >
                Read More Stories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Help Us Build a Place Where No One Eats Alone
            </h2>
            <p className="text-lg sm:text-xl text-orange-100 mb-10 leading-relaxed">
              Your support helps us serve warm meals with dignity, strengthen
              communities, and bring care to those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Donate Button */}
              <Link to="/donate">
                <Button
                  size="lg"
                  className="flex items-center gap-2 border-2 border-white text-white 
      hover:bg-white hover:text-orange-600 
      px-8 py-4 text-lg rounded-xl 
      transition-all duration-300"
                >
                  <Heart className="w-5 h-5" fill="currentColor" />
                  Donate Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              {/* Volunteer Button */}
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="flex items-center gap-2 border-2 border-white text-white 
      hover:bg-white hover:text-orange-600 
      px-8 py-4 text-lg rounded-xl 
      transition-all duration-300"
                >
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
