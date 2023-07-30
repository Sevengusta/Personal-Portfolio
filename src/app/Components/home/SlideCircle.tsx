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
            bg-gradient-to-t
            to-orange-500 
            from-red-500 
            xl:p-[3px]
            p-[2px]
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
            xl:p-3
            p-2
            cursor-pointer
        '>
            
        </div>
    </div>
  )
}

export default SlideCircle