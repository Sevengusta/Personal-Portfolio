import React from 'react'

type SlideCircle = {
    slideChange:() => (void);
    active: boolean;
}

const SlideCircle: React.FC<SlideCircle> = ({ slideChange, active }) => {
  return (
    <div
      className='
        font-extrabold
        rounded-full
        text-transparent
        p-[1px]
        bg-gradient-to-t
        to-orange-500 
        from-red-500
        '
    >
        <div 
            onClick={slideChange}
            className={`
                indicator
                hover:bg-gray-800 
                ${active ? 'indicator-active' : false }
                rounded-full
                open:bg-white
                cursor-pointer
            `}
        >
            
        </div>
    </div>
  )
}

export default SlideCircle