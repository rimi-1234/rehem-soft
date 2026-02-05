import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion
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

    // 3. Lock Body Scroll when Menu is Open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <>
            <nav
                className="w-full py-4 bg-white/90 backdrop-blur-sm border-b border-pink-200 shadow-sm sticky top-0 z-40 transition-all"
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-6xl mx-auto px-6 flex items-center h-16">

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

                    {/* --- 4. MOBILE TOGGLE (Visible only when closed) --- */}
                    <button
                        className="lg:hidden text-gray-700 p-2 hover:bg-pink-50 rounded-md transition-colors focus:outline-none ml-auto"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* --- 5. FULL SCREEN MOBILE DRAWER (AnimatePresence) --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }} // Start off-screen right
                        animate={{ x: 0 }}      // Slide to center
                        exit={{ x: '100%' }}    // Slide back out right
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }} // Smooth physics
                        className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col h-screen w-full"
                    >
                        {/* DRAWER HEADER (Logo + Close Button) */}
                        <div className="flex items-center justify-between p-6 border-b border-pink-100">
                            <span className="text-2xl font-extrabold text-[#db2777] uppercase tracking-wide">
                                REHEM SOFT
                            </span>
                            
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                aria-label="Close menu"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        {/* DRAWER LINKS (Centered) */}
                        <div className="flex-1 flex flex-col justify-center items-center gap-6 overflow-y-auto">
                            {NAV_LINKS.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }} // Staggered fade-in
                                    className="text-2xl font-bold text-gray-800 hover:text-[#db2777] transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        {/* DRAWER FOOTER (Buttons) */}
                        <div className="p-8   flex flex-col gap-4 ">
                            <Button className="w-full justify-center py-4 text-lg">Log in</Button>
                            <Button className="w-full justify-center py-4 text-lg">Sign Up</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;