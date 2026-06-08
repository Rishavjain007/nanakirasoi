import React from "react";
import { useNavigate } from "react-router-dom";

const StoryDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-[Poppins] py-10 px-4 text-justify">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-10 mt-[4%]">
        <button
          onClick={() => navigate("/blog")}
          className="mb-6 flex items-center text-orange-600 hover:text-orange-700 font-medium transition"
        >
          ← Back to Blog
        </button>

        <h1 className="text-center underline font-bold mb-8 text-gray-900">
          The Story Behind Nana Ki Rasoi
        </h1>

        <p className="mb-5">
          Some people remember childhood through places. I remember mine through
          kitchens.
        </p>

        <p className="mb-5">
          Growing up, the steady presence in my life came not from my parents,
          but from my grandparents. In a world that often felt uncertain, they
          became my safety and my anchor. In particular, my two grandfathers —
          my Dadaji and my Nana — shaped who I am, in ways I am still
          discovering.
        </p>

        <p className="mb-5">
          When I think of my Nana-Nani’s home, I remember it through food. My
          Nani was a phenomenal cook, and I eagerly awaited summer vacations
          when I could eat her food for days on end. But what surprised and
          delighted me was that my Nana was an even better cook! So was my
          Dadaji.
        </p>

        <p className="mb-5">
          Long before I had the language for feminism, watching these men cook,
          care, and nourish felt quietly radical. They showed me that care was
          not gendered, it was human.
        </p>

        <p className="mb-5">
          Some of my strongest memories live in those meals. My Nana teaching me
          how to make what I fondly called <strong>“yummy bread,”</strong> still
          one of my greatest comfort foods. My Dadaji’s unforgettable mutton
          keema.
        </p>

        <p className="mb-5">
          Food, in their homes, was never just sustenance; it was memory, love,
          and culture. It connected me deeply to my white-makhan-loving Punjabi
          heritage, one I carry with pride.
        </p>

        <p className="mb-5">
          These were men shaped by history. My Dadaji lived through the
          Partition; arriving in India from Bahawalpur in Pakistan in 1947 and,
          in a matter of days, transforming from a wealthy orchard owner into a
          refugee.
        </p>

        <p className="mb-5">
          Both my grandfathers embodied a generation that valued kindness,
          learning, and quiet resilience. They were well-read and erudite, spoke
          multiple languages, loved their wives deeply, and introduced me to
          music, shayari, literature and of course, food.
        </p>

        <p className="mb-5">
          My Nana, especially, was a living breathing example of everyday
          generosity. He set aside one day every other week to sit by the
          telephone and call friends, family members, and relatives simply to
          ask how they were doing.
        </p>

        <p className="mb-5">
          Few returned the gesture, but that never stopped him. His home had an
          unspoken rule: no one needed to announce their arrival. People dropped
          in when they wished, stayed as long as they liked, and were always fed
          generously.
        </p>

        <div className="my-8 p-5 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
          <p className="font-semibold text-lg text-gray-900 italic">
            “You never cook only for yourself. You always make a little extra
            for someone who might drop by.”
          </p>
        </div>

        <p className="mb-5">
          From him, I learned a core tenet of Punjabi culture — you never cook
          only for yourself. You always make a little extra for someone who
          might drop by.
        </p>

        <p className="mb-5">
          When my Nana passed away in February 2020, I struggled to come to
          terms with his absence.
        </p>

        <p className="mb-5">
          For years, I kept asking myself how to honour a man whose life had
          been defined by quiet generosity rather than grand gestures. I wasn’t
          ready to let his legacy fade into the annals of family history.
        </p>

        <p className="mb-5">
          One day, the answer became clear. The fire in my Nana’s hearth did not
          need to go out. His rasoi — a place of warmth, care, and abundance —
          could continue to flourish.
        </p>

        <p className="mb-5">
          <strong>‘Nana Ki Rasoi’</strong> is my way of carrying that spirit
          forward; feeding neighbours, communities, and strangers with the same
          generosity he practiced every day.
        </p>

        <p className="mb-5">
          It is not just about meals. It is about making space. It is about
          making enough for one more person. It is about ensuring that no one
          eats alone.
        </p>

        <p className="mb-5">
          This is how I remember my Nana. And this is how his legacy lives on.
        </p>

        <div className="mt-12 pt-6 border-t border-gray-200 text-right">
          <h3 className="font-bold text-lg text-gray-900">
            Dr. Samira Verma
          </h3>
          <p className="text-gray-500">
            Founder and Director, Nana Ki Rasoi
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;