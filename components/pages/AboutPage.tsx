import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        About ConnectSphere
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <section>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Our Mission</h3>
          <p>ConnectSphere was founded on a simple mission: to eliminate friction in global commerce through the power of artificial intelligence. We are building a hyper-personalized, AI-first global marketplace that is intuitive, secure, and accessible to everyone, regardless of location, language, or technical literacy.</p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">What We Do</h3>
          <p>We leverage cutting-edge AI to create a seamless experience for both buyers and sellers. Our "SmartList" engine automates the tedious process of creating a listing, while our intelligent discovery tools help buyers find exactly what they're looking for—and things they didn't even know they needed. We are committed to creating a trusted, vibrant community where commerce is not just a transaction, but a connection.</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Our Values</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>AI-First Innovation:</strong> We believe in the power of AI to solve complex problems and create delightful user experiences.</li>
            <li><strong>Global Accessibility:</strong> Our platform is built for the world, with multi-language and multi-currency support at its core.</li>
            <li><strong>Trust and Safety:</strong> The security of our users is paramount. We proactively protect our community with advanced fraud detection and a robust trust system.</li>
            <li><strong>User-Centric Design:</strong> We listen to our users and continuously iterate to meet their needs and exceed their expectations.</li>
          </ul>
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

export default AboutPage;
