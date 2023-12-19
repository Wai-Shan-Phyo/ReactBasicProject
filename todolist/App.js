import { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { api } from "./api/api";
import uuid from "react-uuid";





function App() {
  const [tasks,setTask]=useState([]);
  const [loading,isLoading]=useState(false);
  // FetchTask
  const fetchTasks= async()=>{
    isLoading(true)  
    let res =await api.get('/todolist')
    setTask(res.data)
    isLoading(false)     
  }
  useEffect(()=>{
    fetchTasks();
  },[])
  // addTest
  const addTask=async(task)=>{
    let obj={
      id:uuid(),
      title:task,
      complete:false
    }
    const res=await api.post('/todolist',obj)
    //console.log(res)
     setTask([...tasks,res.data])
  }
  
  //deleteTask
  const deleteTask=async(id)=>{
     let res =await api.delete(`/todolist/${id}`)
     if(res.statusText=="OK"){
      setTask(tasks.filter((task)=>task.id !== id))
     }
           
  }
  //updateTask
  const updateTask=async(id,complete)=>{
    let res=await api.patch(`/todolist/${id}`,{
      complete
    })
    setTask(tasks.map((task)=>{
      if(task.id==id){
        return {
          id:task.id,
          title:task.title,
          complete:!task.complete
        }
      }
      return task;
    }))

  }

  return (
    <div className="w-full h-screen bg-zinc-800 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center text-white mb-2">Todo List</h1>
      <Form addTask={addTask} />
       {
        loading ? <p>Loading</p> :   <List tasks={tasks} updateTask={updateTask} deleteTask={deleteTask}/>
       }
    </div>
  );
}

export default App;
