import React from 'react'
import { FiXCircle } from "react-icons/fi";

const Card = ({tasks,deleteTask,updateTask}) => {
  return (
  <>
     {
        tasks.map((task,index)=>(
          <li  onDoubleClick={()=>updateTask(task.id,!task.complete)} key={index} className={task.complete ? 'bg-green-600 px-2 py-3 rounded-sm text-white flex justify-between items-center':'bg-gray-800 px-2 py-3 rounded-sm text-white flex justify-between items-center'}>
            <p className={task.complete ? 'line-through font-medium text-xl':'font-medium text-xl'}>{task.title}</p>
           <FiXCircle onClick={()=>deleteTask(task.id)} />
        </li>
        ))
     }
  </>
  )
}

export default Card