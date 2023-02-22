import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineRocket } from 'react-icons/ai'

const Sidenav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        // console.log('state changed')
    }

    return (
        <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
        {
            nav ? (
                <div className='fixed w-full h-screen bg-black flex-col justify-center items-center z-20'>
                    <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-black shadow-gray-900 text-white m-2 p-4 cursor-pointer hover:underline-offset-4 ease-in duration-75'>
                        <AiOutlineRocket size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    <a href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-black shadow-gray-900 text-white m-2 p-4 cursor-pointer hover:underline-offset-4 ease-in duration-75'>
                        <AiOutlineRocket size={20} />
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a href="#courses" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-black shadow-gray-900 text-white m-2 p-4 cursor-pointer hover:underline-offset-4 ease-in duration-75'>
                        <AiOutlineRocket size={20} />
                        <span className='pl-4'>Coursework</span>
                    </a>
                </div>
            )
            : (
                <div></div>
            )
        }
        </div>
    )
}
export default Sidenav
