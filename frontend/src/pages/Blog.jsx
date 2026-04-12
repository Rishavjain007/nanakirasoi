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
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/40">
            {/* LEFT IMAGE */}
            <div className="h-72 md:h-auto overflow-hidden">
              <img
                src={image2}
                alt="Story"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="p-10 flex flex-col justify-center">
              <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                Featured Story
              </span>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Story Behind{" "}
                <span className="text-orange-500">NanaKiRasoi</span>
              </h3>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Some people remember childhood through places. I remember mine
                through kitchens. Growing up, the steady presence in my life
                came not from my parents, but from my grandparents...
              </p>

              <button
                onClick={() => navigate("/story")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition w-fit shadow-md hover:scale-105"
              >
                Show More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
