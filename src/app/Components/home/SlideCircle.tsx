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
            hover:bg-gray-800 
            rounded-full
            open:bg-white
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