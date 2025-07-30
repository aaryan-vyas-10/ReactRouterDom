import React, { useEffect, useState } from 'react'

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    }, []);

    // remove the item from the cart
    const removeItem = (id) => {
        const updateCart = cartItems.filter((item) => item.id !== id);
        alert("Product is removed from the cart");
        setCartItems(updateCart);
        localStorage.setItem('cart', JSON.stringify(updateCart));
    };

    // increase quantity
    // how it work : in this we are increase the prodcut quantity as per the specifc product id(by ID) in the cart , updtae the state , and then saves it to localStorage
    // increaseQuantity(2)
    // in this loop start wehn it match id  = 2 , then it increase quantity , other wise return the item
    // {...ietm, quantity : item.quantity + 1} : this we create new object not change the original value of the object , when the state update in the ui then recat must wnat the new Object , array for render the component for show value on the ui
    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        // JSON.stringify will convert the javascript Objetc into to the JSON
    };

    const decreaseQuantity = (id) => {
        const updateCart = cartItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }).filter((item) => item.quantity > 0);
        //  remove the product form the cart which quntity is less 0 
        setCartItems(updateCart);
        localStorage.setItem('cart',JSON.stringify(updateCart));
    };

    // calculate total price
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return <h2 className='text-center mt-10 text-9xl font-bold flex items-center justify-center h-[80vh]'>Your Cart Is Empty</h2>
    }

    return (
        <div className='p-6'>
            <h1 className='text-4xl font-bold mb-6'>Your Cart</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-7 cursor-pointer'>
                {cartItems.map((item) => (
                    <div key={item.id} className='bg-white shadow-lg p-4 rounded'>
                        <img src={item.image} alt={item.title} className="h-40 object-contain mx-auto" />
                        <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
                        <p className="text-gray-600">{item.description.slice(0, 100)}...</p>
                        <p className="text-xl font-bold mt-2">Price: ${item.price}</p>
                        <div className='flex justify-between items-center'>
                            <p className="font-semibold mt-1">Quantity: {item.quantity}</p>
                            <p className='font-bold text-2xl'>Total : {item.price * item.quantity}</p>
                        </div>
                        <div className='flex gap-2 mt-2'>
                            <button
                                className='bg-green-900 text-white hover:bg-green-800 px-4 py-2 rounded text-lg font-semibold cursor-pointer flex-1'
                                onClick={() => increaseQuantity(item.id)}
                            >
                                + Increase
                            </button>

                            <button
                                className='bg-yellow-700 text-white hover:bg-yellow-600 px-4 py-2 rounded text-lg font-semibold cursor-pointer flex-1'
                                onClick={() => decreaseQuantity(item.id)}
                            >
                                - Decrease
                            </button>
                        </div>

                        <button
                            className='mt-4 bg-red-900 text-white hover:bg-red-800 px-4 py-2 rounded text-2xl font-bold w-full cursor-pointer'
                            onClick={() => removeItem(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className='mt-10 text-center bg-black text-white p-3 w-[400px] rounded fixed top-16 right-10 truncate'>
                <h2 className='text-3xl font-bold'>
                    Cart Total: <span className='text-[#0db963]'>${total.toFixed(2)}</span>
                </h2>
            </div>
        </div>
    );
};

export default Cart;
