import React from "react";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-[Poppins] py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-10 mt-[4%]">
        <button
          onClick={() => navigate("/blog")}
          className="mb-6 flex items-center text-orange-600 hover:text-orange-700 font-medium transition"
        >
          ← Back to Blog
        </button>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Terms & Conditions
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Last Updated: <span className="font-medium">[Month Year]</span>
        </p>

        {/* Intro */}
        <p className="mb-6">
          Welcome to <strong>Nana Ki Rasoi Foundation</strong> (“we”, “our”,
          “us”). By accessing or using this website (“Site”), you agree to
          comply with and be bound by the following Terms and Conditions. If you
          do not agree with these Terms, please do not use our Site.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          1. Use of Website
        </h2>
        <p className="mb-6">
          This Site is intended for general information about our initiatives,
          programmes, and donation activities. You agree to use this Site only
          for lawful purposes and in a manner that does not violate any
          applicable laws or regulations.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          2. Donations
        </h2>
        <p className="mb-6">
          All donations made to Nana Ki Rasoi Foundation are voluntary and
          non-refundable. We use donated funds to support our community kitchen
          programmes and related social impact activities.
        </p>
        <p className="mb-6">
          Receipts for eligible donations (such as 80G certificates, once
          applicable) will be issued to donors upon request.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          3. Intellectual Property
        </h2>
        <p className="mb-6">
          All content on this Site, including text, images, graphics, and logos,
          is the property of Nana Ki Rasoi Foundation and protected by
          applicable intellectual property laws. You may not reproduce,
          distribute, or modify any content without written permission.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          4. Third-Party Links
        </h2>
        <p className="mb-6">
          This Site may contain links to external websites. We are not
          responsible for the accuracy, content, or reliability of those sites
          and do not endorse their views.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          5. Limitation of Liability
        </h2>
        <p className="mb-6">
          We make no warranties regarding the accuracy or completeness of the
          information on this Site. We are not liable for any damages arising
          from your use or inability to use the Site.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          6. Changes to Terms
        </h2>
        <p className="mb-6">
          We may update these Terms & Conditions from time to time. Continued
          use of the Site constitutes acceptance of the updated Terms.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          7. Governing Law
        </h2>
        <p className="mb-6">
          These Terms are governed by the laws of India. Any disputes will fall
          under the jurisdiction of courts in New Delhi.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h2>
        <p className="mb-2">
          For any queries regarding these Terms, please contact:
        </p>

        <p className="font-medium text-orange-600">
          Email: samira.verma@nkrfoundation.com
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
