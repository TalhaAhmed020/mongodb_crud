'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const AddTopic = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!title || !description){
      alert('Title and Description are required');
      return;
    }
    try{
      const res = await fetch("http://localhost:3000/api/topics",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({title, description})
      }
      )

      if(res.ok){
        router.push('/');
        router.refresh();
      }
      else{
        throw new Error("Failed to create topic");
      }

    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="" className='flex flex-col gap-3'>
        <input onChange={(e) => {setTitle(e.target.value)} } value={title} className='border border-slate-500 px-8 py-2' type="text" placeholder='Topic Title' name="" id=""></input>
        <input onChange={(e) => {setDescription(e.target.value)}} value={description} className='border border-slate-500 px-8 py-2' type="text" placeholder='Topic Description' name="" id=""></input>
        <button type='submit' className='bg-green-600 font-bold text-white w-fit px-6 py-3'>Add Topic</button>
      </form>
    </div>
  )
}

export default AddTopic
