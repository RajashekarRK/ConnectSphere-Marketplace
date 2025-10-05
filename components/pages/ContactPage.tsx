import React from 'react';

const ContactPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message! Our team will get back to you shortly.');
        // Here you would typically handle form submission
        (e.target as HTMLFormElement).reset();
    };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b pb-4 mb-6">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>We'd love to hear from you! Whether you have a question, feedback, or need support, our team is ready to help. Fill out the form or use one of the contact methods below.</p>
            <div>
                <h3 className="font-semibold text-slate-800">Customer Support</h3>
                <p>For help with your account, transactions, or using the site, please email <strong className="text-blue-600">support@connectsphere.dev</strong>.</p>
            </div>
             <div>
                <h3 className="font-semibold text-slate-800">Business Inquiries</h3>
                <p>For partnerships and other business-related matters, contact us at <strong className="text-blue-600">business@connectsphere.dev</strong>.</p>
            </div>
             <div>
                <h3 className="font-semibold text-slate-800">Press</h3>
                <p>For all media inquiries, please reach out to <strong className="text-blue-600">press@connectsphere.dev</strong>.</p>
            </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
             <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Subject</label>
                <input type="text" id="subject" name="subject" required className="mt-1 block w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                    Send Message
                </button>
            </div>
        </form>
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

export default ContactPage;
