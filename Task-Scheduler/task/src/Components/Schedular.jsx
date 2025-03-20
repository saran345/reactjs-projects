/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { use } from 'react'

export default function Schedular() {

    const [task,setTask]=useState([])
    const [priority,setPriority] = useState("top")
    const [deadline,setDeadline] = useState("")

    const handleDeadline=(e)=>{
      setDeadline(e.target.value);
    
    const handleTask=(e)=>{
      setTask(e.target.value);
    }
    const handlePriority=(e)=>{
      setPriority(e.target.value);
    }


    const addTask=()=>{
         if(task.trim() ==="" || deadline===""){
          alert("Enter s tsdk and Deadline!")
         return ;
        }
        const selectDate=new Date(deadline)
        const currentDate=new Date()
       if(selectDate<=currentDate){
        alert("Enter the future Date for Task!!!")
        return;
       }
       const newTask={
        id:task.length+1,
        task,
        deadline,
        done:false
       }
       setTask([...task,newTask])
       setTask("")
       setPriority("top")
       setDeadline("")

    }

    



  return (
      <>
      
      <div>

        <input
        type='text' id='task' value={deadline} onChange={handleDeadline} placeholder='Enter the task!!!'
        />
        <buuton onClick={addTask} >Add Task</buuton>
      </div>
      </>

  )
}
