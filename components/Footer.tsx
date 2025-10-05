import React from 'react';
// FIX: Corrected import path for types.ts to resolve module loading errors.
import { Page } from '../types.ts';

interface FooterProps {
    onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    const links: { name: string, page: Page }[] = [
        { name: 'About', page: 'about' },
        { name: 'Contact', page: 'contact' },
        { name: 'Help', page: 'help' },
        { name: 'Privacy Policy', page: 'privacy' },
        { name: 'Terms of Service', page: 'terms' },
        // FIX: Use correct page type 'trust-safety'
        { name: 'Trust & Safety', page: 'trust-safety'},
    ];
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
                    {links.map(link => (
                         <button key={link.page} onClick={() => onNavigate(link.page)} className="text-gray-300 hover:text-white hover:underline">{link.name}</button>
                    ))}
                </div>
                <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} ConnectSphere. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;