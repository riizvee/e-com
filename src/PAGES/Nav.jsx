import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function Nav() {
  return (
    <nav className="bg-zinc-900 text-white border-b border-zinc-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LEFT - LOGO */}
        <div className="text-xl font-bold text-blue-400">TheShop</div>

        {/* CENTER - LINKS */}
        <ul className="flex gap-8 text-sm font-medium">
          <li>
            <Link className="hover:text-blue-400 transition" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-400 transition" to="/product1">
              Product 1
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-400 transition" to="/product2">
              Product 2
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-400 transition" to="/product3">
              Product 3
            </Link>
          </li>
          <li>
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-2xl hover:text-blue-400 transition" />

              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
          </li>
        </ul>

        {/* RIGHT - SEARCH */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-lg bg-zinc-800 border border-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
