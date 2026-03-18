"use client";

import React from 'react';
import { Search, ShoppingCart, User, Heart, Package, Truck, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col font-sans overflow-x-clip">
      {/* Top Section */}
      <div className="bg-white w-full">
        <div className="max-w-[1400px] mx-auto w-full px-3 py-3 sm:px-4 sm:py-4 lg:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
        {/* Logo */}
            <div className="flex flex-col shrink-0">
              <div className="flex items-center">
                <span className="text-3xl font-bold tracking-tighter" style={{ color: '#E47B25' }}>DSM</span>
              </div>
              <div className="text-xs font-semibold tracking-widest text-[#E47B25] -mt-1 uppercase">
                Electro
              </div>
              <div className="text-[6px] text-gray-400 uppercase tracking-tighter">
                | Robotics | Drone | Components |
              </div>
            </div>

            {/* Search Bar */}
            <div className="w-full lg:flex-1 lg:max-w-2xl relative group min-w-0">
              <div className="flex items-center border-[1.5px] border-orange-200 rounded-full overflow-hidden hover:border-orange-400 transition-colors bg-white pr-1 py-0.5 pl-4 shadow-sm">
                <input
                  type="text"
                  placeholder="Search here your favorite Component"
                  className="w-full min-w-0 py-2 outline-none text-sm text-gray-600 placeholder:text-gray-400"
                />
                <button className="bg-gradient-to-r from-[#E47B25] to-[#B3520A] text-white p-2 rounded-full hover:opacity-90 transition-opacity shrink-0">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-gray-700 lg:flex-nowrap lg:justify-end lg:gap-6">
              <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors whitespace-nowrap">
                <Package size={18} className="text-gray-600 shrink-0" />
                <span>My Order</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors whitespace-nowrap">
                <Truck size={18} className="text-gray-600 shrink-0" />
                <span>Track My Order</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#E47B25] to-[#B3520A] text-white px-4 py-2 rounded-md cursor-pointer hover:opacity-90 transition-opacity whitespace-nowrap shrink-0">
                <span>Login</span>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Gradient Bar */}
      <div className="w-full" style={{ background: 'linear-gradient(to right, #E47B25, #B3520A)' }}>
        <div className="max-w-[1400px] mx-auto px-3 py-2 sm:px-4 lg:px-6 lg:h-12 flex flex-col gap-2 text-white font-medium lg:flex-row lg:items-center lg:justify-between">
          {/* Main Navigation */}
          <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:h-full min-w-0">
            <div className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-4 py-2 lg:py-0 lg:h-full cursor-pointer transition-colors border-white/20 lg:border-r whitespace-nowrap shrink-0">
              <span>All Categories</span>
              <ChevronDown size={16} />
            </div>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 lg:gap-8 lg:px-8 lg:h-full min-w-0">
              <a href="#" className="hover:text-orange-200 transition-colors whitespace-nowrap">Home</a>
              <div className="flex items-center gap-1 cursor-pointer hover:text-orange-200 transition-colors whitespace-nowrap">
                <span>Shop By</span>
                <ChevronDown size={14} />
              </div>
              <a href="#" className="hover:text-orange-200 transition-colors whitespace-nowrap">Bulk Inquiry</a>
              <a href="#" className="hover:text-orange-200 transition-colors whitespace-nowrap">Special Offers</a>
              <a href="#" className="hover:text-orange-200 transition-colors whitespace-nowrap">ATL Kits</a>
              <div className="flex items-center gap-1 cursor-pointer hover:text-orange-200 transition-colors whitespace-nowrap">
                <span>Combos</span>
                <ChevronDown size={14} />
              </div>
              <a href="#" className="hover:text-orange-200 transition-colors whitespace-nowrap">Projects</a>
            </div>
          </div>

          {/* Utility Icons */}
          <div className="flex items-center gap-4 pr-2 self-start lg:self-auto shrink-0">
            <Heart size={20} className="cursor-pointer hover:scale-110 transition-transform" />
            <ShoppingCart size={20} className="cursor-pointer hover:scale-110 transition-transform" />
            <User size={22} className="cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
