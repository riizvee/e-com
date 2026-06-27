import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-blue-400">TheShop</h2>
          <p className="text-sm text-zinc-400 mt-1">Modern eCommerce built with React</p>
        </div>

        {/* Center */}
        <div className="text-sm text-zinc-400 text-center">
          © {new Date().getFullYear()} TheShop. All rights reserved.
        </div>

        {/* Right */}
        <div className="text-center md:text-right">
          <p className="text-sm text-zinc-300">Contact</p>
          <a
            href="mailto:workwithrizvi@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            workwithrizvi@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
