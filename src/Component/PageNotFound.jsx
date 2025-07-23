import React from 'react'
import NotFound from '../assets/page-not-found.png'
export default function PageNotFound() {
  return (
    <div className='text-center py-5 my-5'>
      <img className='w-50' src={NotFound} alt="" />
    </div>
  )
}
