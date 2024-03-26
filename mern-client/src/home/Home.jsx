import React from 'react'
import Banner from '../components/Banner'
import BestSellingBooks from './BestSellingBooks'
import FavBook from './FavBook'


const Home = () => {
  return (
    <div className=''>
      <Banner/>
      <BestSellingBooks/>
      <FavBook/>
      <div className='h-screen'>
      </div>
      <div className='h-screen bg-red-600'>

      </div>
      </div>
  )
}

export default Home