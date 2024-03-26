import React from 'react'
import Banner from '../components/Banner'
import BestSellingBooks from './BestSellingBooks'
import FavBook from './FavBook'
import Promo from './Promo'
import OtherBook from './OtherBook'
import { Review } from './Review'


const Home = () => {
  return (
    <div className=''>
      <Banner/>
      <BestSellingBooks/>
      <FavBook/>
      <Promo/>
      <OtherBook/>
      <Review/>
      </div>
  )
}

export default Home