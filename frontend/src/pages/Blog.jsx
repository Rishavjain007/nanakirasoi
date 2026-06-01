import React from "react";
import image1 from "../assets/image/b2.png";
import image2 from "../assets/image/b4.png";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="relative py-24 px-4 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={image1} // food donation image
          alt="background"
          className="w-full h-full object-cover"
        />
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="font-semibold mb-2">
            <span className="bg-orange-500 text-white px-3 py-2 rounded-full">
              News & Blog
            </span>
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Stories, Reflections <br />
            <span className="text-orange-500">& Updates</span>
          </h2>
        </div>

        {/* CARD */}
        {/* STORIES GRID */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* STORY 1 */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/40 hover:-translate-y-2 transition duration-300">
              <div className="h-72 overflow-hidden">
                <img
                  src={image2}
                  alt="The Story Behind Nana Ki Rasoi"
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-8">
                <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Featured Story
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  The Story Behind{" "}
                  <span className="text-orange-500">Nana Ki Rasoi</span>
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Some people remember childhood through places. I remember mine
                  through kitchens. Growing up, the steady presence in my life
                  came not from my parents, but from my grandparents...
                </p>

                <button
                  onClick={() => navigate("/story")}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition shadow-md hover:scale-105"
                >
                  Read Story →
                </button>
              </div>
            </div>

            {/* STORY 2 */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/40 hover:-translate-y-2 transition duration-300">
              <div className="h-72 overflow-hidden">
                <img
                  src={image1}
                  alt="Our Community Journey"
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-8">
                <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Community Story
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Building a Community Through{" "}
                  <span className="text-orange-500">Food & Care</span>
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover how Nana Ki Rasoi has grown into a movement that
                  brings people together through food, compassion, and the
                  spirit of serving others.
                </p>

                <button
                  onClick={() => navigate("/story2")}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition shadow-md hover:scale-105"
                >
                  Read Story →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
