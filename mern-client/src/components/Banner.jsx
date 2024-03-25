import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-cyan-100 flex items-center '>

        <div className='flex w=full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/*leftside*/}
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Purchase and Trade Your Books <span className='text-violet-700'>
                   for the Best Prices </span></h2>
                <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ipsum, omnis ut dignissimos atque, neque fugiat molestiae libero exercitationem pariatur obcaecati ex illo eveniet est numquam delectus fugit commodi! Sed.</p>
                <div>
                    <input type = "search" name = "search" id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline-none'/>
                    <button className='bg-violet-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
            <div><BannerCard/></div>
        </div>
    </div>
  )
}

export default Banner