import React, { useState } from 'react'

const Form = ({addTask}) => {
    const [value,setValue]=useState('');
    const handleSubmit=(e)=>{
           e.preventDefault();
           if(value!==""){
            addTask(value)
           }
           setValue('');
    }
    return (
        <form action="" onSubmit={handleSubmit} className='w-full  md:w-1/2 flex justify-between mb-4'>
           <input value={value} onChange={(e)=>setValue(e.target.value)} className='w-2/4 bg-gray-700 text-white py-2 px-1 focus:outline-none rounded-sm' type="text" />  
           <button type='submit' className='w-1/4 bg-amber-600 rounded-sm'>AddToDo</button>
        </form>      
               
     )
}

export default Form