import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Privacy Policy
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p className="text-sm text-slate-500">Last updated: October 26, 2023</p>
        
        <p>At ConnectSphere, we are committed to protecting your personal information. This policy explains what information we collect, how we use and share it, and the choices you have about your data. This is a placeholder document for demonstration purposes.</p>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">1. Information We Collect</h3>
          <p>We collect information you provide directly to us (like your name and email), information from your use of our services (like your IP address and browsing history), and information from third-party sources (like social media logins).</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">2. How We Use Your Information</h3>
          <p>We use data to personalize your experience, provide customer support, secure our platform from fraud, improve our services, and communicate with you about updates and offers.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">3. Information Sharing</h3>
          <p>We do not sell your personal data. We may share information with trusted third-party service providers for functions like payment processing and analytics, with law enforcement if required by law, or in connection with a merger or acquisition.</p>
        </section>
        
        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">4. Your Rights and Choices</h3>
          <p>You have the right to access, correct, or delete your personal information. You can manage your account settings and communication preferences from your profile page. Please contact us if you have any questions about your data.</p>
        </section>

      </div>
       <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicyPage;
