// src/components/GlobalGoals.jsx
import React from "react";

// Import your 6 goal images
import goal1 from "../assets/new/one.png";
import goal2 from "../assets/new/four.jpeg";
import goal3 from "../assets/new/two.png";
import goal4 from "../assets/new/six.avif";
import goal5 from "../assets/new/five.jpeg";
import goal6 from "../assets/new/three.png";

const goals = [
  { id: 1, image: goal1, alt: "Zero Hunger" },
  { id: 2, image: goal2, alt: "Good Health and Well-Being" },
  { id: 3, image: goal3, alt: "Gender Equality" },
  { id: 4, image: goal4, alt: "Decent Work and Economic Growth" },
  { id: 5, image: goal5, alt: "Reduced Inequalities" },
  { id: 6, image: goal6, alt: "Partnerships for the Goals" },
];

const GlobalGoals = () => {
  return (
    <section className="global-goals-section">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-[60px] text-center">
          Our Work Aligns With These Global Goals
        </h2>

        <div className="goals-grid">
          {goals.map((goal) => (
            <div className="goal-card" key={goal.id}>
              <img src={goal.image} alt={goal.alt} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .global-goals-section {
          padding: 80px 20px;
          background: #ffffff;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .goals-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 28px;
          justify-items: center;
          align-items: center;
        }

        .goal-card {
          width: 100%;
          max-width: 180px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .goal-card img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 22px;
        }

        .goal-card:hover {
          transform: translateY(-8px) scale(1.03);
        }

        /* Large tablets */
        @media (max-width: 1200px) {
          .goals-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
        }

        /* Tablets */
        @media (max-width: 768px) {
          .global-goals-section {
            padding: 60px 16px;
          }

          .section-title {
            margin-bottom: 40px;
            letter-spacing: -1px;
          }

          .goals-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .goal-card {
            max-width: 150px;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .goals-grid {
            grid-template-columns: 1fr;
          }

          .goal-card {
            max-width: 180px;
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalGoals;
