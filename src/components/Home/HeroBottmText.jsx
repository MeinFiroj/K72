import React from 'react'
import { Link } from 'react-router-dom'

const HeroBottmText = () => {
  return (
    <div className='font-[font2] text-center mt-auto '>
        <Link className='border-3 rounded-full pt-2 text-[6vw] leading-[7vw] uppercase px-7 mr-3 text-white hover:text-[#D3FD50]' to={'/projects'}>Projects</Link>
        <Link className='border-3 rounded-full pt-2 text-[6vw] leading-[7vw] uppercase px-7 text-white hover:text-[#D3FD50]' to={'/agence'}>Agence</Link>
    </div>
  )
}

export default HeroBottmText