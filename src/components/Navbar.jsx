import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../shared/Button';

// 1. Static Data
const NAV_LINKS = [
    { name: 'Home', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Funding', href: '#' },
    { name: 'Product', href: '#' },
    { name: 'Affiliate', href: '#' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 2. Handle Resize & Escape Key
    useEffect(() => {
        const handleResize = () => window.innerWidth >= 1024 && setIsOpen(false);
        const handleEsc = (e) => e.key === 'Escape' && setIsOpen(false);

        window.addEventListener('resize', handleResize);
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    // 3. Lock Body Scroll
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <nav
            // UPDATED: Added 'border-pink-200' (more visible) and 'shadow-sm'
            className="w-full py-4 bg-white/90 backdrop-blur-sm border-b border-pink-200 shadow-sm sticky top-0 z-50 transition-all"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container mx-auto px-6 flex items-center h-16">

                {/* --- 1. LOGO --- */}
                <a
                    href="#"
                    className="text-2xl font-extrabold text-[#db2777] uppercase tracking-wide select-none shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded-sm"
                    aria-label="Rehem Soft Home"
                >
                    REHEM SOFT
                </a>

                {/* --- 2. DESKTOP LINKS (Hidden on Mobile) --- */}
                <div className="hidden lg:flex items-center space-x-8 ml-12">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 font-medium text-[15px] hover:text-[#db2777] transition-colors duration-200 outline-none focus-visible:text-[#db2777]"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* --- 3. DESKTOP BUTTONS (Hidden on Mobile) --- */}
                <div className="hidden lg:flex items-center space-x-4 ml-auto">
                    <Button className="px-6">Log in</Button>
                    <Button className="px-6">Sign Up</Button>
                </div>

                {/* --- 4. MOBILE TOGGLE (Hidden on Desktop) --- */}
                <button
                    className="lg:hidden text-gray-700 p-2 hover:bg-pink-50 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-pink-200 ml-auto"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* --- 5. MOBILE MENU DROPDOWN --- */}
            {isOpen && (
                <div
                    className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-pink-200 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200 h-[calc(100vh-80px)] overflow-y-auto"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Centered Links Container */}
                    <div className="flex flex-col space-y-2 justify-center items-center flex-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                // PERFECT CENTER ALIGNMENT
                                className="flex items-center justify-center w-full text-gray-700 font-medium text-lg py-3 px-8 rounded-lg hover:bg-pink-50 hover:text-[#db2777] transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 mt-4 border-t border-pink-100 pt-6">
                        <Button className="w-full justify-center">Log in</Button>
                        <Button className="w-full justify-center">Sign Up</Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;