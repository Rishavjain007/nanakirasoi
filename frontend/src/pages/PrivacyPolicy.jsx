import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          Last Updated: <span className="font-medium">[Month Year]</span>
        </p>

        {/* Intro */}
        <p className="mb-6">
          Nana Ki Rasoi Foundation (“we”, “our”, “us”) respects your privacy and
          is committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, store, share, and protect your
          information when you interact with us online.
        </p>

        {/* Section */}
        <h2 className="text-xl font-semibold mb-2">1. Who We Are</h2>
        <p className="mb-6">
          Nana Ki Rasoi Foundation is a non-profit initiative working to build
          community kitchens and support initiatives rooted in care, community,
          and inclusion.
        </p>

        {/* Section */}
        <h2 className="text-xl font-semibold mb-2">
          2. Information We Collect
        </h2>

        <p className="mb-4 font-medium">a. Information you provide directly</p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Your name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Address</li>
          <li>Donation details</li>
          <li>Volunteer / partnership enquiries</li>
          <li>Messages submitted via forms or email</li>
        </ul>

        <p className="mb-4 font-medium">b. Donation-related information</p>
        <p className="mb-6">
          We may collect contact details, donation amount, and transaction
          references. Payment details are handled by third-party payment
          gateways.
        </p>

        <p className="mb-4 font-medium">
          c. Automatically collected information
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>IP address</li>
          <li>Browser and device info</li>
          <li>Pages visited</li>
          <li>Date & time of visit</li>
          <li>Referral source</li>
        </ul>

        {/* Section */}
        <h2 className="text-xl font-semibold mb-2">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Respond to enquiries</li>
          <li>Process donations & receipts</li>
          <li>Communicate updates</li>
          <li>Manage volunteers & partnerships</li>
          <li>Improve website experience</li>
          <li>Maintain records & legal compliance</li>
        </ul>

        {/* Section */}
        <h2 className="text-xl font-semibold mb-2">4. Lawful Basis</h2>
        <p className="mb-6">
          We process data based on consent, legal obligations, and legitimate
          interests in line with India’s DPDP Act. You may withdraw consent at
          any time.
        </p>

        {/* Section */}
        <h2 className="text-xl font-semibold mb-2">5. Cookies & Analytics</h2>
        <p className="mb-6">
          We use cookies to improve functionality and analyse traffic. You can
          control cookies through your browser settings.
        </p>

        {/* Section */}
        <h2 className="text-xl font-semibold mb-2">6. Data Sharing</h2>
        <p className="mb-6">
          We do not sell your data. We may share it with service providers,
          payment gateways, or authorities where required by law.
        </p>

        {/* Section */}
        <h2 className="text-xl font-semibold mb-2">7. Third-Party Services</h2>
        <p className="mb-6">
          Our site may include third-party tools like payment gateways or social
          media. We are not responsible for their policies.
        </p>

        {/* Section */}
        <h2 className="text-xl font-semibold mb-2">8. Data Retention</h2>
        <p className="mb-6">
          We retain data only as long as necessary for legal, operational, and
          communication purposes.
        </p>

        {/* Section */}
        <h2 className="text-xl font-semibold mb-2">9. Data Security</h2>
        <p className="mb-6">
          We take reasonable steps to protect your data, though no system is
          100% secure.
        </p>

        {/* Section */}
        <h2 className="text-xl font-semibold mb-2">10. Your Rights</h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>Access your data</li>
          <li>Correct or update data</li>
          <li>Request deletion</li>
          <li>Withdraw consent</li>
          <li>Raise grievances</li>
        </ul>

        {/* Section */}
        <h2 className="text-xl font-semibold mb-2">11. Children’s Privacy</h2>
        <p className="mb-6">
          We do not knowingly collect data from children in violation of law.
        </p>

        {/* Section */}
        <h2 className="text-xl font-semibold mb-2">
          12. International Transfers
        </h2>
        <p className="mb-6">
          Data may be processed outside India with appropriate safeguards.
        </p>

        {/* Section */}
        <h2 className="text-xl font-semibold mb-2">13. Contact / Grievance</h2>
        <p className="mb-2">For any concerns, contact:</p>

        <p className="font-medium text-orange-600">Nana Ki Rasoi Foundation</p>
        <p>Email: samira.verma@nkrfoundation.com</p>
        <p>Address: [Insert Address]</p>
        <p>Phone: [Insert Phone]</p>

        {/* Section */}
        <h2 className="text-xl font-semibold mb-2 mt-6">
          14. Changes to Policy
        </h2>
        <p>
          We may update this policy from time to time. Continued use means
          acceptance of updates.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
