"use client";

import React from 'react';
import Image from 'next/image';
import { Twitter, Linkedin, Instagram, Facebook, Youtube, ChevronRight } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 py-8 px-4 sm:px-6 font-sans overflow-x-clip">
      <div className="max-w-7xl mx-auto space-y-6">


        {/* Top Section - Brand and App Stores */}
        <div className="bg-[#111111] rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5">

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col">
              <span className="text-4xl font-bold tracking-tighter" style={{ color: '#E47B25' }}>DSM</span>
              <span className="text-xl font-semibold tracking-widest text-[#E47B25] -mt-1 uppercase">Electro</span>
              <span className="text-[8px] text-gray-500 uppercase tracking-tighter">| Robotics | Drone | Components |</span>
            </div>
          </div>

          <div className="max-w-2xl text-sm leading-relaxed text-gray-400 text-center md:text-left px-4">
            DSM Online is one of the fastest growing Company of Electronic Components in Bhopal.
            Our focus on customer satisfaction and expert technical support make us the ideal single-point source for all your requirements.
          </div>

          <div className="flex w-full flex-col gap-3 min-w-0 sm:w-auto sm:min-w-[160px]">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image src="/playstore.png" alt="Get it on Google Play" width={140} height={42} className="h-auto w-auto" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image src="/appstore.png" alt="Download on the App Store" width={140} height={42} className="h-auto w-auto" />
            </a>
          </div>

        </div>

        {/* Main Content Sections */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Side - Links Column */}
          <div className="bg-[#111111] rounded-3xl p-8 flex-1 border border-white/5">
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

              <div>
              <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                Before you go,<br />check out these links
              </h2>
              </div>
              <div className="relative group self-start lg:self-auto lg:mb-1">
                <div className="absolute -top-6 -left-8 text-[#E47B25] rotate-12 group-hover:rotate-0 transition-transform">
                  <ChevronRight size={40} className="rotate-180" />
                </div>
                <button className="bg-gradient-to-r from-[#E47B25] to-[#B3520A] text-white px-8 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                  Important Links
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 pt-6 border-t border-white/5">
              <div className="space-y-4">

                <h3 className="text-white font-bold text-lg">Quick Links</h3>
                <ul className="space-y-3 text-sm">
                  {['Blogs', 'Projects', 'ATL Kits', 'About us', 'Career page', 'About us'].map((item, idx) => (
                    <li key={idx} className="hover:text-orange-500 cursor-pointer transition-colors">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">

                <h3 className="text-white font-bold text-lg">Help Section</h3>
                <ul className="space-y-3 text-sm">
                  {['About us', 'About us', 'Terms of Use', 'Privacy Policy', 'Return Policy', 'Shipping & delivery'].map((item, idx) => (
                    <li key={idx} className="hover:text-orange-500 cursor-pointer transition-colors">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">

                <h3 className="text-white font-bold text-lg">My Account</h3>
                <ul className="space-y-3 text-sm">
                  {['Login /Signup', 'Order History', 'My Wishlist', 'My Order', 'Track My Order'].map((item, idx) => (
                    <li key={idx} className="hover:text-orange-500 cursor-pointer transition-colors">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Us */}
          <div className="bg-[#111111] rounded-3xl p-8 lg:w-[400px] border border-white/5 relative flex flex-col min-w-0">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-start mb-6">
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>

              <div className="relative group self-start">
                <button className="bg-gradient-to-r from-[#E47B25] to-[#B3520A] text-white px-4 py-2 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity">
                  Collaborate With us
                </button>
                <div className="absolute -left-6 -top-4 text-[#E47B25] -rotate-12 pointer-events-none">
                  <ChevronRight size={30} className="rotate-[160deg]" />
                </div>
              </div>
            </div>

            <div className="space-y-4 flex-1">
              <div className="space-y-1">
                <div className="text-gray-500 font-medium text-xs flex items-center gap-2 uppercase tracking-wide">
                  Address:
                </div>
                <p className="text-sm leading-relaxed text-gray-400">
                  Plot no 3 -113 R3 ground floor, C-sector, Indrapuri, Bhopal, Madhya Pradesh 462022
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-gray-500 font-medium text-xs flex items-center gap-2 uppercase tracking-wide">
                  Phone:
                </div>
                <div className="text-sm text-gray-400">
                  +91 9752438811 , 70078 92427
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-gray-500 font-medium text-xs flex items-center gap-2 uppercase tracking-wide">
                  Email:
                </div>
                <div className="text-sm text-gray-400">
                  info@dsmonline.in
                </div>
              </div>
            </div>


            {/* Newsletter */}
            <div className="mt-4 pt-4 border-t border-white/5">

              <div className="flex flex-col sm:flex-row bg-[#EFEFEF] rounded-[24px] sm:rounded-full overflow-hidden p-1 shadow-inner gap-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent text-gray-800 text-sm px-6 py-2 outline-none flex-1 placeholder:text-gray-400"
                />
                <button className="bg-gradient-to-r from-[#E47B25] to-[#B3520A] text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg whitespace-nowrap flex-shrink-0">
                  Subscribe
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* Social Icons Bottom */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 pt-4 border-t border-white/5">

          {[
            { Icon: Twitter, name: 'x' },
            { Icon: Linkedin, name: 'linkedin' },
            { Icon: Instagram, name: 'instagram' },
            { Icon: Facebook, name: 'facebook' },
            { Icon: Youtube, name: 'youtube' }
          ].map(({ Icon }, idx) => (
            <div key={idx} className="bg-[#111111] p-3 rounded-lg border border-white/5 cursor-pointer hover:bg-orange-600 hover:border-orange-500 transition-all group">
              <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
