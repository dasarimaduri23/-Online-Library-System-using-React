import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 shadow-md flex justify-between items-center">
      
      {/* 1. Use Link for the Brand (No active state needed) */}
      <div className="text-2xl font-bold">
        <Link to="/">The Book Hub</Link>
      </div>

      {/* 2. Use NavLink for Menu Items (Keeps the active styling) */}
      <div className="flex gap-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "underline font-bold" : "hover:underline"}
        >
          Home
        </NavLink>
        
        <NavLink 
          to="/books" 
          className={({ isActive }) => isActive ? "underline font-bold" : "hover:underline"}
        >
          Browse Books
        </NavLink>

        <NavLink 
          to="/add" 
          className={({ isActive }) => isActive ? "underline font-bold" : "hover:underline"}
        >
          Add Book
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;