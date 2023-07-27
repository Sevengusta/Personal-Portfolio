'use client'
import React from 'react'
import { Font } from '../comuns/Font';
interface MenuItemProps {
    onClick: () => void;
    label:string;
}

const MenuItem: React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
  return (
    <div
        onClick={onClick}
        className='
            py-3
            transiton
            font-semibold
            text-2xl
        '
    >
        <Font>{label}</Font>
    </div>
  )
}

export default MenuItem