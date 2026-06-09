import Image from 'next/image';
import React from 'react'

type Props = {
    title: string;
    description: string;
    Icon: string;
}

const Card = ({title, description, Icon}: Props) => {
  return (
     <div className= "flex flex-col items-center mx-5  justify-center bg-white shadow-sm rounded-xl hover:shadow-lg px-5 hover:scale-110 hover: transition-all duration-200 text-center md:w-1/6 w-1/4 h-[40vh]">
            <div>
                <Image src={Icon} width={70} height={70} alt='smth' className='mt-2'></Image>
            </div>
            <div className=' text-center text-black font-medium overflow-hidden'>
                <h1 className='text-lg font-medium text-black min-h-14 flex items-center justify-center text-center'>{title}</h1>
                <p className='text-md text-gray-500 my-2'>{description}</p>
                
            </div>
            
    
        </div>
  )
}

export default Card