import React from 'react'

function Footer() {
  return (
    <div className='py-5 bg-gray-300 dark:bg-slate-800 text-center dark:text-gray-300 rounded-t-lg'>
        <a href="#hero" className='block text-xl md:text-2xl font-semibold'>German Konradi</a>
        <a href="mailto:gera.konradi@gmail.com"
        className=' text-sm md:text-md hover:text-indigo-500'
        >gera.konradi@gmail.com</a>
        <p className='text-xs  mt-2 text-gray-500'>
            © German Konradi {new Date().getFullYear()}. All rights reserved 
        </p>
    </div> 
  )
}

export default Footer