import Image from 'next/image';
import React from 'react';

const NavbarComp = () => {
  return (
    <div className="fixed top-0 w-full bg-white border-b z-50 h-[65px]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-full px-4 lg:px-12">

        {/* Logo - Left */}
        <div className="flex items-center">
          <Image src="/zerodha.svg" alt="Zerodha Logo" className="h-4" height={110} width={110} />
        </div>

        {/* Nav Links - Desktop Only */}
        <div className="hidden md:flex items-center gap-6 text-[#666666] text-[15px] font-normal">
          <span className="cursor-pointer">Signup</span>
          <span className="cursor-pointer">About</span>
          <span className="cursor-pointer">Products</span>
          <span className="cursor-pointer">Pricing</span>
          <span className="cursor-pointer">Support</span>
          <Image src="/hamburger.svg" alt="Menu" className="w-[18px] h-[18px] cursor-pointer" height={18} width={18} />
        </div>

        {/* Hamburger - Mobile Only */}
        <div className="md:hidden">
          <Image src="/hamburger.svg" alt="Menu" className="w-6 h-6 cursor-pointer" height={24} width={24} />
        </div>

      </div>
    </div>
  );
};

export default NavbarComp;
