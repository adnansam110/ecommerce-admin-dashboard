'use client'

import { Layout } from '@/components/Layout/Layout'
import React, { useState } from 'react'

const Products = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        image: ''
    })

  const onSubmit = (e) => {
    e.preventDefault()
    let products = JSON.parse(localStorage.getItem('products')) || []
    products = [...products, formData]
    localStorage.setItem('products', JSON.stringify(products))
    setFormData({
        name: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        image: ''
    })
  }  
  
  return (
    <div className='flex bg-indigo-200'>
      <Layout />
      <section className='w-full'>
        <h1 className='text-gray-700 text-[40px] p-4 pl-6'>
          Create a new product
        </h1>
        <hr className='border-gray-700'></hr>
        <div className='p-4 pl-6 flex justify-center items-center'>
            <form onSubmit={onSubmit} className='flex flex-col justify-center items-center bg-indigo-700 w-[350px] rounded-md mt-10'>
                <div className='flex flex-col mb-3 mt-5'>
                    <label className='text-zinc-50'>Name</label>
                    <input value={formData.name} required onChange={(e) => setFormData({...formData, name: e.target.value})} type='text' className='border border-gray-600 focus:border-gray-700 rounded-md px-2 py-1 text-gray-700 w-auto' />
                </div>
                <div className='flex flex-col mb-3'>
                    <label className='text-zinc-50'>Price</label>
                    <input value={formData.price} required onChange={(e) => setFormData({...formData, price: e.target.value})} type='text' className='border border-gray-600 focus:border-gray-700 rounded-md px-2 py-1 text-gray-700 w-auto' />
                </div>
                <div className='flex flex-col mb-3'>
                    <label className='text-zinc-50'>Category</label>
                    <input value={formData.category} required onChange={(e) => setFormData({...formData, category: e.target.value})} type='text' className='border border-gray-600 focus:border-gray-700 rounded-md px-2 py-1 text-gray-700 w-auto' />
                </div>
                <div className='flex flex-col mb-3'>
                    <label className='text-zinc-50'>Description</label>
                    <textarea value={formData.description} required onChange={(e) => setFormData({...formData, description: e.target.value})} type='text' className='border border-gray-600 focus:border-gray-700 rounded-md px-2 py-1 text-gray-700 w-[237px]' />
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='text-zinc-50'>Stock</label>
                    <input value={formData.stock} required onChange={(e) => setFormData({...formData, stock: e.target.value})} type='text' className='border border-gray-600 focus:border-gray-700 rounded-md px-2 py-1 text-gray-700 w-auto' />
                </div>
                <div className='flex flex-col mb-6 ml-[103px]'>
                    <label className='text-zinc-50'>Image</label>
                    <input value={formData.image} required onChange={(e) => setFormData({...formData, image: e.target.value})} type="file" id="imageInput" name="image" accept="image/*" />
                </div>
                <button type='submit' className='bg-zinc-50 rounded-md w-[235px] text-gray-700 mb-6 font-semibold transition hover:bg-gray-200'>Submit</button>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Products