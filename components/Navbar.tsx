"use client";

import React from 'react';
import { Search, ShoppingCart, User, Heart, Package, Truck, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col font-sans">
      {/* Top Section */}
      <div className="bg-white py-4 px-6 flex items-center justify-between gap-4 max-w-[1400px] mx-auto w-full">
        {/* Logo */}
        <div className="flex flex-col">
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
        <div className="flex-1 max-w-2xl relative group">
          <div className="flex items-center border-[1.5px] border-orange-200 rounded-full overflow-hidden hover:border-orange-400 transition-colors bg-white pr-1 py-0.5 pl-4 shadow-sm">
            <input
              type="text"
              placeholder="Search here your favorite Component"
              className="w-full py-2 outline-none text-sm text-gray-600 placeholder:text-gray-400"
            />
            <button className="bg-gradient-to-r from-[#E47B25] to-[#B3520A] text-white p-2 rounded-full hover:opacity-90 transition-opacity">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors">
            <Package size={20} className="text-gray-600" />
            <span>My Order</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors">
            <Truck size={20} className="text-gray-600" />
            <span>Track My Order</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-[#E47B25] to-[#B3520A] text-white px-4 py-2 rounded-md cursor-pointer hover:opacity-90 transition-opacity">
            <span>Login</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Bottom Section - Gradient Bar */}
      <div className="w-full" style={{ background: 'linear-gradient(to right, #E47B25, #B3520A)' }}>
        <div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center justify-between text-white font-medium">
          {/* Main Navigation */}
          <div className="flex items-center h-full">
            <div className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-4 h-full cursor-pointer transition-colors border-r border-white/20">
              <span>All Categories</span>
              <ChevronDown size={16} />
            </div>
            
            <div className="flex items-center gap-8 px-8 h-full">
              <a href="#" className="hover:text-orange-200 transition-colors">Home</a>
              <div className="flex items-center gap-1 cursor-pointer hover:text-orange-200 transition-colors">
                <span>Shop By</span>
                <ChevronDown size={14} />
              </div>
              <a href="#" className="hover:text-orange-200 transition-colors">Bulk Inquiry</a>
              <a href="#" className="hover:text-orange-200 transition-colors">Special Offers</a>
              <a href="#" className="hover:text-orange-200 transition-colors">ATL Kits</a>
              <div className="flex items-center gap-1 cursor-pointer hover:text-orange-200 transition-colors">
                <span>Combos</span>
                <ChevronDown size={14} />
              </div>
              <a href="#" className="hover:text-orange-200 transition-colors">Projects</a>
            </div>
          </div>

          {/* Utility Icons */}
          <div className="flex items-center gap-6 pr-2">
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
