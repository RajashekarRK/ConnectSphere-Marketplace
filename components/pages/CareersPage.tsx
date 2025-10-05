import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Join Our Team
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Shape the Future of Commerce</h3>
            <p>Want to be a part of the next revolution in e-commerce? We're looking for passionate, innovative thinkers to join our mission. At ConnectSphere, you'll work with cutting-edge AI technologies, solve challenging problems, and help build a platform that empowers millions of users worldwide.</p>
            <p className="mt-2">We are a remote-first company dedicated to fostering a diverse and inclusive workplace where everyone can thrive.</p>
        </section>

        <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Open Roles</h3>
            <div className="space-y-4">
                <p>While we don't have any specific open positions at this moment, our team is growing fast. We are always on the lookout for exceptional talent in the following areas:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Senior Frontend Engineer (React, TypeScript)</li>
                    <li>AI/ML Engineer (Python, TensorFlow/PyTorch)</li>
                    <li>Senior Backend Engineer (Node.js, Microservices)</li>
                    <li>Product Designer (UI/UX)</li>
                </ul>
            </div>
        </section>

        <section>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">How to Apply</h3>
            <p>Don't see a role that fits? We'd still love to hear from you. Please send your resume and a brief introduction to <strong className="text-blue-600">careers@connectsphere.dev</strong>. We review every application and will keep your information on file for future opportunities.</p>
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

export default CareersPage;
