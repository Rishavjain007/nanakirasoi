import React from "react";
import { useNavigate } from "react-router-dom";

const StoryDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-[Poppins] py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-10  mt-[4%]">
        <button
          onClick={() => navigate("/blog")}
          className="mb-6 flex items-center text-orange-600 hover:text-orange-700 font-medium transition"
        >
          ← Back to Blog
        </button>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          The Story Behind Nana Ki Rasoi
        </h1>

        <p className="mb-4">
          Some people remember childhood through places. I remember mine through
          kitchens.
        </p>

        <p className="mb-4">
          Growing up, the steady presence in my life came not from my parents,
          but from my grandparents. In a world that often felt uncertain, they
          became my safety and my anchor. In particular, my two grandfathers —
          my Dadaji and my Nana — shaped who I am, in ways I am still
          discovering.
        </p>

        <p className="mb-4">
          When I think of my Nana-Nani’s home, I remember it through food. My
          Nani was a phenomenal cook, and I eagerly awaited summer vacations
          when I could eat her food for days on end. But what surprised and
          delighted me was that my Nana was an even better cook! So was my
          Dadaji.
        </p>

        <p className="mb-4">
          Long before I had the language for feminism, watching these men cook,
          care, and nourish felt quietly radical. They showed me that care was
          not gendered, it was human.
        </p>

        <p className="mb-4">
          Some of my strongest memories live in those meals. My Nana teaching me
          how to make what I fondly called “yummy bread,” still one of my
          greatest comfort foods. My Dadaji’s unforgettable mutton keema.
        </p>

        <p className="mb-4">
          Food, in their homes, was never just sustenance; it was memory, love,
          and culture. It connected me deeply to my white-makhan-loving Punjabi
          heritage, one I carry with pride.
        </p>

        <p className="mb-4">
          These were men shaped by history. My Dadaji lived through the
          Partition; arriving in India from Bahawalpur in Pakistan in 1947 and
          transforming from a wealthy orchard owner into a refugee.
        </p>

        <p className="mb-4">
          Both my grandfathers embodied a generation that valued kindness,
          learning, and quiet resilience. They were well-read, spoke multiple
          languages, loved their families deeply, and introduced me to music,
          shayari, literature and of course, food.
        </p>

        <p className="mb-4">
          My Nana, especially, was a living example of everyday generosity. He
          regularly called people just to ask how they were doing, expecting
          nothing in return.
        </p>

        <p className="mb-4">
          His home had an unspoken rule: no one needed to announce their
          arrival. People dropped in anytime and were always welcomed and fed
          generously.
        </p>

        <p className="mb-4 font-semibold text-gray-900">
          You never cook only for yourself. You always make a little extra for
          someone who might drop by.
        </p>

        <p className="mb-4">
          When my Nana passed away in February 2020, I struggled to come to
          terms with his absence.
        </p>

        <p className="mb-4">
          Then I realized — his legacy didn’t have to end. His rasoi, his spirit
          of giving, could continue.
        </p>

        <p className="mb-4">
          <strong>‘Nana Ki Rasoi’</strong> is my way of carrying that spirit
          forward — feeding communities with the same warmth and generosity.
        </p>

        <p className="mb-4">
          It is about making space. It is about making enough for one more
          person. It is about ensuring that no one eats alone.
        </p>

        <p className="mb-4">
          This is how I remember my Nana. And this is how his legacy lives on.
        </p>

        <div className="mt-10 text-right font-semibold">
          Dr. Samira Verma
          <span className="block text-sm text-gray-500 font-normal">
            Founder and Director, Nana Ki Rasoi
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
