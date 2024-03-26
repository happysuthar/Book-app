import React from 'react'
import FaveBook from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex items-center'>
        <div className='md:w-1/2' >
            <img src={FaveBook} alt='' className='md:w-10/12 rounded'/></div> 
            <div className='md:w-1/2 space-y-6'>
                <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite<span className='text-violet-600'>  Book Here!</span></h2>
            <p className='my-10 text-lg md:w-5/6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sit, minima odit suscipit nulla officia repellat facere similique numquam, dolore dicta! Aut fugit quibusdam quae optio tempora provident iste sapiente.</p>
            <div className='flex justify-between gap-5 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Books Listing </p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>600+</h3>
                    <p className='text-base'>Register Users </p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1500+</h3>
                    <p className='text-base'>PDF Downloads </p>
                </div>
                <Link to="/shop" className='mt-3 block'><button className='bg-violet-700 text-white rounded px-5 py-2 font-semibold hover:bg-black transition-all duration-300'>Explore More</button></Link>
            </div>
        </div>
    </div>
  )
}

export default FavBook