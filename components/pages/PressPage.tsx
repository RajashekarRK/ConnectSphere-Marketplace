import React from 'react';

const PressRelease: React.FC<{ date: string, title: string, children: React.ReactNode }> = ({ date, title, children }) => (
    <div className="p-4 rounded-lg border border-slate-200">
        <p className="text-sm text-slate-500">{date}</p>
        <h4 className="font-semibold text-slate-800 mt-1">{title}</h4>
        <p className="text-sm text-slate-600 mt-1">{children}</p>
    </div>
);

const PressPage: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Press & Media
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <section>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Media Inquiries</h3>
          <p>Welcome to the ConnectSphere press room. Here you will find the latest news, announcements, and media resources about our company and our mission to revolutionize global commerce.</p>
          <p className="mt-2">For all media inquiries, please contact our public relations team at <strong className="text-blue-600">press@connectsphere.dev</strong>. We look forward to hearing from you.</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Recent News</h3>
          <div className="space-y-4">
            <PressRelease date="October 26, 2023" title="ConnectSphere Launches 'SmartList' to Revolutionize Online Selling">
                ConnectSphere today announced the launch of its AI-powered global marketplace, featuring the innovative "SmartList" engine that automates listing creation for sellers worldwide.
            </PressRelease>
            <PressRelease date="September 15, 2023" title="ConnectSphere Raises $15M in Series A Funding to Expand AI Capabilities">
                The funding round, led by Future Ventures, will be used to scale the engineering team and enhance the platform's personalization and fraud detection algorithms.
            </PressRelease>
          </div>
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

export default PressPage;
