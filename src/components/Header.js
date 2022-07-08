import React from 'react'
import "./Header.css";

export const Header = () => {
    return (
        <div className=''>
            <header className="text-gray-100 body-font header">
            <div className=' flex justify-around items-center p-1 '>
            <div className='left__logo__side '>
                {/* <img className='image w-[10em]   ' src="img/download.png" alt=""/> */}
                <img className='image w-[10em]    ' src="img/d.png" alt=""/>

            </div>
            <div className='right__brandName__side'>
                {/* <h1 className=' b-heading  lg:text-7xl font-bold'>Friends Computer Bhore</h1> */}
                <h1 className=' text-black b-heading  lg:text-7xl sm:text-5xl md:text-6xl font-bold'>Youthrozgar.com</h1>
                {/* <h1 className=' text-black b-heading  lg:text-7xl sm:text-5xl md:text-6xl font-bold'>Friends Computer Bhore</h1> */}

            </div>
        </div>
            </header>
        </div>
    )
}
