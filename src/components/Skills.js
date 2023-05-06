import React from 'react'

function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-white text-blue-900'>

<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-center '>Skills</p>
              <p className='py-4 text-2xl'>I am constantly learning and pushing myself to stay up-to-date with the latest trends in web development. Here are a few technologies I've worked with recently:</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-pink-500'>
                  <p className='my-4 text-blue-900'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-900'>
                  <p className='my-4 text-pink-500'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-pink-500'>
                  <p className='my-4 text-blue-900'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-900'>
                  <p className='my-4 text-pink-500'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-900'>
                  <p className='my-4 text-pink-500'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-pink-500'>
                  <p className='my-4 text-blue-900'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-900'>
                  <p className='my-4 text-pink-500'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-pink-500'>
                  <p className='my-4 text-blue-900'>VUE</p>
              </div>
          </div>
      </div>
    </div>
  )
}


export default Skills