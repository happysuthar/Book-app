import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Select } from 'flowbite-react';
import { Textarea } from 'flowbite-react';

const EditBook = () => {
  const {id} = useParams();
  const{bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL} = useLoaderData();
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Sibilography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Children Books",
    "Travel Books",
    "Religion",
    "Art and Design"
  ]
  const [selectBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectionValue = (event) => {
    setSelectedBookCategory(event.target.value);
  }
  //handle  book update
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
  
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
  
    const updateBookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }
//update book data
fetch(`http://localhost:5000/book/${id}`,{
  method:"PATCH",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(updateBookObj)
}).then(res => res.json()).then(data => {alert("Book updated successfully")
})
  }
  
    return (
  
      <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Edit a Book</h2>
        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">
          {/*first row*/}
       <div className='flex gap-8'>
       <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput  id="bookTitle" name='bookTitle' type="text" placeholder="Book name" defaultValue={bookTitle}required />
        </div>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput  id="authorName" name='AuthorName' type="text" placeholder="Author name" defaultValue={authorName} required />
        </div>
       </div>
               {/*second row*/}
  
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Book Image URL" />
          </div>
          <TextInput  id="imageURL" name='imageURL' type="text" placeholder="Book image URL" defaultValue={imageURL} required />
        </div>
  
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
            <Label htmlFor="inputState" value="BookCategory" />
          </div>
          <Select id = 'inputState' name='category'className = 'w-full rounded' defaultValue={category} value={selectBookCategory} onChange = {handleChangeSelectionValue}>
            {
              bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
            }
          </Select>
        </div>
        </div>
                  {/*Book description*/}
          <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name = "BookDescription" placeholder="Give a Book Description"  defaultValue={bookDescription} required rows={6} className='w-full'/>
  
        </div>
  
    {/*Book pdf link*/}
    <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="book PDF URL" />
          </div>
          <TextInput name = "bookPDFURL" defaultValue={bookPDFURL} id="bookPDFURL" type="bookPDFURL" placeholder="book pdf url" required />
  
          <Button type="submit" className='mt-5'>Submit</Button>
  
      </form>
  
      </div>
    )
}

export default EditBook