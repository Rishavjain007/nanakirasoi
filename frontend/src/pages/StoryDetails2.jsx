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
          Hunger, History, and the People Indian Policy Does Not See
        </h6>

        <p className="mb-5 italic">
          A woman in rural Jharkhand sits down to eat. Her husband and in-laws
          have already finished. What is left on the plate is not quite enough.
          She is seven months pregnant. This has been her life, and her mother's
          before her.
        </p>
        <p className="mb-5">
          Pull back from that scene, and India looks like a food success story.
          The country produced a record 332 million tonnes of food grain in
          2023-24, one of the highest totals in its history. It is one of the
          world's largest agricultural exporters. And yet, according to the
          Global Hunger Index 2025, India ranked 102nd out of 123 countries –
          below nations far poorer. It also has the highest rate of child
          wasting on earth.
        </p>
        <p className="mb-5">
          The gap between record harvests and persistent malnutrition at the
          same time is not a policy puzzle. It is an argument. For decades, the
          dominant response to hunger in India has treated it as a problem of
          supply; that is, not enough food produced, not enough distributed. But
          the economist Amartya Sen, in Poverty and Famines (1981), came closer
          to the truth. Hunger is about whether people have a social claim over
          food, not merely whether food exists. But even that framework stops at
          the level of access. It does not ask what this society has done to the
          body – the specific, historical, gendered body, of the person who is
          hungry. To ask that question is to follow hunger somewhere the policy
          debate has rarely gone. And it leads, more than anywhere else, to a
          very specific address.
        </p>
        <p className="mb-5">
          That address is caste. According to the National Family Health Survey
          (NFHS-5, 2019–21), children from Scheduled Caste and Scheduled Tribe
          households face stunting rates of around 39 to 41 per cent compared to
          roughly 35 per cent among upper-caste households. The gap persists
          even when income is held constant. This difference is not explained by
          what families can afford but by social position.
        </p>
        <p className="mb-5">
          Caste mechanisms are layered and mutually reinforcing. Upper-caste
          landlords control irrigation access during the agricultural season.
          Common forests and grazing lands that Adivasi communities historically
          relied on for supplementary nutrition have been systematically
          enclosed. Fair price shop dealers, frequently from dominant castes in
          rural villages, have documented histories of under-weighing grain or
          simply turning Dalit beneficiaries away without consequence.
        </p>
        <p className="mb-5">
          But caste hierarchy does not stop at the village boundary or the
          ration shop counter. Inside the homes of the communities most marked
          by deprivation, there is another layer of sorting that operates
          quietly, daily, and with consequences that stretch across decades.
        </p>
        <p className="mb-5">
          That sorting is by gender. And it begins not at birth but well before
          it, in the accumulated nutritional history of the woman who gives
          birth. Household surveys have long documented that women in India eat
          last and least. A study in Population Studies (2023) found that in 28
          per cent of surveyed households, girls and women are expected to eat
          after boys and men. These patterns are not random. In households that
          have lived with chronic scarcity across generations, prioritising the
          food intake of men, who performed field labour and whose physical
          capacity directly determined harvest, was a rational survival
          strategy. Over time, that strategy became a norm, transmitted from one
          generation to the next, often without those passing them on fully
          understanding their origin.
        </p>
        <p className="mb-5">
          The biological consequence of this is also measurable. According to
          NFHS-5 data, approximately 17.29 per cent of Indian newborns are low
          birth weight– a figure rooted less in what a woman eats during
          pregnancy and more in what her body looks like before she becomes
          pregnant. A woman who enters conception already malnourished and
          anaemic will carry a smaller baby. That baby, if a girl, grows into a
          malnourished adolescent.{" "}
        </p>
        <p className="mb-5">
          The practice of women eating last and least is so normalised in many
          Indian households that it barely registers as a policy problem. But
          the numbers make visible what the norm has made invisible. According
          to NFHS-5, 57 per cent of Indian women between the ages of 15 and 49
          are anaemic. And it is only weakly correlated with household income;
          which is the key point. This is not a poverty problem. The food is
          often present in the home. The question is who is permitted to take
          it, and how much.{" "}
        </p>
        <p className="mb-5">
          The implication of all this is one that the national policy
          conversation has not seriously confronted– India's malnutrition crisis
          cannot be resolved by producing more grain. It will begin to improve
          when the country invests in the nutritional status, education, and
          agency of girls from childhood onwards. A scheme that begins at
          pregnancy is already twenty years too late.
        </p>

        <div className="my-8 p-5 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
          <p className="font-semibold text-lg text-gray-900 italic">
            "The price of being seen"
          </p>
        </div>

        <p className="mb-5">
          India has built a substantial welfare architecture for food security–
          the Public Distribution System, the Integrated Child Development
          Services, the mid-day meal programme. On paper, a significant portion
          of the most vulnerable population is covered. But the same social
          hierarchies that produce hunger also govern the spaces where relief is
          collected.
        </p>
        <p className="mb-5">
          To walk into a PDS shop run by an upper-caste dealer, in a village
          where that dealer's family owns the land your family works, to demand
          what is yours is not a simple administrative act. It is a social
          confrontation that most people, in most villages, do not win. The
          humiliation is a real cost, and for many families it is higher than
          the cost of going without. Chronic deprivation also takes a cognitive
          toll. The constant mental effort of managing scarcity– calculating
          what can be eaten today, what must be saved, which debt is most
          urgent, consumes the attention that navigating bureaucracy and
          asserting rights requires. The people who most need the welfare system
          are often least equipped, practically and psychologically, to fight
          their way through it.
        </p>
        <p className="mb-5">
          The consequences of this are documented and, in some cases, fatal. In
          Jharkhand, eleven-year-old Santoshi Kumari died of starvation in 2017
          after her family's ration card was cancelled for non-linkage with
          Aadhaar. Economist Jean Dreze documented similar deaths in Jharkhand
          in 2017–18, many involving elderly or disabled individuals whose
          fingerprints would not authenticate on biometric machines. A
          67-year-old widow, Etwariya Devi, died in December 2017 after her
          family was denied three months of rations because her
          daughter-in-law's fingerprint failed to scan.
        </p>
        <p className="mb-5">
          The government described these as implementation errors. However,
          these cases reveal something more fundamental– the system is designed
          on the assumption that a citizen who is entitled to food will go and
          get it, but India’s social hierarchy makes that assumption false for
          millions of people.
        </p>
        <p className="mb-5">
          Come back, for a moment, to the woman at the beginning of this
          article. She is not a data point. She is the product of everything
          described here– a caste geography that shaped the conditions of her
          birth, a household norm that determined how much of the food around
          her she was permitted to take, a body that entered pregnancy already
          depleted and a government scheme that exists for her in principle but
          remains unreachable in practice.
        </p>
        <p className="mb-5">
          The problem was never a shortage of grain. It was a shortage of
          political will to ask a different question; not "how much food are we
          producing?" but "what has this society done to the bodies of the
          people it was supposed to feed?" Until that question is seriously
          asked, India will keep setting production records and ranking near the
          bottom of every index that measures what actually happens to human
          beings. The body has always known the answer. The policy conversation
          is still arriving.
        </p>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <h3 className="font-bold text-lg text-gray-900">
            Kaushani Chakrabarti
          </h3>
          <p className="text-gray-500 italic">
            Kaushani Chakrabarti is a social impact researcher and consultant
            working at the intersection of gender, agriculture, climate and
            circular economy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryDetails2;
