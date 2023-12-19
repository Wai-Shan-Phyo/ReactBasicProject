import React from 'react'
import Card from './Card'

const List = ({ tasks,deleteTask,updateTask}) => {
  return (
    <ul className='list-none flex flex-col  gap-y-4 w-full md:w-1/2'>
      <Card tasks={tasks}  updateTask={updateTask}  deleteTask={deleteTask}/>

    </ul>
  )
}

export default List