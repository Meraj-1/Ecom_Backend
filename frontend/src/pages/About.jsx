import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
     <div className='text-2xl text-center pt-8 border-t'>
  <Title text1={"ABOUT"} text2={"US"}/>
     </div>
     <div className='my-10 flex flex-col md:flex-row gap-16'>
   <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
   <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a dolores rerum, consequatur beatae itaque explicabo tempora at qui est, illum quae soluta quaerat rem hic saepe magni suscipit obcaecati!</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magnam fugit neque illo nihil soluta, cum exercitationem beatae blanditiis quasi commodi velit optio saepe, quaerat quae fugiat? Itaque, eaque corrupti?</p>
         <b className='text-gray-800'>Our Mission</b>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa cum in iste dignissimos dolores beatae, nesciunt repudiandae deleniti sed odit delectus aperiam, ut explicabo perferendis nemo sequi provident et.</p>
   </div>
     </div>
     <div className='text-xl py-4'>
    <Title text1={"WHY"}  text2={"CHOOSE  US"}/>
     </div>
     <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance  :</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat provident possimus, impedit sint eveniet hic nisi unde rem tempora accusantium alias ipsa veritatis, ad perspiciatis repellendus eaque dolore. Suscipit, ab.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience :</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempore ratione suscipit quis in fugiat, accusantium aperiam molestias quasi esse impedit totam sint velit nam. Odio odit nulla harum neque.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service :</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, error veritatis. Architecto, voluptas, excepturi modi voluptates ipsa in reiciendis accusantium optio nisi totam, eius nesciunt repudiandae non molestias autem voluptatibus.</p>
          </div>
     </div>
     <NewsletterBox/>
    </div>
  )
}

export default About