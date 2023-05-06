import React from 'react'

function Contacts() {
    return (
        <div name='contact' className='w-full h-full bg-white flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-blue-900'>Contact</p>
                <h2 className='text-blue-900 text-lg py-4 font-semibold'>Get In Touch</h2>
                <p className='text-blue-900'>I'm open to new opportunities, such as entry-level roles, internships and partnerships. My inbox is always open. Send a message and I'll get back to you.</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-blue-900 border-2 hover:bg-pink-500 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </div>

        </div>
    )
}

export default Contacts     