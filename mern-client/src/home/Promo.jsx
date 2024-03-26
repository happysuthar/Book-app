import React from 'react'
import { Link } from 'react-router-dom'
import BookPhoto from '../assets/awardbooks.png'

const Promo = () => {
  return (
    <div className='bg-cyan-100 mt-16 py-1 px-4 lg:px-24'>
        <div className='flex justify-between items-center'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>2024 National Book Awards For Fiction Shortlist</h2>

                <Link to="/shop" className=' block'><button className='bg-violet-700 text-white rounded px-5 py-2 font-semibold hover:bg-black transition-all duration-300'>Get Promo</button></Link>
            </div>
            <div>
                <img src={BookPhoto} alt="" className='w-96' />
            </div>
        </div>
    </div>
  )
}

export default Promo