import Logo from '@/components/Helper/Logo'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-white border-t-2 border-gray-200'>
        <div className='w-[80%] mx-auto py-10 flex flex-row justify-between gap-5'>
            <div className=''>
                <Logo/>
            </div>
            <div className='text-xl'>
                <h1> © 2026 Optima Solutions. All Rights Reserved.</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer