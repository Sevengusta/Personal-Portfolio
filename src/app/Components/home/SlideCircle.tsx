import React from 'react'

type SlideCircle = {
    slideChange:() => (void);
}

const SlideCircle = ( {slideChange} : SlideCircle) => {
  return (
    <div 
        className='
            font-extrabold  
            rounded-full
            text-transparent
            bg-gradient-to-r
            to-orange-500 
            from-red-500 
            p-1
        '
    >
        <div 
            onClick={slideChange}
            className='
            bg-gray-800 
            hover:bg-white
            rounded-full
            w-full
            h-full
            p-4
            cursor-pointer
        '>
            
        </div>
    </div>
  )
}

export default SlideCircle