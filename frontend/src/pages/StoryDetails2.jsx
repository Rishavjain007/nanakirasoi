import React from "react";
import { useNavigate } from "react-router-dom";

const StoryDetails2 = () => {
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

        <h6 className="text-center font-bold mb-8 text-gray-900">
          The Arithmetic of Hunger
        </h6>

        <p className="mb-5">
          A woman waits at the back gate of a wedding hall, past midnight,
          holding a steel container that has held a hundred other meals before
          this one. Inside, the band is still playing. The food being scraped
          into bins could feed her street for two days. She is not begging. She
          is positioned at the gate, in the dark, behind the gaze of the guests
          leaving in their cars, because that is where the city has decided
          people like her stand.
        </p>
        <p className="mb-5">
          Another man with empty eyes and shrivelled hands stands near the
          crematorium, alongside the crows and the vultures, braving the
          unforgiving sun, waiting for the rituals to end. He neither begs for
          nor claims the food, he simply walks in, as fast and as far as his
          bent back will allow, to feed himself off the sacrificial altar.
        </p>
        <p className="mb-5">
          This is the part hunger arithmetic cannot hold: the subtraction of
          dignity from hunger. Where a hungry person is allowed to stand. How
          far from the food they must remain until the eating is done. Why must
          they wait until even the dead are fed. Whether they enter through the
          front or the back, whether they sit at a table or squat by a wall,
          whether the food handed to them is wrapped in paper because no one
          wants to wash a plate that touched their hands.
        </p>
        <p className="mb-5">
          Hunger is the constant, low-grade arithmetic of survival – what can be
          eaten now, what must be saved, what a child has not eaten so that
          another child could. It is also the older, louder wound of being seen
          needing. There is a particular kind of stillness in a person standing
          in a relief line, eyes fixed somewhere just past other people, just
          past the air of dignity, just past the moment; faces unreadable, the
          only form of privacy left to them.
        </p>
        <p className="mb-5">
          But there are spaces that do something almost radical in comparison.
          Strangers sit at the same table, in the same row, and are served the
          same food by the same hands, without anyone asking who they are or
          what they can pay. No one is sorted at the door. For the length of one
          meal, a labourer and a landlord eat the same dal off the same steel
          thali, and nobody is asked to prove they deserve it. It is, in its own
          unremarkable way, one of the few spaces in this country where poverty
          does not have to announce itself before it can be fed.
        </p>
        <p className="mb-5">
          That should not be rare. It should not depend on the accident of which
          temple, which gurdwara, which neighbourhood you’re closest to. A child
          should not have to learn the shame of a free-meal queue before she has
          learned to read. An old man should not have to choose between eating
          and being looked at like he is asking for too much that he does not
          deserve.
        </p>
        <p className="mb-5">
          A community kitchen, built right, is not a kindness extended downward.
          It is a room where no one must flinch before they eat. Every town,
          every basti, every forgotten corner of every city deserves at least
          that – a table where hunger is met not with economic hierarchy, but
          with a plate set down, no questions, no shame, no gate to wait behind
          in the dark.
        </p>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <h3 className="font-bold text-lg text-gray-900">Ashay Abbhi</h3>
          <p className="text-gray-500 italic">
            Ashay is an energy and climate change consultant with over 14 years
            of experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryDetails2;
