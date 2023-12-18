import React, { useRef } from 'react'

const Form = () => {
  const title=useRef("");
  const des=useRef("");
  const handleSubmit=(e)=>{
    e.preventDefault();
  let new_obj={
      title:title.current.value,
      des:des.current.value
  }
  console.log(new_obj);
   
  }
  const hanf=()=>{
    title.current.focus()
}
  return (
    <div onSubmit={handleSubmit} className='container'>
            <form action="">
                <input ref={title} type="text" />
                <textarea ref={des} name="" id="" cols="30" rows="10"></textarea>    
                <button>Add Blogs</button>  
                <button onClick={hanf}>f</button>      
            </form>    
    </div>
  )
}

export default Form;
