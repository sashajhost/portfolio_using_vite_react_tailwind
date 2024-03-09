import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 sm:h-screen sm:pt-20 sm:pr-6'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e] '>Contact</h1>
        <form action="https://getform.io/f/paynnmpb" method='POST' encType='multipart/form-data' className='sm:pt-12'>
          
          <div className='grid w-full gap-4 py-2 md:grid-cols-2 '>
            <div className='flex flex-col '>
                <label className='py-2 text-sm uppercase' >Name</label>
                <input class='flex p-3 border-2 border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none' type="text" name='name'/>
            </div>

            <div className='flex flex-col ' >
                <label className='py-2 text-sm uppercase'>Phone</label>
                <input className='flex p-3 border-2 border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none' type="text" name='phone' />
            </div>
          </div>
          
          <div className='flex flex-col py-2 '>
            <label className='py-2 text-sm uppercase'>Email</label>
            <input className='flex p-3 border-2 border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none' type="email" name="email "  />
          </div>

          <div className='flex flex-col py-2'>
            <label className='py-2 text-sm uppercase'>Subject</label>
            <input className='flex p-3 border-2 border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none' type="text" name="subject"  />
          </div>

          <div className='flex flex-col py-2 '>
            <label className='py-2 text-sm uppercase'>Message</label>
            <textarea className='p-3 border-2 border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none' rows='10' type="email" name="message"  ></textarea>
          </div>

          <div className='sm:pt-14'>
          <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg '>
            Send Massage
          </button>
          </div>

          

        </form>
      
    </div>
  )
}

export default Contact
