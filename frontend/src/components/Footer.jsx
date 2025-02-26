import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className=''>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='w-32 mb-5' alt="logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo impedit qui rem a sit aut veniam, fugit illum recusandae. Quaerat id eius porro illo odio! Quam veritatis magnam
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5 '>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>HOME</li>
            <li>ABOUT_US</li>
            <li>DELIVERY</li>
            <li>PRIVACY_POLICY</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-222-333-43</li>
            <li>forever@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @forever.com - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer