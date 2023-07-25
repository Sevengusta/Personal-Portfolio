import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div 
        className="
          container
          bg-gray-800
          flex 
          flex-col
          xl:grid
          xl:grid-cols-2
          xl:gap-5
        "
      >
        <Image width={500} height={500} src={'/images/yoga.jpeg'} alt='yoga' className='rounded-[1000px]' />
        <div>xxx</div>
      </div>
  )
}

export default Contact