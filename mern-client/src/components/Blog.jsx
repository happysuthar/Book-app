import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";

const Blog = () => {
  const[books,setBooks] = useState([]);
  useEffect( () => 
  {
    fetch("http://localhost:5000/all-books").then(res=> res.json()).then(data =>setBooks(data));
  },[])
  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>Blog</h2>
      <div className='grid gap-8 my-14 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book => <Card>
            <img src={book.imageURL} className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {
                book.bookTitle
              }
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit voluptatem dolorem, voluptatibus quidem voluptatum incidunt modi laborum, vero nisi suscipit totam numquam ipsam officia? Id quia praesentium repudiandae officiis cumque?
            </p>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Blog