import React from "react";
import { Target, Eye, Award, Users, Utensils, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { aboutData } from "../data/mock";
import image2 from "../assets/image/b4.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-orange-50 via-white to-orange-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                OUR APPROACH
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Community Kitchens Built on Dignity, Not Charity
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Nana Ki Rasoi is creating community kitchens where anyone can walk
              in, sit down, and share a warm, nutritious meal with dignity. Our
              model is simple— fresh meals, welcoming spaces, and a
              pay-what-you-can approach that ensures no one is turned away. At
              the same time, we create meaningful livelihood opportunities for
              women from underserved communities, making every kitchen a space
              of both nourishment and empowerment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-orange-50 to-orange-100/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
              <Utensils className="w-4 h-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                Why Our Model Works:
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Utensils,
                title: "Respect, Not Charity",
                description: "Seated dining and shared tables; no handouts.",
              },
              {
                icon: TrendingUp,
                title: "Built to Grow",
                description:
                  "A low-cost, replicable model that women from the neighbourhood can lead and expand across cities.",
              },
              {
                icon: Users,
                title: "Open to All",
                description:
                  "Anyone can walk in, eat, and pay what they can; no one is turned away.",
              },
              {
                icon: Users,
                title: "Strengthening Communities",
                description:
                  "Turning meals into moments of collective connection and care.",
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
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
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

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-orange-600" />
              <span className="text-orange-600 text-sm font-semibold">
                Our Values
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These are the values that shape how we serve, care, and build
              community.
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
                A Note From the Founder
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-1 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/40">
                {/* RIGHT CONTENT */}
                <div className="p-10 flex flex-col justify-center">
                  <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                    Founder Note
                  </span>
                  <p>
                    Nana Ki Rasoi was born from a deeply personal memory.
                    Growing up, my Nana’s home was a place of warmth, comfort,
                    and quiet abundance. Food was never just food there; it was
                    care, safety, and the unspoken assurance that no matter what
                    happened, someone was there for you.{" "}
                  </p>
                  <b>“मैं बैठा हूँ ना”</b>
                  <p>
                    My Nana’s quiet way of saying, “You’re not alone.” That
                    feeling stayed with me. As I grew older, I began to
                    understand how many people live without that sense of
                    certainty, not just around food, but around care itself.
                    Hunger is not only about an empty stomach.{" "}
                  </p>
                  <p>
                    It is also about loneliness, instability, and the quiet loss
                    of dignity that comes when basic needs go unmet. Nana Ki
                    Rasoi is my way of building the kind of world I wish more
                    people had access to; one where support feels human, and no
                    one has to navigate hardship alone.
                  </p>
                  <p>
                    What began as a personal memory has become a larger
                    commitment — to build community kitchens where food is
                    served with dignity, and where no one feels forgotten.
                  </p>
                </div>
              </div>
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
              Be Part of the Story
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              Through donations, volunteering, and partnerships, you can help us
              create community kitchens where food is served with dignity, care,
              and belonging.
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
