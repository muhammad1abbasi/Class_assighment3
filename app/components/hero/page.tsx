import React from 'react'
import Image from 'next/image' 

import codeImage from '@/app/public/image-from-rawpixel-id-15502364-png.png'

const Hero = () => {
  return (
    <div className='px-32 py-32'>
      <div className='flex flex-row space-x-12'>

        <div className='basis-1/2'>
          <span className='text-5xl font-bold'>
            This is hero section 
          </span> <br />
          <div className='pt-1'></div>
          <span className='text-blue-500 text-5xl font-bold'>
           Made by Muhammad 
          </span>
          <div className='pt-4'>
            <span className='text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempora impedit, nulla totam fugit laudantium, voluptatum animi fugiat minima illum corrupti, voluptates minus quod sit odit dolorum ullam autem et.
            </span>
            <div className='pt-4'></div>
            <div className='flex space-x-6'>
            <button className='p-4 rounded text-red-900 bg-white'>
              Button 1
            </button>
            <button className='p-4 rounded text-white bg-red-900'>
              Button 2
            </button>
            </div>





          </div>



        </div>

        <div className='basis-1/2 '>
        <Image src={codeImage} alt ='this is Image gonna render soon' />
        
        </div>

      </div>




    </div>
      
  )
}

export default Hero
 