import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../shared/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Funding', href: '#' },
    { name: 'Product', href: '#' },
    { name: 'Affiliate', href: '#' },
  ];

  return (
    <nav className="w-full py-5 bg-transparent">

      <div className="container mx-auto px-6 flex items-center">
        

        <div className="text-2xl font-extrabold text-[#db2777] uppercase tracking-wide cursor-pointer select-none">
          REHEM SOFT
        </div>

     
        <div className="hidden lg:flex items-center space-x-10 ml-16">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-700 font-medium hover:text-[#db2777] transition-colors duration-200 text-[15px]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4 ml-auto">
          <Button>Log in</Button>
          <Button>Sign Up</Button>
        </div>


        <button 
          className="lg:hidden text-gray-700 focus:outline-none ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-t border-pink-100 p-6 flex flex-col gap-4 z-50">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-700 font-medium text-lg">
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
             <Button>Log in</Button>
             <Button>Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;