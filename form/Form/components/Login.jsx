import React from 'react'
import image from '../assest/image.jpeg'
const Login = () => {
  return (
    <div className='w-full h-screen grid grid-cols-1 sm:grid-cols-2'>
          <div className="h-screen hidden sm:block">
               <img src={image} className='w-full h-full object-fill' />
          </div>
   <div className="flex w-full h-screen bg-gray-800  flex-col justify-center">
   
    <form action="" className='max-w-[400px] w-full mx-auto bg-gray-900 rounded-lg p-2'>
      <h1 className='text-center text-4xl dark:text-white'>Sing In</h1>
          <div className="flex flex-col text-gray-600 p-1 m-2">
              <label className='font-medium '>Name</label>
              <input className='focus:border-blue-900 bg-gray-700 focus:outline-none  p-2 focus:bg-gray-800 rounded-sm' type="text" />
          </div>
          <div className="flex flex-col text-gray-600 p-1 m-2">
              <label className='font-medium '>Password</label>
              <input className='focus:border-blue-900 bg-gray-700 focus:outline-none  p-2 focus:bg-gray-800 rounded-sm' type="password" />
          </div>
          <div className="flex  text-gray-600 justify-between p-1 m-2">
              <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember me</p>
              <p><a href="#">Forget Password?</a></p>
          </div>
          <div className="p-1 m-2">
          <button className='w-full bg-green-600 rounded-md py-2 hover-green-800 transition duration-200  my-5'>Login</button>
          </div>
          
      </form>
   </div>
    </div>
  )
}

export default Login