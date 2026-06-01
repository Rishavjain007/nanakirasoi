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

        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Hunger, History, and the People Indian Policy Does Not See
        </h1>

        <p className="mb-5">
          A woman in rural Jharkhand sits down to eat. Her husband and in-laws
          have already finished. What is left on the plate is not quite enough.
          She is seven months pregnant. This has been her life, and her mother's
          before her.
        </p>

        <p className="mb-5">
          Pull back from that scene, and India looks like a food success story.
          The country produced a record 332 million tonnes of food grain in
          2023-24, one of the highest totals in its history. It is one of the
          world's largest agricultural exporters.
        </p>

        <p className="mb-5">
          And yet, according to the Global Hunger Index 2025, India ranked 102nd
          out of 123 countries — below nations far poorer. It also has the
          highest rate of child wasting on earth.
        </p>

        <p className="mb-5">
          The gap between record harvests and persistent malnutrition at the
          same time is not a policy puzzle. It is an argument. For decades, the
          dominant response to hunger in India has treated it as a problem of
          supply; that is, not enough food produced, not enough distributed.
        </p>

        <p className="mb-5">
          But the economist Amartya Sen, in <em>Poverty and Famines (1981)</em>,
          came closer to the truth. Hunger is about whether people have a social
          claim over food, not merely whether food exists.
        </p>

        <p className="mb-5">
          But even that framework stops at the level of access. It does not ask
          what this society has done to the body — the specific, historical,
          gendered body, of the person who is hungry.
        </p>

        <p className="mb-5">
          To ask that question is to follow hunger somewhere the policy debate
          has rarely gone. And it leads, more than anywhere else, to a very
          specific address.
        </p>

        <div className="my-8 p-5 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
          <p className="font-semibold text-lg text-gray-900 italic">
            "That address is caste."
          </p>
        </div>

        <p className="mb-5">
          According to the National Family Health Survey (NFHS-5, 2019–21),
          children from Scheduled Caste and Scheduled Tribe households face
          stunting rates of around 39 to 41 per cent compared to roughly 35 per
          cent among upper-caste households.
        </p>

        <p className="mb-5">
          The gap persists even when income is held constant. This difference is
          not explained by what families can afford but by social position.
        </p>

        <p className="mb-5">
          Caste mechanisms are layered and mutually reinforcing. Upper-caste
          landlords control irrigation access during the agricultural season.
          Common forests and grazing lands that Adivasi communities historically
          relied on for supplementary nutrition have been systematically
          enclosed.
        </p>

        <p className="mb-5">
          Fair price shop dealers, frequently from dominant castes in rural
          villages, have documented histories of under-weighing grain or simply
          turning Dalit beneficiaries away without consequence.
        </p>

        <p className="mb-5">
          But caste hierarchy does not stop at the village boundary or the
          ration shop counter. Inside the homes of the communities most marked
          by deprivation, there is another layer of sorting that operates
          quietly, daily, and with consequences that stretch across decades.
        </p>

        <div className="my-8 p-5 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
          <p className="font-semibold text-lg text-gray-900 italic">
            "That sorting is by gender."
          </p>
        </div>

        <p className="mb-5">
          Household surveys have long documented that women in India eat last
          and least. A study in Population Studies (2023) found that in 28 per
          cent of surveyed households, girls and women are expected to eat after
          boys and men.
        </p>

        <p className="mb-5">
          These patterns are not random. In households that have lived with
          chronic scarcity across generations, prioritising the food intake of
          men became a survival strategy. Over time, that strategy became a
          social norm.
        </p>

        <p className="mb-5">
          According to NFHS-5 data, approximately 17.29 per cent of Indian
          newborns are low birth weight. A woman who enters conception already
          malnourished and anaemic will carry a smaller baby.
        </p>

        <p className="mb-5">
          The practice of women eating last and least is so normalised in many
          Indian households that it barely registers as a policy problem.
          According to NFHS-5, 57 per cent of Indian women between the ages of
          15 and 49 are anaemic.
        </p>

        <p className="mb-5">
          This is not simply a poverty problem. The food is often present in the
          home. The question is who is permitted to take it, and how much.
        </p>

        <p className="mb-5">
          India's malnutrition crisis cannot be resolved by producing more
          grain. It will begin to improve when the country invests in the
          nutritional status, education, and agency of girls from childhood
          onwards.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">
          The Price of Being Seen
        </h2>

        <p className="mb-5">
          India has built a substantial welfare architecture for food security —
          the Public Distribution System, the Integrated Child Development
          Services, and the mid-day meal programme.
        </p>

        <p className="mb-5">
          On paper, a significant portion of the most vulnerable population is
          covered. But the same social hierarchies that produce hunger also
          govern the spaces where relief is collected.
        </p>

        <p className="mb-5">
          To walk into a PDS shop run by an upper-caste dealer and demand what
          is yours is not a simple administrative act. It is a social
          confrontation that most people, in most villages, do not win.
        </p>

        <p className="mb-5">
          The humiliation is a real cost, and for many families it is higher
          than the cost of going without.
        </p>

        <p className="mb-5">
          The consequences of this are documented and, in some cases, fatal. In
          Jharkhand, eleven-year-old Santoshi Kumari died of starvation in 2017
          after her family's ration card was cancelled for non-linkage with
          Aadhaar.
        </p>

        <p className="mb-5">
          Economist Jean Dreze documented similar deaths in Jharkhand in
          2017–18, many involving elderly or disabled individuals whose
          fingerprints would not authenticate on biometric machines.
        </p>

        <p className="mb-5">
          These cases reveal something more fundamental — the system is designed
          on the assumption that a citizen who is entitled to food will go and
          get it, but India's social hierarchy makes that assumption false for
          millions of people.
        </p>

        <p className="mb-5">
          Come back, for a moment, to the woman at the beginning of this
          article. She is not a data point. She is the product of everything
          described here — a caste geography, a household norm, a body that
          entered pregnancy already depleted, and a government scheme that
          remains unreachable in practice.
        </p>

        <p className="mb-5">
          The problem was never a shortage of grain. It was a shortage of
          political will to ask a different question: not "how much food are we
          producing?" but "what has this society done to the bodies of the
          people it was supposed to feed?"
        </p>

        <p className="mb-5">
          Until that question is seriously asked, India will keep setting
          production records and ranking near the bottom of every index that
          measures what actually happens to human beings.
        </p>

        <p className="mb-5">
          The body has always known the answer. The policy conversation is still
          arriving.
        </p>

        <div className="mt-12 pt-6 border-t border-gray-200 text-right">
          <h3 className="font-bold text-lg text-gray-900">
            Kaushani Chakrabarti
          </h3>
          <p className="text-gray-500">Social Impact Researcher & Consultant</p>
          <p className="text-gray-500">
            Gender, Agriculture, Climate & Circular Economy
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryDetails2;
