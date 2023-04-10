import React from 'react'

export default function Product(props) {
  return (
    <div className='top-6  left-4 '>
        <h2 className=' relative text-center font-semibold mb-3'>Product Card</h2>
        <div className='relative h-auto border max-w-xs shadow-md  '>
            <img className=' w-full h-48' src= {props.image} alt="Representing img" />
            <h1 className=' font-extrabold text-3xl text-center mb-3'>{props.title}</h1>
            <p className=' font-semibold text-xl text-center relative text-gray-400'>$ {props.price}</p>
            <p className='p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolore assumenda dolor!</p>
            <button className=' hover:bg-slate-700 h-9 mt-5 w-full text-center text-white bg-slate-800'>Add To Cart</button>
        </div>
    </div>
  )
}
