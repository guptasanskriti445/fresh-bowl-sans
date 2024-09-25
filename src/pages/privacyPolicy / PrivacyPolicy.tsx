import React from 'react';
import brimg from "../../assets/card-border.jpeg"; // Background image

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Privacy Policy Header Section */}
      <div className="relative h-80 md:h-96 lg:h-112 xl:h-128">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${brimg})` }}>
        </div>

        {/* Transparent black background overlay */}
        <div className="absolute inset-0 bg-emerald-950 opacity-60"></div>

        {/* Centered message */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white text-lg md:text-xl px-12">
            <span className='text-lime-500 font-bold text-lg'>"</span>
            Your privacy matters to us! We offer a simple subscription service and don’t collect any personal data. Enjoy worry-free!
            <span className='text-lime-500 font-bold text-lg'>"</span>
          </p>
        </div>
      </div>

      {/* Main Privacy Policy Content Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-emerald-950 mb-4">Our Commitment to Privacy</h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-lime-500 inline-flex"></div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="max-w-2xl text-center p-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-emerald-950 mb-4">What We Collect</h2>
              <p className="text-gray-600">
                We value your privacy and therefore, we do not collect any personal information. Our focus is solely on providing you with the best subscription experience possible. We don't track your activities or store your personal data.
              </p>
            </div>

            <div className="max-w-2xl text-center p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-emerald-950 mb-4">How We Use Information</h2>
              <p className="text-gray-600">
                Since we don’t gather personal data, you can enjoy our service without any concerns. Our goal is to enhance your experience and satisfaction without the hassle of privacy worries. We use non-personal information solely to improve our services.
              </p>
            </div>

            <div className="max-w-2xl text-center p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-emerald-950 mb-4">Your Choices</h2>
              <p className="text-gray-600">
                With us, you have complete control over your experience. Simply enjoy our service without the worry of data collection. You can reach out to us anytime for questions or clarifications regarding our policies.
              </p>
            </div>
          </div>

          <div className="max-w-2xl text-center p-6 mt-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-emerald-950 mb-4">Changes to This Policy</h2>
            <p className="text-gray-600">
              We may update our privacy policy from time to time. We encourage you to review this page periodically for any changes. Your continued use of our services after any modifications to the policy will constitute your acknowledgment of the changes and your consent to abide by and be bound by the modified policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
