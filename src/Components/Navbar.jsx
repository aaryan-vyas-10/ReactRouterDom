import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-black w-full p-6 text-white flex items-center justify-around sticky top-0 shadow-cyan-50'>
      <h1 className='text-4xl font-bold'>Shopping</h1>
      <ul className='flex gap-8 text-2xl font-bold'>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : ""}><li>Home</li></NavLink>
        <NavLink to="/product" className={({ isActive }) => isActive ? "text-blue-600" : ""}><li>Product</li></NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600" : ""}><li>About</li></NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600" : ""}><li>Contact</li></NavLink>
      </ul>
      <button className='bg-blue-900 px-6 py-2 rounded font-bold text-xl cursor-pointer'>Login</button>
    </div>
  );
}

export default Navbar;


// Link Component react router dom : 

// Link is a React component from the react-router-dom library used to navigate between different routes without reloading the page.
// Think of it as a React alternative to the traditional HTML <a> tag, but without the page refresh.
// Used to navigate from one route to another in a Single Page Application (SPA).
// Syntax : 
// <Link to="/about">About</Link>

// Link : Dones not have any active class 

// Following in html :
// <a href="/about.html">About</a>


// <Link></Link> Componen usecase : 
// use in back buttons
// view more links
// in product card
// footer links



// <NavLink></NavLink> React router dom

// NavLink is a specialized version of Link that allows you to apply styling automatically when the link matches the current URL (active route).

// Example : <NavLink to="/about"></NavLink>

// NavLink Usecase : 
// 1 : Header
// 2 : Sidebar
// 3 : Menus
// 4 : Tabs
// 5 : 