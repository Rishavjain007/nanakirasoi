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
          my <span className="italic">Dadaji</span> and my{" "}
          <span className="italic">Nana</span> — shaped who I am, in ways I am
          still discovering.
        </p>

        <p className="mb-5">
          When I think of my <span className="italic">Nana-Nani’s</span> home, I
          remember it through food. My Nani was a phenomenal cook, and I eagerly
          awaited summer vacations when I could eat her food for days on end.
          But what surprised and delighted me was that my{" "}
          <span className="italic">Nana</span> was an even better cook! So was
          my
          <span className="italic">Dadaji</span>. Long before I had the language
          for feminism, watching these men cook, care, and nourish felt quietly
          radical. They showed me that care was not gendered, it was human.
        </p>

        <p className="mb-5">
          Some of my strongest memories live in those meals. My{" "}
          <span className="italic">Nana</span> teaching me how to make what I
          fondly called “yummy bread,” still one of my greatest comfort foods.
          My <span className="italic">Dadaji’s</span> unforgettable mutton
          keema. Food, in their homes, was never just sustenance; it was memory,
          love, and culture. It connected me deeply to my white-
          <span className="italic">makhan</span>-loving Punjabi heritage, one I
          carry with pride.
        </p>
        <p className="mb-5">
          These were men shaped by history. My{" "}
          <span className="italic">Dadaji</span> lived through the Partition;
          arriving in India from Bahawalpur in Pakistan in 1947 and, in a matter
          of days, transforming from a wealthy orchard owner into a refugee.
          Both my grandfathers embodied a generation that valued kindness,
          learning, and quiet resilience. They were well-read and erudite, spoke
          multiple languages, loved their wives deeply, and introduced me to
          music, <span className="italic">shayari</span>, literature and of
          course, food.
        </p>
        <p className="mb-5">
          My <span className="italic">Nana</span>, especially, was a living
          breathing example of the everyday generosity. He set aside one day
          every other week to sit by the telephone and call friends, family
          members, and relatives simply to ask how they were doing. Few returned
          the gesture, but that never stopped him. His home had an unspoken
          rule: no one needed to announce their arrival. People dropped in when
          they wished, stayed as long as they liked, and were always fed
          generously. From him, I learned a core tenet of Punjabi culture — you
          never cook only for yourself. You always make a little extra for
          someone who might drop by.
        </p>
        <p className="mb-5">
          When my <span className="italic">Nana</span> passed away in February
          2020, I struggled to come to terms with his absence. For years, I kept
          asking myself how to honour a man whose life had been defined by quiet
          generosity rather than grand gestures. I wasn’t ready to let his
          legacy fade into the annals of the family history. One day, the answer
          became clear. The fire in my Nana’s hearth did not need to go out. His{" "}
          <span className="italic">rasoi</span> — a place of warmth, care, and
          abundance — could continue to flourish. ‘Nana Ki Rasoi’ is my way of
          carrying that spirit forward; feeding neighbours, communities, and
          strangers with the same generosity he practiced every day. It is not
          just about meals. It is about making space. It is about making enough
          for one more person. It is about ensuring that no one eats alone. This
          is how I remember my Nana. And this is how his legacy lives on.
        </p>

        <div className="mt-12 pt-6 border-t border-gray-200 text-right">
          <h3 className="font-bold text-lg text-gray-900">Dr. Samira Verma</h3>
          <p className="text-gray-500 italic">
            Founder and Director, Nana Ki Rasoi
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
