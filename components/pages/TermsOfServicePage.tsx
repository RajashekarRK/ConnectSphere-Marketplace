import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Terms of Service
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p className="text-sm text-slate-500">Last updated: October 26, 2023</p>
        
        <p>Welcome to ConnectSphere. By using our platform, you agree to be bound by these terms and policies. These terms govern your access to and use of our platform, including any content, functionality, and services offered. This is a placeholder document for demonstration purposes.</p>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">1. Account Registration</h3>
          <p>You must be at least 18 years old to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">2. Prohibited Conduct</h3>
          <p>You agree not to engage in any of the following prohibited activities: posting illegal or prohibited items, engaging in fraudulent activities, harassing other users, or using automated scripts to collect information from our platform.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">3. Content Ownership</h3>
          <p>You retain ownership of the content you post on ConnectSphere (such as images and descriptions). However, you grant ConnectSphere a worldwide, royalty-free license to use, reproduce, and display that content in connection with the service.</p>
        </section>
        
        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">4. Disclaimers and Limitation of Liability</h3>
          <p>The platform is provided "as is" without any warranties. ConnectSphere is not responsible for any transactions between users and will not be liable for any damages arising from your use of the service.</p>
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

export default TermsOfServicePage;
