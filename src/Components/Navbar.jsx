import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-black w-full p-6 text-white flex items-center justify-around sticky top-0 shadow-cyan-50'>
        <h1 className='text-4xl font-bold'>Shopping</h1>
            <ul className='flex gap-8 text-2xl font-bold'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/product"><li>Product</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        <button className='bg-blue-900 px-6 py-2 rounded font-bold text-xl cursor-pointer'>Login</button>
    </div>
  );
}

export default Navbar;