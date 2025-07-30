import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetils = () => {
    const { id } = useParams();
    const [product, setProducts] = useState(null);

    // debug useParamas what it return
    console.log("id from useParams : ", id);
    console.log("useParams : ", useParams());

    // useNavigate : react-router-hook
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, [id]);


    

    // store product in the localStorgae for add to cart
    
    const addToCart = () => {
        // get cart form localStoraeg or empty array
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

        // check prodcut is exists in the cart or not
        
        const productExistsInCart = existingCart.find((item) => item.id === product.id);

        // if product in cart then show this alert
        if(productExistsInCart){
            alert("Product Already Exists in the cart");
            return;
        }
    
        // add product with quantity 
        const productAdd = {...product, quantity : 1};

        console.log("product : ",productAdd);
        // add current product 

        const updateCart = [...existingCart,productAdd];

        // save update cart

        localStorage.setItem('cart',JSON.stringify(updateCart));
        alert("Product Added To Cart");
    }
    
    if (!product) return <p className='text-center mt-10 text-white text-4xl font-bold'>Lodding...</p>

    return (
        <div className='flex justify-start items-center py-10 px-4'>
            <div className='max-w-2xl w-full bg-white shadow-lg rounde-lg p-6 rounded-xl cursor-pointer flex flex-col gap-5'>
                <img src={product.image} alt={product.title} className='h-64 mx-auto object-contain mb-6' />
                <h2 className='font-bold text-3xl'>{product.title}</h2>
                <p className='text-gray-600'>{product.description}</p>
                <div className='flex items-start justify-cente flex-col gap-2'>
                    <p className='font-bold text-xl'>Price  <span className='font-bold text-xl text-cyan-700'>: ${product.price}</span> </p>
                    <p className='font-bold text-xl'>Category <span className='font-bold text-xl text-cyan-700'>: {product.category}</span></p>
                    <p className='font-bold text-xl'>Rating <span className='font-bold text-xl text-cyan-700'>: {product.rating.rate}</span></p>
                </div>
                <div className='flex gap-3.5'>
                    <button onClick={() => navigate(-1)} className='bg-black text-white font-bold text-xl p-4 cursor-pointer rounded hover:bg-gray-800 duration-300'>Back</button>
                    <button onClick={addToCart} className='bg-green-700 text-white font-bold text-xl p-4 cursor-pointer rounded hover:bg-gray-800 duration-300'>Add To Cart</button>
                </div>

            </div>
        </div>
    )
}
export default ProductDetils


// useParams : useParams hook is react router hook taht returns an object of key/value paris of URL Parameters 
// and this used for the read dynamic value from the url

// useParams return : useParamas always return the : object containig key-value pairs
// exmaple : { id : 3 }   
// exmaple  : product/:categoryId/:prodcutId
// return : {
// categoryId : "5",
// productId : "102"
//          }

// in this following
// keys  : params named defined in route path (categoryId,productId)
// value : actual value from the URL 

// Important Note : All value are strings, Not a numbers




// useNavigate() : 
// this is the react router dom hook 
// main use of the useNavigate is the navigate current route to another in the react js

// Example : useNavigate() 

// useNavigate provide the navigate() function  : that allow you to move between routes (pages) in your react using code

// 1 : navigate('/about')
// 2 : navigate(-1) // to go back
// 3 : navigate(1) // to go forward
// 4 : to replace current history (no back possible)
// navigate('/login',{replce:true});
