// src/PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black">Privacy Policy</h1>
        <p className="text-lg text-gray-500 mt-2">At FOREVER, your privacy is our priority.</p>
      </header>
      
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold text-black">Introduction</h2>
        <p>
          Welcome to FOREVER, your trusted online store. We value the trust you place in us and are committed to safeguarding your personal data. This Privacy Policy explains how we collect, use, and protect your information when you visit our website and make purchases from our store.
        </p>

        <h2 className="text-3xl font-semibold text-black">What Information We Collect</h2>
        <p>
          When you shop with us, we collect the following information:
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>Personal details such as name, email address, and shipping information.</li>
          <li>Payment information, including credit card details, billing address, and purchase history.</li>
          <li>Browsing and shopping behavior (such as items you view, your cart, and purchase frequency).</li>
          <li>Device information, such as IP address, browser type, and operating system for fraud prevention and site optimization.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-black">How We Use Your Information</h2>
        <p>
          Your personal information is used to provide you with the best possible shopping experience. Here's how we use your data:
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>To process orders and deliver the products you purchase.</li>
          <li>To improve our website and customer service based on your preferences and behavior.</li>
          <li>To send order confirmations, tracking updates, and marketing promotions (with your consent).</li>
          <li>To prevent fraud and ensure the security of your transactions.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-black">Cookies and Tracking</h2>
        <p>
          We use cookies to enhance your shopping experience on FOREVER. These cookies help us remember your preferences, keep you logged in, and track your activity for a personalized shopping experience. You can manage cookie preferences through your browser settings.
        </p>

        <h2 className="text-3xl font-semibold text-black">Data Protection and Security</h2>
        <p>
          We take your privacy seriously and implement a range of security measures to protect your personal information. All sensitive data is encrypted using industry-standard security protocols, and access to your data is restricted to authorized personnel only.
        </p>

        <h2 className="text-3xl font-semibold text-black">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information at any time. You can also opt out of receiving marketing communications. If you wish to exercise any of these rights, simply reach out to us at <span className="font-semibold text-blue-600">support@foreverstore.com</span>.
        </p>

        <h2 className="text-3xl font-semibold text-black">Third-Party Services</h2>
        <p>
          We may share your information with trusted third-party partners, such as payment processors and shipping companies, to complete your order. These third parties are obligated to keep your information secure and only use it for the services they provide to us.
        </p>

        <h2 className="text-3xl font-semibold text-black">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We encourage you to review this page periodically for any updates. The date of the latest revision will always be shown at the bottom of this policy.
        </p>

        <h2 className="text-3xl font-semibold text-black">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at <span className="font-semibold text-blue-600">support@foreverstore.com</span> or through our customer support page.
        </p>
      </section>

      <footer className="text-center mt-12">
        <p className="text-sm text-gray-400">Last updated: February 2025</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
