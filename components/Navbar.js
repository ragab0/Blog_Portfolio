import Link from 'next/link';
import React from 'react';
import { socialIcons } from '@/assets/data';


export default function Navbar() {
  return (
    <nav className=' bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className=' max-w-2xl mx-auto flex justify-center sm:justify-between items-center flex-col sm:flex-row gap-2'>
        <h1 className='font-bold text-2xl sm:text-3xl w-fit'>
          <Link href="/">A Legend!</Link>
        </h1>
        <ul className='flex items-center gap-3'>
          {
            Object.values(socialIcons).map((Icon, i) => 
              <Icon key={i} 
                    fill="inherit" 
                    fontSize={32} 
                    className=" cursor-pointer hover:opacity-90"
              />
          )}
        </ul>
      </div>
      
    </nav>
  )
}
