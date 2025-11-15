import React from 'react'

export const CartButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='bg-Gray text-Diamond p-4 rounded-full w-full cursor-pointer hover:bg-Dark-Gray transition-colors'>{text}</button>
  )
}
